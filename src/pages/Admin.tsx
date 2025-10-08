import { useState } from 'react'
import Header from '../components/Header'
// Clerk imports moved to conditional components
import { DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableHeaderCell, DataTableCell, Modal } from '../components'
import Button from '../components/Button'
import Pagination from '../components/Pagination'
// import Dropdown from '../components/Dropdown'

interface AdminProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
  isScrolled?: boolean
}

const Admin = ({ navigateTo, hasClerk = false, isScrolled = false }: AdminProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false)

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

  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--medical-08)',
      margin: 0,
      padding: 0
    }}>
      <Header navigateTo={navigateTo} hasClerk={hasClerk} isScrolled={isScrolled} />
      
      {/* Content section */}
      <section style={{
        padding: 'var(--space-8)',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 'var(--max-width)',
          width: '100%'
        }}>
          <h1 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-6)'
          }}>
            Staff Management
          </h1>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 'var(--space-8)',
            gap: 'var(--space-3)'
          }}>
            <p style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-base)',
              color: 'var(--medical-02)',
              lineHeight: 'var(--line-height-normal)',
              margin: 0,
              maxWidth: '600px',
              flex: 1
            }}>
              Manage medical staff, patient records, and system settings. Monitor healthcare operations and user access.
            </p>
            <Button 
              variant="primary" 
              icon="plus"
              iconPosition="left"
              onClick={() => setIsAddStaffModalOpen(true)}
              style={{ flexShrink: 0 }}
            >
              Add Staff
            </Button>
          </div>

          {/* Container for table and controls */}
          <div style={{
            marginBottom: 'var(--space-8)'
          }}>

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
            <div className="text-small" style={{ color: 'var(--medical-03)' }}>
              Note: Actions are illustrative. Hook these up to your admin APIs.
            </div>
          </div>
        </div>
      </section>

      {/* Add Staff Modal */}
      <Modal
        isOpen={isAddStaffModalOpen}
        onClose={() => setIsAddStaffModalOpen(false)}
        title="Add Medical Staff"
        size="lg"
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)'
        }}>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--medical-02)',
            lineHeight: 'var(--line-height-normal)',
            margin: 0
          }}>
            This is a placeholder for the Add Medical Staff form. The form would include fields for:
          </p>
          
          <ul style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--medical-02)',
            lineHeight: 'var(--line-height-normal)',
            margin: 0,
            paddingLeft: 'var(--space-4)'
          }}>
            <li>Personal Information (Name, Email, Phone)</li>
            <li>Medical License Details</li>
            <li>Department Assignment</li>
            <li>Role and Permissions</li>
            <li>Emergency Contact Information</li>
          </ul>

          <div style={{
            display: 'flex',
            gap: 'var(--space-3)',
            justifyContent: 'flex-end',
            marginTop: 'var(--space-4)',
            paddingTop: 'var(--space-4)',
            borderTop: '1px solid var(--medical-07)'
          }}>
            <Button
              variant="secondary"
              onClick={() => setIsAddStaffModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert('Staff member would be added here')
                setIsAddStaffModalOpen(false)
              }}
            >
              Add Staff Member
            </Button>
          </div>
        </div>
      </Modal>
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


