import styles from "./Home.module.css";
import ChatSection from "../../components/ChatSection/ChatSection";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect } from "react";

// Definition of Data Structures used
/**
 * @typedef {Array<Object>} currentChat - Data on current chat
 * 
 * @property {boolean} isAI - The msg is by AI or user
 * @property {string} msg - The msg value
 * @property {string} time - The time of msg
 * @property {number} rating - The rating for AI response, if given by user
 * @property {string} feedback - The feedback for AI response, if given by user
 */

/**
 * @typedef {Array<Object>} oldChatLists - Data on all previously happen chats
 * 
 * @property {Object<number, Array<Object>>} - The Object of one complete conversation b/w user and AI
 * it contains unique id for that chat, and the array containing chat
 * 
 * 
 * Object properties:
 * @property {boolean} isAI - The msg is by AI or user
 * @property {string} msg - The msg value
 * @property {string} time - The time of msg
 * @property {number} rating - The rating for AI response, if given by user
 * @property {string} feedback - The feedback for AI response, if given by user
 */


export default function Home() {
    // is new conversation started
    const [isStartedChat, setIsStartedChat] = useState(false);

    const [isShowOldChat, setIsShowOldChat] = useState(false);

    // list of all old conversations
    const [oldChatLists, setOldChatLists] = useState([]);

    // for passing data to show old conversation
    const [oldConversation, setOldConversation] = useState({});

    useEffect(() => {
        const oldList = localStorage.getItem("oldChatList");

        if(!oldList) {
            localStorage.setItem("oldChatList", JSON.stringify([]));
        } else {
            setOldChatLists(JSON.parse(oldList));
        }
    }, []);

    useEffect(() => {
        
        if(oldChatLists.length !== 0) {
            localStorage.setItem("oldChatList", JSON.stringify(oldChatLists));
        }
        
    }, [oldChatLists]);

    return (
        <div className={styles.home}>
            <Navbar 
                isStartedChat={isStartedChat}
                setIsStartedChat={setIsStartedChat}
                oldChatLists={oldChatLists}
                isShowOldChat={isShowOldChat}
                setIsShowOldChat={setIsShowOldChat}
                setOldConversation={setOldConversation}
            />
            <ChatSection 
                isStartedChat={isStartedChat}
                setIsStartedChat={setIsStartedChat}
                isShowOldChat={isShowOldChat}
                oldChatLists={oldChatLists}
                setOldChatLists={setOldChatLists}
                oldConversation={oldConversation}
            />
        </div>
    );
}