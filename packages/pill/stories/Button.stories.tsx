import React from 'react'
import { Pill } from '../src'
import { IconSearch16, IconPlus16 } from '@warp-ds/icons/react'

const metadata = { title: 'Buttons/Pill' }
export default metadata

export const Default = () => {
  return (
    <Pill
      aria-label='a pill that shows default behaviour'
      label='Example'
    />
  )
}

export const DefaultCanClose = () => {
  return (
    <Pill
      aria-label='a pill that you can close and that shows default behaviour'
      label='Example'
      canClose
      onClose={() => alert('remove')}
    />
  )
}

export const Suggestion = () => {
  return (
    <Pill
      aria-label='a pill with suggestion'
      label='Example'
      suggestion
    />
  )
}

export const SuggestionCanClose = () => {
  return (
    <Pill
      aria-label='a pill with suggestion and that you can close'
      label='Example'
      suggestion
      canClose
      onClose={() => alert('remove')}
    />
  )
}

export const PillOnClickAndOnClose = () => {
  return (
    <Pill
      aria-label='a pill that is clickable and that you can close'
      label='Example'
      onClick={() => alert('pill is clicked')}
      suggestion
      canClose
      onClose={() => alert('close is clicked')}
    />
  )
}

export const PillsWithIcon = () => {
  return (
    <div className='flex space-x-8'>
      <Pill
        aria-label='a pill with a search icon'
        icon={<IconSearch16 />}
        onClick={() => alert('onClick event')}
        className='py-12'
      />
      <Pill
        aria-label='a pill with a plus icon'
        icon={<IconPlus16 />}
        onClick={() => alert('onClick event')}
        suggestion
        className='py-12'
      />
    </div>
  )
}
