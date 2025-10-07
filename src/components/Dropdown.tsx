import { useId } from 'react'

export type DropdownItem = {
  key: string
  label: string
  disabled?: boolean
}

export type DropdownProps = {
  label: string
  items: DropdownItem[]
  onSelect?: (key: string) => void
  disabled?: boolean
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
  size?: 'sm' | 'lg'
  align?: 'start' | 'end'
  fullWidth?: boolean
}

export default function Dropdown({
  label,
  items,
  onSelect,
  disabled = false,
  variant = 'primary',
  size,
  align = 'start',
  fullWidth = false,
}: DropdownProps) {
  const id = useId()

  const buttonClass = [
    'btn',
    `btn-${variant}`,
    'dropdown-toggle',
    size ? `btn-${size}` : undefined,
    fullWidth ? 'w-100' : undefined,
  ]
    .filter(Boolean)
    .join(' ')

  const menuClass = ['dropdown-menu', align === 'end' ? 'dropdown-menu-end' : undefined]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="dropdown">
      <button
        className={buttonClass}
        type="button"
        id={id}
        data-bs-toggle="dropdown"
        aria-expanded="false"
        disabled={disabled}
      >
        {label}
      </button>
      <ul className={menuClass} aria-labelledby={id}>
        {items.map((item) => (
          <li key={item.key}>
            <button
              className="dropdown-item"
              type="button"
              disabled={item.disabled}
              onClick={() => {
                if (item.disabled) return
                onSelect?.(item.key)
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}


