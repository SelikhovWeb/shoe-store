import React from "react";
import "./SortedFromCheapest.css";
import ProductCard from "../../components/ProductCard";
import nike001 from "../../images/nike001.png";
import nike002 from "../../images/nike002.png";
import nike003 from "../../images/nike003.png";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import FilterButtons2 from "../../components/FilterButtons2/FilterButtons2";
import {productStore} from "../../globals"

function SortedFromCheapest() {
  let store = productStore.concat();
  store.map((el,id)=>{
    if(el.sale){
      el.endPrice=el.salePrice
    }
    else{
      el.endPrice=el.price
    }
  })
  function sortByPrice(arr) {

    arr.sort((a, b) => a.endPrice > b.endPrice ? 1 : -1);
  }
  sortByPrice(store);

  return (
    <div className="productsPage">
      <FilterButtons
        titles={["Sorted from cheapest", "Running shoes", "Winter footwear"]}
      />

      <div className="products">
        {store.map((el, id) => {
          
            return (
              <ProductCard
                title={el.title}
                image={el.images[0]}
                price={"$ " + el.price}
                sale={el.sale}
                salePrice={"$ " + el.salePrice}
                images={[el.images[0], el.images[1], el.images[2]]}
                sizes={el.sizes}
                colors={el.colors}
              />
            );
          
        })}
      </div>
    </div>
  );
}

export default SortedFromCheapest;