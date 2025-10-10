import { ThemeProvider } from "./contexts/ThemeContext";

import RootNavigator from "./navigation/navigators/RootNavigator";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
