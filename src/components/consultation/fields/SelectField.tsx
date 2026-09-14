import FieldError from "@/components/consultation/fields/FieldError";
import type { FieldError as RHFError, UseFormRegisterReturn } from "react-hook-form";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  id: string;
  label: string;
  registration: UseFormRegisterReturn;
  options: SelectOption[];
  error?: RHFError;
  placeholder?: string;
};

export default function SelectField({
  id,
  label,
  registration,
  options,
  error,
  placeholder = "انتخاب کنید",
}: SelectFieldProps) {
  const errorId = `${id}-error`;

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        id={id}
        className={`form-control form-select${error ? " form-control-invalid" : ""}`}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        {...registration}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FieldError id={errorId} message={error?.message} />
    </div>
  );
}
