import type React from "react";
import Header from "../common/Header";

interface LayoutProps {
    children : React.ReactNode
}


export default function Layout ({children}:LayoutProps){
    return(
        <div className="layout grid grid-cols-[250px_1fr] h-screen ">
            <Header/>
            {children}
        </div>
    )
}