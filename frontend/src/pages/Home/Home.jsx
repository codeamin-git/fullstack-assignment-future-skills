import { useState } from "react";
import CardList from "../../components/CardList";
import AppBar from "../../shared/AppBar";
import Footer from "../../shared/Footer";
import HowWeHelp from "./HowWeHelp";


const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <AppBar />
            <HowWeHelp onSearch={setSearchTerm}/>
            <CardList searchTerm={searchTerm}/>
            <Footer />
        </div>
    );
};

export default Home;