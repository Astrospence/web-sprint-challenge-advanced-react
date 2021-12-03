// write your custom hook here to control your checkout form
import {useState} from 'react';
import useShowSuccessMessage from "./useShowSuccessMessage";

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

const useForm = () => {
    const [showSuccessMessage, handleSubmit] = useShowSuccessMessage();
    const [values, setValues] = useState(initialValue)

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [showSuccessMessage, values, handleChanges, handleSubmit];
}

export default useForm;