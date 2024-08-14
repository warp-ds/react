import * as React from 'react';

import { i18n } from '@lingui/core';
import { interleave } from '@warp-ds/core/breadcrumbs';
import { breadcrumbs as ccBreadcrumbs } from '@warp-ds/css/component-classes';

import { activateI18n } from '../../i18n.js';

import { messages as daMessages } from './locales/da/messages.mjs';
import { messages as enMessages } from './locales/en/messages.mjs';
import { messages as fiMessages } from './locales/fi/messages.mjs';
import { messages as nbMessages } from './locales/nb/messages.mjs';
import type { BreadcrumbsProps } from './props.js';

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, className, ...rest } = props;

  activateI18n(enMessages, nbMessages, fiMessages, daMessages);

  const ariaLabel =
    props['aria-label'] ||
    i18n._({
      id: 'breadcrumbs.ariaLabel',
      message: 'You are here',
      comment: 'Default screenreader message for the breadcrumb component',
    });

  // Handles arrays of nodes passed as children
  const flattenedChildren = children.flat(Infinity);
  const styledChildren = flattenedChildren.map((child, index) => {
    if (React.isValidElement(child)) {
      const ccClasses = child.type === 'a' ? ccBreadcrumbs.link : ccBreadcrumbs.text;
      const newClasses = child.props.className ? `${child.props.className} ${ccClasses}` : ccClasses;

      // To update a prop on React child element, we need to clone that Element first
      const styledChild = React.cloneElement(child as React.ReactElement, { className: newClasses });
      return styledChild;
    }

    const isLastEl = index === flattenedChildren.length - 1;

    return (
      <span className={ccBreadcrumbs.text} aria-current={isLastEl ? 'page' : undefined}>
        {child}
      </span>
    );
  });

  return (
    <nav className={className} aria-labelledby="breadCrumbLabel" {...rest}>
      <h2 id="breadCrumbLabel" className={ccBreadcrumbs.a11y}>
        {ariaLabel}
      </h2>
      <div className={ccBreadcrumbs.wrapper}>
        {interleave(styledChildren, <span className={ccBreadcrumbs.separator}>/</span>).map((element, index) => (
          <React.Fragment key={index}>{element}</React.Fragment>
        ))}
      </div>
    </nav>
  );
};
