import { formatPhoneNumberInput } from "../utils/formatters";

export const ACCOUNT_FIELDS = [
  {
    section: "Personal",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        placeholder: "First name",
        keyboardType: "default",
      },
      {
        name: "lastName",
        label: "Last Name",
        placeholder: "Last name",
        keyboardType: "default",
      },
      {
        name: "birthday",
        label: "Birthday",
        placeholder: "MM/DD/YYYY",
        keyboardType: "numeric",
        type: "datepicker",
      },
    ],
  },
  {
    section: "Login Info",
    fields: [
      {
        name: "username",
        label: "Username",
        placeholder: "Username",
        keyboardType: "default",
      },
      {
        name: "password",
        label: "Password",
        placeholder: "Password",
        keyboardType: "default",
        type: "secure",
      },
      {
        name: "confirmPassword",
        label: "Confirm password",
        placeholder: "Confirm password",
        keyboardType: "default",
        type: "secure",
      },
    ],
  },
  {
    section: "Recovery",
    fields: [
      {
        name: "email",
        label: "Email",
        placeholder: "Email address",
        keyboardType: "email-address",
      },
      {
        name: "phoneNumber",
        label: "Phone number",
        placeholder: "XXX-XXX-XXXX",
        keyboardType: "email-address",
        formatter: formatPhoneNumberInput,
      },
    ],
  },
];
