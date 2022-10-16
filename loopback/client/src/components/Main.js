import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./Signup";

const Main=()=>{
    return(
        <BrowserRouter>
            
                <Routes>
                    <Route path="/signup" element={<Signup/>}></Route>
                </Routes>

            
        </BrowserRouter>
        

    )
}
export default Main;