import React from 'react'

interface SelectProps {
  label?: string
  value: string | number
  onChange: (value: string | number) => void
  options: Array<{ value: string | number; label: string }>
  disabled?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  style?: React.CSSProperties
}

const Select = ({ 
  label,
  value, 
  onChange, 
  options, 
  disabled = false,
  size = 'md',
  className = '', 
  style = {} 
}: SelectProps) => {
  // If label is provided, render as a complete field
  if (label) {
    return (
      <div className={`field ${className}`}>
        {/* Label */}
        <label className="field-label">
          {label}
        </label>

        {/* Select Field */}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`field-select field-select--${size}`}
          style={{
            ...style
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
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }

  // If no label, render just the select element (for use inside TitledField)
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className={`field-select field-select--${size} ${className}`}
      style={{
        ...style
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
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Select
