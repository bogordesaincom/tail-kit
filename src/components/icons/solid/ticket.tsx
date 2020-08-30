import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function TicketSolid({ className = 'w-6 h-6', style }: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
      <path
        d="M2 6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V8C16.8954 8 16 8.89543 16 10C16 11.1046 16.8954 12 18 12V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V12C3.10457 12 4 11.1046 4 10C4 8.89543 3.10457 8 2 8V6Z"
        fill="currentColor"
      />
    </svg>
  )
}