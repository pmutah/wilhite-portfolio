export type SurveyChannel = 'email' | 'sms' | 'none';
export type SurveyVariant = 'vip' | 'classic';

export const OCCASION_OPTIONS = [
  "New Year's",
  'Birthday',
  'Anniversary',
  'Family reunion',
  'Girls / guys weekend',
  'Ski trip',
  'Quiet getaway',
  'Other',
] as const;

export const ACTIVITY_OPTIONS = [
  'Fishing',
  'River / paddle boarding',
  'Mountain / trail biking',
  'Skiing',
  'Hot tub nights',
  'Theater',
  'Hiking',
  'Other',
] as const;

export const AMENITY_OPTIONS = [
  'Game room',
  'Movies / theater',
  'Hot tub',
  'Sauna',
  'Kitchen / cooking',
  'Garage / winter parking',
  'Outdoor time',
  'Cozy indoor',
  'Cards / puzzles',
  'Kids space',
  'Quiet / privacy',
  'Other',
] as const;

export const FOOD_VIBE_OPTIONS = [
  'Comfort food',
  'Steakhouse',
  'Italian',
  'Mexican',
  'Something light',
  'Breakfast people',
  'Other',
] as const;

export const POPCORN_OPTIONS = [
  'Butter',
  'Light butter',
  'Caramel',
  'Cheese',
  'Plain',
  'A mix',
] as const;

export const NA_TOAST_OPTIONS = [
  "Martinelli's",
  'NA sparkling',
  'Mocktails',
  'Other',
] as const;

export function surveyVariantForProperty(propertyId: string): SurveyVariant {
  return propertyId === 'river' ? 'vip' : 'classic';
}

/** Host ops defaults — not guest survey questions. */
export const RIVER_VIP_ARRIVAL_DEFAULTS = [
  'Kitchen flowers',
  'Mints on beds/nightstands',
  'Scent / clean',
] as const;

export function normalizeConfirmationCode(value?: string | null): string {
  return (value ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

export function confirmationCodeInHaystack(haystack: string, code: string): boolean {
  const needle = normalizeConfirmationCode(code);
  if (!needle) return false;
  return normalizeConfirmationCode(haystack).includes(needle);
}
