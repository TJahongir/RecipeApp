import { useEffect } from "react"


function Popular() {

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9`)
        const data = await api.json()
        console.log(data)
    }

    return(
        <h1>Popular</h1>
    )
}

export default Popular