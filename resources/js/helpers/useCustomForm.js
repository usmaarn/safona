import axios from "axios";
import { useState } from "react";
import useError from "./useError";

const useCustomForm = (form = {}) => {
    const [data, setState] = useState(form);
    const [errors, setError] = useError();
    const [response, setResponse] = useState(null);

    const setData = (name, value) => {
        setState({ ...data, [name]: value });
    };

    const hide = () => setOpen(false);
    const show = () => setOpen(true);

    const clear = () => setState({});

    const post = () => {
        axios
            .post(route, data)
            .then((res) => setResponse(res.data))
            .catch((er) => setError(er.response?.data?.errors));
    };

    return { data, setData, post, errors, clear, response };
};

export default useCustomForm;
