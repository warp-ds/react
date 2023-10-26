import { IconBag16 } from '@warp-ds/icons/react'
import * as React from 'react'
import { Expandable } from '../src'

const metadata = { title: 'Layout/Expandable' }
export default metadata

export const Default = () => (
  <Expandable title='This is a title'>
    <h2>I am expandable</h2>
  </Expandable>
)

export const Box = () => (
  <Expandable title='This is a title' box>
    <h2>I am expandable</h2>
  </Expandable>
)

export const BoxWithCustomIcon = () => (
  <Expandable
    title={
      <div className='flex flex-row items-center'>
        <p className='mr-8 mb-0'>This is a title with an icon</p>
        <span className='sr-only'>,</span>
        <IconBag16 />
      </div>
    }
    box
    info
  >
    <h2>I am expandable</h2>
  </Expandable>
)

export const InfoBox = () => (
  <Expandable title='This is a title' box info>
    <h2>I am expandable</h2>
  </Expandable>
)

export const Controlled = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Expandable title={open ? 'Open' : 'Closed'} box info onChange={setOpen}>
      <h1>I am expandable</h1>
    </Expandable>
  )
}

export const NoChevron = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <Expandable
      title={open ? 'Open' : 'Closed'}
      box
      info
      chevron={false}
      onChange={setOpen}
    >
      <h2>I am expandable</h2>
    </Expandable>
  )
}

export const Animated = () => {
  return (
    <Expandable title='Animated box' box info animated>
      <h2>I am expandable</h2>
    </Expandable>
  )
}

export const AnimatedExpanded = () => {
  return (
    <Expandable
      title='Animated box'
      expanded
      box
      info
      animated
    >
      <h2>I am expandable</h2>
    </Expandable>
  )
}

export const Heading = () => {
  return (
    <Expandable title="I'm also a heading" headingLevel={2}>
      <h2>I am expandable</h2>
    </Expandable>
  )
}
