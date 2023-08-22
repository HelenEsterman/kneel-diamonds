import { placeOrder } from "./TransientState.js";

export const Orders = async () => {
  const response = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=type"
  );
  const orders = await response.json();
  const orderList = orders.map((order) => {
    const totalPrice = order.metal.price + order.style.price + order.size.price;
    const totalPriceMultiplied = totalPrice * order.type.multiplier;
    const orderPrice = totalPriceMultiplied.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    return `<div>Order #${order.id} cost ${orderPrice}</div>`;
  });
  const finalOrderList = orderList.join(" ");
  return finalOrderList;
};
