import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import products from "./products";
import ProductCard from "./components/ProductCard";

const userName = prompt('Enter your firstname');
function App() {
  return (
    <div className="d-flex flex-wrap justify-content-center mt-5 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    <p>
        Hello {userName || 'User'}
    </p>
    <p>{userName || 'Hey Stranger, tell me your name!'}</p>

    <div>
      {userName &&
      (
        <img src="https://images.unsplash.com/photo-1742201876722-85a042294575?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="nice-img"
        style={{
          width:510,
          height:300,
          objectFit:"cover",
        }}/>
        
      )
      }
    </div>


    </div>
  );
}

export default App;

