import { useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import { DataTable, DataTableHeader, DataTableBody, DataTableRow, DataTableHeaderCell, DataTableCell } from '../components'
import Pagination from '../components/Pagination'

interface HomeProps {
  navigateTo?: (page: string) => void
}

const Home = ({ navigateTo }: HomeProps) => {
  const [itemsPerPage, setItemsPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)

  // Table data - Products & Stock
  const tableColumns = [
    { key: 'sku', label: 'SKU', width: '100px' },
    { key: 'product', label: 'Product' },
    { key: 'category', label: 'Category' },
    { key: 'price', label: 'Price' },
    { key: 'stock', label: 'In Stock' },
    { key: 'reorder', label: 'Reorder Level' }
  ]

  // Generate product stock data
  const allTableData = [
    { sku: 'SKU-0001', product: 'Wireless Mouse', category: 'Accessories', price: '$24.99', stock: 120, reorder: 50 },
    { sku: 'SKU-0002', product: 'Mechanical Keyboard', category: 'Accessories', price: '$89.00', stock: 45, reorder: 30 },
    { sku: 'SKU-0003', product: '27" 4K Monitor', category: 'Displays', price: '$329.99', stock: 18, reorder: 10 },
    { sku: 'SKU-0004', product: 'USB-C Hub 7-in-1', category: 'Accessories', price: '$39.99', stock: 200, reorder: 80 },
    { sku: 'SKU-0005', product: 'Noise-Canceling Headphones', category: 'Audio', price: '$159.00', stock: 32, reorder: 20 },
    { sku: 'SKU-0006', product: 'Laptop Stand', category: 'Accessories', price: '$29.50', stock: 150, reorder: 60 },
    { sku: 'SKU-0007', product: 'Webcam 1080p', category: 'Cameras', price: '$49.00', stock: 75, reorder: 40 },
    { sku: 'SKU-0008', product: 'Portable SSD 1TB', category: 'Storage', price: '$119.99', stock: 26, reorder: 15 },
    { sku: 'SKU-0009', product: 'Gaming Chair', category: 'Furniture', price: '$199.00', stock: 12, reorder: 8 },
    { sku: 'SKU-0010', product: 'Ergonomic Desk', category: 'Furniture', price: '$349.00', stock: 9, reorder: 5 },
    { sku: 'SKU-0011', product: 'Laser Printer', category: 'Printers', price: '$229.99', stock: 14, reorder: 10 },
    { sku: 'SKU-0012', product: 'Ink Cartridge Pack', category: 'Printers', price: '$59.99', stock: 280, reorder: 100 },
    { sku: 'SKU-0013', product: 'Smartphone Stand', category: 'Accessories', price: '$14.99', stock: 500, reorder: 200 },
    { sku: 'SKU-0014', product: 'Bluetooth Speaker', category: 'Audio', price: '$69.00', stock: 66, reorder: 30 },
    { sku: 'SKU-0015', product: 'USB-C Cable 2m', category: 'Cables', price: '$9.99', stock: 620, reorder: 250 },
    { sku: 'SKU-0016', product: 'HDMI Cable 1.5m', category: 'Cables', price: '$7.49', stock: 740, reorder: 300 },
    { sku: 'SKU-0017', product: 'Laptop Sleeve 15"', category: 'Bags', price: '$25.00', stock: 210, reorder: 80 },
    { sku: 'SKU-0018', product: 'Wireless Charger', category: 'Power', price: '$29.99', stock: 95, reorder: 40 },
    { sku: 'SKU-0019', product: 'Surge Protector', category: 'Power', price: '$19.49', stock: 134, reorder: 60 },
    { sku: 'SKU-0020', product: 'Desk Lamp LED', category: 'Lighting', price: '$34.99', stock: 58, reorder: 25 },
    { sku: 'SKU-0021', product: 'Action Camera 4K', category: 'Cameras', price: '$249.00', stock: 22, reorder: 10 },
    { sku: 'SKU-0022', product: 'Tripod Stand', category: 'Cameras', price: '$39.00', stock: 88, reorder: 35 },
    { sku: 'SKU-0023', product: 'Graphic Tablet', category: 'Input', price: '$179.00', stock: 17, reorder: 10 },
    { sku: 'SKU-0024', product: 'Office Chair Mat', category: 'Furniture', price: '$49.99', stock: 41, reorder: 20 },
    { sku: 'SKU-0025', product: 'Portable Projector', category: 'Displays', price: '$299.00', stock: 13, reorder: 8 }
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
      <Header navigateTo={navigateTo} />
      
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
          <Card title="Active" subtitle="1,234" />
          <Card title="Inactive" subtitle="567" />
          <Card title="Pending" subtitle="89" />
          <Card title="Completed" subtitle="2,456" />
        </div>
      </section>

      {/* Table section - Full width */}
      <section style={{
        padding: '0 0 var(--space-8)', // No left/right padding, only bottom padding
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
