import CardList from "../../components/CardList";
import AppBar from "../../shared/AppBar";
import Footer from "../../shared/Footer";
import HowWeHelp from "./HowWeHelp";


const Home = () => {
    return (
        <div>
            <AppBar />
            <HowWeHelp />
            <CardList />
            <Footer />
        </div>
    );
};

export default Home;