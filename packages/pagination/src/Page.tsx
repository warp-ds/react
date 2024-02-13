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

const Page = (({ page = 0, className, currentPage, ...props }: PageProps) => {
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
    <a
      aria-label={ariaLabel}
      {...props}
      rel="nofollow"
      role="button"
      aria-current={isCurrentPage ? 'page' : undefined}
      className={classNames(className, ccPagination.button, [isCurrentPage ? ccPagination.active : ccPagination.notActive])}
    >
      {page}
    </a>
  );
});

export default Page;
