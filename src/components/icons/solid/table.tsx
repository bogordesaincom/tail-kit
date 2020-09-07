import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function TableSolid({
  className = 'w-6 h-6',
  style,
  ...restProps
}: Props) {
  return (
    <svg
      className={className}
      style={style}
      {...restProps}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4C3.34315 4 2 5.34315 2 7V13C2 14.6569 3.34315 16 5 16H15C16.6569 16 18 14.6569 18 13V7C18 5.34315 16.6569 4 15 4H5ZM4 13V12H9V14H5C4.44772 14 4 13.5523 4 13ZM11 14H15C15.5523 14 16 13.5523 16 13V12H11V14ZM11 10H16V8H11V10ZM9 8H4V10H9V8Z"
        fill="currentColor"
      />
    </svg>
  )
}
