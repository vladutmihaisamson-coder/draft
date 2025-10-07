import Header from '../components/Header'

interface AboutProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const About = ({ navigateTo, hasClerk = false }: AboutProps) => {
  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--shade-08)',
      margin: 0,
      padding: 0
    }}>
      <Header navigateTo={navigateTo} hasClerk={hasClerk} />
      
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
            About
          </h1>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--shade-02)',
            lineHeight: 'var(--line-height-normal)',
            maxWidth: '600px',
            textAlign: 'left'
          }}>
            🎨 Built by designers, powered by AI! This app was crafted with minimal dev support and features global styles that are super easy to tweak 💡.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
