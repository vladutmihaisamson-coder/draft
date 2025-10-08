import React, { useState, useRef, useEffect } from 'react'
import { Icons } from './icons'

interface SelectSmallProps {
  value: string | number
  onChange: (value: string | number) => void
  options: Array<{ value: string | number; label: string }>
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const SelectSmall = ({ 
  value, 
  onChange, 
  options, 
  disabled = false, 
  className = '', 
  style = {} 
}: SelectSmallProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom')
  const selectRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Calculate dropdown position based on available space
  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const spaceBelow = viewportHeight - triggerRect.bottom
      const spaceAbove = triggerRect.top
      
      // If there's not enough space below but more space above, show above
      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setDropdownPosition('top')
      } else {
        setDropdownPosition('bottom')
      }
    }
  }, [isOpen])

  const selectedOption = options.find(option => option.value === value)

  return (
    <div 
      ref={selectRef}
      className={`select-small ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: 'auto',
        ...style
      }}
    >
      {/* Custom trigger button */}
      <button
        ref={triggerRef}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        style={{
          height: 'var(--height-sm)',
          padding: '0.375rem 0.75rem',
          border: '1px solid var(--medical-06)',
          borderRadius: 'var(--radius-small)',
          background: 'linear-gradient(135deg, var(--medical-10) 0%, var(--medical-09) 100%)',
          color: 'var(--medical-01)',
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-family-primary)',
          fontWeight: 'var(--font-weight-medium)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'all var(--transition-normal)',
          opacity: disabled ? 0.6 : 1,
          width: 'auto',
          minWidth: 'fit-content',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-2)'
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = 'linear-gradient(135deg, var(--medical-09) 0%, var(--medical-08) 100%)'
            e.currentTarget.style.borderColor = 'var(--medical-primary)'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            e.currentTarget.style.background = 'linear-gradient(135deg, var(--medical-10) 0%, var(--medical-09) 100%)'
            e.currentTarget.style.borderColor = 'var(--medical-06)'
            e.currentTarget.style.transform = 'translateY(0)'
          }
        }}
        onFocus={(e) => {
          if (!disabled) {
            e.currentTarget.style.borderColor = 'var(--medical-primary)'
            e.currentTarget.style.boxShadow = 'var(--focus-ring)'
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'var(--medical-06)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <span>{selectedOption?.label || 'Select...'}</span>
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          transition: 'transform var(--transition-normal)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          <Icons.chevronDown 
            style={{ 
              width: '1em', 
              height: '1em',
              fontSize: 'var(--font-size-sm)',
              color: 'var(--medical-03)'
            }} 
          />
        </span>
      </button>

      {/* Custom dropdown menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          ...(dropdownPosition === 'top' 
            ? { bottom: '100%', marginBottom: 'var(--space-1)' }
            : { top: '100%', marginTop: 'var(--space-1)' }
          ),
          left: 0,
          right: 0,
          background: 'linear-gradient(135deg, var(--medical-10) 0%, var(--medical-09) 100%)',
          border: '1px solid var(--medical-06)',
          borderRadius: 'var(--radius-small)',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 1000,
          maxHeight: '200px',
          overflowY: 'auto',
          minWidth: '120px',
          maxWidth: '240px',
          width: 'max-content'
        }}>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              style={{
                width: '100%',
                padding: 'var(--space-2) var(--space-3)',
                border: 'none',
                background: value === option.value ? 'var(--medical-08)' : 'transparent',
                color: value === option.value ? 'var(--medical-01)' : 'var(--medical-02)',
                fontSize: 'var(--font-size-sm)',
                fontFamily: 'var(--font-family-primary)',
                fontWeight: value === option.value ? 'var(--font-weight-medium)' : 'var(--font-weight-normal)',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)',
                borderBottom: '1px solid var(--medical-07)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--medical-08)'
                e.currentTarget.style.color = 'var(--medical-01)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = value === option.value ? 'var(--medical-08)' : 'transparent'
                e.currentTarget.style.color = value === option.value ? 'var(--medical-01)' : 'var(--medical-02)'
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectSmall
