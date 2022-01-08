import {useHistory} from "react-router-dom";

//chamar useProtect

function AdminHomePage () {

    const history = useHistory()

    const goBack = () => {
        history.push("/admin/create")
    }

    const loginAdmin = () => {
        history.push("/admin-trips-list")
    }

    const goToTripDetails = () => {
        history.push("/admin/trips/:id")
    }
  

return(
    <div>
    <h3>Painel Administrador</h3>
    <button onClick={loginAdmin}>Voltar</button>
    </div>
)

}

export default AdminHomePage;