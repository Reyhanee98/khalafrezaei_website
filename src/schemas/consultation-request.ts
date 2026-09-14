import { CONSULTATION_FILE_RULES } from "@/lib/consultation/constants";
import { z } from "zod";

const iranianMobileRegex = /^09\d{9}$/;

const serviceValues = [
  "official-property-valuation",
  "factory-appraisal",
  "surveying",
  "immigration-valuation",
  "mortgage-appraisal",
  "goodwill-appraisal",
  "other",
] as const;

const propertyTypeValues = [
  "apartment",
  "land",
  "villa",
  "commercial",
  "industrial",
  "mixed",
  "other",
] as const;

function isAcceptedFile(file: File): boolean {
  if (
    (CONSULTATION_FILE_RULES.acceptedMimeTypes as readonly string[]).includes(
      file.type,
    )
  ) {
    return true;
  }

  const extension = file.name.split(".").pop()?.toLowerCase();
  if (!extension) return false;

  return ["pdf", "jpg", "jpeg", "png", "webp", "doc", "docx"].includes(
    extension,
  );
}

export const consultationRequestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { error: "نام و نام خانوادگی را کامل وارد کنید." }),
  mobile: z
    .string()
    .trim()
    .regex(iranianMobileRegex, {
      error: "شماره موبایل را به‌صورت ۱۱ رقمی و با ۰۹ وارد کنید.",
    }),
  email: z
    .string()
    .trim()
    .refine((value) => value === "" || z.email().safeParse(value).success, {
      error: "ایمیل واردشده معتبر نیست.",
    }),
  serviceRequested: z
    .string()
    .min(1, { error: "خدمت موردنظر را انتخاب کنید." })
    .refine(
      (value): value is (typeof serviceValues)[number] =>
        (serviceValues as readonly string[]).includes(value),
      { error: "خدمت موردنظر را انتخاب کنید." },
    ),
  propertyType: z
    .string()
    .min(1, { error: "نوع ملک را انتخاب کنید." })
    .refine(
      (value): value is (typeof propertyTypeValues)[number] =>
        (propertyTypeValues as readonly string[]).includes(value),
      { error: "نوع ملک را انتخاب کنید." },
    ),
  city: z.string().trim().min(2, { error: "نام شهر را وارد کنید." }),
  description: z
    .string()
    .trim()
    .min(20, { error: "توضیحات را حداقل در ۲۰ نویسه بنویسید." }),
  estimatedPropertyValue: z.string().trim(),
  files: z
    .array(z.custom<File>((value) => value instanceof File))
    .max(CONSULTATION_FILE_RULES.maxFiles, {
      error: `حداکثر ${CONSULTATION_FILE_RULES.maxFiles} فایل می‌توانید ارسال کنید.`,
    })
    .refine(
      (files) =>
        files.every(
          (file) => file.size <= CONSULTATION_FILE_RULES.maxFileSizeBytes,
        ),
      { error: "حجم هر فایل باید حداکثر ۵ مگابایت باشد." },
    )
    .refine((files) => files.every(isAcceptedFile), {
      error: "فقط فایل‌های PDF، تصویر یا Word مجاز است.",
    }),
});

export type ConsultationRequestFormValues = z.infer<
  typeof consultationRequestSchema
>;

export type ConsultationRequestFormInput = z.input<
  typeof consultationRequestSchema
>;
