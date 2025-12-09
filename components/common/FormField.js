import { View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { BodyText } from "./Texts";
import { TextField } from "./TextFields";
import { useState } from "react";

export default function FormField({
  field,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  formatter,
}) {
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const isDateField = field.type == "datepicker";
  const errorText = touched[field.name] ? errors[field.name] : undefined;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const handlePress = () => {
    if (isDateField) {
      showMode("date");
    }
  };

  return (
    <View>
      <BodyText style={{ marginHorizontal: 2, marginBottom: 2 }}>
        {field.label}
      </BodyText>
      <TextField
        placeholder={field.placeholder}
        keyboardType={field.keyboardType}
        onChange={handleChange(field.name)}
        onBlur={handleBlur(field.name)}
        onPress={handlePress}
        value={
          isDateField
            ? values[field.name].toLocaleDateString()
            : values[field.name]
        }
        error={errorText}
        secureTextEntry={field.type == "secure"}
        formatter={formatter}
      />
      {isDateField && show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={values[field.name]}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}
