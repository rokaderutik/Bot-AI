import styles from "./Home.module.css";
import ChatSection from "../../components/ChatSection/ChatSection";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {

    return (
        <div className={styles.home}>
            <Navbar />
            <ChatSection />
        </div>
    );
}