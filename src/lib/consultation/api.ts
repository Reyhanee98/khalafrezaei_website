import type {
  ConsultationRequestInput,
  ConsultationRequestPayload,
  ConsultationRequestResult,
} from "@/lib/consultation/types";

/**
 * Consultation request API layer
 * --------------------------------
 * UI and form components call `submitConsultationRequest` only.
 *
 * To connect a real backend later:
 * 1. Replace the mock body inside `submitConsultationRequest`
 *    with `fetch("/api/consultation-requests", { method: "POST", body })`
 *    or your preferred endpoint.
 * 2. Prefer `FormData` when uploading files (see `toFormData`).
 * 3. Keep the returned `ConsultationRequestResult` shape stable so the
 *    form success/error UI does not need visual changes.
 *
 * Suggested future route: `POST /api/consultation-requests`
 */

const MOCK_LATENCY_MS = 1200;

function toPayload(
  input: ConsultationRequestInput,
): ConsultationRequestPayload {
  return {
    fullName: input.fullName.trim(),
    mobile: input.mobile.trim(),
    email: input.email?.trim() ? input.email.trim() : null,
    serviceRequested: input.serviceRequested,
    propertyType: input.propertyType,
    city: input.city.trim(),
    description: input.description.trim(),
    estimatedPropertyValue: input.estimatedPropertyValue?.trim()
      ? input.estimatedPropertyValue.trim()
      : null,
    files: input.files ?? [],
  };
}

/** Helper for a future multipart upload endpoint. */
export function toFormData(payload: ConsultationRequestPayload): FormData {
  const formData = new FormData();

  formData.append("fullName", payload.fullName);
  formData.append("mobile", payload.mobile);
  if (payload.email) formData.append("email", payload.email);
  formData.append("serviceRequested", payload.serviceRequested);
  formData.append("propertyType", payload.propertyType);
  formData.append("city", payload.city);
  formData.append("description", payload.description);
  if (payload.estimatedPropertyValue) {
    formData.append("estimatedPropertyValue", payload.estimatedPropertyValue);
  }
  payload.files.forEach((file, index) => {
    formData.append("files", file, file.name || `file-${index + 1}`);
  });

  return formData;
}

async function mockSubmit(
  payload: ConsultationRequestPayload,
): Promise<ConsultationRequestResult> {
  await new Promise((resolve) => {
    setTimeout(resolve, MOCK_LATENCY_MS);
  });

  // Deterministic mock failure for manual QA: mobile ending with 0000
  if (payload.mobile.endsWith("0000")) {
    return {
      ok: false,
      code: "SERVER",
      message:
        "ارسال درخواست در حال حاضر ممکن نیست. لطفاً چند دقیقه بعد دوباره تلاش کنید یا تماس بگیرید.",
    };
  }

  const requestId = `REQ-${Date.now().toString().slice(-8)}`;

  if (process.env.NODE_ENV === "development") {
    console.info("[consultation-api:mock] request accepted", {
      requestId,
      fullName: payload.fullName,
      mobile: payload.mobile,
      serviceRequested: payload.serviceRequested,
      fileCount: payload.files.length,
    });
  }

  return {
    ok: true,
    requestId,
    message:
      "درخواست مشاوره شما ثبت شد. در کوتاه‌ترین زمان ممکن با شما تماس گرفته می‌شود.",
  };
}

export async function submitConsultationRequest(
  input: ConsultationRequestInput,
): Promise<ConsultationRequestResult> {
  const payload = toPayload(input);

  /*
   * REAL API HOOK (replace mockSubmit later):
   *
   * const response = await fetch("/api/consultation-requests", {
   *   method: "POST",
   *   body: toFormData(payload),
   * });
   * if (!response.ok) {
   *   return { ok: false, code: "SERVER", message: "..." };
   * }
   * const data = await response.json();
   * return { ok: true, requestId: data.id, message: data.message };
   */

  return mockSubmit(payload);
}
