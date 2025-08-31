import Main from './screens/Main'
import { ThemeProvider } from './contexts/ThemeContext'

export default function App() {

  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}