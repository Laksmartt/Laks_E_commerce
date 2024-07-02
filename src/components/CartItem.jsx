import {FcDeleteDatabase} from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({Item, ItemIndex}) =>{
    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(Item.id));
        toast.error("Item removed");
    }

    return (
       
            <div className='flex justify-center gap-x-10 max-w-[800px] border-black border-b-4 mb-4'>
                <div className="max-h-[150px] max-w-[150px] ml-3 mb-2 mt-2">
                    <img className="h-full w-full " src={Item.image}></img>
                </div>

                <div className='flex flex-col gap-y-2 justify-center align-center '>
                    <h1 className='font-bold text-[30px] w-50'>{Item.title}</h1>
                    <h1 className='w-50'>{Item.description.split(' ').slice(0,20).join(' ')+"..."}</h1>
                    <div className='flex items-center justify-between'>
                        <p className="text-green-700 font-bold text-lg">${Item.price}</p>
                        <div onClick={removeFromCart}>
                            <FcDeleteDatabase className='text-[20px]'/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        
    )
}

export default CartItem;