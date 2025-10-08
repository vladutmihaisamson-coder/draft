import Header from '../components/Header'

interface ServicesProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const Services = ({ navigateTo, hasClerk = false }: ServicesProps) => {
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
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-6)'
          }}>
            Medical Services
          </h1>
          
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-lg)',
            color: 'var(--medical-02)',
            lineHeight: 'var(--line-height-normal)',
            marginBottom: 'var(--space-8)',
            maxWidth: '600px'
          }}>
            Comprehensive healthcare services designed to meet the diverse medical needs of our patients with the highest standards of care and professionalism.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)',
            marginBottom: 'var(--space-8)'
          }}>
            <div style={{
              background: 'var(--medical-10)',
              borderRadius: 'var(--radius-medium)',
              padding: 'var(--space-6)',
              border: '1px solid var(--medical-07)',
              transition: 'all var(--transition-normal)'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--medical-01)',
                marginBottom: 'var(--space-4)'
              }}>
                🏥 Emergency Care
              </h2>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: 'var(--space-4)'
              }}>
                24/7 emergency medical services with rapid response teams and state-of-the-art emergency facilities.
              </p>
              <ul style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                paddingLeft: 'var(--space-4)'
              }}>
                <li>Trauma care and critical care</li>
                <li>Emergency surgery</li>
                <li>Ambulance services</li>
                <li>Emergency diagnostics</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--medical-10)',
              borderRadius: 'var(--radius-medium)',
              padding: 'var(--space-6)',
              border: '1px solid var(--medical-07)',
              transition: 'all var(--transition-normal)'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--medical-01)',
                marginBottom: 'var(--space-4)'
              }}>
                🩺 Primary Care
              </h2>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: 'var(--space-4)'
              }}>
                Comprehensive primary healthcare services for patients of all ages with personalized care plans.
              </p>
              <ul style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                paddingLeft: 'var(--space-4)'
              }}>
                <li>General health checkups</li>
                <li>Preventive care</li>
                <li>Chronic disease management</li>
                <li>Vaccinations and immunizations</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--medical-10)',
              borderRadius: 'var(--radius-medium)',
              padding: 'var(--space-6)',
              border: '1px solid var(--medical-07)',
              transition: 'all var(--transition-normal)'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--medical-01)',
                marginBottom: 'var(--space-4)'
              }}>
                🧠 Specialized Care
              </h2>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: 'var(--space-4)'
              }}>
                Expert medical specialists providing advanced treatment for complex health conditions.
              </p>
              <ul style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                paddingLeft: 'var(--space-4)'
              }}>
                <li>Cardiology and heart surgery</li>
                <li>Neurology and neurosurgery</li>
                <li>Oncology and cancer treatment</li>
                <li>Orthopedics and sports medicine</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--medical-10)',
              borderRadius: 'var(--radius-medium)',
              padding: 'var(--space-6)',
              border: '1px solid var(--medical-07)',
              transition: 'all var(--transition-normal)'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--medical-01)',
                marginBottom: 'var(--space-4)'
              }}>
                🔬 Diagnostic Services
              </h2>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: 'var(--space-4)'
              }}>
                Advanced diagnostic imaging and laboratory services for accurate medical assessments.
              </p>
              <ul style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                paddingLeft: 'var(--space-4)'
              }}>
                <li>MRI and CT scanning</li>
                <li>Laboratory testing</li>
                <li>Ultrasound imaging</li>
                <li>Pathology services</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--medical-10)',
              borderRadius: 'var(--radius-medium)',
              padding: 'var(--space-6)',
              border: '1px solid var(--medical-07)',
              transition: 'all var(--transition-normal)'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--medical-01)',
                marginBottom: 'var(--space-4)'
              }}>
                👶 Pediatric Care
              </h2>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: 'var(--space-4)'
              }}>
                Specialized healthcare services for children from infancy through adolescence.
              </p>
              <ul style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                paddingLeft: 'var(--space-4)'
              }}>
                <li>Well-child visits</li>
                <li>Developmental assessments</li>
                <li>Pediatric emergency care</li>
                <li>Child vaccination programs</li>
              </ul>
            </div>

            <div style={{
              background: 'var(--medical-10)',
              borderRadius: 'var(--radius-medium)',
              padding: 'var(--space-6)',
              border: '1px solid var(--medical-07)',
              transition: 'all var(--transition-normal)'
            }}>
              <h2 style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--medical-01)',
                marginBottom: 'var(--space-4)'
              }}>
                🧘 Mental Health
              </h2>
              <p style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: 'var(--space-4)'
              }}>
                Comprehensive mental health and psychiatric services for emotional and psychological well-being.
              </p>
              <ul style={{
                fontFamily: 'var(--font-family-primary)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--medical-02)',
                lineHeight: 'var(--line-height-normal)',
                paddingLeft: 'var(--space-4)'
              }}>
                <li>Psychiatric consultations</li>
                <li>Counseling and therapy</li>
                <li>Mental health assessments</li>
                <li>Crisis intervention services</li>
              </ul>
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
              Schedule Your Appointment
            </h2>
            <p style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-lg)',
              color: 'var(--medical-02)',
              lineHeight: 'var(--line-height-normal)',
              marginBottom: 'var(--space-6)'
            }}>
              Contact our medical team to schedule your consultation or emergency care.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--space-4)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button className="btn btn-primary" style={{ minWidth: '200px' }}>
                Book Appointment
              </button>
              <button className="btn btn-secondary" style={{ minWidth: '200px' }}>
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
