import type { HTMLAttributes, ElementType, ReactNode } from "react";

interface TextProps extends HTMLAttributes<HTMLElement> {
  tag: ElementType;
  children: ReactNode;
  className?: string | undefined;
}

const Element = ({ tag: Tag, children, className, ...props }: TextProps) => {
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
};

export default Element;
