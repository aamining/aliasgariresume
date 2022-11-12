import React,{Component} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Signup";
import Login from "./Login";
import Comments from "./Comments";


class Main extends Component{
    render(){
    return(
        <BrowserRouter>
            
                <Routes>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/comments" element={<Comments/>}></Route>
                </Routes>

        </BrowserRouter>        
    )
    }
}
export default Main;