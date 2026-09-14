export type ConsultationServiceOption =
  | "official-property-valuation"
  | "factory-appraisal"
  | "surveying"
  | "immigration-valuation"
  | "mortgage-appraisal"
  | "goodwill-appraisal"
  | "other";

export type PropertyTypeOption =
  | "apartment"
  | "land"
  | "villa"
  | "commercial"
  | "industrial"
  | "mixed"
  | "other";

export type ConsultationRequestInput = {
  fullName: string;
  mobile: string;
  email?: string;
  serviceRequested: ConsultationServiceOption;
  propertyType: PropertyTypeOption;
  city: string;
  description: string;
  estimatedPropertyValue?: string;
  files: File[];
};

/**
 * Payload ready for a future HTTP API.
 * Swap the transport in `api.ts` without changing form UI.
 */
export type ConsultationRequestPayload = {
  fullName: string;
  mobile: string;
  email: string | null;
  serviceRequested: ConsultationServiceOption;
  propertyType: PropertyTypeOption;
  city: string;
  description: string;
  estimatedPropertyValue: string | null;
  files: File[];
};

export type ConsultationRequestResult =
  | {
      ok: true;
      requestId: string;
      message: string;
    }
  | {
      ok: false;
      message: string;
      code?: "VALIDATION" | "NETWORK" | "SERVER" | "UNKNOWN";
    };

export type ConsultationSubmitStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";
