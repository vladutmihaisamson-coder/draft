import { useState } from 'react'
import Header from '../components/Header'
import TextField from '../components/TextField'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import Select from '../components/Select'
import TitledField from '../components/TitledField'

interface OrganizationSettingsProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
  isScrolled?: boolean
}

const OrganizationSettings = ({ navigateTo, hasClerk = false, isScrolled = false }: OrganizationSettingsProps) => {
  const [formData, setFormData] = useState({
    organizationName: 'City General Hospital',
    organizationType: 'hospital',
    address: '123 Medical Center Drive',
    city: 'Metro City',
    state: 'MC',
    zipCode: '12345',
    country: 'United States',
    phone: '+1 (555) 123-4567',
    email: 'admin@citygeneral.com',
    website: 'https://citygeneral.com',
    taxId: '12-3456789',
    licenseNumber: 'HL-2024-001',
    accreditation: 'Joint Commission',
    timezone: 'America/New_York',
    currency: 'USD',
    language: 'en',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
    dataRetention: '7',
    backupFrequency: 'daily',
    securityLevel: 'high'
  })

  const handleInputChange = (field: string, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

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
            Organization Settings
          </h1>
        
        <p style={{
          fontFamily: 'var(--font-family-primary)',
          fontSize: 'var(--font-size-base)',
          color: 'var(--medical-02)',
          lineHeight: 'var(--line-height-normal)',
          marginBottom: 'var(--space-8)',
          maxWidth: '600px'
        }}>
          Manage your healthcare organization's information, compliance settings, and system preferences. Configure billing, security, and operational parameters.
        </p>

        {/* Main content container with white background */}
        <div style={{
          background: 'var(--medical-10)',
          borderRadius: 'var(--radius-medium)',
          padding: 'var(--space-8)',
          marginBottom: 'var(--space-8)'
        }}>

        {/* Organization Information Section */}
        <div style={{
          background: 'transparent',
          borderRadius: 'var(--radius-medium)',
          padding: 0,
          border: 'none',
          marginBottom: 'var(--space-8)'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-6)'
          }}>
            Organization Information
          </h2>

          {/* Basic Information */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-8)'
          }}>
            <TextField
              label="Organization Name"
              placeholder="Enter organization name"
              value={formData.organizationName}
              onChange={(value) => handleInputChange('organizationName', value)}
              size="md"
            />
            
            <TitledField label="Organization Type">
              <Select
                value={formData.organizationType}
                onChange={(value) => handleInputChange('organizationType', value)}
                options={[
                  { value: 'hospital', label: 'Hospital' },
                  { value: 'clinic', label: 'Clinic' },
                  { value: 'medical-center', label: 'Medical Center' },
                  { value: 'specialty-group', label: 'Specialty Group' },
                  { value: 'urgent-care', label: 'Urgent Care' },
                  { value: 'pharmacy', label: 'Pharmacy' },
                  { value: 'laboratory', label: 'Laboratory' }
                ]}
                size="md"
              />
            </TitledField>
            
            <TextField
              label="Tax ID / EIN"
              placeholder="Enter tax identification number"
              value={formData.taxId}
              onChange={(value) => handleInputChange('taxId', value)}
              size="md"
            />
            
            <TextField
              label="License Number"
              placeholder="Enter medical license number"
              value={formData.licenseNumber}
              onChange={(value) => handleInputChange('licenseNumber', value)}
              size="md"
            />
          </div>

          {/* Address Information */}
          <h3 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-4)',
            marginTop: 'var(--space-6)'
          }}>
            Address Information
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-8)'
          }}>
            <TextField
              label="Street Address"
              placeholder="Enter street address"
              value={formData.address}
              onChange={(value) => handleInputChange('address', value)}
              size="md"
            />
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <TextField
                label="City"
                placeholder="Enter city"
                value={formData.city}
                onChange={(value) => handleInputChange('city', value)}
                size="md"
              />
              <TextField
                label="State"
                placeholder="Enter state"
                value={formData.state}
                onChange={(value) => handleInputChange('state', value)}
                size="md"
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <TextField
                label="ZIP Code"
                placeholder="Enter ZIP code"
                value={formData.zipCode}
                onChange={(value) => handleInputChange('zipCode', value)}
                size="md"
              />
              <TextField
                label="Country"
                placeholder="Enter country"
                value={formData.country}
                onChange={(value) => handleInputChange('country', value)}
                size="md"
              />
            </div>
          </div>

          {/* Contact Information */}
          <h3 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-4)',
            marginTop: 'var(--space-6)'
          }}>
            Contact Information
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-8)'
          }}>
            <TextField
              label="Phone Number"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(value) => handleInputChange('phone', value)}
              size="md"
            />
            
            <TextField
              label="Email Address"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              type="email"
              size="md"
            />
            
            <TextField
              label="Website"
              placeholder="Enter website URL"
              value={formData.website}
              onChange={(value) => handleInputChange('website', value)}
              size="md"
            />
          </div>
        </div>

        {/* System Preferences Section */}
        <div style={{
          background: 'transparent',
          borderRadius: 'var(--radius-medium)',
          padding: 0,
          border: 'none',
          marginBottom: 'var(--space-8)'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-6)'
          }}>
            System Preferences
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-8)'
          }}>
            <TitledField label="Timezone">
              <Select
                value={formData.timezone}
                onChange={(value) => handleInputChange('timezone', value)}
                options={[
                  { value: 'America/New_York', label: 'Eastern Time (ET)' },
                  { value: 'America/Chicago', label: 'Central Time (CT)' },
                  { value: 'America/Denver', label: 'Mountain Time (MT)' },
                  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
                  { value: 'America/Anchorage', label: 'Alaska Time (AT)' },
                  { value: 'Pacific/Honolulu', label: 'Hawaii Time (HT)' }
                ]}
                size="md"
              />
            </TitledField>

            <TitledField label="Currency">
              <Select
                value={formData.currency}
                onChange={(value) => handleInputChange('currency', value)}
                options={[
                  { value: 'USD', label: 'US Dollar ($)' },
                  { value: 'EUR', label: 'Euro (€)' },
                  { value: 'GBP', label: 'British Pound (£)' },
                  { value: 'CAD', label: 'Canadian Dollar (C$)' },
                  { value: 'AUD', label: 'Australian Dollar (A$)' }
                ]}
                size="md"
              />
            </TitledField>

            <TitledField label="Language">
              <Select
                value={formData.language}
                onChange={(value) => handleInputChange('language', value)}
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'es', label: 'Spanish' },
                  { value: 'fr', label: 'French' },
                  { value: 'de', label: 'German' },
                  { value: 'it', label: 'Italian' },
                  { value: 'pt', label: 'Portuguese' }
                ]}
                size="md"
              />
            </TitledField>

            <TitledField label="Date Format">
              <Select
                value={formData.dateFormat}
                onChange={(value) => handleInputChange('dateFormat', value)}
                options={[
                  { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
                  { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
                  { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
                  { value: 'DD-MM-YYYY', label: 'DD-MM-YYYY' }
                ]}
                size="md"
              />
            </TitledField>

            <TitledField label="Time Format">
              <Select
                value={formData.timeFormat}
                onChange={(value) => handleInputChange('timeFormat', value)}
                options={[
                  { value: '12h', label: '12-hour (AM/PM)' },
                  { value: '24h', label: '24-hour' }
                ]}
                size="md"
              />
            </TitledField>

            <TitledField label="Accreditation">
              <Select
                value={formData.accreditation}
                onChange={(value) => handleInputChange('accreditation', value)}
                options={[
                  { value: 'Joint Commission', label: 'Joint Commission' },
                  { value: 'DNV GL', label: 'DNV GL' },
                  { value: 'HFAP', label: 'HFAP' },
                  { value: 'CMS', label: 'CMS' },
                  { value: 'None', label: 'None' }
                ]}
                size="md"
              />
            </TitledField>
          </div>
        </div>

        {/* Security & Compliance Section */}
        <div style={{
          background: 'transparent',
          borderRadius: 'var(--radius-medium)',
          padding: 0,
          border: 'none',
          marginBottom: 'var(--space-8)'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-6)'
          }}>
            Security & Compliance
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-8)'
          }}>
            <TitledField label="Data Retention (Years)">
              <Select
                value={formData.dataRetention}
                onChange={(value) => handleInputChange('dataRetention', value)}
                options={[
                  { value: '3', label: '3 years' },
                  { value: '5', label: '5 years' },
                  { value: '7', label: '7 years' },
                  { value: '10', label: '10 years' },
                  { value: 'indefinite', label: 'Indefinite' }
                ]}
                size="md"
              />
            </TitledField>

            <TitledField label="Backup Frequency">
              <Select
                value={formData.backupFrequency}
                onChange={(value) => handleInputChange('backupFrequency', value)}
                options={[
                  { value: 'hourly', label: 'Hourly' },
                  { value: 'daily', label: 'Daily' },
                  { value: 'weekly', label: 'Weekly' },
                  { value: 'monthly', label: 'Monthly' }
                ]}
                size="md"
              />
            </TitledField>

            <TitledField label="Security Level">
              <Select
                value={formData.securityLevel}
                onChange={(value) => handleInputChange('securityLevel', value)}
                options={[
                  { value: 'standard', label: 'Standard' },
                  { value: 'high', label: 'High' },
                  { value: 'maximum', label: 'Maximum' }
                ]}
                size="md"
              />
            </TitledField>
          </div>

          {/* Notification Preferences */}
          <h3 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--medical-01)',
            marginBottom: 'var(--space-4)',
            marginTop: 'var(--space-6)'
          }}>
            Notification Preferences
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-8)'
          }}>
            <Checkbox
              id="notifications"
              label="Enable system notifications"
              checked={formData.notifications}
              onChange={(checked) => handleInputChange('notifications', checked)}
              size="md"
            />
            
            <Checkbox
              id="emailAlerts"
              label="Email alerts for critical events"
              checked={formData.emailAlerts}
              onChange={(checked) => handleInputChange('emailAlerts', checked)}
              size="md"
            />
            
            <Checkbox
              id="smsAlerts"
              label="SMS alerts for emergencies"
              checked={formData.smsAlerts}
              onChange={(checked) => handleInputChange('smsAlerts', checked)}
              size="md"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: 'var(--space-3)',
          justifyContent: 'flex-end',
          marginTop: 'var(--space-8)',
          paddingTop: 'var(--space-6)',
          borderTop: '1px solid var(--medical-07)'
        }}>
          <Button
            variant="secondary"
            onClick={() => console.log('Reset organization settings')}
            style={{ minWidth: '120px' }}
          >
            Reset
          </Button>
          <Button
            variant="primary"
            onClick={() => console.log('Save organization settings', formData)}
            style={{ minWidth: '120px' }}
          >
            Save Changes
          </Button>
        </div>
        </div>
      </div>
    </section>
  </div>
)
}

export default OrganizationSettings
