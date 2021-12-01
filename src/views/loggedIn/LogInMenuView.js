import {useContext} from "react";
import {UserContext} from "../../shared/provider/UserProvider";

export const LogInMenuView = () => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    return (
        <div>
            <h1>Logged In</h1>
            <input onChange={(event) => setAuthenticatedUser(event.target.value)} />
        </div>
    )
}