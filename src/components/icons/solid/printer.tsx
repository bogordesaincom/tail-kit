import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function PrinterSolid({ className = 'w-6 h-6', style }: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4V7H4C2.89543 7 2 7.89543 2 9V12C2 13.1046 2.89543 14 4 14H5V16C5 17.1046 5.89543 18 7 18H13C14.1046 18 15 17.1046 15 16V14H16C17.1046 14 18 13.1046 18 12V9C18 7.89543 17.1046 7 16 7H15V4C15 2.89543 14.1046 2 13 2H7C5.89543 2 5 2.89543 5 4ZM13 4H7V7H13V4ZM13 12H7V16H13V12Z"
        fill="currentColor"
      />
    </svg>
  )
}