export const PHONE_E164 = '5521969886267';
export const DISPLAY_PHONE = '21-96988-6267';

export function waLink(message?: string) {
  if (!message) return `https://wa.me/${PHONE_E164}`;
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`;
}

export default {
  PHONE_E164,
  DISPLAY_PHONE,
  waLink,
};
