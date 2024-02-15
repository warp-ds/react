import { classNames } from "@chbphone55/classnames";
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';
import React from 'react';

const PaginationContext = React.createContext({
  currentPage: 0,
  lastPage: 0,
});

export const usePagination = () => React.useContext(PaginationContext);

export type PaginationContainerProps = {
  /**
   *
   * @default Pages
   */
  'aria-label'?: string;

  children: React.ReactNode;

  /** Additional CSS class for the container. */
  className?: string;

  /** The current page number. Adjusted so it's never below `1`, and never above `lastPage`. */
  currentPage: number;

  /** The number of the last page. */
  lastPage: number;

  /** Additional CSS styles for the container. */
  style?: React.CSSProperties;
} & React.PropsWithoutRef<JSX.IntrinsicElements['nav']>;

const PaginationContainer = React.forwardRef<
  HTMLElement,
  PaginationContainerProps
>(
  (
    {
      children,
      className,
      currentPage,
      lastPage,
      'aria-labelledby': ariaLabelledBy = 'pagination-heading',
      ...props
    },
    ref,
  ) => {
    if (!Number.isInteger(currentPage)) {
      throw new TypeError(
        `Invalid currentPage: ${JSON.stringify(currentPage)}`,
      );
    }
    if (!Number.isInteger(lastPage)) {
      throw new TypeError(`Invalid lastPage: ${JSON.stringify(lastPage)}`);
    }

    const context = React.useMemo(
      () => ({
        currentPage: Math.max(1, Math.min(currentPage, lastPage)),
        lastPage: Math.max(1, lastPage),
      }),
      [currentPage, lastPage],
    );

    const ariaLabel =
      props['aria-label'] ??
      i18n._({
        id: 'pagination.aria.pagination',
        message: 'Pages',
        comment:
          'Default screenreader message for pagination container in the pagination component',
      });

    return (
      <nav
        {...props}
        className={classNames(
          ccPagination.containerNav,
          className,
        )}
        aria-labelledby={ariaLabelledBy}
        ref={ref}
      >
        <h1 className={ccPagination.a11y} id={ariaLabelledBy}>
          {ariaLabel}
        </h1>
        <PaginationContext.Provider value={context}>
          {children}
        </PaginationContext.Provider>
      </nav>
    );
  },
);

export default PaginationContainer;
