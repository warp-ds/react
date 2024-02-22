import { classNames } from "@chbphone55/classnames";
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';
import { usePagination } from './PaginationContainer.js';
import IconChevronLeft16 from '@warp-ds/icons/react/chevron-left-16';
import React, { Ref } from 'react';

type PrevPageProps = {
  /**
   * @default Previous page
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

const PrevPage = React.forwardRef<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  PrevPageProps
>(({ className, ...props }, ref) => {
  const { currentPage } = usePagination();

  if (currentPage === 1) {
    return null;
  }

  const ariaLabel = 
    props['aria-label'] ??
    i18n._({
      id: 'pagination.aria.prev-page',
      message: 'Previous page',
      comment:
        'Default screenreader message for previous page link in the pagination component',
    });

  const iconSuffix =
    i18n._({
      id: 'pagination.aria.icon-suffix',
      message: 'icon',
      comment:
        'Suffix added at the end of icon titles when img semantics are lost on an html element',
    });

  return (
    <a
      {...props}
      ref={ref as Ref<HTMLAnchorElement>}
      className={classNames(className, ccPagination.link, ccPagination.icon)}
      rel="prev nofollow"
    >
      <span className={ccPagination.a11y}>
        {ariaLabel},
      </span>
      <IconChevronLeft16 />
      <span className={ccPagination.a11y}>{iconSuffix}</span>
    </a>
  );
});

export default PrevPage;
