import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

type Props = {
    page: number;
    //total pages that exist
    pages: number;
    //every time the page number changes is going to call this function
    onPageChange: (page: number) => void;
}

const PaginationSelector = ({page, pages, onPageChange}:Props) =>{
    const pageNumbers = [];
    //pages = 3
    //pageNumbers = [1,2,3]
    for (let i = 1; i<=pages; i++){
        pageNumbers.push(i);
    }

    return (
        <Pagination>
            <PaginationContent>
                {page !== 1 && (<PaginationItem>
                    <PaginationPrevious href="#" onClick={() => onPageChange(page -1)}/>
                </PaginationItem>)}
                
                {pageNumbers.map((number) =>(
                    <PaginationItem>
                        <PaginationLink href="#" onClick={() => onPageChange(number)} isActive={page === number}>
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {page !== pageNumbers.length && (
                    <PaginationItem>
                        <PaginationNext href="#" onClick={() => onPageChange(page + 1)}/>
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationSelector