import {createGlobalStyle} from "styled-components";
import {useState, useEffect} from "react";
import HomePage from './Components/HomePage';
import MatchPage from './Components/MatchPage';

const GlobalStyle = createGlobalStyle`
html {
    min-height: 100%;
}
body {
margin:0;
padding:0;
background: linear-gradient(#eeaeca, #94e9c0);


}
`


function App() {

  const [page, setPage] = useState("HomePage")

  const changePage = () => {

    switch (page){
      case "HomePage":
        return <HomePage
        goToMatch={goToMatch}/>
      case "MatchPage":
        return <MatchPage
        goToHome={goToHome}/>
      default: 
      return <div>Página não encontrada!</div>  

    }
  }

  const goToMatch = () => {
  setPage("MatchPage")
  }  

  const goToHome = () => {
  setPage("HomePage")
  }





  return (
    <div>


      <GlobalStyle/>
      
      {changePage()}
    </div>
  );
}

export default App;
