import {useState} from "react";

export const useForm = (firstState) => {
    const [form, setForm] = useState(firstState);

    const onChangeInput = (event) => {
        const {name, value} = event.target;
        setForm({...setForm, [name]: value});
    }


    const clearInput = () => {
        setForm(firstState);
    }

    return {form, onChangeInput, clearInput}

}

