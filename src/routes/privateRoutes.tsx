import { Dashboard } from "@/pages/Dashboard";
import { Categories } from "@/pages/Categories";
import { Products } from "@/pages/Products/Products";
import { FeaturedProducts } from "@/pages/Products/FeaturedProducts";
import { ProductDetail } from "@/pages/Products/ProductDetail";
import { Orders } from "@/pages/Orders";
import { Users } from "@/pages/Users/";
import { ROUTES } from "./routes.constants";

export const privateRoutes = [
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTES.CATEGORIES,
    element: <Categories />,
  },
  {
    path: ROUTES.PRODUCTS,
    element: <Products />,
  },
  {
    path: ROUTES.FEATURED_PRODUCTS,
    element: <FeaturedProducts />,
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    element: <ProductDetail />,
  },
  {
    path: ROUTES.IMPORTANT_ORDERS,
    element: <Orders orderType="importantOrders" />,
  },
  {
    path: ROUTES.PENDING_ORDERS,
    element: <Orders orderType="pendingOrders" />,
  },
  {
    path: ROUTES.DELIVERED_ORDERS,
    element: <Orders orderType="deliveredOrders" />,
  },
  {
    path: ROUTES.PACKED_ORDERS,
    element: <Orders orderType="packedOrders" />,
  },
  {
    path: ROUTES.ALL_ORDERS,
    element: <Orders orderType="allOrders" />,
  },
  {
    path: ROUTES.USERS,
    element: <Users />,
  },
];
