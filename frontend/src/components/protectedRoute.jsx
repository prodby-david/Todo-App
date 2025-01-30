import { Navigate} from 'react-router-dom';
import { useAuthContext } from "../context/authContext.jsx";


const ProtectedRoute = ({ children }) => {

    const { user } = useAuthContext();

    if(!user){
        return <Navigate to={"/"} />
    }

    return children;
}

export default ProtectedRoute;
