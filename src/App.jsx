import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmpDashboard from "./components/Dashboard/EmpDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
    const [user, setuser] = useState(null);

    const authData = useContext(AuthContext);
    // console.log(authData);

    const handleLogin = (email, password) => {
        if (email == "admin@me.com" && password == 123) {
            setuser("admin");
        } else if (
            authData &&
            authData.employees.find(
                (e) => e.email == email && e.password == password
            )
        ) {
            setuser("emplyoee");
        } else {
            alert("Invalid credentials");
        }
    };
    console.log(user);

    return (
        <>
            {!user ? (
                <Login handleLogin={handleLogin} />
            ) : (
                "We have nothing to show you"
            )}
            {user == "admin" && <AdminDashboard />}
            {user == "emplyoee" && <EmpDashboard />}
        </>
    );
}

export default App;
