import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


const Root = () => {
    return (
        <div>
            <Header />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;