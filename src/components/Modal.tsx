import React, { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  className = '' 
}: ModalProps) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  const maxWidthStyles = {
    sm: { maxWidth: '28rem' }, // 448px
    md: { maxWidth: '32rem' }, // 512px
    lg: { maxWidth: '42rem' }, // 672px
    xl: { maxWidth: '56rem' }  // 896px
  }

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: 'var(--space-4)'
      }}
    >
      <div 
        className={`modal-content ${sizeClasses[size]} ${className}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--medical-10)',
          borderRadius: 'var(--radius-medium)',
          boxShadow: 'var(--shadow-xl)',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          animation: 'modalSlideIn 0.3s ease-out',
          ...maxWidthStyles[size]
        }}
      >
        {/* Modal Header */}
        <div style={{
          padding: 'var(--space-6)',
          borderBottom: '1px solid var(--medical-07)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--medical-01)',
            margin: 0
          }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 'var(--space-2)',
              borderRadius: 'var(--radius-small)',
              color: 'var(--medical-03)',
              fontSize: 'var(--font-size-lg)',
              lineHeight: 1,
              transition: 'all var(--transition-normal)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--medical-08)'
              e.currentTarget.style.color = 'var(--medical-01)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--medical-03)'
            }}
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div style={{
          padding: 'var(--space-6)'
        }}>
          {children}
        </div>
      </div>

      {/* Add CSS animation */}
      <style>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Modal
