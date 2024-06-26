import { getProduct } from "../utils";
import { useEffect,useState } from "react";
export const useGetProducts =()=>{
    const [product,setProducts] = useState([]);
    const [error,setError] =useState('');
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        const fetchProducts = async()=>{
            try{
                setLoading(true);
                const result = await getProduct();
                console.log({result});
                setUsers(result.product);
                setLoading(false);
            }
            catch(error){
                setError(`Error:${error.message}`)
                setLoading(false);
            }
        };
        fetchProducts();
    },[]);
    return {product,error,loading}
};
