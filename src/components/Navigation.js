import { useNavigate } from 'react-router-dom'
import RoutingPath from '../routes/RoutingPath'
import {BoxInner, Button, CenterContent} from "../styles/styleComponens";
import useTheme from "./useTheme";

export const Navigation = () => {
    const navigate = useNavigate()

    const { theme, toggleTheme } = useTheme();

    return (
        <CenterContent>
            <BoxInner>
            <Button variant="contained" onClick={() => navigate(RoutingPath.logInMenuView)}>My Info</Button>
            <Button variant="contained" onClick={() => navigate(RoutingPath.signUpView)}>Weather</Button>
                <Button variant="contained" onClick={() => navigate(RoutingPath.sellObjectView)}>Count</Button>
            </BoxInner>
        </CenterContent>
    )
}