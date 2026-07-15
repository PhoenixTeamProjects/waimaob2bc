import type { Locale } from '@/config/i18n';
import { contactFields, inquiryOptions } from '@/data/contact';

export function getInquiryOptions(locale: Locale) {
  return inquiryOptions.map((option) => ({
    key: option.key,
    label: option.label[locale],
    description: option.description[locale]
  }));
}

export function getContactFields(locale: Locale) {
  return contactFields.map((field) => ({
    name: field.name,
    label: field.label[locale],
    placeholder: field.placeholder[locale],
    type: field.type,
    required: field.required
  }));
}
