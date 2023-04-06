import { useContext, useEffect, useState } from "react"
import Card from "../components/Card"
import { Context } from "../Context";

function Home() {

    const contextValue = useContext(Context)

    useEffect(() => {
        contextValue.getApi()
    }, [])


    return (
        <section  >
            <h2>Home</h2>
            <div >
                <Card/>
            </div>
        </section>
    )
}

export default Home