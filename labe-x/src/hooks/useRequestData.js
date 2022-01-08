import {useState, useEffect} from "react";
import axios from "axios";
// import {BASE_URL} from

export const useRequestData = () => {
    const [data, setData] = useState ([])

    const getTrips = () => {
        setIsLoading(true);
        axios
        .get(`${BASE_URL}/evelyn-oliveira-carver/trips`)
        .get(`${BASE_URL}${ALUNO}/trips`)
        .then ((res) => {
            setIsLoading(false);
            setData(res.data.trips)
        })
    }
}