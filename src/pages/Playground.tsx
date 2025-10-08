import Header from '../components/Header'
import { DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableHeaderCell, DataTableCell } from '../components'

interface PlaygroundProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const Playground = ({ navigateTo, hasClerk = false }: PlaygroundProps) => {
  const emergencyCases = [
    { id: 'EM-001', patient: 'John Smith', condition: 'Chest Pain', priority: 'Critical', status: 'In Progress' },
    { id: 'EM-002', patient: 'Sarah Johnson', condition: 'Severe Allergic Reaction', priority: 'High', status: 'Stabilized' },
    { id: 'EM-003', patient: 'Michael Brown', condition: 'Trauma - Car Accident', priority: 'Critical', status: 'Surgery' },
    { id: 'EM-004', patient: 'Emily Davis', condition: 'Stroke Symptoms', priority: 'High', status: 'Monitoring' },
    { id: 'EM-005', patient: 'Robert Wilson', condition: 'Heart Attack', priority: 'Critical', status: 'Recovery' }
  ]

  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--shade-08)',
      margin: 0,
      padding: 0
    }}>
      <Header navigateTo={navigateTo} hasClerk={hasClerk} />

      <section style={{
        padding: 'var(--space-8)',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 'var(--max-width)',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)'
        }}>
          <h1 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--medical-01)'
          }}>
            Emergency Department
          </h1>
          
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-lg)',
            color: 'var(--medical-02)',
            lineHeight: 'var(--line-height-normal)',
            maxWidth: '600px'
          }}>
            Real-time emergency case monitoring and critical patient management system for immediate medical response.
          </p>
        </div>
      </section>

      {/* Full width table section below with 24px padding */}
      <section style={{
        width: '100%',
        padding: 'var(--space-6)'
      }}>
        <DataTable>
          <DataTableHeader>
            <DataTableRow>
              <DataTableHeaderCell widthPx={120}>Case ID</DataTableHeaderCell>
              <DataTableHeaderCell>Patient</DataTableHeaderCell>
              <DataTableHeaderCell>Condition</DataTableHeaderCell>
              <DataTableHeaderCell widthPx={120}>Priority</DataTableHeaderCell>
              <DataTableHeaderCell widthPx={140}>Status</DataTableHeaderCell>
            </DataTableRow>
          </DataTableHeader>
          <DataTableBody>
            {emergencyCases.map((case_) => (
              <DataTableRow key={case_.id} hoverable>
                <DataTableCell widthPx={120}>{case_.id}</DataTableCell>
                <DataTableCell>{case_.patient}</DataTableCell>
                <DataTableCell>{case_.condition}</DataTableCell>
                <DataTableCell widthPx={120}>
                  <span style={{
                    padding: 'var(--space-1) var(--space-2)',
                    borderRadius: 'var(--radius-xs)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    background: case_.priority === 'Critical' ? 'var(--medical-error)' : 'var(--medical-warning)',
                    color: 'var(--medical-10)'
                  }}>
                    {case_.priority}
                  </span>
                </DataTableCell>
                <DataTableCell widthPx={140}>{case_.status}</DataTableCell>
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTable>
      </section>
    </div>
  )
}

export default Playground


