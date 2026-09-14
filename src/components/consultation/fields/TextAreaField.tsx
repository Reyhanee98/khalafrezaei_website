import FieldError from "@/components/consultation/fields/FieldError";
import type { FieldError as RHFError, UseFormRegisterReturn } from "react-hook-form";

type TextAreaFieldProps = {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  error?: RHFError;
  hint?: string;
  rows?: number;
  placeholder?: string;
};

export default function TextAreaField({
  id,
  label,
  registration,
  error,
  hint,
  rows = 5,
  placeholder,
}: TextAreaFieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className={`form-control form-textarea${error ? " form-control-invalid" : ""}`}
        placeholder={placeholder}
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
