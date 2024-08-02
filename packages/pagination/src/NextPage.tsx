import React, { Ref } from 'react';

import { classNames } from '@chbphone55/classnames';
import { i18n } from '@lingui/core';
import { pagination as ccPagination } from '@warp-ds/css/component-classes';
import IconChevronRight16 from '@warp-ds/icons/react/chevron-right-16';

import { usePagination } from './PaginationContainer.js';

type NextPageProps = {
  /**
   * @default Next page
   */
  'aria-label'?: string;

  /** Additional CSS class for the element. */
  className?: string;

  /** The href for the anchor element. */
  href: string;

  /** Enable nofollow rel */
  noFollow?: boolean;

  /** Additional CSS styles for the element. */
  style?: React.CSSProperties;

  /** onClick function */
  onClick: (event: React.UIEvent<HTMLElement>) => void;
};

const NextPage = React.forwardRef<React.AnchorHTMLAttributes<HTMLAnchorElement>, NextPageProps>(
  ({ className, noFollow, ...props }, ref) => {
    const { currentPage, lastPage } = usePagination();

    if (currentPage >= lastPage) {
      return null;
    }

    const ariaLabel =
      props['aria-label'] ??
      i18n._({
        id: 'pagination.aria.next-page',
        message: 'Next page',
        comment: 'Default screenreader message for next page link in the pagination component',
      });

    const iconSuffix = i18n._({
      id: 'pagination.aria.icon-suffix',
      message: 'icon',
      comment: 'Suffix added at the end of icon titles when img semantics are lost on an html element',
    });

    return (
      <>
        <a
          {...props}
          ref={ref as Ref<HTMLAnchorElement>}
          rel={`next${noFollow ? ' nofollow' : ''}`}
          className={classNames(className, [ccPagination.link, ccPagination.icon])}>
          <span className={ccPagination.a11y}>{ariaLabel},</span>
          <IconChevronRight16 />
          <span className={ccPagination.a11y}>{iconSuffix}</span>
        </a>
      </>
    );
  },
);

export default NextPage;
