import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function MailOpenOutline({
  className = 'w-6 h-6',
  style,
}: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 19V10.0704C3 9.40165 3.3342 8.77718 3.8906 8.40625L10.8906 3.73959C11.5624 3.29172 12.4376 3.29172 13.1094 3.73959L20.1094 8.40625C20.6658 8.77718 21 9.40165 21 10.0704V19M3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19M3 19L9.75 14.5M21 19L14.25 14.5M3 9.99999L9.75 14.5M21 9.99999L14.25 14.5M14.25 14.5L13.1094 15.2604C12.4376 15.7083 11.5624 15.7083 10.8906 15.2604L9.75 14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
