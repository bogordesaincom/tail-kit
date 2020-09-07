import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function MusicNoteSolid({
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
        d="M18 3.00001C18 2.70042 17.8657 2.41661 17.634 2.22667C17.4023 2.03673 17.0977 1.96067 16.8039 2.01943L6.80388 4.01943C6.33646 4.11291 6 4.52333 6 5.00001V14.1138C5.68722 14.0401 5.35064 14 5 14C3.34315 14 2 14.8954 2 16C2 17.1046 3.34315 18 5 18C6.65685 18 7.99999 17.1046 8 16V7.81981L16 6.21981V12.1138C15.6872 12.0401 15.3506 12 15 12C13.3431 12 12 12.8954 12 14C12 15.1046 13.3431 16 15 16C16.6569 16 18 15.1046 18 14V3.00001Z"
        fill="currentColor"
      />
    </svg>
  )
}
