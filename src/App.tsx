import { useState, useEffect } from 'react'
import './App.css'
import './styles/tokens.scss'
import './styles/buttons.css'
import Router from './components/Router'
// Clerk imports moved to conditional components

interface AppProps {
  hasClerk?: boolean
}

function App({ hasClerk = false }: AppProps) {
  // Temporarily disable Clerk to fix white screen
  return <Router hasClerk={false} />
}

// Clerk auth wrapper component
const ClerkAuthWrapper = () => {
  // Use dynamic import to avoid issues when Clerk is not available
  const [ClerkComponents, setClerkComponents] = useState<any>(null)
  
  useEffect(() => {
    import('@clerk/clerk-react').then(module => {
      setClerkComponents(module)
    }).catch(() => {
      // Clerk not available, show fallback
      setClerkComponents({ SignedIn: () => null, SignedOut: () => null, SignUp: () => null, SignInButton: () => null })
    })
  }, [])
  
  if (!ClerkComponents) {
    return <div>Loading...</div>
  }
  
  const { SignedIn, SignedOut, SignUp, SignInButton } = ClerkComponents
  
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
        <Router hasClerk={true} />
      </SignedIn>
    </>
  )
}

export default App