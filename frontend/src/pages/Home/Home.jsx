import CardList from "../../components/CardList";
import AppBar from "../../shared/AppBar";
import HowWeHelp from "./HowWeHelp";


const Home = () => {
    return (
        <div>
            <AppBar />
            <HowWeHelp />
            <CardList />
        </div>
    );
};

export default Home;