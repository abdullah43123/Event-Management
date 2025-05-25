import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export function UserData({ children }) {
    const [user, setUser] = useState(null);

    const store = {
        user,
        updateUser: setUser
    }

    return (
        <UserContext.Provider value={{ store }}>
            {children}
        </UserContext.Provider>
    )
}