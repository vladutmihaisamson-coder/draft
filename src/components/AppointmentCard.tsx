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
      style={{
        background: 'var(--medical-10)',
        border: '1px solid var(--medical-07)',
        borderRadius: 'var(--radius-medium)',
        padding: 'var(--space-5)',
        transition: 'all var(--transition-normal)',
        cursor: 'pointer',
        position: 'relative',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--medical-primary)'
        e.currentTarget.style.boxShadow = 'var(--glass-shadow)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--medical-07)'
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      {...rest}
    >
      {/* Header with ID and Priority */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'var(--space-3)'
      }}>
        <span style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-medium)',
          color: 'var(--medical-02)'
        }}>
          {appointmentId}
        </span>
        <span style={{
          padding: 'var(--space-1) var(--space-2)',
          borderRadius: 'var(--radius-xs)',
          fontSize: 'var(--font-size-xs)',
          fontWeight: 'var(--font-weight-medium)',
          background: getPriorityColor(priority),
          color: 'var(--medical-10)'
        }}>
          {priority}
        </span>
      </div>

      {/* Patient and Doctor */}
      <div style={{
        marginBottom: 'var(--space-4)'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-lg)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--medical-01)',
          margin: '0 0 var(--space-1) 0'
        }}>
          {patient}
        </h3>
        <p style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--medical-02)',
          margin: 0
        }}>
          with {doctor}
        </p>
      </div>

      {/* Time and Type */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 'var(--space-4)'
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--medical-01)',
            margin: '0 0 var(--space-1) 0'
          }}>
            {time}
          </p>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--medical-02)',
            margin: 0
          }}>
            {type}
          </p>
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
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
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
