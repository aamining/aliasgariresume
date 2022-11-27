import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./Comments";
import Login from "./Login";
import Profile from "./Profile";
import Signup from "./Signup";

class Main extends Component{
    render(){
    return(
        <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Profile />}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/comments" element={<Comments/>}></Route>
                </Routes>

        </BrowserRouter>
    )
    }
}
export default Main;
