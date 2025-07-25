import { useCreateMyBook, useGetMyBookById, useUpdateMyBook } from "@/api/MyBookApi";
import ManageBookForm from "@/forms/manage-book-form/ManageBookForm"
import { useParams } from "react-router-dom";

const ManageBookPage = () => {
  const { id: bookId } = useParams();
  const { createBook, isLoading: isCreateLoading} = useCreateMyBook();
  //const { book } = useGetMyBook();
  const { book } = useGetMyBookById(bookId);

  const {updateBook, isLoading: isUpdateLoading } = useUpdateMyBook();




const isEditing = !!bookId?.trim();

const handleSave = (formData: FormData) =>{
  if(isEditing && bookId){
    updateBook({bookId, bookFormData: formData});
  }else{
    createBook(formData);
  }
}

  return <ManageBookForm book={book} onSave={handleSave} isLoading={isCreateLoading || isUpdateLoading}/>; 
}

export default ManageBookPage