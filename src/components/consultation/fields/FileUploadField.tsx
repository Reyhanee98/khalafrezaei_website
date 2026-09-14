"use client";

import FieldError from "@/components/consultation/fields/FieldError";
import { CONSULTATION_FILE_RULES } from "@/lib/consultation/constants";
import { FileUp, X } from "lucide-react";
type FileUploadFieldProps = {
  id: string;
  label: string;
  files: File[];
  onChange: (files: File[]) => void;
  errorMessage?: string;
  disabled?: boolean;
};

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function FileUploadField({
  id,
  label,
  files,
  onChange,
  errorMessage,
  disabled = false,
}: FileUploadFieldProps) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const hasError = Boolean(errorMessage);

  function mergeFiles(incoming: FileList | null) {
    if (!incoming?.length) return;

    const next = [...files];
    Array.from(incoming).forEach((file) => {
      const exists = next.some(
        (item) =>
          item.name === file.name &&
          item.size === file.size &&
          item.lastModified === file.lastModified,
      );
      if (!exists) next.push(file);
    });

    onChange(next.slice(0, CONSULTATION_FILE_RULES.maxFiles));
  }

  function removeFile(index: number) {
    onChange(files.filter((_, fileIndex) => fileIndex !== index));
  }

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        <span>{label}</span>
        <span className="form-optional">اختیاری</span>
      </label>

      <label
        htmlFor={id}
        className={`form-upload${hasError ? " form-control-invalid" : ""}${
          disabled ? " form-upload-disabled" : ""
        }`}
      >
        <FileUp className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.75} aria-hidden="true" />
        <span>
          انتخاب فایل‌ها
          <span className="form-upload-meta">
            حداکثر {CONSULTATION_FILE_RULES.maxFiles} فایل، هر کدام تا ۵ مگابایت
          </span>
        </span>
        <input
          id={id}
          type="file"
          className="sr-only"
          multiple
          disabled={disabled}
          accept={CONSULTATION_FILE_RULES.accept}
          aria-invalid={hasError ? true : undefined}
          aria-describedby={`${hintId}${hasError ? ` ${errorId}` : ""}`}
          onChange={(event) => {
            mergeFiles(event.target.files);
            event.target.value = "";
          }}
        />
      </label>

      <p id={hintId} className="form-hint">
        فرمت‌های مجاز: PDF، JPG، PNG، WEBP، DOC، DOCX
      </p>

      {files.length > 0 ? (
        <ul className="form-file-list" aria-label="فایل‌های انتخاب‌شده">
          {files.map((file, index) => (
            <li key={`${file.name}-${file.lastModified}`} className="form-file-item">
              <span className="form-file-name">
                {file.name}
                <span className="form-file-size">{formatFileSize(file.size)}</span>
              </span>
              <button
                type="button"
                className="form-file-remove"
                onClick={() => removeFile(index)}
                disabled={disabled}
                aria-label={`حذف فایل ${file.name}`}
              >
                <X className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}

      <FieldError id={errorId} message={errorMessage} />
    </div>
  );
}
