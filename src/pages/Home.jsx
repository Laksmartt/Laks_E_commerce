import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from '../components/Spinner';
import SearchBar from "../components/SearchBar";

const Home = () =>{
    const API_URL = 'https://fakestoreapi.com/products';
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
 
    useEffect(()=>{
        fetchProductData();   
    },[])

    async function fetchProductData(){
        setLoading(true);
        try{
            const result = await fetch(API_URL);
            const data = await result.json();
            setPosts(data);
        }
        catch(error){
            alert(`oye, panchu error = ${error}`)
            setPosts([]);
        }
        setLoading(false);
    }

    return(
        <div>
            <div className="flex justify-center mt-10 ">
                <SearchBar posts={posts}></SearchBar>
            </div>
            {loading ?
                <Spinner></Spinner>:
                posts.length > 0 ? 
                    (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">{
                        posts.map((post)=>(
                        <Product key={post.id} post={post}></Product>
                    ))}
                    </div>):
                    (<div className="flex justify-center items-center">
                        <p>Post unavailable</p>
                    </div>)

            }
        </div>
    )
}

export default Home;