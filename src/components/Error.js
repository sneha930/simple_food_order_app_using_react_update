import { useRouteError } from "react-router-dom";

const Error = () => {
   const err = useRouteError();
   console.error("Route error: ", err); // Debug

   // Safely extract values
   const status = err?.status || "Error";
   const message =
      typeof err?.statusText === "string"
         ? err.statusText
         : typeof err?.message === "string"
         ? err.message
         : "Something went wrong.";

   return (
      <div>
         <h1>Oops! Something went wrong.</h1>
         <h2>{status}: {message}</h2>
         {/* Optional: View full error object */}
         {/* <pre>{JSON.stringify(err, null, 2)}</pre> */}
      </div>
   );
};

export default Error;
