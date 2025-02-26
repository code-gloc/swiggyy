import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter, Routes, Route,Link } from "react-router";
function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>

           
        </Routes>
        </BrowserRouter>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);