import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  as: Tag = 'div',
}) => {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </Tag>
  );
};
