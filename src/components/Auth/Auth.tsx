'use client'

import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

enum Tabs {
    Login = "login",
    Register = "register",
}

export default function Auth() {
    const [activeTab, setActiveTab] = useState<string>(Tabs.Login);

    return (
        <div className="auth">
            <div className="auth__container">
                <div className="auth__tabs-container">
                    <button
                        className={`auth__tab ${activeTab === Tabs.Login ? "auth__tab--active" : ""}`}
                        onClick={() => setActiveTab(Tabs.Login)}
                    >
                        Login
                    </button>
                    <span className="auth__tab-decor">|</span>
                    <button
                        className={`auth__tab ${activeTab === Tabs.Register ? "auth__tab--active" : ""}`}
                        onClick={() => setActiveTab(Tabs.Register)}
                    >
                        Register
                    </button>
                </div>

                {activeTab === Tabs.Login && <Login />}
                {activeTab === Tabs.Register && <Register />}
            </div>
        </div>
    );
}