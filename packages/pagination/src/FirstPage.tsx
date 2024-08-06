import React, { Ref } from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';
import IconChevronDoubleLeft16 from '@warp-ds/icons/react/chevron-double-left-16';

import { usePagination } from './PaginationContainer.js';

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

const FirstPage = React.forwardRef<React.AnchorHTMLAttributes<HTMLAnchorElement>, FirstPageProps>(({ className, ...props }, ref) => {
  const { currentPage } = usePagination();

  if (currentPage <= 2) {
    return null;
  }

  const ariaLabel =
    props['aria-label'] ??
    i18n._({
      id: 'pagination.aria.first-page',
      message: 'First page',
      comment: 'Default screenreader message for first page link in the pagination component',
    });

  const iconSuffix = i18n._({
    id: 'pagination.aria.icon-suffix',
    message: 'icon',
    comment: 'Suffix added at the end of icon titles when img semantics are lost on an html element',
  });

  return (
    <a ref={ref as Ref<HTMLAnchorElement>} {...props} className={classNames(className, [ccPagination.link, ccPagination.icon])} rel="start">
      <span className={ccPagination.a11y}>{ariaLabel},</span>
      <IconChevronDoubleLeft16 />
      <span className={ccPagination.a11y}>{iconSuffix}</span>
    </a>
  );
});

export default FirstPage;
