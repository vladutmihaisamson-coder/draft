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
      className={`widget ${className || ''}`}
      style={style}
      {...rest}
    >
      {/* Header */}
      <div className="medical-widget-header">
        <div>
          <h3 className="widget-title">
            {title}
          </h3>
          {location && (
            <p className="widget-location">
              {location}
            </p>
          )}
        </div>
        {status !== 'normal' && (
          <div 
            className={`medical-widget-status medical-widget-status--${status}`}
            style={{ background: getStatusColor(status) }}
          />
        )}
      </div>

      {/* Main Value */}
      <div className="medical-widget-main">
        <div 
          className="widget-value"
          style={{
            fontSize: 'var(--font-size-4xl)',
            color: trend === 'up' ? 'var(--medical-success)' : trend === 'down' ? 'var(--medical-error)' : 'var(--medical-01)',
            lineHeight: 1,
            marginBottom: 'var(--space-2)'
          }}
        >
          {value}
        </div>
        {subtitle && (
          <p className="widget-subtitle">
            {subtitle}
          </p>
        )}
      </div>

      {/* Trend and Description */}
      <div className="medical-widget-footer">
        {trend && trendValue && (
          <div 
            className="widget-trend"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-3)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              background: getTrendBackgroundColor(trend),
              border: `1px solid ${getTrendColor(trend)}20` // 20% opacity border
            }}
          >
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
          <p className="widget-description">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
