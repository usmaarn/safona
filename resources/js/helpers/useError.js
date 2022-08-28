import { useState } from "react";


const useError = () => {

    const [error, setState] = useState({});

    const setError = (e) => {
        const errs = {};
        for(let item in e ){
            errs[item] = e[item][0];
        }

        setState(errs);
    }

    return [error, setError];
}

export default useError;
