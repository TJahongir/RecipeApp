import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Grid, Card} from '../components/styled'

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState("")
    let params = useParams()

    useEffect(() => {
        getSearched(params.query)
    }, [params.query])

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_APP_API_KEY}&query=${name}&number=9`)
        const recipes = await data.json();
        let results = recipes.results
        setSearchedRecipes(results)
    }



  return (
    <Grid>
        {searchedRecipes && searchedRecipes.map((item) => {
            return (
                <Card key={item.id}>
                    <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

export default Searched