import "./Home.scss";
import { Context } from "../../utils/context";
import { useEffect, useContext } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import {fetchDataFromApi} from "../../utils/api";
const Home = () => {
    const {categories, setCategories, products, setProducts} = useContext(Context);

    useEffect(() =>{
        getProducts();
        getCategories();
    },[]);
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then(resp => {
            console.log(resp);
            setProducts(resp);
        });
    };

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then(resp => {
            console.log(resp);
            setCategories(resp);
        });
    };
    return <div >
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <Category categories = {categories}/>
                <Products products = {products} headingText = "Popular Products"/>
            </div>
        </div>
     </div>;
};

export default Home;
