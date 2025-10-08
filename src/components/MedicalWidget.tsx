import React from 'react'

export interface MedicalWidgetProps {
  title: string
  value: string
  subtitle?: string
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  description?: string
  location?: string
  status?: 'normal' | 'warning' | 'critical' | 'success'
  className?: string
  style?: React.CSSProperties
}

export function MedicalWidget({
  title,
  value,
  subtitle,
  trend,
  trendValue,
  description,
  location,
  status = 'normal',
  className,
  style,
  ...rest
}: MedicalWidgetProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'var(--medical-error)'
      case 'warning': return 'var(--medical-warning)'
      case 'success': return 'var(--medical-success)'
      default: return 'var(--medical-primary)'
    }
  }

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up': return '↗'
      case 'down': return '↘'
      default: return '→'
    }
  }

  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case 'up': return 'var(--medical-success)'
      case 'down': return 'var(--medical-error)'
      default: return 'var(--medical-06)'
    }
  }

  const getTrendBackgroundColor = (trend?: string) => {
    switch (trend) {
      case 'up': return 'rgba(34, 197, 94, 0.1)' // Light green background for positive trends
      case 'down': return 'rgba(239, 68, 68, 0.1)' // Light red background for negative trends
      default: return 'rgba(107, 114, 128, 0.1)' // Light gray for neutral trends
    }
  }

  return (
    <div
      className={className}
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
        <div>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--medical-01)',
            margin: 0,
            marginBottom: 'var(--space-1)'
          }}>
            {title}
          </h3>
          {location && (
            <p style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--medical-05)',
              margin: 0
            }}>
              {location}
            </p>
          )}
        </div>
        {status !== 'normal' && (
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: getStatusColor(status),
            flexShrink: 0
          }} />
        )}
      </div>

      {/* Main Value */}
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{
          fontSize: 'var(--font-size-4xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: trend === 'up' ? 'var(--medical-success)' : trend === 'down' ? 'var(--medical-error)' : 'var(--medical-01)',
          lineHeight: 1,
          marginBottom: 'var(--space-2)'
        }}>
          {value}
        </div>
        {subtitle && (
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--medical-05)',
            margin: 0
          }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Trend and Description */}
      <div style={{ marginTop: 'auto' }}>
        {trend && trendValue && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-3)',
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-small)',
            background: getTrendBackgroundColor(trend),
            border: `1px solid ${getTrendColor(trend)}20` // 20% opacity border
          }}>
            <span style={{
              fontSize: 'var(--font-size-lg)',
              color: getTrendColor(trend)
            }}>
              {getTrendIcon(trend)}
            </span>
            <span style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: getTrendColor(trend)
            }}>
              {trendValue}
            </span>
          </div>
        )}
        {description && (
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--medical-04)',
            margin: 0,
            lineHeight: 1.4
          }}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
