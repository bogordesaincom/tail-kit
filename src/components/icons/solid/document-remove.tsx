import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function DocumentRemoveSolid({
  className = 'w-6 h-6',
  style,
}: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V7.41421C16 6.88378 15.7893 6.37507 15.4142 6L12 2.58579C11.6249 2.21071 11.1162 2 10.5858 2H6ZM7 10C6.44772 10 6 10.4477 6 11C6 11.5523 6.44772 12 7 12H13C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10H7Z"
        fill="currentColor"
      />
    </svg>
  )
}
