import { useCallback, useState } from "react";

function usePagination(allProducts, cardPerPage) {
  const [page, setPage] = useState(1);

  const maxPage = Math.ceil(allProducts.length / cardPerPage);

  function pageProducts() {
    const indexOfFirstCard = (page - 1) * cardPerPage;
    const indexOfLastCard = indexOfFirstCard + cardPerPage;

    return allProducts.slice(indexOfFirstCard, indexOfLastCard);
  }

  function nextPage() {
    setPage((page) => Math.min(page + 1, maxPage));
  }

  function prevPage() {
    setPage((page) => Math.max(page - 1, 1));
  }

  const jumpPage = useCallback(
    (page) => {
      const pageNumber = Math.max(1, page);
      setPage(Math.min(pageNumber, maxPage));
    },
    [maxPage]
  );

  return { nextPage, prevPage, jumpPage, pageProducts, page, maxPage };
}

export default usePagination;
