import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import {BoxInner, Button, CenterContent} from "../styles/styleComponens";

export const Navigation = () => {
    const navigate = useNavigate()

    return (
        <CenterContent>
            <BoxInner>
            <Button variant="contained" onClick={() => navigate(RoutingPath.logInMenuView)}>Log in</Button>
            <Button variant="contained" onClick={() => navigate(RoutingPath.signUpView)}>Sign up</Button>
            <Button variant="contained" onClick={() => navigate(RoutingPath.sellObjectView)}>Sell</Button>
            <Button variant="contained" onClick={() => navigate(RoutingPath.transactionsView)}>Transactions</Button>
            </BoxInner>
        </CenterContent>
    )
}