interface CardProps {
  title: string
  subtitle: string
}

const Card = ({ title, subtitle }: CardProps) => {
  return (
    <div style={{
      background: 'var(--shade-10)',
      padding: 'var(--space-6)', // 24px
      borderRadius: 'var(--radius-medium)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)', // 8px gap between elements
      boxShadow: 'var(--shadow-sm)',
      border: '1px solid var(--shade-07)',
      transition: 'all var(--transition-normal)'
    }}>
      {/* Title using body token */}
      <p style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--font-size-base)',
        fontWeight: 'var(--font-weight-normal)',
        lineHeight: 'var(--line-height-normal)',
        color: 'var(--shade-01)',
        margin: 0,
        textAlign: 'left'
      }}>
        {title}
      </p>

      {/* H4 token below */}
      <h4 style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--font-size-lg)',
        fontWeight: 'var(--font-weight-semibold)',
        lineHeight: 'var(--line-height-tight)',
        color: 'var(--shade-01)',
        margin: 0,
        textAlign: 'left'
      }}>
        {subtitle}
      </h4>
    </div>
  )
}

export default Card