import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Loader } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    const form = e.currentTarget;
    const templateParams = {
      to_name: 'Nazier',
      from_name: form.from_name.value,
      from_surname: form.from_surname.value,
      reply_to: form.reply_to.value,
      message: form.message.value
    };

    try {
      await emailjs.send(
        'service_3z81vin',
        'template_53odcoj',
        templateParams,
        '5M3WSPm-EIniwRsWY'
      );
      setStatus('success');
      setTimeout(onClose, 2000);
    } catch (error) {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl p-6 md:p-8 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Mail className="w-6 h-6" />
          Get in Touch
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-300 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="from_surname" className="block text-sm font-medium text-gray-300 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="from_surname"
                id="from_surname"
                required
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="reply_to"
              id="reply_to"
              required
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;