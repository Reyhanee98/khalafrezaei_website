"use client";

import FileUploadField from "@/components/consultation/fields/FileUploadField";
import SelectField from "@/components/consultation/fields/SelectField";
import TextAreaField from "@/components/consultation/fields/TextAreaField";
import TextField from "@/components/consultation/fields/TextField";
import FormStatus from "@/components/consultation/FormStatus";
import { useConsultationRequest } from "@/hooks/useConsultationRequest";
import {
  PROPERTY_TYPE_OPTIONS,
  SERVICE_OPTIONS,
} from "@/lib/consultation/constants";
import type {
  ConsultationServiceOption,
  PropertyTypeOption,
} from "@/lib/consultation/types";
import {
  consultationRequestSchema,
  type ConsultationRequestFormInput,
} from "@/schemas/consultation-request";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

const defaultValues: ConsultationRequestFormInput = {
  fullName: "",
  mobile: "",
  email: "",
  serviceRequested: "",
  propertyType: "",
  city: "",
  description: "",
  estimatedPropertyValue: "",
  files: [],
};

export default function ConsultationRequestForm() {
  const { status, result, isSubmitting, submit, resetStatus } =
    useConsultationRequest();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationRequestFormInput>({
    resolver: zodResolver(consultationRequestSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    resetStatus();

    const response = await submit({
      fullName: values.fullName,
      mobile: values.mobile,
      email: values.email,
      serviceRequested: values.serviceRequested as ConsultationServiceOption,
      propertyType: values.propertyType as PropertyTypeOption,
      city: values.city,
      description: values.description,
      estimatedPropertyValue: values.estimatedPropertyValue,
      files: values.files ?? [],
    });

    if (response.ok) {
      reset(defaultValues);
    }
  });

  return (
    <form
      className="form-grid"
      onSubmit={onSubmit}
      noValidate
      aria-describedby="consultation-form-help"
    >
      <p id="consultation-form-help" className="form-intro">
        فرم زیر را تکمیل کنید تا موضوع درخواست بررسی و برای هماهنگی بعدی با شما
        تماس گرفته شود.
      </p>

      <div className="form-row">
        <TextField
          id="fullName"
          label="نام و نام خانوادگی"
          registration={register("fullName")}
          error={errors.fullName}
          autoComplete="name"
          placeholder="مثال: علی رضایی"
        />
        <TextField
          id="mobile"
          label="شماره موبایل"
          registration={register("mobile")}
          error={errors.mobile}
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          dir="ltr"
          placeholder="0912xxxxxxx"
          hint="فقط اعداد، با ۰۹ شروع شود."
        />
      </div>

      <div className="form-row">
        <TextField
          id="email"
          label="ایمیل"
          registration={register("email")}
          error={errors.email}
          type="email"
          optional
          autoComplete="email"
          dir="ltr"
          placeholder="name@example.com"
        />
        <TextField
          id="city"
          label="شهر"
          registration={register("city")}
          error={errors.city}
          autoComplete="address-level2"
          placeholder="مثال: تهران"
        />
      </div>

      <div className="form-row">
        <SelectField
          id="serviceRequested"
          label="خدمت درخواستی"
          registration={register("serviceRequested")}
          options={SERVICE_OPTIONS}
          error={errors.serviceRequested}
        />
        <SelectField
          id="propertyType"
          label="نوع ملک"
          registration={register("propertyType")}
          options={PROPERTY_TYPE_OPTIONS}
          error={errors.propertyType}
        />
      </div>

      <TextField
        id="estimatedPropertyValue"
        label="برآورد ارزش ملک"
        registration={register("estimatedPropertyValue")}
        error={errors.estimatedPropertyValue}
        optional
        inputMode="numeric"
        dir="ltr"
        placeholder="مثال: ۱۲٬۰۰۰٬۰۰۰٬۰۰۰ ریال"
        hint="در صورت نداشتن برآورد دقیق، خالی بگذارید."
      />

      <TextAreaField
        id="description"
        label="توضیحات"
        registration={register("description")}
        error={errors.description}
        placeholder="موضوع پرونده، نوع نیاز و هر نکته مهم برای هماهنگی بازدید را بنویسید."
        hint="هرچه جزئیات دقیق‌تر باشد، پیگیری سریع‌تر انجام می‌شود."
      />

      <Controller
        name="files"
        control={control}
        render={({ field }) => (
          <FileUploadField
            id="files"
            label="بارگذاری مدارک"
            files={field.value ?? []}
            onChange={field.onChange}
            errorMessage={errors.files?.message}
            disabled={isSubmitting}
          />
        )}
      />

      <FormStatus status={status} result={result} />

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
        >
          <Send strokeWidth={1.75} aria-hidden="true" />
          {isSubmitting ? "در حال ارسال…" : "ثبت درخواست مشاوره"}
        </button>
      </div>
    </form>
  );
}
