import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function ArrowNarrowDownOutline({
  className = 'w-6 h-6',
  style,
  ...restProps
}: Props) {
  return (
    <svg
      className={className}
      style={style}
      {...restProps}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 17L12 21M12 21L8 17M12 21L12 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
