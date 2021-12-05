import {BoxInner, Button, CenterContent} from "../styles/styleComponens";
import RoutingPath from "../routes/RoutingPath";
import {useNavigate} from "react-router-dom";


export const NavigationLoggedIn = () => {
    const navigate = useNavigate()

    return (
        <CenterContent>
            <BoxInner>
                <Button variant="contained" onClick={() => navigate(RoutingPath.sellObjectView)}>Sell</Button>
                <Button variant="contained" onClick={() => navigate(RoutingPath.transactionsView)}>Transactions</Button>
            </BoxInner>
        </CenterContent>
    )
}