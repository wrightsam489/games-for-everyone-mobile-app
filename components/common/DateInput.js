import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextField } from "./TextFields";

export default function DateInput({}) {
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <>
      <TextField
        onPress={showDatepicker}
        value={date ? date.toLocaleDateString() : ""}
        placeholder={"MM/DD/YYYY"}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date ? date : new Date()}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </>
  );
}
