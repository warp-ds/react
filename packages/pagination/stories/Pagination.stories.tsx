import * as React from 'react';
import { Pagination } from '../src/index.js';

const metadata = { title: 'Navigation/Pagination' };
export default metadata;

const Example = ({ initialPage = 1, lastPage = 30, ...props }) => {
  const [currentPage, setCurrentPage] = React.useState(initialPage);
  
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        currentPage: {currentPage}, lastPage: {lastPage}
      </div>
      <Pagination
        {...props}
        currentPage={currentPage}
        numPages={3}
        lastPage={lastPage}
        createHref={(page) => `?page=${page}`}
        onChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export const Normal = () => (
  <>
    <Example initialPage={1} lastPage={10} aria-labelledby="pagination-1" />
    <Example initialPage={10} lastPage={20} aria-labelledby="pagination-2" />
    <Example initialPage={30} lastPage={30} aria-labelledby="pagination-3" />
    <Example initialPage={1} lastPage={10} aria-labelledby="pagination-4" noFollow />
  </>
);
