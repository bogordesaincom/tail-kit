import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function ArrowLeftSolid({
  className = 'w-6 h-6',
  style,
}: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071L2.29289 10.7071C1.90237 10.3166 1.90237 9.68342 2.29289 9.29289L8.29289 3.29289C8.68342 2.90237 9.31658 2.90237 9.70711 3.29289C10.0976 3.68342 10.0976 4.31658 9.70711 4.70711L5.41421 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11L5.41421 11L9.70711 15.2929C10.0976 15.6834 10.0976 16.3166 9.70711 16.7071Z"
        fill="currentColor"
      />
    </svg>
  )
}