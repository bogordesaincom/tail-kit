import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { hideVisually } from 'polished'
import { useSyncedState } from '../../hooks/useSyncedState'

/**
 * Switch properties
 */
export type SwitchProps = {
  /** whether the switch is on on | off state */
  checked?: boolean
  /** Property to initialize switch with a particular value */
  defaultChecked?: boolean
  /** function called when the state of switch is changed */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /** additional class names */
  className?: string
  /** addtional styles */
  style?: React.CSSProperties
}

/**
 * Switch component to render toggle
 */
export const Switch = forwardRef(
  (
    { checked, defaultChecked, onChange, className, style }: SwitchProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const [checkedState, setCheckedState] = useSyncedState(
      checked || defaultChecked,
    )
    return (
      <label
        className={clsx(
          'w-10 rounded-full h-5 transition-all duration-300 focus-within:shadow-outline relative inline-block',
          checkedState ? 'bg-green-500' : 'bg-gray-300',
          className,
        )}
        style={style}
      >
        <div
          className={clsx(
            'w-5 h-5 rounded-full bg-white shadow transition duration-150',
          )}
          style={{
            transform: `translate(${checkedState ? 20 : 0}px)`,
          }}
          data-testid="toggle-thumb"
        />
        <input
          checked={checkedState}
          onChange={(event) => {
            setCheckedState(event.target.checked)
            if (onChange) {
              onChange(event)
            }
          }}
          type="checkbox"
          style={hideVisually()}
          ref={ref}
        />
      </label>
    )
  },
)

Switch.displayName = 'Switch'
