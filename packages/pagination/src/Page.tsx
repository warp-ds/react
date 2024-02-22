import { classNames } from "@chbphone55/classnames";
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';
import React, { Ref } from 'react';

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
>(({ page = 1, className, currentPage, ...props }, ref) => {

  const isCurrentPage = page === currentPage;

  const ariaLabel = props['aria-label'] ?? i18n._({
    id: 'pagination.aria.page',
    message: 'Page {currentPage}',
    values: { currentPage: page },
    comment:
      'Default screenreader message for page link in the pagination component',
  });

  return (
    <a
      aria-label={ariaLabel}
      {...props}
      ref={ref as Ref<HTMLAnchorElement>}
      rel="nofollow"
      aria-current={isCurrentPage ? 'page' : undefined}
      className={classNames(className, ccPagination.link, [isCurrentPage ? ccPagination.active : ccPagination.notActive])}
    >
      {page}
    </a>
  );
});

export default Page;
