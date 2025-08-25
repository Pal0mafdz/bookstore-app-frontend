import { useGetMyOrders } from "@/api/OrderApi"
import {OrderStatus }from "@/components/OrderStatus";
// import OrderStatus, { OrderStatus } from "@/components/OrderStatus";

const OrderStatusPage = () => {
    const { orders, isLoading} = useGetMyOrders();

    if(isLoading){
        return "Loading...";
    }

    if(!orders || orders.length === 0){
        return "No orders found";
    }

    
  return (
    <div className="space-y-10">
        {orders.map((order)=> (
            <div className="space-y-10 bg-gray-50 p-10 rounded-lg" key={order._id}>
                <OrderStatus order={order}/>
             </div>
        ))}
        </div>
  )
}

export default OrderStatusPage