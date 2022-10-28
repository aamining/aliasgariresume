import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Signup";
import Login from "./Login";


const Main=()=>{
    return(
        <BrowserRouter>
            
                <Routes>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    
                </Routes>

            
        </BrowserRouter>
        

    )
}
export default Main;