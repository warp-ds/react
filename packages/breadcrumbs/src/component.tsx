import * as React from 'react';
import type { BreadcrumbsProps } from './props';
import { interleave } from '@warp-ds/core/breadcrumbs';
import { breadcrumbs as ccBreadcrumbs } from "@warp-ds/css/component-classes";

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { children, className, ...rest } = props;
  const ariaLabel = props['aria-label'] || 'Her er du';

  // Handles arrays of nodes passed as children
  const flattenedChildren = children.flat(Infinity);
  const styledChildren = flattenedChildren.map((child, index) => {
      if (React.isValidElement(child)) {
        const ccClasses = child.type === "a" ? ccBreadcrumbs.link : ccBreadcrumbs.text;
        const newClasses = child.props.className ? `${child.props.className} ${ccClasses}` : ccClasses;

       // To update a prop on React child element, we need to clone that Element first
        const styledChild = React.cloneElement(child as React.ReactElement, { className: newClasses });
        return styledChild;
      }

      const isLastEl = index === flattenedChildren.length - 1;

      return <span className={ccBreadcrumbs.text} aria-current={isLastEl ? "page" : undefined}>{child}</span>;
    }
  )

  return (
    <nav
      className={className}
      aria-label={ariaLabel}
      {...rest}
    >
      <h2 className={ccBreadcrumbs.a11y}>{ariaLabel}</h2>
      <div className={ccBreadcrumbs.wrapper}>
        {interleave(
          styledChildren,
          <span aria-hidden className={ccBreadcrumbs.separator}>
            /
          </span>,
        ).map((element, index) => (
          <React.Fragment key={index}>{element}</React.Fragment>
        ))}
      </div>
    </nav>
  );
};
