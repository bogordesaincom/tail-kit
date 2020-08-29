import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function ThumbDownOutline({
  className = 'w-6 h-6',
  style,
}: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none">
      <path
        d="M9.99991 14H5.23598C3.74922 14 2.78222 12.4354 3.44712 11.1056L6.94712 4.10557C7.28591 3.42801 7.97843 3 8.73598 3H12.7537C12.9172 3 13.0801 3.02005 13.2388 3.05972L16.9999 4M9.99991 14V19C9.99991 20.1046 10.8953 21 11.9999 21H12.0954C12.5949 21 12.9999 20.595 12.9999 20.0955C12.9999 19.3812 13.2113 18.6828 13.6076 18.0885L16.9999 13V4M9.99991 14H11.9999M16.9999 4H18.9999C20.1045 4 20.9999 4.89543 20.9999 6V12C20.9999 13.1046 20.1045 14 18.9999 14H16.4999"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
