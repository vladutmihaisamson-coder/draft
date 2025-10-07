import Header from '../components/Header'
import Tabs, { type TabItem } from '../components/Tabs'

interface TabsPageProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const TabsPage = ({ navigateTo, hasClerk = false }: TabsPageProps) => {
  const items: TabItem[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'details', label: 'Details' },
    { key: 'settings', label: 'Settings' },
    { key: 'disabled', label: 'Disabled', disabled: true }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--shade-08)'
    }}>
      <Header navigateTo={navigateTo} hasClerk={hasClerk} />

      <main style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        padding: 'var(--space-8) var(--space-6)'
      }}>
        <h1 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Tabs</h1>
        <Tabs items={items} />
      </main>
    </div>
  )
}

export default TabsPage


