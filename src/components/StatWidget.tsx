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
      className="widget"
      style={style}
      {...rest}
    >
      {/* Header */}
      <div className="stat-widget-header">
        <h3 className="widget-title">
          {title}
        </h3>
        <div className="stat-widget-value-container">
          <span 
            className="widget-value"
            style={{
              color: trend ? getTrendColor(trend) : 'var(--medical-01)',
            }}
          >
            {value}
          </span>
          {trendValue && (
            <span 
              className="widget-trend"
              style={{
                color: getTrendColor(trend),
              }}
            >
              {trendValue}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="widget-subtitle">
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
