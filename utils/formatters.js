export const formatDateInput = (text) => {
  let digits = text.replace(/[^\d]/g, "");
  if (digits.length > 2) {
    digits = digits.slice(0, 2) + "/" + digits.slice(2);
  }
  if (digits.length > 5) {
    digits = digits.slice(0, 5) + "/" + digits.slice(5);
  }
  return digits.slice(0, 11);
};

export const formatPhoneNumberInput = (text) => {
  let digits = text.replace(/[^\d]/g, "");
  if (digits.length > 3) {
    digits = digits.slice(0, 3) + "-" + digits.slice(3);
  }
  if (digits.length > 7) {
    digits = digits.slice(0, 7) + "-" + digits.slice(7);
  }
  return digits.slice(0, 12);
};
