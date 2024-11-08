import { Dashboard } from "@/pages/Dashboard";
import { Categories } from "@/pages/Categories";
import { Products } from "@/pages/Products/Products";
import { FeaturedProducts } from "@/pages/Products/FeaturedProducts";
import { ProductDetail } from "@/pages/Products/ProductDetail";
import { Orders } from "@/pages/Orders";
import { Users } from "@/pages/Users/";
import { ROUTES } from "./routes.constants";
import { Layout } from "@/components/layout/Layout";

export const privateRoutes = [
  {
    path: ROUTES.DASHBOARD,
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: ROUTES.CATEGORIES,
    element: (
      <Layout>
        <Categories />
      </Layout>
    ),
  },
  {
    path: ROUTES.PRODUCTS,
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },
  {
    path: ROUTES.FEATURED_PRODUCTS,
    element: (
      <Layout>
        <FeaturedProducts />
      </Layout>
    ),
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: ROUTES.IMPORTANT_ORDERS,
    element: (
      <Layout>
        <Orders orderType="importantOrders" />
      </Layout>
    ),
  },
  {
    path: ROUTES.PENDING_ORDERS,
    element: (
      <Layout>
        <Orders orderType="pendingOrders" />
      </Layout>
    ),
  },
  {
    path: ROUTES.DELIVERED_ORDERS,
    element: (
      <Layout>
        <Orders orderType="deliveredOrders" />
      </Layout>
    ),
  },
  {
    path: ROUTES.PACKED_ORDERS,
    element: (
      <Layout>
        <Orders orderType="packedOrders" />
      </Layout>
    ),
  },
  {
    path: ROUTES.USERS,
    element: (
      <Layout>
        <Users />
      </Layout>
    ),
  },
];
