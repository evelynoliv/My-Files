import axios from "axios";


export const useRequestData = (end) => {
    const [data, setData] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState ("");
}

const listTrips = () => {
    setLoading(true);
    axios
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-oliveira-carver/trips`)
    .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/evelyn-oliveira-carver/trips${end}`)
    .then((res) => {
        setLoading(false);
        console.log(setData(res.data.trips))
       
    })
}

