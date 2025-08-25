import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
    order: Order;

}

export const OrderStatus = ({order}: Props) => {


    const getOrderInfo = (status?: string) =>{
      return ORDER_STATUS.find((o) => o.value === status) || ORDER_STATUS[0];
        
    }
  
    return (
      <div className="space-y-6">
        

        
        <div className="space-y-4">
          {order.cartItems.map((item, index)=>{
            
            const created = new Date(order.createdAt);
            created.setDate(created.getDate() + item.book.estimatedShippingTime);

            // const statusInfo = getOrderInfo(item.status);

            

            return(
              <div key={index} className="flex flex-col gap-8 bg-white p-4 rounded-lg shadow">
                <h1 className="text-xl font-libre bold tracking-tight"> Order Status: {getOrderInfo((item.status))?.label}</h1>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-28 relative flex-shrink-0">
                    <img src= {item.book.imageUrl} className="object-cover rounded-md"/> 

                  </div>

                  <div className="flex flex-col">
                    <span>{item.book.name}</span>
                    <span>Expected Delivery:{" "}
                    <strong>{created.toDateString()}</strong>
                    
                    </span>
                  </div>
                </div>
                <Progress className="animate-pulse" value={getOrderInfo(item.status)?.progressValue}/>
                

              </div>
            )
          })}

        </div>
      </div>
    )
    

    
  
}

export default OrderStatus
