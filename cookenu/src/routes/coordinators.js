export const goToLogin = (history) => {
    history.push ("/login")
}

export const goToAddRecipes = (history) => {
    history.push ("/adicionar")
}

export const goToRecipes = (history) => {
    history.push ("/")
}

export const goToRecipeDetail = (history, id) => {
    history.push (`/detalhe/${id}`)
}

export const goToSignUp = (history) => {
    history.push ("/cadastro")
}



