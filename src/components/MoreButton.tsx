import type { ButtonHTMLAttributes } from 'react'

type MoreButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const MoreButton = ({ style, ...rest }: MoreButtonProps) => {
  return (
    <button
      aria-label="More actions"
      className="btn btn-subtle"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        padding: 0,
        borderRadius: 'var(--radius-xs)',
        border: `1px solid var(--shade-07)`,
        background: 'var(--shade-10)',
        color: 'var(--shade-02)',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
        ...style
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--shade-09)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--shade-10)'
      }}
      {...rest}
    >
      <span style={{
        display: 'inline-block',
        width: 16,
        height: 16,
        position: 'relative'
      }}>
        {/* simple vertical dots */}
        <span style={{
          position: 'absolute',
          top: 2,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'var(--shade-03)'
        }} />
        <span style={{
          position: 'absolute',
          top: 6,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'var(--shade-03)'
        }} />
        <span style={{
          position: 'absolute',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'var(--shade-03)'
        }} />
      </span>
    </button>
  )
}

export default MoreButton


