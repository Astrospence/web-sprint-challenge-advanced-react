import {useState} from 'react';

const useShowSuccessMessage = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [showSuccessMessage, handleSubmit];
}

export default useShowSuccessMessage;