import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

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
  ...rest
}: ButtonProps) {
  const base = 'btn'
  const variantClass = outline ? `btn-outline-${variant}` : `btn-${variant}`
  const sizeClass = size ? `btn-${size}` : undefined
  const widthClass = fullWidth ? 'btn-block' : undefined

  const classes = [base, variantClass, sizeClass, widthClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...rest}
    >
      {isLoading ? (
        <span className="btn-loading">
          <span className="spinner" aria-hidden="true" />
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  )
}


