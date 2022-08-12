import "./store.scss"
import Sidebar from "../../Components/sidebar/Sidebar";
import Navbar from "../../Components/navbar/Navbar";

export function Store()  {

    return (
        <div className={"store"}>
            <Sidebar/>
            <div className="storeContainer">
                <Navbar />
                store
            </div>

        </div>
    );
}

