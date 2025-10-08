import './App.css'
import './styles/tokens.scss'
import './styles/buttons.css'
import Router from './components/Router'
// Clerk imports moved to conditional components

interface AppProps {
  hasClerk?: boolean
}

function App() {
  // Temporarily disable Clerk to fix white screen
  return <Router hasClerk={false} />
}

export default App