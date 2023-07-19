import { Fragment } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  // if error
  const error = useRouteError();
  if (!isRouteErrorResponse(error)) {
    return <p>oops</p>;
  }
  //   if not error
  const {
    status,
    statusText,
    data: { message },
  } = error;
  console.log("data", message);
  return (
    <Fragment>
      <h2>Une erreur {status} est survenue</h2>
      <p>{statusText || message}</p>
    </Fragment>
  );
};

export default ErrorPage;
