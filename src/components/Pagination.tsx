interface PaginationProps {
  currentPage: number
  totalPages: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  onItemsPerPageChange: (itemsPerPage: number) => void
  startIndex: number
  endIndex: number
}

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
  startIndex,
  endIndex
}: PaginationProps) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--shade-10)',
      border: '1px solid var(--shade-07)',
      borderTop: 'none',
      borderRadius: '0 0 var(--radius-medium) var(--radius-medium)',
      fontFamily: 'var(--font-family-primary)',
      fontSize: 'var(--font-size-sm)',
      color: 'var(--shade-02)'
    }}>
      {/* Items per page selector */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)'
      }}>
        <span>Show</span>
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          style={{
            padding: 'var(--space-1) var(--space-2)',
            border: '1px solid var(--shade-07)',
            borderRadius: 'var(--radius-small)',
            background: 'var(--shade-10)',
            color: 'var(--shade-01)',
            fontSize: 'var(--font-size-sm)',
            fontFamily: 'var(--font-family-primary)',
            cursor: 'pointer'
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <span>entries</span>
      </div>

      {/* Pagination info and controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)'
      }}>
        {/* Page info */}
        <span>
          Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of {totalItems} entries
        </span>

        {/* Pagination controls */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-1)'
        }}>
          <button
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            style={{
              padding: 'var(--space-1) var(--space-2)',
              border: '1px solid var(--shade-07)',
              borderRadius: 'var(--radius-small)',
              background: currentPage === 1 ? 'var(--shade-08)' : 'var(--shade-10)',
              color: currentPage === 1 ? 'var(--shade-04)' : 'var(--shade-01)',
              fontSize: 'var(--font-size-sm)',
              fontFamily: 'var(--font-family-primary)',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            First
          </button>
          
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: 'var(--space-1) var(--space-2)',
              border: '1px solid var(--shade-07)',
              borderRadius: 'var(--radius-small)',
              background: currentPage === 1 ? 'var(--shade-08)' : 'var(--shade-10)',
              color: currentPage === 1 ? 'var(--shade-04)' : 'var(--shade-01)',
              fontSize: 'var(--font-size-sm)',
              fontFamily: 'var(--font-family-primary)',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Previous
          </button>

          {/* Page numbers */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                style={{
                  padding: 'var(--space-1) var(--space-2)',
                  border: '1px solid var(--shade-07)',
                  borderRadius: 'var(--radius-small)',
                  background: currentPage === pageNum ? 'var(--primary-01)' : 'var(--shade-10)',
                  color: currentPage === pageNum ? 'var(--shade-10)' : 'var(--shade-01)',
                  fontSize: 'var(--font-size-sm)',
                  fontFamily: 'var(--font-family-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {pageNum}
              </button>
            )
          })}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: 'var(--space-1) var(--space-2)',
              border: '1px solid var(--shade-07)',
              borderRadius: 'var(--radius-small)',
              background: currentPage === totalPages ? 'var(--shade-08)' : 'var(--shade-10)',
              color: currentPage === totalPages ? 'var(--shade-04)' : 'var(--shade-01)',
              fontSize: 'var(--font-size-sm)',
              fontFamily: 'var(--font-family-primary)',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Next
          </button>
          
          <button
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            style={{
              padding: 'var(--space-1) var(--space-2)',
              border: '1px solid var(--shade-07)',
              borderRadius: 'var(--radius-small)',
              background: currentPage === totalPages ? 'var(--shade-08)' : 'var(--shade-10)',
              color: currentPage === totalPages ? 'var(--shade-04)' : 'var(--shade-01)',
              fontSize: 'var(--font-size-sm)',
              fontFamily: 'var(--font-family-primary)',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
