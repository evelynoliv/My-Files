import React from "react";
import { useHistory } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage"
import CardRecipes from "../../components/CardRecipes/CardRecipes";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { RecipesListContainer, AddButton } from "./styled"
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinators";

function RecipePage() {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

    const onClickCard = (id) => {
        goToRecipeDetail(history, id)

    }

    const arrayRecipes = recipes.map((recipe) => {
        return (
            <CardRecipes
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => onClickCard(recipe.recipe_id)}

            />
        )
    })

    return (
        <div>

            <RecipesListContainer>
                {arrayRecipes}

            </RecipesListContainer>
            <AddButton onClick={() => goToAddRecipes(history)}>+</AddButton>



        </div>


    )

}

export default RecipePage;