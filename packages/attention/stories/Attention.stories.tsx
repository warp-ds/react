import React from 'react';

import IconInfo16 from '@warp-ds/icons/react/info-16';

import { Box } from '../../box/src';
import { Button } from '../../button/src';
import { Attention } from '../src';

const metadata = { title: 'Overlays/Attention' };
export default metadata;

export function Callout() {
  return (
    <div className="flex items-center">
      <Box info>
        <h1 aria-details="callout-bubbletext">I am a box full of info</h1>
      </Box>
      <Attention callout placement="right" isShowing={true} className="ml-8">
        <p id="callout-bubbletext" style={{ width: 200 }}>
          I'm a callout because that box over there is new or something
        </p>
      </Attention>
    </div>
  );
}
export function CalloutResettingRoleAndAriaLabel() {
  return (
    <div className="flex items-center">
      <Box info>
        <h1 aria-details="callout-reset-bubbletext">I am a box full of info</h1>
      </Box>
      <Attention callout role="" aria-label="" placement="right" isShowing={true} className="ml-8">
        <p id="callout-reset-bubbletext" role="img" style={{ width: 200 }}>
          I'm a callout speech bubble with resetted role and aria-label attributes pointing left.
        </p>
      </Attention>
    </div>
  );
}

export function Highlight() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col justify-between h-[200] space-y-20">
      <Button
        small
        aria-expanded={show}
        aria-controls="highlight-attention-example"
        utility
        onClick={() => setShow(!show)}
        className="w-max mb-0">
        Show an onboarding hint
      </Button>
      <div>
        <div ref={targetEl} className="w-1/3">
          <Box info>
            <h1>I am a box full with lots of info to show you how the attention element is positioned on the right-top corner.</h1>
          </Box>
        </div>
        <Attention
          highlight
          placement="right-start"
          isShowing={show}
          targetEl={targetEl}
          id="highlight-attention-example"
          className="max-w-[359px]">
          <p>I'm a highlight because that box over there is new or something and I need to have a lot of text!</p>
        </Attention>
      </div>
    </div>
  );
}

export function DismissibleHighlight() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex flex-col justify-between h-[200]">
      <Button
        small
        aria-expanded={show}
        aria-controls="highlight-attention-example"
        utility
        onClick={() => setShow(!show)}
        className="w-max mb-0">
        Show an onboarding hint
      </Button>
      <div>
        <div ref={targetEl} className="w-2/3 mt-96">
          <Box info>
            <h1>I am a box full of info that shows how the highlight can change position on scroll/resize</h1>
          </Box>
        </div>
        <Attention
          highlight
          canClose
          onDismiss={() => setShow(false)}
          placement="bottom"
          isShowing={show}
          targetEl={targetEl}
          flip={true}
          crossAxis={true}
          fallbackPlacements={['right', 'top']}
          id="highlight-attention-example">
          <p>I'm a highlight that can dismiss itself</p>
        </Attention>
      </div>
    </div>
  );
}

export function Tooltip() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <h1 className="w-max mb-0" ref={targetEl}>
        <Button
          aria-describedby="tooltip-bubbletext"
          aria-expanded="true"
          type="button"
          className="bg-transparent"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}>
          hover this for useless info
        </Button>
      </h1>
      <Attention tooltip placement="bottom" targetEl={targetEl} isShowing={show}>
        <p id="tooltip-bubbletext">lol i am a tooltip</p>
      </Attention>
    </div>
  );
}

export function Popover() {
  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const targetEl = React.useRef<any>(null);

  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', onBlurHandler);
    return () => {
      document.removeEventListener('mousedown', onBlurHandler);
    };
  });

  return (
    <div className="flex items-center justify-center">
      <div ref={containerRef}>
        <Button
          small
          aria-expanded={show}
          aria-controls="popover-attention-example"
          utility
          onClick={() => setShow(!show)}
          className="w-max mb-0"
          ref={targetEl}>
          Open menu
        </Button>
        <Attention popover placement="bottom" targetEl={targetEl} isShowing={show} id="popover-attention-example">
          <ul className="bg-white w-full text-center">
            <li className="p-2 px-40">Hello</li>
            <li className="p-2 px-40">World</li>
          </ul>
        </Attention>
      </div>
    </div>
  );
}

export function PopoverIconAsTargetEl() {
  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const targetEl = React.useRef<any>(null);

  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', onBlurHandler);
    return () => {
      document.removeEventListener('mousedown', onBlurHandler);
    };
  });

  return (
    <div className="flex items-center justify-center">
      <div ref={containerRef}>
        <Button
          aria-expanded={show}
          aria-controls="popover-icon-target-el-attention-example"
          utility
          quiet
          onClick={() => setShow(!show)}
          className="w-max mb-0"
          ref={targetEl}>
          <IconInfo16 />
        </Button>
        <Attention
          popover
          placement="bottom-end"
          distance={2}
          skidding={12}
          targetEl={targetEl}
          isShowing={show}
          id="popover-icon-target-el-attention-example">
          <ul className="bg-white w-full text-center">
            <li className="p-2 px-40">Hello</li>
            <li className="p-2 px-40">World</li>
          </ul>
        </Attention>
      </div>
    </div>
  );
}
