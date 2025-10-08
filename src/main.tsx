import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/tokens.scss'
import './styles/buttons.css'
import './styles/fields.css'
// Import Google Fonts
import '@fontsource/inter/400.css'
import '@fontsource/jetbrains-mono/400.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'

const clerkPk = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined
console.log("!!!!!!!!!!", clerkPk)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {clerkPk ? (
      <ClerkProvider publishableKey={clerkPk}>
        <App hasClerk={true} />
      </ClerkProvider>
    ) : (
      <App hasClerk={false} />
    )}
  </StrictMode>,
)
