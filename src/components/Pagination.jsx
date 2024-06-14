import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

export const Pagination = () => {
    const {page, totalPages, handlePageChange} = useContext(AppContext);
    return(
        <div className="w-full border shadow-md fixed bg-white bottom-0">
            <div className="w-11/12 py-2 max-w-[630px] mx-auto flex justify-between items-center">
                 <div className="flex gap-2">
                     {page > 1 &&
                         <button onClick={() => handlePageChange(page-1)}
                         className="rounded-md border px-4 py-1">
                             Previous
                         </button>
                     }
     
                     {page < totalPages &&
                         <button onClick={() => handlePageChange(page+1)}
                         className="rounded-md border px-4 py-1">
                             Next
                         </button>
                     }
                 </div>
                 <p className="font-bold">Page {page} of {totalPages}</p>
            </div>
            
        </div>
    );
}

export default Pagination;