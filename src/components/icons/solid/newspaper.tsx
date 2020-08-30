import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function NewspaperSolid({
  className = 'w-6 h-6',
  style,
}: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5C2 3.89543 2.89543 3 4 3H12C13.1046 3 14 3.89543 14 5V15C14 16.1046 14.8954 17 16 17H4C2.89543 17 2 16.1046 2 15V5ZM5 6H11V10H5V6ZM11 12H5V14H11V12Z"
        fill="currentColor"
      />
      <path
        d="M15 7H16C17.1046 7 18 7.89543 18 9V14.5C18 15.3284 17.3284 16 16.5 16C15.6716 16 15 15.3284 15 14.5V7Z"
        fill="currentColor"
      />
    </svg>
  )
}