import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./components/Restaurant";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter, Routes, Route,Link } from "react-router";
import SearchFood from "./components/SearchFood";
import SecondaryHome from "./components/SecondaryHome";
import { store } from "./Store/stores";
import {Provider} from "react-redux"
function App(){
    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
            <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
            <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
            <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);