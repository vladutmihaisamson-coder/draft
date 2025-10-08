import { useState } from 'react'

export interface TabItem {
  key: string
  label: string
  disabled?: boolean
  content?: React.ReactNode
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
        background: 'var(--medical-10)',
        border: `1px solid var(--medical-07)`,
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
                border: `1px solid ${isActive ? 'var(--medical-primary)' : 'transparent'}`,
                background: isActive ? 'var(--medical-08)' : 'transparent',
                color: item.disabled ? 'var(--medical-05)' : 'var(--medical-01)',
                padding: 'var(--space-3) var(--space-4)',
                borderRadius: 'var(--radius-small)',
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-base)',
                fontWeight: isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)',
                cursor: item.disabled ? 'not-allowed' : 'pointer',
                transition: 'all var(--transition-normal)',
                whiteSpace: 'nowrap',
                minHeight: 'var(--height-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                if (item.disabled || isActive) return
                e.currentTarget.style.background = 'var(--medical-08)'
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
        background: 'var(--medical-07)'
      }} />

      {/* Tab Content */}
      {activeKey && (
        <div style={{
          padding: 'var(--space-6)',
          background: 'var(--medical-10)',
          border: '1px solid var(--medical-07)',
          borderRadius: 'var(--radius-medium)',
          marginTop: 'var(--space-4)'
        }}>
          {items.find(item => item.key === activeKey)?.content}
        </div>
      )}
    </div>
  )
}

export default Tabs


