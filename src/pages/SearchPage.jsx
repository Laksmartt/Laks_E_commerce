import { useSelector } from "react-redux"
import Product from "../components/Product";
import { useEffect } from "react";
import {Link} from 'react-router-dom'

const SearchPage = () =>{

    const {search} = useSelector((state) => state);

    useEffect(()=>{
        console.log(search);
        console.log(search.length);
    },[search])

    return(
        <div>
           
                        {
                            search.length > 0 ?
                            (
                                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[30vh]">
                                    {
                                        search.map((item) =>(
                                            <Product post={item} key={item.id}></Product>
                                        ))
                                    }
                                </div>
            
                            ):(
                                    <div className="flex flex-col items-center mt-[300px]">
                                        <p className="uppercase mb-4 font-bold text-2xl">No items Found</p>
                                        <Link to="/">
                                            <button className="bg-green-900 text-white text-lg 
                                                font-bold rounded outline p-2 w-[250px] hover:bg-black transition duration-300" >
                                                Shop now
                                            </button>
                                        </Link>
                                    </div>
                            )
   
                }
        </div>

    )
}

export default SearchPage;