import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function MapSolid({ className = 'w-6 h-6', style }: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.58582L8 5.58582V18.4142L12 14.4142V1.58582Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.70711 3.29292C3.42111 3.00692 2.99099 2.92137 2.61732 3.07615C2.24364 3.23093 2 3.59557 2 4.00003V14C2 14.2652 2.10536 14.5196 2.29289 14.7071L6 18.4142V5.58582L3.70711 3.29292Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7071 5.29292L14 1.58582V14.4142L16.2929 16.7071C16.5789 16.9931 17.009 17.0787 17.3827 16.9239C17.7564 16.7691 18 16.4045 18 16V6.00003C18 5.73481 17.8946 5.48046 17.7071 5.29292Z"
        fill="currentColor"
      />
    </svg>
  )
}