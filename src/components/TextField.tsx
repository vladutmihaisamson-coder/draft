interface TextFieldProps {
  label?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  error?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: 'text' | 'email' | 'password' | 'number'
  className?: string
}

const TextField = ({
  label,
  placeholder,
  value = '',
  onChange,
  disabled = false,
  error,
  size = 'md',
  type = 'text',
  className = ''
}: TextFieldProps) => {

  return (
    <div className={`field ${className}`}>
      {/* Label */}
      {label && (
        <label className="field-label">
          {label}
        </label>
      )}

      {/* Input Field */}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`field-input field-input--${size} ${error ? 'field-input--error' : ''}`}
      />

      {/* Error Message */}
      {error && (
        <div className="field-error">
          {error}
        </div>
      )}
    </div>
  )
}

export default TextField
