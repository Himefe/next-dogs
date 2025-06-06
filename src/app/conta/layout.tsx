import React from "react";
import UserAccountHeader from "./_components/header";

const UserAccountLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="container">
            <UserAccountHeader />
            {children}
        </div>
    );
};

export default UserAccountLayout;
