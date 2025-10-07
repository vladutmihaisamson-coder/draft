interface CheckboxProps {
  id: string
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const Checkbox = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  size = 'md',
  className = ''
}: CheckboxProps) => {
  const getSizeClass = () => {
    switch (size) {
      case 'xs': return 'field-input--xs'
      case 'sm': return 'field-input--sm'
      case 'md': return 'field-input--md'
      case 'lg': return 'field-input--lg'
      case 'xl': return 'field-input--xl'
      default: return 'field-input--md'
    }
  }

  return (
    <div className={`field-checkbox ${disabled ? 'field-checkbox--disabled' : ''} ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={`field-checkbox-input ${getSizeClass()}`}
      />
      <label 
        htmlFor={id}
        className="field-checkbox-label"
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
