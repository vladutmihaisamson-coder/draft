import Header from '../components/Header'

interface AboutProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
  isScrolled?: boolean
}

const About = ({ navigateTo, hasClerk = false, isScrolled = false }: AboutProps) => {
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
            About MedCare
          </h1>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-8)'
          }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--medical-01)',
                marginBottom: 'var(--space-4)'
              }}>
                Our Mission
              </h2>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: 'var(--space-4)'
              }}>
                MedCare is dedicated to providing comprehensive healthcare management solutions that streamline medical operations, enhance patient care, and support healthcare professionals in delivering exceptional medical services.
              </p>
            </div>
            
            <div>
              <h2 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--medical-01)',
                marginBottom: 'var(--space-4)'
              }}>
                Our Vision
              </h2>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: 'var(--space-4)'
              }}>
                To revolutionize healthcare management through innovative technology, ensuring seamless coordination between medical staff, patients, and healthcare systems for optimal health outcomes.
              </p>
            </div>
          </div>

          <div style={{
            background: 'var(--medical-10)',
            borderRadius: 'var(--radius-medium)',
            padding: 'var(--space-8)',
            border: '1px solid var(--medical-07)',
            marginBottom: 'var(--space-8)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--medical-01)',
              marginBottom: 'var(--space-6)'
            }}>
              Key Features
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-3)'
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--medical-01)',
                  marginBottom: 'var(--space-2)'
                }}>
                  🏥 Patient Management
                </h3>
                <p style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--medical-02)',
                  lineHeight: 'var(--line-height-normal)'
                }}>
                  Comprehensive patient records, medical history tracking, and appointment scheduling.
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--medical-01)',
                  marginBottom: 'var(--space-2)'
                }}>
                  👨‍⚕️ Staff Coordination
                </h3>
                <p style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--medical-02)',
                  lineHeight: 'var(--line-height-normal)'
                }}>
                  Medical staff management, role assignments, and communication tools.
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--medical-01)',
                  marginBottom: 'var(--space-2)'
                }}>
                  📊 Medical Analytics
                </h3>
                <p style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--medical-02)',
                  lineHeight: 'var(--line-height-normal)'
                }}>
                  Real-time medical data analysis and healthcare performance metrics.
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--medical-01)',
                  marginBottom: 'var(--space-2)'
                }}>
                  🔒 Secure & Compliant
                </h3>
                <p style={{
                  fontFamily: 'var(--font-family-primary)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--medical-02)',
                  lineHeight: 'var(--line-height-normal)'
                }}>
                  HIPAA-compliant security measures and data protection protocols.
                </p>
              </div>
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: 'var(--space-8)',
            background: 'var(--medical-08)',
            borderRadius: 'var(--radius-medium)',
            border: '1px solid var(--medical-07)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--medical-01)',
              marginBottom: 'var(--space-4)'
            }}>
              Trusted by Healthcare Professionals
            </h2>
            <p style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-lg)',
              color: 'var(--medical-02)',
              lineHeight: 'var(--line-height-normal)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Join thousands of medical professionals who rely on MedCare for efficient healthcare management and improved patient outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
