import { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableHeaderCell, DataTableCell } from '../components'
import Pagination from '../components/Pagination'

interface HomeProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const Home = ({ navigateTo, hasClerk = false }: HomeProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)

  // Table data - Medical Equipment & Inventory
  type MedicalEquipmentRow = {
    sku: string; equipment: string; category: string; cost: string; stock: number; reorder: number;
  }
  
  const tableColumns: { key: keyof MedicalEquipmentRow; label: string; width?: string }[] = [
    { key: 'sku', label: 'SKU', width: '100px' },
    { key: 'equipment', label: 'Equipment' },
    { key: 'category', label: 'Category' },
    { key: 'cost', label: 'Cost' },
    { key: 'stock', label: 'In Stock' },
    { key: 'reorder', label: 'Reorder Level' }
  ]

  // Generate medical equipment inventory data
  const allTableData: MedicalEquipmentRow[] = [
    { sku: 'MED-0001', equipment: 'Digital Stethoscope', category: 'Diagnostic', cost: '$299.99', stock: 45, reorder: 20 },
    { sku: 'MED-0002', equipment: 'Blood Pressure Monitor', category: 'Diagnostic', cost: '$89.00', stock: 78, reorder: 30 },
    { sku: 'MED-0003', equipment: 'Pulse Oximeter', category: 'Monitoring', cost: '$129.99', stock: 32, reorder: 15 },
    { sku: 'MED-0004', equipment: 'Thermometer Digital', category: 'Diagnostic', cost: '$39.99', stock: 120, reorder: 50 },
    { sku: 'MED-0005', equipment: 'ECG Machine', category: 'Cardiology', cost: '$2,499.00', stock: 8, reorder: 3 },
    { sku: 'MED-0006', equipment: 'Defibrillator AED', category: 'Emergency', cost: '$1,299.00', stock: 12, reorder: 5 },
    { sku: 'MED-0007', equipment: 'Ultrasound Scanner', category: 'Imaging', cost: '$8,999.00', stock: 4, reorder: 2 },
    { sku: 'MED-0008', equipment: 'X-Ray Machine', category: 'Imaging', cost: '$45,000.00', stock: 2, reorder: 1 },
    { sku: 'MED-0009', equipment: 'Surgical Lights', category: 'Surgery', cost: '$3,299.00', stock: 6, reorder: 3 },
    { sku: 'MED-0010', equipment: 'Anesthesia Machine', category: 'Surgery', cost: '$12,999.00', stock: 3, reorder: 1 },
    { sku: 'MED-0011', equipment: 'Ventilator', category: 'Respiratory', cost: '$15,999.00', stock: 5, reorder: 2 },
    { sku: 'MED-0012', equipment: 'Infusion Pump', category: 'Therapy', cost: '$899.00', stock: 25, reorder: 10 },
    { sku: 'MED-0013', equipment: 'Wheelchair', category: 'Mobility', cost: '$299.00', stock: 45, reorder: 20 },
    { sku: 'MED-0014', equipment: 'Hospital Bed', category: 'Furniture', cost: '$1,899.00', stock: 18, reorder: 8 },
    { sku: 'MED-0015', equipment: 'Surgical Gloves', category: 'Supplies', cost: '$12.99', stock: 500, reorder: 200 },
    { sku: 'MED-0016', equipment: 'Syringes 10ml', category: 'Supplies', cost: '$8.99', stock: 800, reorder: 300 },
    { sku: 'MED-0017', equipment: 'Bandages Pack', category: 'Supplies', cost: '$15.00', stock: 350, reorder: 150 },
    { sku: 'MED-0018', equipment: 'Oxygen Tank', category: 'Respiratory', cost: '$199.00', stock: 28, reorder: 12 },
    { sku: 'MED-0019', equipment: 'Nebulizer', category: 'Respiratory', cost: '$89.99', stock: 42, reorder: 20 },
    { sku: 'MED-0020', equipment: 'Surgical Scissors', category: 'Surgery', cost: '$45.00', stock: 65, reorder: 25 },
    { sku: 'MED-0021', equipment: 'MRI Scanner', category: 'Imaging', cost: '$1,200,000.00', stock: 1, reorder: 0 },
    { sku: 'MED-0022', equipment: 'CT Scanner', category: 'Imaging', cost: '$800,000.00', stock: 1, reorder: 0 },
    { sku: 'MED-0023', equipment: 'Dialysis Machine', category: 'Therapy', cost: '$25,000.00', stock: 2, reorder: 1 },
    { sku: 'MED-0024', equipment: 'Patient Monitor', category: 'Monitoring', cost: '$2,999.00', stock: 8, reorder: 4 },
    { sku: 'MED-0025', equipment: 'Autoclave Sterilizer', category: 'Sterilization', cost: '$4,999.00', stock: 3, reorder: 1 }
  ]

  // Calculate pagination
  const totalItems = allTableData.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = allTableData.slice(startIndex, endIndex)

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
      background: 'var(--shade-08)',
      margin: 0,
      padding: 0
    }}>
      <Header navigateTo={navigateTo} hasClerk={hasClerk} />
      
      {/* Cards section */}
      <section style={{
        padding: 'var(--space-8)', // 32px padding
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 'var(--max-width)', // 960px max width
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--space-3)', // 12px gap between cards
          alignItems: 'start'
        }}>
          <Card title="Active Patients" subtitle="1,234" />
          <Card title="Discharged" subtitle="567" />
          <Card title="Pending Tests" subtitle="89" />
          <Card title="Completed Procedures" subtitle="2,456" />
        </div>
      </section>

      {/* Table section - Full width */}
      <section style={{
        padding: '0 var(--space-6) var(--space-8)', // 24px LR padding to avoid touching edges
        width: '100%'
      }}>
        <DataTable resizable>
          <DataTableHeader>
            <DataTableRow hoverable={false}>
              {tableColumns.map(col => (
                <DataTableHeaderCell key={col.key} columnKey={col.key} widthPx={col.width ? Number.parseFloat(col.width) : undefined}>
                  {col.label}
                </DataTableHeaderCell>
              ))}
            </DataTableRow>
          </DataTableHeader>
          <DataTableBody>
            {currentData.map((row, idx) => (
              <DataTableRow key={idx}>
                {tableColumns.map(col => (
                  <DataTableCell key={col.key} columnKey={col.key} widthPx={col.width ? Number.parseFloat(col.width) : undefined}>
                    {row[col.key]}
                  </DataTableCell>
                ))}
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTable>
        
        {/* Pagination Component */}
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
      </section>
    </div>
  )
}

export default Home
