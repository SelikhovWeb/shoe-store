import React, { useState, useEffect } from "react";
import styles from "./Products.module.css";
import ProductCard from "../../components/ProductCard";
import Footer from "../../components/Footer";
import { Multiselect } from "multiselect-react-dropdown";
import { productStore } from "../../globals";
import { useDispatch, useSelector } from "react-redux";
import {
  addBrandFilter,
  removeBrandFilter,
  addCategoryFilter,
  removeCategoryFilter,
  addGenderFilter,
  removeGenderFilter,
  addSaleFilter,
  removeSaleFilter,
} from "../../actions";

function Products() {
  //Selecting data from redux state
  const currentFilters = useSelector((store) => store.filters);
  const { brandFilters } = currentFilters;
  const { categoryFilters } = currentFilters;
  const { genderFilters } = currentFilters;
  const { saleFilters } = currentFilters;
  const { amount } = currentFilters;

  let [store, setStore] = useState(productStore);

  //The main filter function
  const filterProducts = (products) => {
    let FP = products;
    if (brandFilters.length !== 0) {
      FP = FP.filter((el) => {
        return brandFilters.indexOf(el.brand) !== -1;
      });
    }
    if (categoryFilters.length !== 0) {
      FP = FP.filter((el) => {
        return categoryFilters.indexOf(el.category) !== -1;
      });
    }
    if (genderFilters.length !== 0) {
      FP = FP.filter((el) => {
        return genderFilters.indexOf(el.sex) !== -1;
      });
    }
    if (saleFilters === true) {
      console.log(currentFilters);

      FP = FP.filter((el) => {
        return el.sale;
      });
    }
    return FP;
  };

  useEffect(() => {
    console.log("EFFECT");
    //console.log(saleFilters);
   // console.log(currentFilters);


    if (amount !== 0) {
      setStore(filterProducts(productStore));
    } else {
      setStore(productStore);
    }
  }, [currentFilters]);

  const dispatch = useDispatch();
  //Css for multiselect component
  const filterStyles = {
    chips: { background: "#e74c3c", fontSize: "14px" },
    searchBox: { fontSize: "20px", minHeight: "50px" },
    multiselectContainer: { fontSize: "20px" },
    inputField: { fontSize: "20px", marginLeft: "10px" },
  };
  //DATA FOR MULTISELECT COMPONENTS
  const brandData = [
    { Brand: "Nike", id: 1 },
    { Brand: "Adidas", id: 2 },
    { Brand: "New Balance", id: 3 },
    { Brand: "Puma", id: 4 },
  ];
  const categoryData = [
    { Category: "Running shoes", id: 1 },
    { Category: "Winter footwear", id: 2 },
    { Category: "Demi-season", id: 3 },
    { Category: "Football boots", id: 4 },
    { Category: "Sneakers", id: 5 },
    { Category: "Trainers", id: 6 },
  ];
  const genderData = [
    { Gender: "Male", id: 1 },
    { Gender: "Female", id: 2 },
    { Gender: "Unisex", id: 3 },
  ];
  const saleData = [{ Sale: "Only sale products", id: 1 }];
  const [brandOptions] = useState(brandData);
  const [categoryOptions] = useState(categoryData);
  const [genderOptions] = useState(genderData);
  const [saleOptions] = useState(saleData);

  //FUNCTIONS ON ADDING AND REMOVING FILTERS
  const handleBrandAdding = (event) => {
    let brands = event.map((el) => {
      return el.Brand;
    });
    dispatch(addBrandFilter(brands));
  };
  const handleBrandRemoving = (event) => {
    let brands = event.map((el) => {
      return el.Brand;
    });
    dispatch(removeBrandFilter(brands));
  };
  const handleCategoryAdding = (event) => {
    let categories = event.map((el) => {
      return el.Category;
    });
    dispatch(addCategoryFilter(categories));
  };
  const handleCategoryRemoving = (event) => {
    let categories = event.map((el) => {
      return el.Category;
    });
    dispatch(removeCategoryFilter(categories));
  };
  const handleGenderAdding = (event) => {
    console.log(event);
    let genders = event.map((el) => {
      return el.Gender;
    });
    dispatch(addGenderFilter(genders));
  };
  const handleGenderRemoving = (event) => {
    let genders = event.map((el) => {
      return el.Gender;
    });
    dispatch(removeGenderFilter(genders));
  };

  return (
    <div className={styles.productsPage}>
      <div className={styles.filtersBlock}>
        <div className={styles.filterElement}>
          <Multiselect
            options={brandOptions}
            displayValue="Brand"
            placeholder="Select brands"
            style={filterStyles}
            showCheckbox={true}
            onSelect={handleBrandAdding}
            onRemove={handleBrandRemoving}
          />
        </div>
        <div className={styles.filterElement}>
          <Multiselect
            options={categoryOptions}
            displayValue="Category"
            placeholder="Select category"
            style={filterStyles}
            showCheckbox={true}
            onSelect={handleCategoryAdding}
            onRemove={handleCategoryRemoving}
          />
        </div>
        <div className={styles.filterElement}>
          <Multiselect
            options={genderOptions}
            displayValue="Gender"
            placeholder="Select Gender"
            style={filterStyles}
            showCheckbox={true}
            onSelect={handleGenderAdding}
            onRemove={handleGenderRemoving}
          />
        </div>
        <div className={styles.filterElement}>
          <Multiselect
            options={saleOptions}
            displayValue="Sale"
            placeholder="Sale products"
            style={filterStyles}
            showCheckbox={true}
            onSelect={() => {
              dispatch(addSaleFilter(true));
            }}
            onRemove={() => {
              dispatch(removeSaleFilter(false));
            }}
          />
        </div>
      </div>

      <div className={styles.products}>
        {store.map((el, id) => {
          return (
            <ProductCard
              title={el.title}
              image={el.images[0]}
              price={el.price}
              sale={el.sale}
              salePrice={el.salePrice}
              endPrice={el.sale ? el.salePrice : el.price}
              images={[el.images[0], el.images[1], el.images[2]]}
              sizes={el.sizes}
              colors={el.colors}
              amount={0}
            />
          );
        })}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}

export default Products;
