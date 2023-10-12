import React from 'react';
import { Button } from '../../button/src';
import { Alert, AlertProps } from '../src';

const metadata = { title: 'FeedbackIndicators/Alert' };
export default metadata;

export const Variants = () => (
  <div className="flex flex-col gap-y-16">
    <div>
      <h3>Negative</h3>
      <Alert type="negative" show>
        This is "negative" variant of the alert component
      </Alert>
    </div>
    <div>
      <h3>Positive</h3>
      <Alert type="positive" show role="status">
        This is "positive" variant of the alert component
      </Alert>
    </div>
    <div>
      <h3>Warning</h3>
      <Alert type="warning" show>
        This is "warning" variant of the alert component
      </Alert>
    </div>
    <div>
      <h3>Info</h3>
      <Alert type="info" show role="status">
        This is "info" variant of the alert component
      </Alert>
    </div>
  </div>
);

const InteractiveContent = ({type}: Pick<AlertProps, "type">) => (
  <>
    <h4 className="h5">This is {type} variant of the alert component</h4>
    <p>With an additional description</p>
    <div className="mt-8 space-x-8">
      <Button small>Primary CTA</Button>
      <Button small secondary quiet>
        Secondary
      </Button>
    </div>
  </>
);

export const WithInteractiveContent = () => (
  <div className="flex flex-col gap-y-16">
    <div>
      <h3>Negative</h3>
      <Alert type="negative" show>
        <InteractiveContent type="negative"/>
      </Alert>
    </div>
    <div>
      <h3>Positive</h3>
      <Alert type="positive" show role="status">
        <InteractiveContent type="positive" />
      </Alert>
    </div>
    <div>
      <h3>Warning</h3>
      <Alert type="warning" show>
        <InteractiveContent type="warning"/>
      </Alert>
    </div>
    <div>
      <h3>Info</h3>
      <Alert type="info" show role="status">
        <InteractiveContent type="info"/>
      </Alert>
    </div>
  </div>
);

export const WithDefaultRole = () => {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <h3>Example with default role="alert"</h3>
      <Button
          className="mb-16"
          small
          primary
          onClick={() => {setShow(!show)}}
          aria-controls="negative-alert"
          aria-expanded={show}
        >
          {show ? 'Hide negative alert' : 'Show negative alert'}
        </Button>

      <Alert id="negative-alert" type="negative" show={show}>
        <h4 className="h5">This is "negative" variant of the alert component</h4>
        <p>With an additional description</p>
      </Alert>
    </>
  );
}

export const WithOverriddenRole = () => {
  const [show, setShow] = React.useState(true);

  return (
    <>
      <h3>Example with role="alert" on a descendant element</h3>
      <Button
        className="mb-16"
        small
        primary
        onClick={() => {setShow(!show)}}
        aria-controls="overriden-role-example-alert"
        aria-expanded={show}
      >
        {show ? 'Hide warning alert' : 'Show warning alert'}
      </Button>
      <Alert id="overriden-role-example-alert" type="warning" show={show} role="">
        <h4 className="h5">This is "warning" variant of the alert component</h4>
        <p>With an additional description that is not that important</p>
      </Alert>
    </>
  );
};
