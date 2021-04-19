export const getProducts = (state) => state.product.products;
export const getCategories = (state) => state.product.categories;
export const getIsFetching = (state) => state.product.isFetching;
export const getIsFetchingSuccess = (state) => state.product.isFetchingSuccess;
export const getError = (state) => state.product.error;
export const isFetchingCateSuccess = (state) =>
  state.product.isFetchingCateSuccess;
export const getPage = (state) => state.product.page;
export const getIsFetchingFilterSuccess = (state) =>
  state.product.isFetchingFilterSuccess;
export const getTotalPage = (state) => state.product.totalPage;
export const getFilters = (state) => state.product.filters;
