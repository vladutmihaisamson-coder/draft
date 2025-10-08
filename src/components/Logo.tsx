import type { SVGProps } from 'react'

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const Logo = ({ size = 32, ...props }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Medical cross symbol */}
      <rect x="14" y="6" width="4" height="20" rx="2" fill="currentColor" />
      <rect x="6" y="14" width="20" height="4" rx="2" fill="currentColor" />
      
      {/* Heart symbol */}
      <path
        d="M16 24C16 24 8 18 8 12C8 9.79086 9.79086 8 12 8C13.5 8 14.5 8.5 16 10C17.5 8.5 18.5 8 20 8C22.2091 8 24 9.79086 24 12C24 18 16 24 16 24Z"
        fill="currentColor"
        opacity="0.7"
      />
      
      {/* Stethoscope */}
      <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5" />
      <path
        d="M8 10C8 12 10 14 12 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}

export default Logo
