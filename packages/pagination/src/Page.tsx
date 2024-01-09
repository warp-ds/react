import { Button } from '../../button/src/index.js';
import { classNames } from "@chbphone55/classnames";
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';
import React from 'react';

export type PageProps = {
  /**
   * @default Page ${page}
   */
  'aria-label'?: string;

  /** Additional CSS class for the element. */
  className?: string;

  currentPage?: number;

  /** The href for the anchor element. */
  href: string;

  page?: number;

  /** Additional CSS styles for the element. */
  style?: React.CSSProperties;

  /** onClick function */
  onClick: (event: React.UIEvent<HTMLElement>) => void;
};

const Page = React.forwardRef<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  PageProps
>(({ page = 0, className, currentPage, ...props }, ref) => {
  if (page < 1) {
    return null;
  }

  const isCurrentPage = page === currentPage;

  const ariaLabel = props['aria-label'] ?? i18n._({
    id: 'pagination.aria.page',
    message: 'Page {currentPage}',
    values: { currentPage },
    comment:
      'Default screenreader message for page button in the pagination component',
  });

  return (
    <Button
      pill
      aria-label={ariaLabel}
      {...props}
      ref={ref}
      rel="nofollow"
      aria-current={isCurrentPage ? 'page' : undefined}
      className={classNames(className, ccPagination.defaultPage, {
        [ccPagination.active]: isCurrentPage,
      })}
    >
      {page}
    </Button>
  );
});

export default Page;
