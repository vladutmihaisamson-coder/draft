import Header from '../components/Header'

interface ServicesProps {
  navigateTo?: (page: string) => void
}

const Services = ({ navigateTo }: ServicesProps) => {
  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--shade-08)',
      margin: 0,
      padding: 0
    }}>
      <Header navigateTo={navigateTo} />
      
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
            color: 'var(--shade-01)',
            marginBottom: 'var(--space-6)'
          }}>
            Services
          </h1>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--shade-02)',
            lineHeight: 'var(--line-height-normal)'
          }}>
            Nothing here yet.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Services
