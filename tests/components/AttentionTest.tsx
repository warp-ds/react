import React, { useState, useEffect } from 'react';
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { Attention } from '../../packages/attention/src/component';
import { Box } from '../../packages/box/src/component';
import { Button } from '../../packages/button/src/component';
import { attention as ccAttention } from '@warp-ds/css/component-classes';
import { Directions } from '@warp-ds/core/attention';
import { activeAttentionType, pointingAtDirection, useAutoUpdatePosition, getVariant } from '../../packages/_helpers/attention';

const onClickFunction = vi.fn();
const mockTargetEl = { current: document.createElement('div') };
let mockIsShowing = false;
const mockPlacement: Directions = 'bottom-end';

describe('Attention component', () => {
  beforeEach(() => {
    mockIsShowing = false;
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
              <h1>I am a box full of info</h1>
            </Box>
          </div>
          <Attention
            highlight
            canClose
            onDismiss={() => {
              mockIsShowing = false;
              onClickFunction(mockIsShowing);
            }}
            placement={mockPlacement}
            isShowing={mockIsShowing}
            targetEl={mockTargetEl}
          >
            <p>I'm a highlight that can dismiss itself</p>
          </Attention>
        </div>
      </div>,
    );
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Attention component renders with mocked props', () => {
    const attentionEl = screen.getByTestId('attention-el');

    expect(attentionEl).toBeInTheDocument();
    expect(mockTargetEl).toBeDefined();
    expect(mockIsShowing).toBe(false);
  });

  it('Button onClick toggles Attentions show state', () => {
    const button = screen.getByText('Show an onboarding hint');

    expect(mockIsShowing).toBe(false);

    fireEvent.click(button);

    expect(onClickFunction).toHaveBeenCalledTimes(1);
    expect(onClickFunction).toHaveBeenCalledWith(true);
    expect(mockIsShowing).toBe(true);

    fireEvent.click(button);
    expect(onClickFunction).toHaveBeenCalledTimes(2);
    expect(onClickFunction).toHaveBeenCalledWith(false);
    expect(mockIsShowing).toBe(false);
  });

  it('onDismiss sets Attentions show state to false', () => {
    const button = screen.getByText('Show an onboarding hint');

    expect(mockIsShowing).toBe(false);

    fireEvent.click(button);

    expect(onClickFunction).toHaveBeenCalledTimes(1);
    expect(onClickFunction).toHaveBeenCalledWith(true);
    expect(mockIsShowing).toBe(true);

    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    expect(onClickFunction).toHaveBeenCalledTimes(2);
    expect(onClickFunction).toHaveBeenCalledWith(false);
    expect(mockIsShowing).toBe(false);
  });

  it('onKeyDown "Escape" calls onDismiss() and sets Attentions show state to false', () => {
    const button = screen.getByText('Show an onboarding hint');
    const closeButton = screen.getByLabelText('Close');

    fireEvent.click(button);
    expect(onClickFunction).toHaveBeenCalledTimes(1);
    expect(onClickFunction).toHaveBeenCalledWith(true);
    expect(mockIsShowing).toBe(true);

    fireEvent.keyDown(closeButton, { key: 'Escape' });
    expect(onClickFunction).toHaveBeenCalledTimes(2);
    expect(onClickFunction).toHaveBeenCalledWith(false);
    expect(mockIsShowing).toBe(false);
  });

  it('should not show Attention component when isShowing is false', () => {
    const attentionEl = screen.getByTestId('attention-el');
    expect(attentionEl).toHaveClass('hidden');
    expect(attentionEl).toHaveClass('invisible');
  });

  it('should show attention component when isShowing is true', () => {
    const { container } = render(
      <Attention callout placement="right" isShowing={(mockIsShowing = true)}>
        <p>I am a callout</p>
      </Attention>,
    );
    expect(container.firstChild).not.toHaveClass('hidden');
    expect(container.firstChild).not.toHaveClass('invisible');
  });

  it('should update actualDirection state', () => {
    const { result } = renderHook(() => {
      const [actualDirection, setActualDirection] = useState(mockPlacement);
      useEffect(() => {
        setActualDirection('top');
      }, []);
      return actualDirection;
    });
    expect(result.current).toBe('top');
  });
  it('should update placement prop', () => {
    const { result, rerender } = renderHook((props = { isShowing: true, popover: true, placement: 'top-start' }) => props, {
      initialProps: { isShowing: true, popover: true, placement: 'bottom-end' },
    });
    expect(result.current).toEqual({ isShowing: true, popover: true, placement: 'bottom-end' });
    rerender();
    expect(result.current).toEqual({ isShowing: true, popover: true, placement: 'top-start' });
  });
});

describe('targetEl', () => {
  it('should not render Attention component when callout is false and targetEl is undefined', () => {
    render(
      <Attention highlight placement="bottom">
        <p>I am a highlight</p>
      </Attention>,
    );
    const attentionEl = screen.queryByTestId('attention-el');
    expect(attentionEl).toBeNull();
  });
  it('should render Attention component when callout is true, even though targetEl is undefined', () => {
    render(
      <Attention callout placement="right">
        <p>I am a callout</p>
      </Attention>,
    );
    const attentionEl = screen.getByTestId('attention-el');
    expect(attentionEl).toBeInTheDocument();
  });
  it('should render Attention component when targetEl is defined and callout is false', () => {
    render(
      <Attention popover placement="top-start" targetEl={mockTargetEl}>
        <p>I am a popover</p>
      </Attention>,
    );
    const attentionEl = screen.getByTestId('attention-el');
    expect(attentionEl).toBeInTheDocument();
  });
});
describe('useEffect for autoUpdatePosition', () => {
  it('should call autoUpdatePosition when isShowing, targetEl, and attenttionEl are defined', () => {
    const targetEl: any = document.createElement('div');
    const attentionEl: any = document.createElement('div');
    const isShowing = true;
    const autoUpdatePositionMock = vi.fn();
    const mockedAttentionState = {};

    const { unmount } = renderHook(() => useAutoUpdatePosition(targetEl, isShowing, attentionEl, autoUpdatePositionMock, mockedAttentionState));
    expect(autoUpdatePositionMock).toHaveBeenCalled();

    unmount();
  });
  it('should not call autoUpdatePosition if isShowing, targetEl, or attenttionEl is undefined', () => {
    const targetEl: any = undefined;
    const attentionEl: any = document.createElement('div');
    const isShowing = true;
    const autoUpdatePositionMock = vi.fn();
    const mockedAttentionState = {};

    const { unmount } = renderHook(() => useAutoUpdatePosition(targetEl, isShowing, attentionEl, autoUpdatePositionMock, mockedAttentionState));
    expect(autoUpdatePositionMock).not.toHaveBeenCalled();

    unmount();
  });
  it('should not call autoUpdatePosition if isShowing is false', () => {
    const targetEl: any = document.createElement('div');
    const attentionEl: any = document.createElement('div');
    const isShowing = false;
    const autoUpdatePositionMock = vi.fn();
    const mockedAttentionState = {};

    const { unmount } = renderHook(() => useAutoUpdatePosition(targetEl, isShowing, attentionEl, autoUpdatePositionMock, mockedAttentionState));
    expect(autoUpdatePositionMock).not.toHaveBeenCalled();

    unmount();
  });
});

describe('getVariant function', () => {
  const variantClasses = {
    callout: {
      wrapper: ccAttention.callout,
      arrow: ccAttention.arrowCallout,
    },
    highlight: {
      wrapper: ccAttention.highlight,
      arrow: ccAttention.arrowHighlight,
    },
    tooltip: {
      wrapper: ccAttention.tooltip,
      arrow: ccAttention.arrowTooltip,
    },
    popover: {
      wrapper: ccAttention.popover,
      arrow: ccAttention.arrowPopover,
    },
  };

  it('should return the correct variant based on variantProps', () => {
    const variantProps = {
      callout: true,
      highlight: false,
      tooltip: false,
      popover: false,
    };

    const result = getVariant(variantProps, variantClasses);

    expect(result).toBe('callout');
  });
});

describe('pointingAtDirection function returns correct message based on direction', () => {
  type TestCase = {
    direction: Directions;
    expectedText: string;
  };
  const testCases: TestCase[] = [
    { direction: 'top', expectedText: 'pointing down' },
    { direction: 'top-start', expectedText: 'pointing down' },
    { direction: 'top-end', expectedText: 'pointing down' },
    { direction: 'right', expectedText: 'pointing left' },
    { direction: 'right-start', expectedText: 'pointing left' },
    { direction: 'right-end', expectedText: 'pointing left' },
    { direction: 'left', expectedText: 'pointing right' },
    { direction: 'left-start', expectedText: 'pointing right' },
    { direction: 'left-end', expectedText: 'pointing right' },
    { direction: 'bottom', expectedText: 'pointing up' },
    { direction: 'bottom-start', expectedText: 'pointing up' },
    { direction: 'bottom-end', expectedText: 'pointing up' },
    { direction: 'unknown', expectedText: '' },
  ];

  testCases.forEach(({ direction, expectedText }) => {
    it(`should return correct message for ${direction} direction`, () => {
      const returnedText = pointingAtDirection(direction);
      expect(returnedText).toBeDefined();
      expect(returnedText).toBe(expectedText);
    });
  });
});

describe('activeAttentionType function returns correct message based on prop', () => {
  const testCases = [
    {
      props: {
        tooltip: true,
        callout: false,
        popover: false,
        highlight: false,
      },
      expectedText: 'A black speech bubble providing complementary information',
    },
    {
      props: {
        tooltip: false,
        callout: true,
        popover: false,
        highlight: false,
      },
      expectedText: 'A green speech bubble introducing something new',
    },
    {
      props: {
        tooltip: false,
        callout: false,
        popover: true,
        highlight: false,
      },
      expectedText: 'A white speech bubble providing additional information',
    },
    {
      props: {
        tooltip: false,
        callout: false,
        popover: false,
        highlight: true,
      },
      expectedText: 'An attention speech bubble with important information',
    },
    {
      props: {
        tooltip: false,
        callout: false,
        popover: false,
        highlight: false,
      },
      expectedText: '',
    },
  ];

  testCases.forEach(({ props, expectedText }) => {
    it(`should return correct message for ${Object.keys(props).find((key) => props[key]) || 'unknown'} variant`, () => {
      const returnedText = activeAttentionType(props);
      expect(returnedText).toBeDefined();
      expect(returnedText).toBe(expectedText);
    });
  });
});

describe('Different variants of Attention component', () => {
  it('should show Attention component as a callout', () => {
    render(
      <Attention callout placement="right">
        <p>I am a callout</p>
      </Attention>,
    );
    const attentionEl = screen.getByTestId('attention-el').firstChild;
    expect(attentionEl).toHaveClass(ccAttention.callout);
  });

  it('should show Attention component as a highlight', () => {
    render(
      <Attention highlight placement="bottom" targetEl={mockTargetEl}>
        <p>I am a highlight</p>
      </Attention>,
    );
    const attentionEl = screen.getByTestId('attention-el').firstChild;
    expect(attentionEl).toHaveClass(ccAttention.highlight);
  });
  it('should show Attention component as a tooltip', () => {
    render(
      <Attention tooltip placement="top" targetEl={mockTargetEl}>
        <p>I am a tooltip</p>
      </Attention>,
    );
    const attentionEl = screen.getByTestId('attention-el').firstChild;
    expect(attentionEl).toHaveClass(ccAttention.tooltip);
  });
  it('should show Attention component as a popover', () => {
    render(
      <Attention popover placement="bottom" targetEl={mockTargetEl}>
        <p>I am a popover</p>
      </Attention>,
    );
    const attentionEl = screen.getByTestId('attention-el').firstChild;
    expect(attentionEl).toHaveClass(ccAttention.popover);
  });
  it('should not show Attention component as a popover', () => {
    render(
      <Attention tooltip placement="bottom" targetEl={mockTargetEl}>
        <p>I am a NOT a popover</p>
      </Attention>,
    );
    const attentionEl = screen.getByTestId('attention-el').firstChild;
    expect(attentionEl).not.toHaveClass(ccAttention.popover);
  });
});

describe('ArrowEl', () => {
  it('should position the arrowEl of the AttentionEl on the opposite side of depending on the placement prop', () => {
    render(
      <Attention popover placement="right" targetEl={mockTargetEl}>
        <p>I am a popover on the left</p>
      </Attention>,
    );
    const arrowEl = screen.getByTestId('attention-arrow-el');
    expect(arrowEl).toHaveClass('-left-[8px]');
  });
  it('should position the arrowEl of the AttentionEl on the opposite side of depending on the placement prop', () => {
    render(
      <Attention popover placement="bottom" targetEl={mockTargetEl}>
        <p>I am a popover on the left</p>
      </Attention>,
    );
    const arrowEl = screen.getByTestId('attention-arrow-el');
    expect(arrowEl).toHaveClass('-top-[8px]');
  });
  it('should not position the arrowEl to the top if AttentionEl has placement="right"', () => {
    render(
      <Attention popover placement="right" targetEl={mockTargetEl}>
        <p>I am a popover on the left</p>
      </Attention>,
    );
    const arrowEl = screen.getByTestId('attention-arrow-el');
    expect(arrowEl).not.toHaveClass('-top-[8px]');
  });
});

describe('Usage of aria-label attribute', () => {
  it('renders popover with default aria-label', () => {
    render(
      <Attention popover isShowing={true} targetEl={mockTargetEl}>
        <p>I am a popover with default aria-label</p>
      </Attention>,
    );
    const defaultAriaLabel = screen.getByLabelText('A white speech bubble providing additional information pointing up');
    expect(defaultAriaLabel).toBeInTheDocument();
  });

  it('renders tooltip with default aria-label', () => {
    render(
      <Attention tooltip isShowing={true} targetEl={mockTargetEl}>
        <p>I am a tooltip with default aria-label</p>
      </Attention>,
    );
    const defaultAriaLabel = screen.getByLabelText('A black speech bubble providing complementary information pointing up');
    expect(defaultAriaLabel).toBeInTheDocument();
  });

  it('renders callout with default aria-label', () => {
    render(
      <Attention callout placement="right" isShowing={true}>
        <p>I am a callout with default aria-label</p>
      </Attention>,
    );
    const defaultAriaLabel = screen.getByLabelText('A green speech bubble introducing something new pointing left');
    expect(defaultAriaLabel).toBeInTheDocument();
  });

  it('renders highlight with default aria-label', () => {
    render(
      <Attention highlight isShowing={true} targetEl={mockTargetEl}>
        <p>I am a highlight with default aria-label</p>
      </Attention>,
    );
    const defaultAriaLabel = screen.getByLabelText('An attention speech bubble with important information pointing up');
    expect(defaultAriaLabel).toBeInTheDocument();
  });

  it('renders highlight with updated default aria-label when setting placement prop', () => {
    render(
      <Attention highlight placement="left" isShowing={true} targetEl={mockTargetEl}>
        <p>I am a highlight with default aria-label</p>
      </Attention>,
    );
    const defaultAriaLabel = screen.getByLabelText('An attention speech bubble with important information pointing right');
    expect(defaultAriaLabel).toBeInTheDocument();
  });

  it('renders popover with resetted aria-label', () => {
    render(
      <Attention popover isShowing={true} aria-label="" targetEl={mockTargetEl}>
        <p>I am a popover with resetted aria-label</p>
      </Attention>,
    );
    const defaultAriaLabel = screen.queryByLabelText('A white speech bubble providing additional information pointing up');
    expect(defaultAriaLabel).toBeNull();
  });
});

describe('Usage of role attribute', () => {
  it('renders with role set to "tooltip" if tooltip', () => {
    render(
      <Attention tooltip isShowing={true} targetEl={mockTargetEl}>
        <p>I am a tooltip</p>
      </Attention>,
    );
    const tooltipRole = screen.getByRole('tooltip');
    expect(tooltipRole).toBeInTheDocument();
  });

  it('renders popover with role set to "img" if not tooltip', () => {
    render(
      <Attention popover isShowing={true} targetEl={mockTargetEl}>
        <p>I am a popover with img role</p>
      </Attention>,
    );
    const imgRole = screen.getByRole('img');
    expect(imgRole).toBeInTheDocument();
  });

  it('renders popover with resetted role', () => {
    render(
      <Attention popover isShowing={true} role="" targetEl={mockTargetEl}>
        <p>I am a popover with resetted role</p>
      </Attention>,
    );
    const imgRole = screen.queryByRole('img');
    expect(imgRole).toBeNull();
  });
});
