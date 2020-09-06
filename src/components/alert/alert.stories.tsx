import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { BookmarkSolid, BellSolid } from 'components/icons'
import { Alert, AlertType, ButtonType } from './alert'

export default { title: 'Feedback/Alert', component: Alert } as Meta

export function InfoAlert() {
  return <Alert title="Some additional information" />
}

export function SuccessAlert() {
  const title = 'Order placed'
  const content =
    'Lorem ipsum dolor sit amet consectetur adipsicing elit. Aliquid pariatur, ipsum similique veniam.'
  return <Alert type={AlertType.success} title={title} content={content} />
}

export function WarningAlert() {
  const content =
    'Lorem ipsum dolor sit amet consectetur adipsicing elit. Aliquid pariatur, ipsum similique veniam.'
  return (
    <Alert
      type={AlertType.warning}
      title="Attention needed"
      content={content}
    />
  )
}

export function ErrorAlert() {
  const title = 'There were 2 errors with your submission'
  const content = (
    <ul className="ml-4 list-disc">
      <li>Your password must be at least 8 characters</li>
      <li>
        Your password must included at least one pro wrestling finishing move
      </li>
    </ul>
  )
  return <Alert type={AlertType.error} title={title} content={content} />
}

export function AlertWithOnlyTitle() {
  return (
    <Alert
      closable
      icon={false}
      title="The quick, brown fox jumps over a lazy dog."
    />
  )
}

export function AlertWithCustomIcon() {
  return (
    <Alert
      type={AlertType.success}
      icon={<BookmarkSolid className="w-6 h-6 text-green-500" />}
      title="This webpage is now bookmarked"
    />
  )
}

export function AlertWithAction() {
  const content = (
    <div className="space-y-2">
      <p>Also you can change the message by changing the Message knob</p>
      <ul className="ml-4 list-disc">
        <li>623 KC will be refunded by your payment card</li>
        <li>623 KC will be refunded by your payment card</li>
      </ul>
    </div>
  )
  return (
    <Alert
      title="You can change the title by changing the Title knob"
      content={content}
      icon={<BellSolid className="w-6 h-6 text-blue-500" />}
      closable
      actions={
        <>
          <Alert.AlertButton label="OK" type={ButtonType.primary} />
          <Alert.AlertButton label="Ignore" />
        </>
      }
    />
  )
}
