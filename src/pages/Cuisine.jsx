import {Grid, CCard} from '../components/styled'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    let params = useParams();


    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&cuisine=${name}&number=9`)
        const recipes = await data.json();

        setCuisine(recipes.results)
    }


  return (
    <Grid>
        {cuisine.map((item) => {
            return(
                <CCard key={item.id}>
                    <img src={item.image} alt={item.title}/>
                    <h4>{item.title}</h4>
                </CCard>
            )
        })}
    </Grid>
  )
}

export default Cuisine