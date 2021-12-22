import React, { useState } from 'react';
import OptionSideBar from '../OptionSideBar/OptionSideBar';
import "./SideBar.css"

const SideBar = () => {
    const [activeOption, setActiveOption] = useState("");
    return (
        <div className="sidebar-styles">
            <OptionSideBar 
                onClick={() => setActiveOption("wallet")}
                icon="wallet"
                name="/wallet"
                isActive="wallet"
                activeOption={activeOption}
            />

            <OptionSideBar 
                onClick={() => setActiveOption("send")}
                icon="paperPlane"
                name="/send"
                isActive="send"
                activeOption={activeOption}
            />

            <OptionSideBar 
                onClick={() => setActiveOption("contacts")}
                icon="contacts"
                name="/contacts"
                isActive="contacts"
                activeOption={activeOption}
            />

            <OptionSideBar 
                onClick={() => setActiveOption("receive")}
                icon="receive"
                name="/receive"
                isActive="receive"
                activeOption={activeOption}
            />

            <OptionSideBar 
                onClick={() => setActiveOption("shop")}
                icon="shop"
                name="/shop"
                isActive="shop"
                activeOption={activeOption}
            />
        </div>
    )
}

export default SideBar;
