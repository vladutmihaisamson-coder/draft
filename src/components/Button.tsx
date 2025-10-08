import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import type { IconName } from './icons'
import { Icons } from './icons'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'link'
  | 'subtle'

export type ButtonSize = 'sm' | 'lg'

export type ButtonProps = PropsWithChildren<
  {
    variant?: ButtonVariant
    size?: ButtonSize
    outline?: boolean
    fullWidth?: boolean
    isLoading?: boolean
    className?: string
    icon?: IconName
    iconPosition?: 'left' | 'right'
  } & ButtonHTMLAttributes<HTMLButtonElement>
>

export default function Button({
  children,
  variant = 'primary',
  size,
  outline = false,
  fullWidth = false,
  isLoading = false,
  className,
  disabled,
  type = 'button',
  icon,
  iconPosition = 'left',
  ...rest
}: ButtonProps) {
  const base = 'btn'
  const variantClass = outline ? `btn-outline-${variant}` : `btn-${variant}`
  const sizeClass = size ? `btn-${size}` : undefined
  const widthClass = fullWidth ? 'btn-block' : undefined

  const classes = [base, variantClass, sizeClass, widthClass, className]
    .filter(Boolean)
    .join(' ')

  const renderContent = () => {
    if (isLoading) {
      return (
        <span className="btn-loading">
          <span className="spinner" aria-hidden="true" />
          <span>{children}</span>
        </span>
      )
    }

    if (icon) {
      const IconComponent = Icons[icon]
      const iconElement = (
        <span 
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            marginRight: iconPosition === 'left' ? 'var(--space-2)' : '0',
            marginLeft: iconPosition === 'right' ? 'var(--space-2)' : '0'
          }}
          aria-hidden="true"
        >
          <IconComponent 
            style={{ 
              width: '1em', 
              height: '1em'
            }} 
          />
        </span>
      )

      return (
        <>
          {iconPosition === 'left' && iconElement}
          {children}
          {iconPosition === 'right' && iconElement}
        </>
      )
    }

    return children
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {renderContent()}
    </button>
  )
}


