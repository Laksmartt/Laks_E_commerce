import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { searchAdd} from "../redux/Slices/searchSlice";
import { useNavigate } from "react-router-dom";


export default function SearchBar({posts}){
    const {search} = useSelector((state) => state);
    const dispatch = useDispatch();
    const [tab, setTab] = useState('');
    const Navigate = useNavigate();

    function changeHandler(e){
        setTab(e.target.value);
    }

    function submitHandler(e){
        
        e.preventDefault();
        const filter = {
            string :tab,
            data :posts
        }
        dispatch(searchAdd(filter));
        Navigate('/search');
    }

    return(
        <div className="flex justify-center items-center ">
            <form onSubmit={submitHandler}>
                <label>
                    <input 
                        className="outline border-2 border-slate-950 mr-2 p-1 w-[400px]
                        rounded bg-green-700 text-white placeholder:p-2 hover:bg-black transition duration-150"
                        type="text"
                        placeholder="Search for products"
                        value={tab}
                        onChange={changeHandler}
                    ></input>
                </label>
                <button className=" px-2 py-1 rounded border-2 border-slate-950 mr-6 bg-green-700 text-white hover:bg-black transition duration-150">Search</button>
            </form>
        </div>
    )
};