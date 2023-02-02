import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/product/product.actions"

const Products = () => {
  const {loading, error, data} = useSelector((store)=>store.data);
  const dispatch = useDispatch()

  useEffect(()=>{
    getProducts(dispatch);
  },[])

  if(loading) return <h3>Loading...</h3>;
  if(error) return <h3>Error...</h3>;

  return (
    <div>
      <h1>Products</h1>
      {data.map((items)=>{
        <div key={(items.id)}>
          <h3>{items.name}</h3>
          <p>{items.description}</p>
        </div>
      })}
    </div>
  )
};

export default Products;
