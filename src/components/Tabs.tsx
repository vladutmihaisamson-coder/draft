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
    <div className={`tabs ${className}`}>
      <div role="tablist" aria-label="Tabs" className="tabs-list">
        {items.map((item) => {
          const isActive = item.key === activeKey
          return (
            <button
              key={item.key}
              role="tab"
              aria-selected={isActive}
              aria-disabled={item.disabled || false}
              onClick={() => handleSelect(item.key, item.disabled)}
              className={`tabs-trigger ${isActive ? 'tabs-trigger--active' : ''} ${item.disabled ? 'tabs-trigger--disabled' : ''}`}
              data-state={isActive ? 'active' : 'inactive'}
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
        <div className="tabs-content">
          {items.find(item => item.key === activeKey)?.content}
        </div>
      )}
    </div>
  )
}

export default Tabs


