import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import {
  BeakerOutline,
  CalculatorOutline,
  ChipOutline,
  ClipboardListOutline,
} from 'components/icons'
import { OptionType, Select } from './select'

export default {
  title: 'Data Entry/Select',
  component: Select,
} as Meta

export function DefaultSelect() {
  const options = [
    'Black Widow',
    'Hulk',
    'Spiderman',
    'Captain America',
    'Doctor Strange',
    'Hawk Eye',
  ]
  function handleChange({
    selectedItem,
  }: {
    selectedItem: OptionType | string[] | undefined
  }) {
    action('selected option')(selectedItem)
  }
  return (
    <Select
      placeholder="Select Avenger"
      allowClear
      defaultValue="Spiderman"
      options={options}
      onChange={handleChange}
      className="w-48"
    />
  )
}

export function DisabledSelect() {
  const options = [
    'Black Widow',
    'Hulk',
    'Spiderman',
    'Captain America',
    'Doctor Strange',
    'Hawk Eye',
  ]
  return (
    <Select
      placeholder="Select Avenger"
      options={options}
      disabled
      className="w-48"
    />
  )
}

export function SelectWithListIcons() {
  const options = [
    { label: 'Beaker', value: 'beaker', icon: <BeakerOutline /> },
    { label: 'Calculator', value: 'calculator', icon: <CalculatorOutline /> },
    { label: 'Chip', value: 'chip', icon: <ChipOutline /> },
    {
      label: 'Clipboard List',
      value: 'clipboard-list',
      icon: <ClipboardListOutline />,
    },
  ]
  function handleChange({
    selectedItem,
  }: {
    selectedItem: OptionType | string[] | undefined
  }) {
    action('selected option')(selectedItem)
  }
  return (
    <Select
      options={options}
      placeholder="Select SVG"
      onChange={handleChange}
      className="w-56"
    />
  )
}

export function SelectWithSearch() {
  const plainOptions = [
    'Black Widow',
    'Hulk',
    'Spiderman',
    'Captain America',
    'Doctor Strange',
    'Hawk Eye',
  ]
  const options = [
    { label: 'Beaker', value: 'beaker', icon: <BeakerOutline /> },
    { label: 'Calculator', value: 'calculator', icon: <CalculatorOutline /> },
    { label: 'Chip', value: 'chip', icon: <ChipOutline /> },
    {
      label: 'Clipboard List',
      value: 'clipboard-list',
      icon: <ClipboardListOutline />,
    },
  ]
  function handleChange({
    selectedItem,
  }: {
    selectedItem: OptionType | string[] | undefined
  }) {
    action('selected option')(selectedItem)
  }
  return (
    <div className="flex space-x-4">
      {/* Remove flex from above after Portal implementation */}
      <Select
        mode="search"
        placeholder="Search Avenger"
        defaultValue="Hawk Eye"
        allowClear
        options={plainOptions}
        onChange={handleChange}
        className="w-56"
      />
      <Select
        mode="search"
        placeholder="Search SVGs"
        allowClear
        options={options}
        className="w-56"
      />
      <Select
        mode="search"
        options={plainOptions}
        placeholder="Search Avenger"
        disabled
      />
    </div>
  )
}

export function MultipleSelection() {
  const plainOptions = [
    'Black Widow',
    'Hulk',
    'Spiderman',
    'Captain America',
    'Doctor Strange',
    'Hawk Eye',
  ]
  const options = [
    { label: 'Beaker', value: 'beaker', icon: <BeakerOutline /> },
    { label: 'Calculator', value: 'calculator', icon: <CalculatorOutline /> },
    { label: 'Chip', value: 'chip', icon: <ChipOutline /> },
    {
      label: 'Clipboard List',
      value: 'clipboard-list',
      icon: <ClipboardListOutline />,
    },
  ]
  function handleChange({
    selectedItem,
  }: {
    selectedItem: OptionType | string[] | undefined
  }) {
    if (selectedItem) {
      action('selected option')(...selectedItem)
    }
  }
  return (
    <div className="flex space-x-4 ">
      <Select
        mode="multiple"
        options={plainOptions}
        placeholder="Select Avengers"
        allowClear
        defaultValue={['Hulk']}
        className="w-80"
        onChange={handleChange}
      />
      <Select
        mode="multiple"
        options={options}
        placeholder="Search and select SVG"
        className="w-80"
      />
      <Select
        mode="multiple"
        options={plainOptions}
        disabled
        defaultValue={['Spiderman', 'Black Widow']}
        placeholder="Select Avengers"
        className="w-80"
      />
    </div>
  )
}