import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { Attention } from '../../packages/attention/src/component';
import { Box } from '../../packages/box/src/component';
import { Button } from '../../packages/button/src/component';
import { attention as ccAttention } from '@warp-ds/css/component-classes';

const onClickFunction = vi.fn();
const mockTargetEl = { current: document.createElement('div')}
let mockIsShowing = false

describe('Attention component', () => {
  beforeEach(() => {
    render(
      <div>
      <Button
        small
        utility
        onClick={() => {
          mockIsShowing = !mockIsShowing;
          onClickFunction(mockIsShowing);
        }}
      >
        Show an onboarding hint
      </Button>
      <div>
        <div ref={() => mockTargetEl}>
          <Box info>
            <h1>I am a box full with lots of info to show you how the attention element will change its placement in order to stay in view.</h1>
          </Box>
        </div>
        <Attention 
          highlight
          placement='bottom-end'
          isShowing={mockIsShowing}
          targetEl={mockTargetEl}
        >
          <p>
            I'm a highlight because that box over there is new or something and I need to have a lot of text!
          </p>
        </Attention>
      </div>
    </div>
    )
  })

  afterEach(() => {
    vi.resetAllMocks();
  })

  it('Attention component renders with mocked props', () => {
   const attentionElement = screen.getByText("I'm a highlight because that box over there is new or something and I need to have a lot of text!");
   
   expect(attentionElement).toBeInTheDocument();
   expect(mockTargetEl.current).toBeDefined();
   expect(mockIsShowing).toBe(false);
 });

  it('Button onClick toggles Attentions show state', () => {
    const button = screen.getByText('Show an onboarding hint');
    
    expect(mockIsShowing).toBe(false);
    
    fireEvent.click(button);

    expect(onClickFunction).toHaveBeenCalledTimes(1);
    expect(onClickFunction).toHaveBeenCalledWith(true);
    expect(mockIsShowing).toBe(true);
   })


  it('should not show Attention component when isShowing is false', () => {
    const { container } = render(<Attention callout placement='right'><p>I am a callout</p></Attention>)

    expect(container.firstChild).toHaveClass('hidden')
   })

   it('should show attention component when isShowing is true', () => {
    const {container} = render(<Attention callout placement='right' isShowing={true}><p>I am a callout</p></Attention>)

   expect(container.firstChild).not.toHaveClass('hidden')
   })
})

describe('Different variants of Attention component', () => {
  it('should show Attention component as a callout', () => {
    const { container } = render(<Attention callout placement='right'><p>I am a callout</p></Attention>)
    const attentionEl = container.children[0].children[0]
    expect(attentionEl).toHaveClass(ccAttention.callout)
   })

   it('should show Attention component as a highlight', () => {
    const { container } = render(<Attention highlight placement='bottom'><p>I am a highlight</p></Attention>)
    const attentionEl = container.children[0].children[0]

    expect(attentionEl).toHaveClass(ccAttention.highlight)
   })
   it('should show Attention component as a tooltip', () => {
    const { container } = render(<Attention tooltip placement='top'><p>I am a tooltip</p></Attention>)
    const attentionEl = container.children[0].children[0]

    expect(attentionEl).toHaveClass(ccAttention.tooltip)
   })
   it('should show Attention component as a popover', () => {
    const { container } = render(<Attention popover placement='bottom'><p>I am a popover</p></Attention>)
    const attentionEl = container.children[0].children[0]

    expect(attentionEl).toHaveClass(ccAttention.popover)
   })
   it('should not show Attention component as a popover', () => {
    const { container } = render(<Attention tooltip placement='bottom'><p>I am a NOT a popover</p></Attention>)
    const attentionEl = container.children[0].children[0]

    expect(attentionEl).not.toHaveClass(ccAttention.popover)
   })
})

describe('ArrowEl', () => {
  it('should position the arrowEl of the AttentionEl on the opposite side of depending on the placement prop', () => {
    const { container } = render(<Attention popover placement='right'><p>I am a popover on the left</p></Attention>)
    const arrowEl = container.children[0].children[0].children[0]
    expect(arrowEl).toHaveClass('-left-[8px]')
   })
   it('should position the arrowEl of the AttentionEl on the opposite side of depending on the placement prop', () => {
    const { container } = render(<Attention popover placement='bottom'><p>I am a popover on the left</p></Attention>)
    const arrowEl = container.children[0].children[0].children[0]
    expect(arrowEl).toHaveClass('-top-[8px]')
   })
   it('should not position the arrowEl to the top if AttentionEl has placement="right"', () => {
    const { container } = render(<Attention popover placement='right'><p>I am a popover on the left</p></Attention>)
    const arrowEl = container.children[0].children[0].children[0]
    expect(arrowEl).not.toHaveClass('-top-[8px]')
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
