import { useCreateMyBook, useGetMyBook, useUpdateMyBook } from "@/api/MyBookApi";
import ManageBookForm from "@/forms/manage-book-form/ManageBookForm"

const ManageBookPage = () => {
  const { createBook, isLoading: isCreateLoading} = useCreateMyBook();
  const { book } = useGetMyBook();
const {updateBook, isLoading: isUpdateLoading } = useUpdateMyBook();

//whenever the page loads is always going to fetch the book
//it checks if the book already exists
//if the book exists it returns true and if the book doesnt exist it returns false
const isEditing = !!book;

  return <ManageBookForm book={book} onSave={isEditing? updateBook : createBook} isLoading={isCreateLoading || isUpdateLoading}/>; 
}

export default ManageBookPage