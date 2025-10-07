import './App.css'
import './styles/tokens.scss'
import './styles/buttons.css'
import Router from './components/Router'
import { SignedIn, SignedOut, SignUp, SignInButton } from '@clerk/clerk-react'

interface AppProps {
  hasClerk?: boolean
}

function App({ hasClerk = false }: AppProps) {
  if (!hasClerk) {
    return <Router />
  }

  return (
    <>
      <SignedOut>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--shade-08)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            padding: 'var(--space-8)',
            background: 'var(--shade-10)',
            border: `1px solid var(--shade-07)`,
            borderRadius: 'var(--radius-medium)'
          }}>
            <div>
              <h2 className="text-h4" style={{ marginBottom: 'var(--space-3)' }}>Create account</h2>
              <SignUp routing="hash" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span className="text-small">Already have an account?</span>
              <SignInButton mode="modal">
                <button className="btn btn-secondary">Sign in</button>
              </SignInButton>
            </div>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <Router />
      </SignedIn>
    </>
  )
}

export default App