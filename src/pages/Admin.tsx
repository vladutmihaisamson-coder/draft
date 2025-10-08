import Header from '../components/Header'
// Clerk imports moved to conditional components
import { DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableHeaderCell, DataTableCell } from '../components'
import Button from '../components/Button'
// import Dropdown from '../components/Dropdown'

interface AdminProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const Admin = ({ navigateTo, hasClerk = false }: AdminProps) => {

  // If Clerk is not available, show a simple admin page
  if (!hasClerk) {
    return (
      <div style={{ minHeight: '100vh', width: '100vw', background: 'var(--shade-08)' }}>
        <Header navigateTo={navigateTo} hasClerk={hasClerk} />
        <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: 'var(--space-8) var(--space-6)' }}>
          <div style={{
            background: 'var(--shade-10)',
            border: `1px solid var(--shade-07)`,
            borderRadius: 'var(--radius-medium)',
            padding: 'var(--space-6)'
          }}>
            <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Admin Dashboard</h2>
            <p className="text-body" style={{ marginBottom: 'var(--space-6)' }}>Welcome to the admin panel. Authentication is disabled in this mode.</p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'var(--space-4)'
            }}>
              <h3 className="text-h4">Active users</h3>
              <Button variant="primary" onClick={() => alert('Invite flow not implemented')}>
                Invite user
              </Button>
            </div>

            <DataTable>
              <DataTableHeader>
                <DataTableRow hoverable={false}>
                  <DataTableHeaderCell widthPx={200}>Name</DataTableHeaderCell>
                  <DataTableHeaderCell widthPx={260}>Email</DataTableHeaderCell>
                  <DataTableHeaderCell widthPx={140}>Role</DataTableHeaderCell>
                  <DataTableHeaderCell widthPx={120}>Status</DataTableHeaderCell>
                  <DataTableHeaderCell widthPx={160}>Actions</DataTableHeaderCell>
                </DataTableRow>
              </DataTableHeader>
              <DataTableBody>
                {mockActiveUsers.map((u) => (
                  <DataTableRow key={u.id}>
                    <DataTableCell widthPx={200}>{u.name}</DataTableCell>
                    <DataTableCell widthPx={260}>{u.email}</DataTableCell>
                    <DataTableCell widthPx={140}>{u.role}</DataTableCell>
                    <DataTableCell widthPx={120}>{u.active ? 'Active' : 'Inactive'}</DataTableCell>
                    <DataTableCell widthPx={160}>-</DataTableCell>
                  </DataTableRow>
                ))}
              </DataTableBody>
            </DataTable>

            <div style={{ height: 'var(--space-2)' }} />
            <div className="text-small" style={{ color: 'var(--shade-03)' }}>
              Note: Actions are illustrative. Hook these up to your admin APIs.
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', width: '100vw', background: 'var(--shade-08)' }}>
      <Header navigateTo={navigateTo} hasClerk={hasClerk} />
      <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: 'var(--space-8) var(--space-6)' }}>
        <div style={{
          background: 'var(--shade-10)',
          border: `1px solid var(--shade-07)`,
          borderRadius: 'var(--radius-medium)',
          padding: 'var(--space-6)'
        }}>
          <h2 className="text-h3" style={{ marginBottom: 'var(--space-4)' }}>Admin Dashboard</h2>
          <p className="text-body" style={{ marginBottom: 'var(--space-6)' }}>Welcome to the admin panel. Authentication is disabled in this mode.</p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-4)'
          }}>
            <h3 className="text-h4">Active users</h3>
            <Button variant="primary" onClick={() => alert('Invite flow not implemented')}>
              Invite user
            </Button>
          </div>

          <DataTable>
            <DataTableHeader>
              <DataTableRow hoverable={false}>
                <DataTableHeaderCell widthPx={200}>Name</DataTableHeaderCell>
                <DataTableHeaderCell widthPx={260}>Email</DataTableHeaderCell>
                <DataTableHeaderCell widthPx={140}>Role</DataTableHeaderCell>
                <DataTableHeaderCell widthPx={120}>Status</DataTableHeaderCell>
                <DataTableHeaderCell widthPx={160}>Actions</DataTableHeaderCell>
              </DataTableRow>
            </DataTableHeader>
            <DataTableBody>
              {mockActiveUsers.map((u) => (
                <DataTableRow key={u.id}>
                  <DataTableCell widthPx={200}>{u.name}</DataTableCell>
                  <DataTableCell widthPx={260}>{u.email}</DataTableCell>
                  <DataTableCell widthPx={140}>{u.role}</DataTableCell>
                  <DataTableCell widthPx={120}>{u.active ? 'Active' : 'Inactive'}</DataTableCell>
                  <DataTableCell widthPx={160}>-</DataTableCell>
                </DataTableRow>
              ))}
            </DataTableBody>
          </DataTable>

          <div style={{ height: 'var(--space-2)' }} />
          <div className="text-small" style={{ color: 'var(--shade-03)' }}>
            Note: Actions are illustrative. Hook these up to your admin APIs.
          </div>
        </div>
      </main>
    </div>
  )
}


export default Admin

// Mock active users list (replace with organization users when backend available)
const mockActiveUsers = [
  { id: 'u_01', name: 'Alice Johnson', email: 'alice@example.com', role: 'member', active: true },
  { id: 'u_02', name: 'Bob Smith', email: 'bob@example.com', role: 'admin', active: true },
  { id: 'u_03', name: 'Carol Lee', email: 'carol@example.com', role: 'member', active: true },
]


