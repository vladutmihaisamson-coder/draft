import { useState, useRef, useEffect } from 'react'
import { Icons } from './icons'

interface DropdownItem {
  label: string
  icon?: string
  onClick: () => void
}

interface DropdownProps {
  label: string
  items: DropdownItem[]
  className?: string
  style?: React.CSSProperties
}

const Dropdown = ({ label, items, className, style }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div 
      ref={dropdownRef}
      style={{ 
        position: 'relative',
        display: 'inline-block',
        ...style 
      }}
      className={className}
    >
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          color: 'var(--medical-02)',
          textDecoration: 'none',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          padding: 'var(--space-2) var(--space-3)',
          borderRadius: 'var(--radius-small)',
          transition: 'all var(--transition-normal)',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'var(--medical-primary)'
          e.currentTarget.style.background = 'var(--medical-08)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'var(--medical-02)'
          e.currentTarget.style.background = 'transparent'
        }}
      >
        {label}
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
              fontSize: 'var(--font-size-sm)'
            }} 
          />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            minWidth: '200px',
            background: 'var(--medical-10)',
            border: '1px solid var(--medical-07)',
            borderRadius: 'var(--radius-medium)',
            boxShadow: 'var(--glass-shadow)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            marginTop: 'var(--space-1)',
            overflow: 'hidden'
          }}
        >
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick()
                setIsOpen(false)
              }}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-3) var(--space-4)',
                color: 'var(--medical-01)',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-medium)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-normal)',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--medical-08)'
                e.currentTarget.style.color = 'var(--medical-primary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--medical-01)'
              }}
            >
              {item.icon && (
                <span style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontSize: 'var(--font-size-base)'
                }}>
                  {item.icon}
                </span>
              )}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown