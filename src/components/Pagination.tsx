import React from 'react'
import SelectSmall from './SelectSmall'
import PaginationButton from './PaginationButton'

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
      background: 'var(--medical-10)',
      borderTop: 'none',
      borderRadius: '0 0 var(--radius-medium) var(--radius-medium)',
      fontFamily: 'var(--font-family-primary)',
      fontSize: 'var(--font-size-sm)',
      color: 'var(--medical-02)'
    }}>
      {/* Items per page selector */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)'
      }}>
        <span>Show</span>
        <SelectSmall
          value={itemsPerPage}
          onChange={(value) => onItemsPerPageChange(Number(value))}
          options={[
            { value: 5, label: '5' },
            { value: 10, label: '10' },
            { value: 15, label: '15' },
            { value: 25, label: '25' },
            { value: 50, label: '50' }
          ]}
        />
        <span>entries</span>
      </div>

      {/* Pagination info and controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)'
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
          <PaginationButton
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
          >
            First
          </PaginationButton>
          
          <PaginationButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>

          {/* Page numbers */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = Math.max(1, Math.min(totalPages - 4, currentPage - 2)) + i
            const isActive = currentPage === pageNum
            return (
              <PaginationButton
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                isActive={isActive}
              >
                {pageNum}
              </PaginationButton>
            )
          })}

          <PaginationButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
          
          <PaginationButton
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last
          </PaginationButton>
        </div>
      </div>
    </div>
  )
}

export default Pagination
