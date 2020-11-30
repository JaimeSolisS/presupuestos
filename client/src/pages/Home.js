import React, {useState, useEffect} from 'react'
import {StyledContainer, StyledH4, StyledInputFormControl, StyledGridContainer} from '../styled'
import ItemButton from '../components/nav/ItemButton'
import { getAllProducts } from '../functions/product';
import LocalSearch from '../components/forms/LocalSearch';

 const Home = () => {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);

      // 1) add the state keyword
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        loadAllProducts();
      }, []);
    
      const loadAllProducts = () => {
        getAllProducts().then((res) => {
          console.log(res)
          if(res){
            setProducts(res.data);
          }
          return
        });
      };

         // step 4 create funnction to use on map
   const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

     return (
        <StyledContainer>
            <StyledH4>Todos los productos</StyledH4>
           {/* step 2 input field and step 3 handle onchange*/}
           <LocalSearch keyword={keyword} setKeyword={setKeyword} />
   
            <div className="row">
            {products.filter(searched(keyword)).map((product) => (
            <div key={product._id} className="col-md-4">
              <ItemButton name={product.name}  image={product.image}/>
            </div>
          ))}
            </div>
            


    
        </StyledContainer>
     )
 }

 export default Home;