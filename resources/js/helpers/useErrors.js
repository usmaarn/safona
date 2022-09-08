import axios from "axios";
import { useState } from "react";

function useForm(data) {
    const [state, setState] = useErrors({});
    const [response, setResponse] = useState();
    const [form, setForm] = useState(data);

    const post = (route, data) => {
        axios
            .post(route, data)
            .then((res) => setResponse(res.data))
            .catch((err) => {
                setErrors({
                    ...errors,
                    message: errors.response.data.errors.message,
                });
            });
    };

    return { post, errors };
}

export default useErrors;
