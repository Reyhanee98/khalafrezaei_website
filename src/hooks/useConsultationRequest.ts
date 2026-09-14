"use client";

import { submitConsultationRequest } from "@/lib/consultation/api";
import type {
  ConsultationRequestInput,
  ConsultationRequestResult,
  ConsultationSubmitStatus,
} from "@/lib/consultation/types";
import { useState, useTransition } from "react";

type UseConsultationRequestReturn = {
  status: ConsultationSubmitStatus;
  result: ConsultationRequestResult | null;
  isSubmitting: boolean;
  submit: (input: ConsultationRequestInput) => Promise<ConsultationRequestResult>;
  resetStatus: () => void;
};

export function useConsultationRequest(): UseConsultationRequestReturn {
  const [status, setStatus] = useState<ConsultationSubmitStatus>("idle");
  const [result, setResult] = useState<ConsultationRequestResult | null>(null);
  const [isPending, startTransition] = useTransition();

  function resetStatus() {
    setStatus("idle");
    setResult(null);
  }

  async function submit(
    input: ConsultationRequestInput,
  ): Promise<ConsultationRequestResult> {
    setStatus("submitting");
    setResult(null);

    try {
      const response = await submitConsultationRequest(input);

      startTransition(() => {
        setResult(response);
        setStatus(response.ok ? "success" : "error");
      });

      return response;
    } catch {
      const fallback: ConsultationRequestResult = {
        ok: false,
        code: "NETWORK",
        message:
          "ارتباط با سرور برقرار نشد. اتصال اینترنت را بررسی کنید یا بعداً دوباره تلاش کنید.",
      };

      startTransition(() => {
        setResult(fallback);
        setStatus("error");
      });

      return fallback;
    }
  }

  return {
    status,
    result,
    isSubmitting: status === "submitting" || isPending,
    submit,
    resetStatus,
  };
}
