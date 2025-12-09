import { View } from "react-native";
import { BodyText } from "./Texts";
import { TextField } from "./TextFields";
import DateInput from "../common/DateInput";

export default function FormField({
  field,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  formatter,
}) {
  const errorText = touched[field.name] ? errors[field.name] : undefined;

  return (
    <View>
      <BodyText style={{ marginHorizontal: 2, marginBottom: 2 }}>
        {field.label}
      </BodyText>
      {field.type == "datepicker" ? (
        <DateInput
          onChange={handleChange(field.name)}
          onBlur={handleBlur(field.name)}
          value={values[field.name]}
          error={errorText}
        />
      ) : (
        <TextField
          placeholder={field.placeholder}
          keyboardType={field.keyboardType}
          onChange={handleChange(field.name)}
          onBlur={handleBlur(field.name)}
          value={values[field.name]}
          error={errorText}
          secureTextEntry={field.type == "secure"}
          formatter={formatter}
        />
      )}
    </View>
  );
}
