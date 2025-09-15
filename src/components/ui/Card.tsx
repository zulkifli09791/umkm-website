import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;