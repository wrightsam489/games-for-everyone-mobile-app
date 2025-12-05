export const formatDateInput = (text) => {
  let digits = text.replace(/[^\d]/g, "");
  if (digits.length > 2) {
    digits = digits.slice(0, 2) + "/" + digits.slice(2);
  }
  if (digits.length > 5) {
    digits = digits.slice(0, 5) + "/" + digits.slice(5, 9);
  }
  return digits.slice(0, 10);
};

export const formatPhoneNumberInput = (text) => {
  let digits = text.replace(/[^\d]/g, "");
  if (digits.length > 3) {
    digits = digits.slice(0, 3) + "/" + digits.slice(3);
  }
  if (digits.length > 6) {
    digits = digits.slice(0, 6) + "/" + digits.slice(6, 9);
  }
  return digits.slice(0, 9);
};
