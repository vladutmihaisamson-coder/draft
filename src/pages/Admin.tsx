import { useState } from 'react'
import Header from '../components/Header'
// Clerk imports moved to conditional components
import { DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableHeaderCell, DataTableCell } from '../components'
import Button from '../components/Button'
import Pagination from '../components/Pagination'
// import Dropdown from '../components/Dropdown'

interface AdminProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const Admin = ({ navigateTo, hasClerk = false }: AdminProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  // Calculate pagination
  const totalItems = mockActiveUsers.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = mockActiveUsers.slice(startIndex, endIndex)

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage)
    setCurrentPage(1) // Reset to first page
  }

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

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
            <h1 style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--medical-01)',
              marginBottom: 'var(--space-6)'
            }}>
              Admin Dashboard
            </h1>
            <p style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-base)',
              color: 'var(--medical-02)',
              lineHeight: 'var(--line-height-normal)',
              marginBottom: 'var(--space-6)',
              maxWidth: '600px'
            }}>
              Manage medical staff, patient records, and system settings. Monitor healthcare operations and user access.
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 'var(--space-4)'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--medical-01)',
                margin: 0
              }}>Medical Staff</h3>
              <Button 
                variant="primary" 
                icon="plus"
                iconPosition="left"
                onClick={() => alert('Add medical staff flow not implemented')}
              >
                Add Staff
              </Button>
            </div>

            {/* Full-width admin table container to match homepage table style */}
            <div style={{
              width: '100vw',
              marginLeft: 'calc(50% - 50vw)',
              padding: '0 var(--space-6)'
            }}>
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
                  {currentData.map((u) => (
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
            </div>
            
            {/* Pagination Component - Full width to match table */}
            <div style={{
              width: '100vw',
              marginLeft: 'calc(50% - 50vw)',
              padding: '0 var(--space-6)'
            }}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                onItemsPerPageChange={handleItemsPerPageChange}
                startIndex={startIndex}
                endIndex={endIndex}
              />
            </div>

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
          <h1 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-6)'
          }}>
            Admin Dashboard
          </h1>
          <p className="text-body" style={{ marginBottom: 'var(--space-6)' }}>Welcome to the admin panel. Authentication is disabled in this mode.</p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-4)'
          }}>
            <h3 className="text-h4">Active users</h3>
            <Button 
              variant="primary" 
              icon="mail"
              iconPosition="left"
              onClick={() => alert('Invite flow not implemented')}
            >
              Invite user
            </Button>
          </div>

          <div style={{
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)',
            padding: '0 var(--space-6)'
          }}>
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
          </div>

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

// Mock medical staff list (replace with organization users when backend available)
const mockActiveUsers = [
  { id: 'u_01', name: 'Dr. Sarah Chen', email: 'sarah.chen@medical.com', role: 'Chief Medical Officer', active: true },
  { id: 'u_02', name: 'Dr. Michael Rodriguez', email: 'michael.rodriguez@medical.com', role: 'Emergency Physician', active: true },
  { id: 'u_03', name: 'Dr. Emily Watson', email: 'emily.watson@medical.com', role: 'Pediatrician', active: true },
  { id: 'u_04', name: 'Dr. James Park', email: 'james.park@medical.com', role: 'Cardiologist', active: true },
  { id: 'u_05', name: 'Dr. Lisa Thompson', email: 'lisa.thompson@medical.com', role: 'Neurologist', active: true },
  { id: 'u_06', name: 'Dr. Robert Kim', email: 'robert.kim@medical.com', role: 'Orthopedic Surgeon', active: true },
  { id: 'u_07', name: 'Dr. Maria Garcia', email: 'maria.garcia@medical.com', role: 'Dermatologist', active: true },
  { id: 'u_08', name: 'Dr. David Wilson', email: 'david.wilson@medical.com', role: 'Psychiatrist', active: true },
  { id: 'u_09', name: 'Dr. Jennifer Lee', email: 'jennifer.lee@medical.com', role: 'Oncologist', active: true },
  { id: 'u_10', name: 'Dr. Christopher Brown', email: 'christopher.brown@medical.com', role: 'Radiologist', active: true },
  { id: 'u_11', name: 'Dr. Amanda Taylor', email: 'amanda.taylor@medical.com', role: 'Anesthesiologist', active: true },
  { id: 'u_12', name: 'Dr. Kevin Martinez', email: 'kevin.martinez@medical.com', role: 'Urologist', active: true },
]


