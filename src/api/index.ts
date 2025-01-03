export const API_ENDPOINTS = {
  LOGIN: '/users/login/',
  CATEGORIES: {
    GET: '/categories/get-all-categories/',
    POST: '/categories/add-categories/',
    GET_DETAIL: '/categories/get-category/:id/',
    UPDATE_DETAIL: '/categories/update-category/:id/',
  },
  PRODUCTS: {
    GET: '/products/get-categories-products/:id/',
    POST: '/products/add-products/:id/',
    GET_DETAIL: '/products/product-detail/:id/',
  },
};
