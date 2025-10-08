import React from 'react'
import Button from './Button'

interface PaginationButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
  isActive?: boolean
  className?: string
  style?: React.CSSProperties
}

const PaginationButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  isActive = false,
  className = '',
  style = {}
}: PaginationButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`pagination-btn ${className}`}
      style={{
        height: 'var(--height-sm)',
        padding: '0.375rem 0.75rem',
        border: '1px solid var(--medical-06)',
        borderRadius: 'var(--radius-small)',
        background: isActive 
          ? 'linear-gradient(135deg, var(--medical-primary) 0%, #3B82F6 100%)'
          : disabled 
            ? 'var(--medical-07)' 
            : 'linear-gradient(135deg, var(--medical-10) 0%, var(--medical-09) 100%)',
        color: isActive 
          ? 'var(--medical-10)' 
          : disabled 
            ? 'var(--medical-04)' 
            : 'var(--medical-01)',
        fontSize: 'var(--font-size-sm)',
        fontFamily: 'var(--font-family-primary)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all var(--transition-normal)',
        opacity: disabled ? 0.6 : 1,
        ...style
      }}
      onMouseEnter={(e) => {
        if (!disabled && !isActive) {
          e.currentTarget.style.background = 'linear-gradient(135deg, var(--medical-09) 0%, var(--medical-08) 100%)'
          e.currentTarget.style.borderColor = 'var(--medical-primary)'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !isActive) {
          e.currentTarget.style.background = 'linear-gradient(135deg, var(--medical-10) 0%, var(--medical-09) 100%)'
          e.currentTarget.style.borderColor = 'var(--medical-06)'
          e.currentTarget.style.transform = 'translateY(0)'
        }
      }}
    >
      {children}
    </button>
  )
}

export default PaginationButton
