"use client";

import logoutAction from "@/actions/user-logout";
import validateTokenAction from "@/actions/validate-token";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";

type User = {
    id: string;
    nome: string;
    email: string;
};

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
    user: User | null;
};

export const UserContextProvider = ({ children, user: userProps }: UserContextProviderProps) => {
    const [user, setUser] = useState<User | null>(userProps);

    useEffect(() => {
        const validate = async () => {
            const { ok } = await validateTokenAction();

            if (!ok) await logoutAction();
        };
        if (user) validate();
    }, [user]);

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
