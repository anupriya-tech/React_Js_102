import './App.css';
import Modal from './components/modal';
import Navbar from './components/navbar';

import { products } from './components/products';




const App=()=> {


  
  

const data= products.map((i,index)=>(
//<Modal key={i.id} itemno={i.id} title={i.title} description={i.description} price={i.price} itempic={i.itempic}/>
  <Modal key={i.id} props={i}/>  
    ));




  return (


<div >
<Navbar/>
{data}     
</div>

);
}

export default App;
