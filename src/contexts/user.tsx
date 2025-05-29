"use client";

import logoutAction from "@/actions/user-logout";
import validateTokenAction from "@/actions/requests/validate-token";
import { User } from "@/types/user";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

type UserContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

export const useGetUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useGetUser must be used within a UserContextProvider");
    }

    return context;
};

type UserContextProviderProps = {
    children: React.ReactNode;
    user?: User | null;
};

export const UserContextProvider = ({ children, user: userProps }: UserContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const validate = async () => {
            const { ok } = await validateTokenAction();

            if (!ok) await logoutAction();
        };
        if (user) validate();
    }, [user]);

    useEffect(() => {
        if (userProps) setUser(userProps);
    }, [userProps]);

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
