import { ThemeProvider } from './contexts/ThemeContext'

import RootStack from './RootStack'
import Components from './screens/Components'

export default function App() {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}