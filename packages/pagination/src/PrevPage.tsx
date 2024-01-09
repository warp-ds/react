import { Button } from '../../button/src/index.js';
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';
import { usePagination } from './PaginationContainer.js';
import IconChevronLeft16 from '@warp-ds/icons/react/chevron-left-16';
import React from 'react';

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

  if (currentPage <= 1) {
    return null;
  }

  const ariaLabel = i18n._({
    id: 'pagination.aria.prev-page',
    message: 'Previous page',
    comment:
      'Default screenreader message for previous page button in the pagination component',
  });

  return (
    <Button
      pill
      aria-label={ariaLabel}
      {...props}
      ref={ref}
      className={className}
      rel="prev nofollow"
    >
      <IconChevronLeft16 className={ccPagination.icon} />
    </Button>
  );
});

export default PrevPage;
