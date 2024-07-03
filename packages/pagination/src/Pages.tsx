import React from 'react';

import { classNames } from '@chbphone55/classnames';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';

import type { PageProps } from './Page.js';
import { usePagination } from './PaginationContainer.js';

type PagesProps = {
  children: (page: number) => React.ReactElement<PageProps>;
  className?: string;
  numPages?: number;
};

const Pages = React.forwardRef<HTMLDivElement, PagesProps>(({ children, numPages = 7, className, ...props }, ref) => {
  const { currentPage, lastPage } = usePagination();

  const from = Math.max(currentPage - 3, 0);
  const to = Math.min(from + numPages, lastPage);
  const pages = Array.from(Array(to - from).keys()).map((_, i) => from + i + 1);

  return (
    <div {...props} className={classNames(ccPagination.pages, className)} ref={ref}>
      {pages.map((page) =>
        React.cloneElement(children(page), {
          key: page,
          page,
          currentPage,
        }),
      )}
    </div>
  );
});

export default Pages;
