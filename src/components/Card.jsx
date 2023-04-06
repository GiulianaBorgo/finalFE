import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context"
import styles from './Card.module.css'

function Card() {

    const contextValue = useContext(Context)

    function addFavs(dentista) {

        const favsArray = JSON.parse(localStorage.getItem("favs") || [])
        const existFav = favsArray.some((u) => u.id === dentista.id)

        console.log('favs ' , existFav, favsArray)
        if (existFav) {
            console.log(`${dentista.name} ya se encuentra en favoritos`)
        } else {
            favsArray.push(dentista)
            const newFavsJSON = JSON.stringify(favsArray)
            localStorage.setItem("favs", newFavsJSON)
            console.log(`${dentista.name} ha sido agregado exitosamente a favoritos`)
        }
    }


    return (
        <div >
            {contextValue.data ? <div className='card-grid'>{contextValue.data.map((dentista) => (
                <div className={styles.card} key={dentista.id}>
                    <img src="/doctor.jpg" alt='DH-logo' />
                    <div>{dentista.name}</div>
                    <div>{dentista.username}</div>
                    <button onClick={() => addFavs(dentista)} className={styles.favButton}>ADD FAV</button>
                    <Link to={`/dentist/${dentista.id}`}>See details</Link>
                </div>
            ))}</div> : <div>No repo</div>
            }
        </div>
    )
}
export default Card