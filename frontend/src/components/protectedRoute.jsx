import { Navigate} from 'react-router-dom';
import { useAuthContext } from "../context/authContext.jsx";


const ProtectedRoute = ({ children }) => {

    const { user } = useAuthContext();
    console.log("User from context:", user);

    if(!user){
        return <Navigate to={"/"} replace />
    }

    return children;
}

export default ProtectedRoute;
