import React, { ReactNode } from 'react';

interface SkillBadgeProps {
  icon: ReactNode;
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default SkillBadge;