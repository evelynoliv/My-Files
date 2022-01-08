import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls"
import useRequestData from "../../hooks/useRequestData";
import { PageContainer, RecipeContainer, RecipeImg } from "./styled";


function RecipeDetailPage() {
    // useProtectedPage()

    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]

    return (

        <PageContainer>

            {recipe &&
            <RecipeContainer>
                <RecipeImg src={recipe.image}/>

                <h1>{recipe.title}</h1>
                <p>{recipe.description}</p>
            </RecipeContainer>}
        </PageContainer>
    )

}

export default RecipeDetailPage;