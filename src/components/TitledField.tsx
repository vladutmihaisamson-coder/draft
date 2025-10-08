import React from 'react'

interface TitledFieldProps {
  label: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const TitledField = ({ 
  label, 
  children, 
  className = '', 
  style = {} 
}: TitledFieldProps) => {
  return (
    <div className={`field ${className}`} style={style}>
      {/* Label */}
      <label className="field-label">
        {label}
      </label>

      {/* Input Field */}
      {children}
    </div>
  )
}

export default TitledField
