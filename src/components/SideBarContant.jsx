import React from "react";
import Button from "./Button";

const SidebarContent = () => {
    return (
        <div className="middle" style={{ flexDirection: "column" }}>
            <Button className="ourworks py-2 px-4" href={"/work"}>
                OUR WORKS
            </Button>
            <p className="ourworks-text">Click button for details of our works</p>
        </div>
    );
};

export default SidebarContent;
