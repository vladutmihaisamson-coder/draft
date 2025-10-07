import { useState } from 'react'

export interface TabItem {
  key: string
  label: string
  disabled?: boolean
}

interface TabsProps {
  items: TabItem[]
  initialActiveKey?: string
  onChange?: (key: string) => void
  className?: string
}

const Tabs = ({ items, initialActiveKey, onChange, className = '' }: TabsProps) => {
  const defaultKey = initialActiveKey ?? items[0]?.key
  const [activeKey, setActiveKey] = useState<string | undefined>(defaultKey)

  const handleSelect = (key: string, disabled?: boolean) => {
    if (disabled) return
    setActiveKey(key)
    onChange?.(key)
  }

  return (
    <div className={className} style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }}>
      <div role="tablist" aria-label="Tabs" style={{
        display: 'flex',
        gap: 'var(--space-2)',
        background: 'var(--shade-10)',
        border: `1px solid var(--shade-07)`,
        borderRadius: 'var(--radius-medium)',
        padding: 'var(--space-1)',
        overflowX: 'auto'
      }}>
        {items.map((item) => {
          const isActive = item.key === activeKey
          return (
            <button
              key={item.key}
              role="tab"
              aria-selected={isActive}
              aria-disabled={item.disabled || false}
              onClick={() => handleSelect(item.key, item.disabled)}
              style={{
                border: `1px solid ${isActive ? 'var(--shade-06)' : 'transparent'}`,
                background: isActive ? 'var(--shade-09)' : 'transparent',
                color: item.disabled ? 'var(--shade-04)' : 'var(--shade-01)',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-small)',
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                cursor: item.disabled ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s ease, border-color 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                if (item.disabled || isActive) return
                e.currentTarget.style.background = 'var(--shade-09)'
              }}
              onMouseLeave={(e) => {
                if (item.disabled || isActive) return
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      {/* Underline indicator */}
      <div style={{
        height: 1,
        background: 'var(--shade-07)'
      }} />
    </div>
  )
}

export default Tabs


