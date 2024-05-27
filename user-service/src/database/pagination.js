


export const paginate = async (model, req) => {
  let page = req.query.pageNumber || 1;
  let pageSize = req.query.pageSize || 10;
  const offset = (page - 1) * pageSize;

  const records = await model.findAll({
    offset: offset,
    limit: pageSize
  });
  const totalItems = await model.count();
  const pages = Math.ceil(totalItems / pageSize);
  const currentPage = parseInt(page);
  const hasNext = currentPage < pages;
  const hasPrevious = currentPage > 1;

  const paginationInfo = {
    currentPage,
    pageSize,
    totalItems,
    pages,
    hasNext,
    hasPrevious,
  };

  return { records, paginationInfo };
};

