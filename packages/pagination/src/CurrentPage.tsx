import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';

import { usePagination } from './PaginationContainer.js';

type CurrentPageProps = {
  /**
   * Label to render on mobile
   */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const CurrentPage = React.forwardRef<HTMLDivElement, CurrentPageProps>(({ children, className, ...props }, ref) => {
  const { currentPage } = usePagination();

  const label =
    children ??
    i18n._({
      id: 'pagination.label.current-page',
      message: 'Page {currentPage}',
      values: { currentPage },
      comment: 'Default message for current page label in the pagination component',
    });

  return (
    <span {...props} className={classNames(className, ccPagination.currentPage)} ref={ref}>
      {label}
    </span>
  );
});

export default CurrentPage;
