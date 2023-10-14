import { useRouteError } from "react-router-dom";
const Error = () =>
{   const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Opppsssss!</h1>
            <h2>{err?.data}</h2>
            <h3>Status :{err.status}</h3>
        </div>
    )
}

export default Error;