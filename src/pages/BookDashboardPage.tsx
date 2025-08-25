import { useDeleteMyBook, useGetMyBookOrders, useGetMyBooks } from "@/api/MyBookApi"
import OrderItemCard from "@/components/OrderItemCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import { useNavigate} from "react-router-dom";


const BookDashboardPage = () => {
  const { books, isLoading } = useGetMyBooks();
 // const { id: bookId } = useParams();
  const navigate = useNavigate();
  const { deleteBook } = useDeleteMyBook();
  const {orders} = useGetMyBookOrders();
  
  // const delete = useDeleteMyBook();

  if(isLoading) return <p>Loading...</p>;



  return (
    <Tabs defaultValue= "dashboard">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
      </TabsList>
      <TabsContent value="orders" className="space-y-5 bg-gray-50 p-10 rounded-lg">
        <h2 className="text-2xl font-libre bold">{orders?.length} active orders</h2>
        {orders?.map((order)=> (
          <OrderItemCard key={order._id} order={order}/>
        ))}
      </TabsContent>
      <TabsContent value="dashboard">
      <div className="grid gap-4 p-10">
      <div className="flex justify-left">
        <Button
            className="bg-black text-white"
            onClick={() => navigate("/manage-book")}
          >
            + Add New Book
          </Button>
      </div>
      
      
      {books?.map((book) => (
        <div
          key={book._id}
          onClick={() => navigate(`/manage-book/${book._id}`)}
          className="flex items-center justify-between gap-4 cursor-pointer border rounded p-4 hover:bg-gray-100"
        >
          <div className="flex-1">
            <h3 className="font-bold">{book.name}</h3>
            <p>{book.author}</p>
          </div>

          
          <Button onClick={(e)=>{
            e.stopPropagation();
            deleteBook(book._id);
          }} className="border rounded cursor-pointer hover: bg-cyan-800">Delete</Button>


        </div>
      ))}
    </div>

      </TabsContent>
    </Tabs>
    

   
  )
}

export default BookDashboardPage