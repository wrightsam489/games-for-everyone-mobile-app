import { ThemeProvider } from './contexts/ThemeContext'

import RootNavigator from './stacks/RootNavigator'
import Components from './screens/Components'

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}