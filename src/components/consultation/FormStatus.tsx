import type { ConsultationRequestResult } from "@/lib/consultation/types";
import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";

type FormStatusProps = {
  status: "idle" | "submitting" | "success" | "error";
  result: ConsultationRequestResult | null;
};

export default function FormStatus({ status, result }: FormStatusProps) {
  if (status === "idle") return null;

  if (status === "submitting") {
    return (
      <div
        className="form-status form-status-loading"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <LoaderCircle
          className="h-5 w-5 shrink-0 animate-spin"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <p>در حال ارسال درخواست… لطفاً صبر کنید.</p>
      </div>
    );
  }

  if (status === "success" && result?.ok) {
    return (
      <div
        className="form-status form-status-success"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
        <div>
          <p className="form-status-title">درخواست با موفقیت ثبت شد</p>
          <p>{result.message}</p>
          <p className="form-status-meta">کد پیگیری: {result.requestId}</p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        className="form-status form-status-error"
        role="alert"
        aria-live="assertive"
      >
        <AlertCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
        <div>
          <p className="form-status-title">ارسال ناموفق بود</p>
          <p>
            {result && !result.ok
              ? result.message
              : "مشکلی در ارسال درخواست رخ داد. دوباره تلاش کنید."}
          </p>
        </div>
      </div>
    );
  }

  return null;
}
