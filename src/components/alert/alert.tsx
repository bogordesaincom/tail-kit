import React, { useMemo } from 'react'
import clsx from 'clsx'
import {
  InformationCircleSolid,
  CheckCircleSolid,
  XCircleSolid,
  ExclamationSolid,
  XSolid,
} from 'components/icons'
import Button from 'components/button'

export enum AlertType {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

/**
 * Alert properties
 */
export type AlertProps = {
  /** Type of the alert which can be either `AlertType.error` or `AlertType.warning` or `AlertType.success` or `AlertType.info` */
  type?: AlertType
  /** Alert title */
  title: React.ReactNode
  /** Alert content */
  content?: React.ReactNode
  /** Alert icon */
  icon?: JSX.Element | boolean
  /** Alert action buttons */
  actions?: JSX.Element
  /** Making alert closable. It would render (X) button */
  closable?: boolean
  /** Function to be called on pressing the (X) button */
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/** Alert component to render `info`, `warning`, `success` and `error` messages */
export function Alert({
  type = AlertType.info,
  title,
  content,
  icon,
  actions,
  closable = false,
  onClose,
}: AlertProps) {
  // Function to return icon, based on user input and alert type
  const renderIcon = useMemo(() => {
    if (icon === false) {
      return
    }

    if (icon) {
      return icon
    }

    if (type === AlertType.info) {
      return <InformationCircleSolid className="w-6 h-6 mr-2 text-blue-500" />
    } else if (type === AlertType.success) {
      return <CheckCircleSolid className="w-6 h-6 mr-2 text-green-500" />
    } else if (type === AlertType.warning) {
      return <ExclamationSolid className="w-6 h-6 mr-2 text-yellow-400" />
    } else if (type === AlertType.error) {
      return <XCircleSolid className="w-6 h-6 mr-2 text-red-500" />
    }
  }, [icon, type])

  // function to return required background color based on Alert Type
  const alertBackground = useMemo(() => {
    if (type === AlertType.info) {
      return 'bg-blue-100'
    } else if (type === AlertType.success) {
      return 'bg-green-100'
    } else if (type === AlertType.warning) {
      return 'bg-yellow-100'
    } else if (type === AlertType.error) {
      return 'bg-red-100'
    }
  }, [type])

  const textColor = useMemo(() => {
    if (type === AlertType.info) {
      return 'text-blue-700'
    } else if (type === AlertType.success) {
      return 'text-green-700'
    } else if (type === AlertType.warning) {
      return 'text-yellow-700'
    } else if (type === AlertType.error) {
      return 'text-red-700'
    }
  }, [type])

  return (
    <div
      className={clsx(
        'px-4 py-3 rounded-md flex items-start justify-between',
        alertBackground,
      )}
    >
      <div className="flex items-start">
        {renderIcon}
        <div className={clsx(textColor)}>
          <div className="font-semibold">{title}</div>
          <div className="mt-1 text-sm">{content}</div>
          {actions ? (
            <div className="flex mt-4 space-x-4">{actions}</div>
          ) : undefined}
        </div>
      </div>
      <button className="cursor-pointer" onClick={onClose}>
        {closable ? (
          <XSolid className={clsx('w-4 h-4', textColor)} />
        ) : undefined}
      </button>
    </div>
  )
}

export enum ButtonType {
  primary = 'primary',
  default = 'default',
  danger = 'danger',
  link = 'link',
}

export type AlertButtonProps = {
  type?: ButtonType
  label?: string
  icon?: JSX.Element
  loading?: boolean
  className?: string
  style?: React.CSSProperties
}

export function AlertButton({
  type = ButtonType.default,
  label,
  icon,
  loading,
  className,
  style,
}: AlertButtonProps) {
  return (
    <Button
      buttonType={type}
      icon={icon}
      loading={loading}
      label={label}
      className={clsx(className)}
      style={style}
    />
  )
}

Alert.AlertButton = AlertButton
