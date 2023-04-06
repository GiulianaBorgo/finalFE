import { useState } from "react";

function Contact() {

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const cleanName = username.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (cleanName.length > 5 && emailRegex.test(email)) {
            setError(`Gracias ${username}, te contactaremos cuanto antes a ${email}!`);
        } else {
            console.log("The name is invalid.");
            console.log(`The email address ${email} is invalid.`);
            setError("Por favor verifique su información nuevamente")
        }
    }

    return (
        <section className='section' >
            <h3>¿Desea saber más?</h3>
            <h4>Dejenos sus datos y nos pondremos en contacto contigo a la brevedad</h4>
            <form onSubmit={handleSubmit}>
                <input
                    value={username}
                    onChange={handleChangeName}
                    placeholder="Ingrese su nombre y apellido"
                />
                <input
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Ingrese un email válido"
                />
                <button type="submit">Enviar</button>
            </form>
            <div>{error}</div>
        </section>
    )
}

export default Contact