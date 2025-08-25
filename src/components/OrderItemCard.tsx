
import { CartItem, Order } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const getDay = (item: CartItem) => {
    const date = new Date(order.createdAt);
    date.setDate(date.getDate() + item.book.estimatedShippingTime);
    return date.toDateString();
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="grid md:grid-cols-3 gap-4">
          <div>Customer: {order.shippingDetails.name}</div>
          <div>Address: {order.shippingDetails.addressLine1}, {order.shippingDetails.city}</div>
          <div>Order Date: {new Date(order.createdAt).toLocaleDateString()}</div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {order.cartItems.map((item) => (
          <div key={item.book._id} className="flex gap-4 items-center">
            <img src={item.book.imageUrl} className="w-20 h-28 object-cover rounded-md" />
            <div className="flex flex-col">
              <span>{item.book.name}</span>
              <span>
                Expected Delivery: <strong>{getDay(item)}</strong>
              </span>
              <span>Status: <strong>{item.status}</strong></span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
