import type { HTMLAttributes } from 'react'

interface MetricWidgetProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  primaryValue: string
  secondaryValue?: string
  description?: string
  location?: string
  timeRange?: string
  status?: 'normal' | 'warning' | 'critical'
  metrics?: Array<{
    label: string
    value: string
    color?: string
  }>
}

const MetricWidget = ({ 
  title, 
  primaryValue, 
  secondaryValue, 
  description, 
  location,
  timeRange,
  status = 'normal',
  metrics,
  style,
  ...rest 
}: MetricWidgetProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'warning':
        return 'var(--medical-warning)'
      case 'critical':
        return 'var(--medical-error)'
      default:
        return 'var(--medical-01)'
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'warning':
        return 'var(--medical-08)'
      case 'critical':
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
      {/* Time Range Badge */}
      {timeRange && (
        <div style={{
          position: 'absolute',
          top: 'var(--space-6)',
          right: 'var(--space-6)',
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--medical-02)'
        }}>
          {timeRange}
        </div>
      )}

      {/* Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-1)',
        marginTop: timeRange ? 'var(--space-4)' : 0,
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
            color: getStatusColor(status),
            lineHeight: 'var(--line-height-none)'
          }}>
            {primaryValue}
          </span>
          {secondaryValue && (
            <span style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--medical-02)',
              lineHeight: 'var(--line-height-tight)'
            }}>
              {secondaryValue}
            </span>
          )}
        </div>
      </div>

      {/* Metrics Grid */}
      {metrics && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
          gap: 'var(--space-2)',
          marginBottom: 'var(--space-4)'
        }}>
          {metrics.map((metric, index) => (
            <div key={index} style={{
              background: getStatusBgColor(status),
              border: status === 'normal' ? '1px solid var(--medical-07)' : 'none',
              borderRadius: 'var(--radius-small)',
              padding: 'var(--space-2)',
              textAlign: 'center'
            }}>
              <div style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-medium)',
                color: getStatusColor(status),
                marginBottom: 'var(--space-1)'
              }}>
                {metric.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-bold)',
                color: getStatusColor(status)
              }}>
                {metric.value}
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

export default MetricWidget
