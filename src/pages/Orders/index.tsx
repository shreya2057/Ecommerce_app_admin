import { OrderType } from "./type";

export const Orders = ({ orderType }: { orderType: OrderType }) => {
  console.log(orderType);
  return (
    <div>
      <div>Orders</div>
    </div>
  );
};
