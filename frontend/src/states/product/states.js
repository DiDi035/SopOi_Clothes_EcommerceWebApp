export const getProducts = (state) => state.product.data.products;
export const getCategories = (state) => state.product.data.categories;
export const getIsFetching = (state) => state.product.isFetching;
export const getIsFetchingSuccess = (state) => state.product.isFetchingSuccess;
export const getError = (state) => state.product.error;
