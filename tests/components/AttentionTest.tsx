import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, } from 'vitest';
import { Attention } from '../../packages/attention/src/component';


describe('Attention component', () => {
  it('should not show Attention component when isShowing is false"', () => {
    const { container } = render(<Attention callout placement='right'><p>I am a callout</p></Attention>)

    expect(container.firstChild).toHaveClass('hidden')
   })

   it('should show attention component when isShowing is true"', () => {
    const {container} = render(<Attention callout placement='right' isShowing={true}><p>I am a callout</p></Attention>)

   expect(container.firstChild).not.toHaveClass('hidden')
   })
})

describe('Usage of aria-label attribute', () => {
  it('renders popover with default aria-label', () => {
    render(<Attention popover isShowing={true}><p>I am a popover with default aria-label</p></Attention>)
    const defaultAriaLabel = screen.getByLabelText('A white speech bubble providing additional information pointing up')
    expect(defaultAriaLabel).toBeInTheDocument()
  })

  it('renders tooltip with default aria-label', () => {
    render(<Attention tooltip isShowing={true}><p>I am a tooltip with default aria-label</p></Attention>)
    const defaultAriaLabel = screen.getByLabelText('A black speech bubble providing complementary information pointing up')
    expect(defaultAriaLabel).toBeInTheDocument()
  })

  it('renders callout with default aria-label', () => {
    render(<Attention callout placement="right" isShowing={true}><p>I am a callout with default aria-label</p></Attention>)
    const defaultAriaLabel = screen.getByLabelText('A green speech bubble introducing something new pointing left')
    expect(defaultAriaLabel).toBeInTheDocument()
  })

  it('renders highlight with default aria-label', () => {
    render(<Attention highlight isShowing={true}><p>I am a highlight with default aria-label</p></Attention>)
    const defaultAriaLabel = screen.getByLabelText('An attention speech bubble with important information pointing up')
    expect(defaultAriaLabel).toBeInTheDocument()
  })

  it('renders highlight with updated default aria-label when setting placement prop', () => {
    render(<Attention highlight placement='left' isShowing={true}><p>I am a highlight with default aria-label</p></Attention>)
    const defaultAriaLabel = screen.getByLabelText('An attention speech bubble with important information pointing right')
    expect(defaultAriaLabel).toBeInTheDocument()
  })
  
  it('renders popover with resetted aria-label', () => {
    render(<Attention popover isShowing={true} aria-label=''><p>I am a popover with resetted aria-label</p></Attention>)
    const defaultAriaLabel = screen.queryByLabelText('A white speech bubble providing additional information pointing up')
    expect(defaultAriaLabel).toBeNull()
  })
})

describe('Usage of role attribute', () => {
  it('renders with role set to "tooltip" if tooltip', () => {
    render(<Attention tooltip isShowing={true}><p>I am a tooltip</p></Attention>)
    const tooltipRole = screen.getByRole('tooltip')
     expect(tooltipRole).toBeInTheDocument()
   })

  it('renders popover with role set to "img" if not tooltip', () => {
    render(<Attention popover isShowing={true}><p>I am a popover with img role</p></Attention>)
    const imgRole = screen.getByRole('img')
    expect(imgRole).toBeInTheDocument()
  })
  
   it('renders popover with resetted role', () => {
    render(<Attention popover isShowing={true} role=''><p>I am a popover with resetted role</p></Attention>)
    const imgRole = screen.queryByRole('img')
     expect(imgRole).toBeNull()
   })
})