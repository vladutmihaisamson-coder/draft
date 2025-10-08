import Header from '../components/Header'
import Tabs, { type TabItem } from '../components/Tabs'
import { AppointmentCard } from '../components'

interface TabsPageProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
  isScrolled?: boolean
}

const TabsPage = ({ navigateTo, hasClerk = false, isScrolled = false }: TabsPageProps) => {
  // Mock appointment data with enhanced information
  const todayAppointments = [
    { id: 'APT-001', patient: 'John Smith', doctor: 'Dr. Sarah Chen', time: '09:00 AM', type: 'Consultation', status: 'Confirmed' as const, priority: 'High' as const, notes: 'Follow-up on chest pain symptoms' },
    { id: 'APT-002', patient: 'Emily Davis', doctor: 'Dr. Michael Rodriguez', time: '10:30 AM', type: 'Follow-up', status: 'Confirmed' as const, priority: 'Medium' as const, notes: 'Post-surgery recovery check' },
    { id: 'APT-003', patient: 'Robert Wilson', doctor: 'Dr. Lisa Thompson', time: '02:00 PM', type: 'Check-up', status: 'Confirmed' as const, priority: 'Low' as const, notes: 'Annual physical examination' },
    { id: 'APT-004', patient: 'Maria Garcia', doctor: 'Dr. James Park', time: '03:30 PM', type: 'Consultation', status: 'Pending' as const, priority: 'Critical' as const, notes: 'Emergency consultation for severe symptoms' }
  ]

  const upcomingAppointments = [
    { id: 'APT-005', patient: 'David Brown', doctor: 'Dr. Emily Watson', time: 'Tomorrow 09:00 AM', type: 'Consultation', status: 'Scheduled' as const, priority: 'High' as const, notes: 'Cardiology consultation' },
    { id: 'APT-006', patient: 'Sarah Johnson', doctor: 'Dr. Robert Kim', time: 'Tomorrow 11:00 AM', type: 'Follow-up', status: 'Scheduled' as const, priority: 'Medium' as const, notes: 'Lab results review' },
    { id: 'APT-007', patient: 'Michael Taylor', doctor: 'Dr. Maria Garcia', time: 'Next Week Mon 10:00 AM', type: 'Check-up', status: 'Scheduled' as const, priority: 'Low' as const, notes: 'Routine dermatology check' },
    { id: 'APT-008', patient: 'Lisa Anderson', doctor: 'Dr. David Wilson', time: 'Next Week Tue 02:00 PM', type: 'Consultation', status: 'Scheduled' as const, priority: 'High' as const, notes: 'Mental health assessment' }
  ]

  const completedAppointments = [
    { id: 'APT-009', patient: 'Jennifer Lee', doctor: 'Dr. Christopher Brown', time: 'Yesterday 09:00 AM', type: 'Consultation', status: 'Completed' as const, priority: 'Medium' as const, notes: 'Treatment plan established' },
    { id: 'APT-010', patient: 'Kevin Martinez', doctor: 'Dr. Amanda Taylor', time: 'Yesterday 11:00 AM', type: 'Follow-up', status: 'Completed' as const, priority: 'Low' as const, notes: 'Recovery progressing well' },
    { id: 'APT-011', patient: 'Anna White', doctor: 'Dr. Kevin Martinez', time: 'Last Week Fri 10:00 AM', type: 'Check-up', status: 'Completed' as const, priority: 'Medium' as const, notes: 'All tests completed successfully' }
  ]

  const items: TabItem[] = [
    { 
      key: 'today', 
      label: 'Today\'s Appointments',
      content: (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: 'var(--space-3)',
          background: 'transparent'
        }}>
          {todayAppointments.map((apt) => (
            <AppointmentCard
              key={apt.id}
              appointmentId={apt.id}
              patient={apt.patient}
              doctor={apt.doctor}
              time={apt.time}
              type={apt.type}
              status={apt.status}
              priority={apt.priority}
              notes={apt.notes}
            />
          ))}
        </div>
      )
    },
    { 
      key: 'upcoming', 
      label: 'Upcoming',
      content: (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: 'var(--space-3)',
          background: 'transparent'
        }}>
          {upcomingAppointments.map((apt) => (
            <AppointmentCard
              key={apt.id}
              appointmentId={apt.id}
              patient={apt.patient}
              doctor={apt.doctor}
              time={apt.time}
              type={apt.type}
              status={apt.status}
              priority={apt.priority}
              notes={apt.notes}
            />
          ))}
        </div>
      )
    },
    { 
      key: 'completed', 
      label: 'Completed',
      content: (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: 'var(--space-3)',
          background: 'transparent'
        }}>
          {completedAppointments.map((apt) => (
            <AppointmentCard
              key={apt.id}
              appointmentId={apt.id}
              patient={apt.patient}
              doctor={apt.doctor}
              time={apt.time}
              type={apt.type}
              status={apt.status}
              priority={apt.priority}
              notes={apt.notes}
            />
          ))}
        </div>
      )
    },
    { 
      key: 'cancelled', 
      label: 'Cancelled', 
      disabled: true,
      content: (
        <div>
          <h3 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-4)'
          }}>
            Cancelled Appointments
          </h3>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--medical-02)',
            lineHeight: 'var(--line-height-normal)'
          }}>
            No cancelled appointments to display.
          </p>
        </div>
      )
    }
  ]

  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--medical-08)',
      margin: 0,
      padding: 0
    }}>
      <Header navigateTo={navigateTo} hasClerk={hasClerk} isScrolled={isScrolled} />
      
      {/* Content section */}
      <section style={{
        padding: 'var(--space-8)', // 32px padding
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 'var(--max-width)', // 960px max width
          width: '100%'
        }}>
          <h1 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-6)'
          }}>
            Appointment Management
          </h1>
        
        <p style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--medical-02)',
          lineHeight: 'var(--line-height-normal)',
          marginBottom: 'var(--space-8)',
          maxWidth: '600px'
        }}>
          Manage patient appointments, schedule consultations, and track medical visit history with our comprehensive appointment system.
        </p>
        <Tabs items={items} />
        </div>
      </section>
    </div>
  )
}

export default TabsPage


