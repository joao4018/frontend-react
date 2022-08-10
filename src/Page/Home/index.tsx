import "./home.scss"
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";

export function Home()  {

    return (
        <div className={"home"}>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar />
                home container
            </div>

        </div>
    );
}

