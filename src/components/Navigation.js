import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import {Button} from "@mui/material";
import {CardStyle} from "../styles/styleComponens";

export const Navigation = () => {
    const navigate = useNavigate()

    return (
        <CardStyle>
            <Button variant="contained" onClick={() => navigate(RoutingPath.logInMenuView)}>Log in</Button>
            <Button variant="contained" onClick={() => navigate(RoutingPath.signUpView)}>Sign up</Button>
            <Button variant="contained" onClick={() => navigate(RoutingPath.sellObjectView)}>Sell</Button>
            <Button variant="contained" onClick={() => navigate(RoutingPath.transactionsView)}>Transactions</Button>
        </CardStyle>
    )
}