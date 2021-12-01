import { BrowserRouter, Routes as Router, Route } from "react-router-dom"
import RoutingPath from "./RoutingPath"
import {LogInMenuView} from "../views/loggedIn/LogInMenuView"
import {SellObjectView} from "../views/sell/SellObjectView";
import {SignUpView} from "../views/signup/SignUpView";
import {TransactionsView} from "../views/transactions/TransactionsView";
import {useContext} from "react";
import {UserContext} from "../shared/provider/UserProvider";

export const Routes = ({ children }) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <BrowserRouter>
            {children}
            <span>Username: {authenticatedUser}</span>
            <Router>
                <Route path={RoutingPath.logInMenuView} element={<LogInMenuView />} />
                <Route path={RoutingPath.transactionsView} element={<TransactionsView />} />
                <Route path={RoutingPath.signUpView} element={<SignUpView />} />
                <Route path={RoutingPath.sellObjectView} element={<SellObjectView />} />
            </Router>
        </BrowserRouter>
    )
}