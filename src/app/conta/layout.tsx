import React from "react";
import UserAccountHeader from "./_components/header";

type UserAccountLayoutProps = {
    children: React.ReactNode;
    modal: React.ReactNode;
};

const UserAccountLayout = ({ children, modal }: Readonly<UserAccountLayoutProps>) => {
    return (
        <div className="container">
            <UserAccountHeader />
            {children}
            {modal && modal}
        </div>
    );
};

export default UserAccountLayout;
