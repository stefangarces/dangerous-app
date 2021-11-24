import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'

export const Navigation = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p onClick={() => navigate(RoutingPath.logInMenuView)}>Log in</p>
            <p onClick={() => navigate(RoutingPath.signUpView)}>Sign up</p>
            <p onClick={() => navigate(RoutingPath.transactionsView)}>Transactions</p>
        </div>
    )
}