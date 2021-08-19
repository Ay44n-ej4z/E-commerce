import Navbar from './components/Navbar/Navbar';
import {commerce} from './components/lib/commerce'
import { Products } from './components/Products/Products';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    
    setProducts(data)
  }

  useEffect(()=>{
    fetchProducts()
  }, [])

  console.log(products);

  return (
    <div >
      <Navbar />
      <Products products = {products} />
    </div>
  );
}

export default App;
