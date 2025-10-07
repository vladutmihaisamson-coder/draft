import Header from '../components/Header'
import { DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableHeaderCell, DataTableCell } from '../components'

interface PlaygroundProps {
  navigateTo?: (page: string) => void
}

const Playground = ({ navigateTo }: PlaygroundProps) => {
  const rows = [
    { id: 1, name: 'Wireless Mouse', price: '$24.99', stock: 120 },
    { id: 2, name: 'Mechanical Keyboard', price: '$89.00', stock: 45 },
    { id: 3, name: '27" 4K Monitor', price: '$329.99', stock: 18 }
  ]

  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--shade-08)',
      margin: 0,
      padding: 0
    }}>
      <Header navigateTo={navigateTo} />

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
            color: 'var(--shade-01)'
          }}>
            Playground
          </h1>
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
              <DataTableHeaderCell widthPx={140}>ID</DataTableHeaderCell>
              <DataTableHeaderCell>Name</DataTableHeaderCell>
              <DataTableHeaderCell widthPx={140}>Price</DataTableHeaderCell>
              <DataTableHeaderCell widthPx={140}>Stock</DataTableHeaderCell>
            </DataTableRow>
          </DataTableHeader>
          <DataTableBody>
            {rows.map((row) => (
              <DataTableRow key={row.id} hoverable>
                <DataTableCell widthPx={140}>{row.id}</DataTableCell>
                <DataTableCell>{row.name}</DataTableCell>
                <DataTableCell widthPx={140}>{row.price}</DataTableCell>
                <DataTableCell widthPx={140}>{row.stock}</DataTableCell>
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTable>
      </section>
    </div>
  )
}

export default Playground


