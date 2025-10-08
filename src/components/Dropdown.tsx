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
      className={`dropdown ${className || ''}`}
      style={style}
    >
      {/* Dropdown Trigger */}
      <button
        className="dropdown-trigger"
        onClick={() => setIsOpen(!isOpen)}
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
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <button
              key={index}
              className="dropdown-item"
              onClick={() => {
                item.onClick()
                setIsOpen(false)
              }}
            >
              {item.icon && (
                <span className="dropdown-item-icon">
                  {item.icon}
                </span>
              )}
              <span className="dropdown-item-text">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown