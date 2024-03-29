import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailWrapper, Button, Info } from "../components/styled";
import React from 'react'

function Recipe() {
  let params = useParams()

  useEffect(() => {
    fetchDetails(params.id)
  }, [params.id])

  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')



  const fetchDetails = async (id) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_APP_API_KEY}&number=9`)
    const detailData = await data.json()
    setDetails(detailData)
  }

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? "active" : "" }  onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? "active" : "" } onClick={() => setActiveTab('ingredients')}>Ingredients</Button>

        {activeTab === 'instructions' &&        ( 
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}>
            
          </h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}>
            
          </h3>
        </div>         
        )}
      
        {activeTab === 'ingredients' && (
          <ul>
            { details && details.extendedIngredients.map((ingredient) => {
              <li key={ingredient.id}>{ingredient.original}</li>
            }) }
          </ul>

        )}
      
      </Info>
      
    </DetailWrapper>
  )
}

export default Recipe