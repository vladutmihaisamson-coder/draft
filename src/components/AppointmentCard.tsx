import type { HTMLAttributes } from 'react'

interface AppointmentCardProps extends HTMLAttributes<HTMLDivElement> {
  appointmentId: string
  patient: string
  doctor: string
  time: string
  type: string
  status: 'Confirmed' | 'Scheduled' | 'Completed' | 'Cancelled' | 'Pending'
  priority?: 'Low' | 'Medium' | 'High' | 'Critical'
  notes?: string
}

const AppointmentCard = ({ 
  appointmentId, 
  patient, 
  doctor, 
  time, 
  type, 
  status, 
  priority = 'Medium',
  notes,
  style,
  ...rest 
}: AppointmentCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return 'var(--medical-success)'
      case 'Scheduled':
        return 'var(--medical-info)'
      case 'Completed':
        return 'var(--medical-05)'
      case 'Cancelled':
        return 'var(--medical-error)'
      case 'Pending':
        return 'var(--medical-warning)'
      default:
        return 'var(--medical-05)'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Confirmed':
        return '✓'
      case 'Scheduled':
        return '📅'
      case 'Completed':
        return '✅'
      case 'Cancelled':
        return '❌'
      case 'Pending':
        return '⏳'
      default:
        return '📋'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'var(--medical-error)'
      case 'High':
        return 'var(--medical-warning)'
      case 'Medium':
        return 'var(--medical-info)'
      case 'Low':
        return 'var(--medical-success)'
      default:
        return 'var(--medical-info)'
    }
  }

  return (
    <div
      className="appointment-card"
      style={style}
      {...rest}
    >
      {/* Header with ID and Priority */}
      <div className="appointment-card-header">
        <span className="appointment-card-id">
          {appointmentId}
        </span>
        <span 
          className={`appointment-card-priority appointment-card-priority--${priority.toLowerCase()}`}
          style={{ background: getPriorityColor(priority) }}
        >
          {priority}
        </span>
      </div>

      {/* Patient and Doctor */}
      <div className="appointment-card-content">
        <h3 className="appointment-card-patient">
          {patient}
        </h3>
        <p className="appointment-card-doctor">
          with {doctor}
        </p>
      </div>

      {/* Time and Type */}
      <div className="appointment-card-details">
        <div className="appointment-card-detail">
          <p className="appointment-card-detail-label">Time</p>
          <p className="appointment-card-detail-value">{time}</p>
        </div>
        <div className="appointment-card-detail">
          <p className="appointment-card-detail-label">Type</p>
          <p className="appointment-card-detail-value">{type}</p>
        </div>
      </div>

      {/* Notes */}
      {notes && (
        <div style={{
          marginBottom: 'var(--space-4)',
          padding: 'var(--space-3)',
          background: 'var(--medical-08)',
          borderRadius: 'var(--radius-small)',
          border: '1px solid var(--medical-06)'
        }}>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--medical-02)',
            margin: 0,
            fontStyle: 'italic'
          }}>
            {notes}
          </p>
        </div>
      )}

      {/* Status Badge */}
      <div className="appointment-card-footer">
        <span style={{
          padding: status === 'Confirmed' ? '0' : 'var(--space-2) var(--space-3)',
          borderRadius: status === 'Confirmed' ? '0' : 'var(--radius-small)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          background: status === 'Confirmed' ? 'transparent' : getStatusColor(status),
          color: status === 'Confirmed' ? 'var(--medical-success)' : 'var(--medical-10)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-1)'
        }}>
          <span style={{ fontSize: 'var(--font-size-base)' }}>
            {getStatusIcon(status)}
          </span>
          {status}
        </span>
      </div>
    </div>
  )
}

export default AppointmentCard
