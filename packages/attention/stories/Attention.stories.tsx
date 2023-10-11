import React from "react";
import { Attention } from "../src";
import { Box } from "../../box/src";
import { Button } from "../../button/src";

const metadata = { title: "Overlays/Attention" };
export default metadata;

export function Callout() {
  return (
    <div className="flex items-center">
      <Box info>
        <h1>I am a box full of info</h1>
      </Box>
      <Attention
        callout
        placement="right"
        ariaLabel="Green speech bubble pointing left"
        ariaRole="img"
        isShowing={true}
      >
        <p style={{ width: 200 }}>
          I'm a callout because that box over there is new or something
        </p>
      </Attention>
    </div>
  );
}

export function Tooltip() {
  const [show, setShow] = React.useState(false);
  const targetEl = React.useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShow(false);
    }
  };

  return (
    <div>
      <h1
        className="w-max mb-0"
        ref={targetEl}
        aria-describedby="tooltip-example"
        aria-hidden={!show}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        hover this for useless info
      </h1>
      <Attention
        tooltip
        ariaDescribedby="tooltip-example"
        ariaLabel="Black speech bubble pointing up"
        ariaRole="tooltip"
        placement="bottom"
        targetEl={targetEl}
        isShowing={show}
      >
        <p>lol i am a tooltip</p>
      </Attention>
    </div>
  );
}

export function Popover() {
  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef();
  const targetEl = React.useRef();

  React.useEffect(() => {
    function onBlurHandler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", onBlurHandler);
    return () => {
      document.removeEventListener("mousedown", onBlurHandler);
    };
  });

  return (
    <div ref={containerRef}>
      <Button
        small
        aria-expanded={show}
        aria-controls="pop-over-attention-example"
        utility
        onClick={() => setShow(!show)}
        className="w-max mb-0"
        ref={targetEl}
      >
        Open menu
      </Button>
      <Attention
        popover
        ariaLabel="White speech bubble pointing up"
        ariaRole="img"
        placement="bottom"
        targetEl={targetEl}
        isShowing={show}
      >
        <ul className="bg-white w-full text-center">
          <li
            tabIndex={0}
            className="p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer"
          >
            Hello
          </li>
          <li
            tabIndex={0}
            className="p-2 px-40 hover:bg-blue-200 hover:text-blue-500 cursor-pointer"
          >
            World
          </li>
        </ul>
      </Attention>
    </div>
  );
}
