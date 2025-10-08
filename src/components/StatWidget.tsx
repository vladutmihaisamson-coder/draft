import type { HTMLAttributes } from 'react'

interface StatWidgetProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  value: string
  subtitle?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  description?: string
  location?: string
  variant?: 'default' | 'chart' | 'table'
  chartData?: Array<{ label: string; value: number; color?: string }>
  tableData?: Array<{ id: string; value: string; status?: 'warning' | 'error' | 'normal' }>
}

const StatWidget = ({ 
  title, 
  value, 
  subtitle, 
  trend, 
  trendValue, 
  description, 
  location,
  variant = 'default',
  chartData,
  tableData,
  style,
  ...rest 
}: StatWidgetProps) => {
  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case 'up':
        return 'var(--medical-success)'
      case 'down':
        return 'var(--medical-error)'
      default:
        return 'var(--medical-05)'
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'warning':
        return 'var(--medical-warning)'
      case 'error':
        return 'var(--medical-error)'
      default:
        return 'var(--medical-05)'
    }
  }

  const getStatusBgColor = (status?: string) => {
    switch (status) {
      case 'warning':
        return 'var(--medical-08)'
      case 'error':
        return 'var(--medical-09)'
      default:
        return 'var(--medical-10)'
    }
  }

  return (
    <div
      style={{
        background: 'var(--medical-10)',
        border: '1px solid var(--medical-07)',
        borderRadius: 'var(--radius-medium)',
        padding: 'var(--space-6)',
        minHeight: '228px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        ...style
      }}
      {...rest}
    >
      {/* Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-1)',
        marginBottom: 'var(--space-4)'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--medical-01)',
          margin: 0,
          lineHeight: 'var(--line-height-tight)'
        }}>
          {title}
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 'var(--space-2)'
        }}>
          <span style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: trend ? getTrendColor(trend) : 'var(--medical-01)',
            lineHeight: 'var(--line-height-none)'
          }}>
            {value}
          </span>
          {trendValue && (
            <span style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: getTrendColor(trend),
              lineHeight: 'var(--line-height-tight)'
            }}>
              {trendValue}
            </span>
          )}
        </div>
        {subtitle && (
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--medical-02)',
            margin: 0
          }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Chart Variant */}
      {variant === 'chart' && chartData && (
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'end',
          gap: 'var(--space-3)',
          marginBottom: 'var(--space-4)'
        }}>
          {chartData.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-1)',
              flex: 1
            }}>
              <div style={{
                width: '12px',
                height: `${Math.max(20, (item.value / Math.max(...chartData.map(d => d.value))) * 80)}px`,
                background: item.color || 'var(--medical-primary)',
                borderRadius: 'var(--radius-small)',
                boxShadow: 'var(--shadow-xs)'
              }} />
              <span style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-medium)',
                color: 'var(--medical-02)'
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Table Variant */}
      {variant === 'table' && tableData && (
        <div style={{
          display: 'flex',
          gap: 'var(--space-2)',
          marginBottom: 'var(--space-4)'
        }}>
          {tableData.map((item, index) => (
            <div key={index} style={{
              flex: 1,
              background: getStatusBgColor(item.status),
              border: item.status ? 'none' : '1px solid var(--medical-07)',
              borderRadius: 'var(--radius-small)',
              padding: 'var(--space-2)',
              textAlign: 'center'
            }}>
              <div style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: getStatusColor(item.status),
                marginBottom: 'var(--space-1)'
              }}>
                {item.id}
              </div>
              <div style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-bold)',
                color: getStatusColor(item.status)
              }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-1)'
      }}>
        {description && (
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--medical-01)',
            margin: 0
          }}>
            {description}
          </p>
        )}
        {location && (
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--medical-02)',
            margin: 0
          }}>
            {location}
          </p>
        )}
      </div>
    </div>
  )
}

export default StatWidget
