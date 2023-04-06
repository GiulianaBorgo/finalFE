import { useState } from "react"
import { Link } from "react-router-dom"

function Destacados(){
  
    const [favs, setUsers] = useState(JSON.parse(localStorage.getItem("favs") || '[]'))

    function deleteFav(fav) {
      const existUser = favs.some((u) => u.id === fav.id)
      if (existUser) {
        console.log("eliminar")
        const newUsers = favs.filter((u) => u.id !== fav.id)
        setUsers(newUsers)
        localStorage.setItem("favs", JSON.stringify(newUsers))
      } else {
        console.log("no eliminar")
      }
    }
    
    return (
        <section>
            <h3>Lista de destacados</h3>
            <div className="fav card-grid ">
            {favs.map((fav)=>{
                return(
                    <div key={fav.id}>
                        <div>{fav.name}</div>
                        <div>{fav.username}</div>
                        <button onClick={() => deleteFav(fav)}>Delete</button>
                        <Link to={`/dentist/${fav.id}`}>See details</Link>
                    </div>)
                })}
            </div>
        </section>
    )
}

export default Destacados