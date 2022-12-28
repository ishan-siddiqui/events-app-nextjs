import React from "react";
import { FooterComponent } from "../footer/footer";
import { HeaderComponent } from "../header/header";

export default function MainLayout({children}){
    return(
        <>
            <HeaderComponent />
            <main>
                {children}
            </main>
            <FooterComponent />
        </>
    )
}