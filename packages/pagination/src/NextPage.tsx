import { Button } from '../../button/src/index.js';
import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';
import { usePagination } from './PaginationContainer.js';
import IconChevronRight16 from '@warp-ds/icons/react/chevron-right-16';
import React from 'react';

type NextPageProps = {
  /**
   * @default Next page
   */
  'aria-label'?: string;

  /**
   * Butto label to render on mobile
   */
  children?: React.ReactNode;

  /** Additional CSS class for the element. */
  className?: string;

  /** The href for the anchor element. */
  href: string;

  /** Additional CSS styles for the element. */
  style?: React.CSSProperties;

  /** onClick function */
  onClick: (event: React.UIEvent<HTMLElement>) => void;
};

const NextPage = (({ children, className, ...props }: NextPageProps) => {
  const { currentPage, lastPage } = usePagination();

  if (currentPage >= lastPage) {
    return null;
  }

  const ariaLabel = props['aria-label'] ?? i18n._({
    id: 'pagination.aria.next-page',
    message: 'Next page',
    comment:
      'Default screenreader message for next page button in the pagination component',
  });

  const label =
    children ??
    i18n._({
      id: 'pagination.button.next-page',
      message: 'Next page',
      comment:
        'Default message for next page button in the pagination component',
    });

  return (
    <>
      {currentPage <= 1 && (
        <Button
          link
          {...props}
          rel="next nofollow"
          className={classNames(ccPagination.firstPageButton, className)}
        >
          <span className={ccPagination.firstPageLabel}>{label}</span>
        </Button>
      )}
      <a
        aria-label={ariaLabel}
        {...props}
        rel="next nofollow"
        role="button"
        className={classNames(className, ccPagination.button, ccPagination.icon)}
      >
        <IconChevronRight16 />
      </a>
    </>
  );
});

export default NextPage;
