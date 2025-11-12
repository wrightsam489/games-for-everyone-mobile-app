import { View, Switch } from "react-native";
import { BodyText } from "../components/common/Texts";
import { useTheme } from "../contexts/ThemeContext";

export default function Settings() {
  const { mode, setMode } = useTheme();
  const toggleSwitch = () => {
    setMode(!(mode === "dark") ? "dark" : "light");
  };
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <BodyText>Dark mode</BodyText>
        <Switch value={mode === "dark"} onValueChange={toggleSwitch} />
      </View>
    </View>
  );
}
