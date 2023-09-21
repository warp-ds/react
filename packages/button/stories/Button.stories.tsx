import * as React from 'react';
import { Button } from '../src';

const metadata = { title: 'Buttons/Button' };
export default metadata;

export const Example = () => {
  return (
    <div className="flex flex-col space-y-32">
      <div>
        <h3>Primary</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" primary>
          Simple
        </Button>
        <Button className="mr-32" primary href="https://google.com">
          Simple href
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" primary loading>
          Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" primary small>
          Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" primary small loading>
          Small Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" primary quiet>
          Quiet
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" primary quiet small>
          Quiet Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" primary quiet small loading>
          Quiet Small Loading
        </Button>
      </div>
      <div>
        <h3>Secondary</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" secondary>
          Simple
        </Button>
        <Button className="mr-32" secondary href="https://google.com">
          Simple href
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" secondary loading>
          Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" secondary quiet>
          Quiet
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" secondary quiet loading>
          Quiet Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" secondary small>
          Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" secondary small loading>
          Small Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" secondary quiet small>
          Quiet Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" secondary quiet small loading>
          Quiet Small Loading
        </Button>
      </div>
      <div>
        <h3>Negative</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" negative>
        Negative
        </Button>
        <Button className="mr-32" negative href="https://google.com">
          Simple href
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" negative loading>
          Negative Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" negative small>
          Negative Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" negative small loading>
          Negative Small Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" negative quiet>
          Quiet
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" negative quiet loading>
          Quiet Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" negative quiet small>
          Quiet Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" negative quiet small loading>
          Quiet Small Loading
        </Button>
      </div>
      <div>
        <h3>Utility</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" utility>
          Simple
        </Button>
        <Button className="mr-32" utility href="https://google.com">
          Simple href
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" utility loading>
          Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" utility small>
          Small
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" utility small loading>
          Small Loading
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" utility quiet>
          Quiet
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" utility quiet small>
          Quiet small
        </Button>
      </div>
      <div>
        <h3>Pill</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" pill>
          Simple pill
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" pill small>
          Simple small pill
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" pill loading>
          Loading
        </Button>
      </div>
      <div>
        <h3>Link</h3>
        {/* @ts-ignore */}
        <Button className="mr-32" link>
          Simple
        </Button>
        {/* @ts-ignore */}
        <Button className="mr-32" link small>
          Simple link small
        </Button>
      </div>
      <div>
        <h3>Link (href) styled as button</h3>
        {/* @ts-ignore */}
        <Button
          className="mr-32"
          href="https://google.com/"
          target="_blank"
        >
          Simple link as button
        </Button>
        {/* @ts-ignore */}
        <Button
          primary
          className="mr-32"
          href="https://google.com/"
          target="_blank"
        >
          Simple link as button primary
        </Button>
        {/* @ts-ignore */}
        <Button
          negative
          className="mr-32"
          href="https://google.com/"
          target="_blank"
        >
          Simple link as button negative
        </Button>
        {/* @ts-ignore */}
        <Button
          utility
          className="mr-32"
          href="https://google.com/"
          target="_blank"
        >
          Simple link as button utility
        </Button>
        {/* @ts-ignore */}
        <Button
          className="mr-32"
          href="https://google.com/"
          target="_blank"
          onClick={() => alert("you've clicked")}
        >
          Simple link with onClick
        </Button>
      </div>
      <div>
        <h3>Disabled button</h3>
        {/* @ts-ignore */}
        <Button
          disabled
          className="mr-32"
          href="https://google.com/"
          target="_blank"
        >
          Simple
        </Button>
        {/* @ts-ignore */}
        <Button
          secondary
          small
          quiet
          disabled
          className="mr-32"
          target="_blank"
        >
          Disabled small quiet secondary button
        </Button>
        {/* @ts-ignore */}
        <Button
          primary
          disabled
          className="mr-32"
          target="_blank"
        >
          Disabled button primary
        </Button>
               {/* @ts-ignore */}
        <Button
          primary
          small
          disabled
          className="mr-32"
          target="_blank"
        >
          Disabled button small primary
        </Button>
        {/* @ts-ignore */}
        <Button
          negative
          disabled
          className="mr-32"
          target="_blank"
        >
          Disabled button negative
        </Button>
        {/* @ts-ignore */}
        <Button
          utility
          disabled
          className="mr-32"
          target="_blank"
        >
          Disabled button utility
        </Button>
        {/* @ts-ignore */}
        <Button
          utility
          disabled
          small
          className="mr-32"
          target="_blank"
        >
          Disabled button utility small
        </Button>
      </div>
      <div>
      <h3>Full width button</h3>
      {/* @ts-ignore */}
      <Button fullWidth className="mr-32" primary>
          Full width
        </Button>
      </div>
    </div>
  );
};