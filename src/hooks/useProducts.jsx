import { useEffect, useState } from "react";


const useProducts = () => {
    const [products , setproducts] = useState([]);
    const [loading , setloading] = useState(true);
    useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data =>{
            setproducts(data)
            setloading(false)
      })
    },[])
    return [products , loading]
};

export default useProducts;