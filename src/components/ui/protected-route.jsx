import { useUser } from "@clerk/clerk-react"
import { useLocation, Navigate } from "react-router-dom"


const ProtecdRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();
  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }
  return children;
}

export default  ProtecdRoute