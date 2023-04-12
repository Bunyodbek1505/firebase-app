import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import CheckOut from '../pages/CheckOut'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import ProtectedRoute from "./ProtectedRoute";

//   Admin Page
import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Dashboard from "../admin/Dashboard";
import Users from '../admin/Users'



// lazy google qilas, shunaqa qib chiqas

// better comments vs code extension webstormgayam bor   --> qidiras : webstorm better comments
// const Dashboard = () => import("../admin/Dashboard")


const Routers = () => {
    return (<Routes>
            <Route path='/' element={<Navigate to='home'/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='shop/:id' element={<ProductDetails/>}/>
            <Route path='cart' element={<Cart/>}/>


            {/*     Admin page    */}
            <Route path='/*' element={<ProtectedRoute/>}>
                <Route path='checkout' element={<CheckOut/>}/>
                <Route path='dashboard' element={<Dashboard/>}/>
                <Route path='dashboard/all-products' element={<AllProducts/>}/>
                <Route path='dashboard/add-product' element={<AddProducts/>}/>
                <Route path='dashboard/users' element={<Users/>}/>
            </Route>
            {/*      Admin page    */}

            <Route path='login' element={<Login/>}/>
            <Route path='signUp' element={<SignUp/>}/>
        </Routes>
    )
}

export default Routers;