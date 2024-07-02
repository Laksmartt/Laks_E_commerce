import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

export default function Cart(){
    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr)=> acc +curr.price, 0))
    },[cart])

    return(
        <div>
            {
                cart.length > 0 ?
                (<div className="flex justify-center items-center max-w-[1150px] mx-auto gap-x-40">
                    <div className="flex flex-col gap-y-10">
                    {cart.map((Item, index)=>(
                        <CartItem key={Item.id} itemIndex={index} Item={Item}></CartItem>
                    ))}
                    
                    </div>

                    <div className="flex flex-col space-y-80">
                        <div>
                            <div >
                                <p className="text-green-700 uppercase font-bold text-[20px]">Your Cart</p>
                            </div>
                            <div>
                                <p className="text-green-700 uppercase font-bold text-[30px]">Summary</p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-bold text-lg">Total Items: {cart.length}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex-col justify-center items-center">
                            <p className="font-semibold">Total Amount: <span className="font-bold text-lg">${totalAmount}</span></p>
                            <button className="w-full mt-2 rounded bg-green-700 text-white font-bold p-2">Check Out</button>
                        </div>
                    </div>
                </div>)
                :
                (
                    <div className="flex flex-col justify-center items-center mt-[300px] gap-y-2">
                        <p className="text-[30px] font-bold uppercase">Cart empty</p>
                        <Link to="/">
                            <button className="bg-green-900 text-white text-lg 
                            font-bold rounded outline p-2 w-[200px] hover:bg-black transition duration-300" >
                                Shop now
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};