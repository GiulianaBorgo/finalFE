import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailDentist() {

    const [data, setData] = useState()
    const params = useParams()

    async function getApi() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            const json = await response.json()
            setData(json)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getApi()
    }, [])


    return (
        <section className="section">
            {data ?
                <div >
                    <div>
                        <h4>Nombre</h4>
                        <p>{data.name}</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>{data.email}</p>
                    </div>
                    <div>
                        <h4>Telefono</h4>
                        <p>{data.phone}</p>
                    </div>
                    <div>
                        <h4>Sitio web</h4>
                        <p>{data.website}</p>
                    </div>
                </div> : <div>No repo</div>}
        </section>
    )
}

export default DetailDentist