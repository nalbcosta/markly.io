export type PaginationResult<T> = {
  items: T[];
  totalPages: number;
  safeCurrentPage: number;
};

export function paginate<T>(
  allItems: T[],
  currentPage: number,
  pageSize: number,
): PaginationResult<T> {
  const totalPages = Math.max(1, Math.ceil(allItems.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const pageStart = (safeCurrentPage - 1) * pageSize;

  return {
    items: allItems.slice(pageStart, pageStart + pageSize),
    totalPages,
    safeCurrentPage,
  };
}
