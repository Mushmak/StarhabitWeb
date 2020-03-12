import Link from 'next/link'
import Router from 'next/router'


import React, { useEffect } from "react";

function homepage() {

    useEffect(() => {
        const { pathname } = Router

        Router.replace('/gallery')
    });

    return <div>
    

    </div>
}
export default homepage
