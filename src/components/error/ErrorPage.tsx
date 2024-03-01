import { useRouteError } from "react-router-dom";
//import './ErrorPage.css';
 
//There was no type for return in useRouteError so this is temp option

interface Error {
    statusText: string;
    message: string;
}

export default function ErrorPage() {
  const error: Error = useRouteError() as Error;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}