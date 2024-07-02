import {useDispatch, useSelector } from "react-redux";
import {remove, add} from "../redux/Slices/cartSlice";
import {toast} from 'react-hot-toast';
import { useEffect } from "react";

const Product = ({post}) =>{
    const {cart} = useSelector((state)=>state);
    const dispatch = useDispatch();
    
    const addToCart = ()=>{
        dispatch(add(post));
        toast.success("Item added to Cart")
    }

    const removeFromCart = () =>{
        dispatch(remove(post.id));
        toast.error ("Item removed from Cart");
    }

    return (
    
            
             <div className="flex flex-col items-center justify-between  
            hover:scale-110 transition  duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline
            hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] ">
            <div className="text-gray-700 font-semibold text-lg  truncate  mt-1">
                <p>{post.title.split(' ').slice(0,2).join(' ')+'...'}</p>
            </div>
            <div >
                <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(' ').slice(0,10).join(' ')+"..."}</p>
            </div>
            <div className="h-[180px]">
                <img className="h-full w-full" src={post.image} alt="Image"></img>
            </div>
            <div className="flex justify-between gap-12 items-center w-full mt-5">
                <div>
                    <p className="text-green-600 font-semibold">${post.price}</p>
                </div>
                <div>
                    {
                    cart.some((p) => p.id === post.id) ?
                    (<button className="text-green-700 border-2 border-gray-700 rounded-full font-semibold
                    text-[12px] p-1 px-3 uppercase 
                    hover:bg-gray-700 
                    hover:text-white transition duration-300 ease-in" onClick={removeFromCart}>Remove Item</button >):
                    (<button  className="text-green-700 border-2 border-gray-700 rounded-full font-semibold
                    text-[12px] p-1 px-3 uppercase 
                    hover:bg-gray-700 
                    hover:text-white transition duration-300 ease-in" onClick={addToCart}>Add Item</button>)   
                    }
                </div> 
                </div>
            </div>
            
        
       
    )
}

export default Product;