import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function CurrencyYenSolid({
  className = 'w-6 h-6',
  style,
}: Props) {
  return (
    <svg className={className} style={style} viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7.85752 5.48541C7.57337 5.01183 6.95911 4.85827 6.48553 5.14241C6.01195 5.42656 5.85839 6.04082 6.14254 6.5144L7.63384 8.99991H7.00003C6.44774 8.99991 6.00003 9.44762 6.00003 9.99991C6.00003 10.5522 6.44774 10.9999 7.00003 10.9999H8.83384L9.00003 11.2769V11.9999H7.00003C6.44774 11.9999 6.00003 12.4476 6.00003 12.9999C6.00003 13.5522 6.44774 13.9999 7.00003 13.9999H9.00003V14.9999C9.00003 15.5522 9.44774 15.9999 10 15.9999C10.5523 15.9999 11 15.5522 11 14.9999V13.9999H13C13.5523 13.9999 14 13.5522 14 12.9999C14 12.4476 13.5523 11.9999 13 11.9999H11V11.2769L11.1662 10.9999H13C13.5523 10.9999 14 10.5522 14 9.99991C14 9.44762 13.5523 8.99991 13 8.99991H12.3662L13.8575 6.5144C14.1417 6.04082 13.9881 5.42656 13.5145 5.14241C13.0409 4.85827 12.4267 5.01183 12.1425 5.48541L10.0338 8.99991H9.96622L7.85752 5.48541Z"
        fill="currentColor"
      />
    </svg>
  )
}
