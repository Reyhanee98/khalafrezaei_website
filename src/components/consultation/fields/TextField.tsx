import FieldError from "@/components/consultation/fields/FieldError";
import type { InputHTMLAttributes } from "react";
import type { FieldError as RHFError, UseFormRegisterReturn } from "react-hook-form";

type TextFieldProps = {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  error?: RHFError;
  hint?: string;
  optional?: boolean;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  dir?: "rtl" | "ltr" | "auto";
  type?: "text" | "email" | "tel";
  placeholder?: string;
};

export default function TextField({
  id,
  label,
  registration,
  error,
  hint,
  optional = false,
  inputMode,
  autoComplete,
  dir,
  type = "text",
  placeholder,
}: TextFieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        <span>{label}</span>
        {optional ? <span className="form-optional">اختیاری</span> : null}
      </label>
      <input
        id={id}
        type={type}
        className={`form-control${error ? " form-control-invalid" : ""}`}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        dir={dir}
        aria-invalid={error ? true : undefined}
        aria-describedby={
          [hint ? hintId : null, error ? errorId : null]
            .filter(Boolean)
            .join(" ") || undefined
        }
        {...registration}
      />
      {hint ? (
        <p id={hintId} className="form-hint">
          {hint}
        </p>
      ) : null}
      <FieldError id={errorId} message={error?.message} />
    </div>
  );
}
