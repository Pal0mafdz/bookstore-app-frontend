import { useDeleteMyBook, useGetMyBooks } from "@/api/MyBookApi"
import { Button } from "@/components/ui/button";

import { useNavigate} from "react-router-dom";


const BookDashboardPage = () => {
  const { books, isLoading } = useGetMyBooks();
 // const { id: bookId } = useParams();
  const navigate = useNavigate();
  const { deleteBook } = useDeleteMyBook();
  
  // const delete = useDeleteMyBook();

  if(isLoading) return <p>Loading...</p>;



  return (
    

    <div className="grid gap-4">
      <div className="flex justify-right">
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
  )
}

export default BookDashboardPage