import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function MenuAlt4Solid({ className = 'w-6 h-6', style }: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7C3 6.44772 3.44772 6 4 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H4C3.44772 8 3 7.55228 3 7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 13C3 12.4477 3.44772 12 4 12H16C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H4C3.44772 14 3 13.5523 3 13Z"
        fill="currentColor"
      />
    </svg>
  )
}
