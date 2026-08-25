import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className = '', ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="font-body text-[14px] font-medium text-ink"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`h-11 px-4 py-3 rounded-md bg-surface-card text-ink font-body text-[16px] border border-hairline-strong placeholder:text-muted-soft focus:outline-none focus:border-2 focus:border-accent ${className}`}
        {...props}
      />
    </div>
  );
}
