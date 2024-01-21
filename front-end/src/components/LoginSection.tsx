import React from "react";

type LoginSectionProps = {
  aditionalClassName?: string;
  children: React.ReactNode;
};

export function LoginSection({
  aditionalClassName,
  children,
}: LoginSectionProps) {
  return (
    <div className={`grid place-items-center ${aditionalClassName}`}>
      {children}
    </div>
  );
}
