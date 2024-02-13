import { classNames } from "@chbphone55/classnames";
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';
import { usePagination } from './PaginationContainer.js';
import IconChevronDoubleLeft16 from '@warp-ds/icons/react/chevron-double-left-16';
import React, { Ref } from 'react';

type FirstPageProps = {
  /**
   * @default First page
   */
  'aria-label'?: string;

  /** Additional CSS class for the element. */
  className?: string;

  /** The href for the anchor element. */
  href: string;

  /** Additional CSS styles for the element. */
  style?: React.CSSProperties;

  /** onClick function */
  onClick: (event: React.UIEvent<HTMLElement>) => void;
};

const FirstPage = React.forwardRef<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  FirstPageProps
>(({ className, ...props }, ref) => {
  const { currentPage } = usePagination();

  if (currentPage <= 2) {
    return null;
  }

  const ariaLabel = props['aria-label'] ?? i18n._({
    id: 'pagination.aria.first-page',
    message: 'First page',
    comment:
      'Default screenreader message for first page button in the pagination component',
  });

  return (
    <a
      ref={ref as Ref<HTMLAnchorElement>}
      {...props}
      aria-label={ariaLabel}
      className={classNames(className, ccPagination.button, ccPagination.icon)}
      rel="start"
    >
      <IconChevronDoubleLeft16 />
    </a>
  );
});

export default FirstPage;
