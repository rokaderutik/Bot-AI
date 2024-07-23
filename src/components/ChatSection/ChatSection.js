import { 
    Box, 
    Container, 
    Typography, 
    Stack, 
    Grid,
    useMediaQuery,
    TextField,
    Button
} from "@mui/material";
import styles from "./ChatSection.module.css";
import logo from "../../assets/logo_bot_ai.png";
import CurrentConversation from "../CurrentConversation/CurrentConversation";
import OldConversation from "../OldConversation/OldConversation";
import { useRef, useState } from "react";

/**
 * DefaultQuestion component: card showing default sample questions.
 * @param {string} question
 * default question present on card
 * 
 * @param {Function} setIsStartedChat
 * for setting that chat is started, if user clicks on this question
 * 
 * @param {Function} setQuestion
 * for setting the actual question value as the question present on this card
 * @returns 
 */
const DefaultQuestion = ({question, setIsStartedChat, setQuestion }) => {

    function handleClick() {
        setIsStartedChat(true);
        setQuestion(question);
    }

    return (
        <Box 
            bgcolor="#fff" 
            p={2} 
            pb={2.5}
            boxShadow="0px 4px 10px 0px #00000026"
            borderRadius={"5px"}
            sx={{cursor: "pointer"}}
            onClick={handleClick}
        >
            <Typography 
                color="#000"
                fontSize={20}
                fontWeight={700}
            >
                {question}
            </Typography>
            <Typography 
                color="#00000080"
                fontSize={16}
                fontWeight={400}
            >
                Get immediate AI generated response
            </Typography>
        </Box>
    );
};


// Definition of Data Structures used
/**
 * @typedef {Array<Object>} currentChatList - Data on current chat
 * 
 * @property {boolean} isAI - The msg is by AI or user
 * @property {string} msg - The msg value
 * @property {string} time - The time of msg
 * @property {number} rating - The rating for AI response, if given by user
 * @property {string} feedback - The feedback for AI response, if given by user
 */

/**
 * ChatSection component:
 * 
 * @param {boolean} isStartedChat
 * is new conversation going on
 * 
 * @param {Function} setIsStartedChat
 * 
 * @param {boolean} isShowOldChat
 * to show old chat
 * 
 * @param {Array<Object>} oldChatLists
 * array of all previous conversation
 * 
 * @param {Function} setOldChatLists
 * 
 * @param {Object} oldConversation
 * object containing all data related to conversation(for showing it when user want's to see old conversation)
 * @returns 
 */
const ChatSection = ({ 
    isStartedChat, 
    setIsStartedChat, 
    isShowOldChat, 
    oldChatLists, 
    setOldChatLists,
    oldConversation
 }) => {
    const isMobile = useMediaQuery("(max-width: 900px)");

    // current conversation list
    const [currentChatList, setCurrentChatList] = useState([]);
    
    // for textfield of question
    const [inputData, setInputData] = useState('');
    const [question, setQuestion] = useState('');

    // for adding unique ID to every conversation
    const conversationID = useRef(0);

    function handleAsk() {
        if(inputData === "") {
            return;
        }

        if(!isStartedChat) {
            setIsStartedChat(true);
        }

        setQuestion(inputData);

        setInputData("");
    }

    function handleSave() {
        conversationID.current += 1;
        setOldChatLists([
            ...oldChatLists,
            {
                id: conversationID.current,
                title: "chat" + conversationID.current,
                chatList: currentChatList
            }
        ]);

        setCurrentChatList([]);

        setIsStartedChat(false);
    }

    return (
        <div className={styles.chat_section_wrapper}>
            <Typography 
                color="#9785BA"
                fontWeight={700}
                fontSize={28}
                mx={3}
                my={1.5}
            >
                Bot AI
            </Typography>

            {/* for showing default questions when chat is not started */}
            {
                (!isStartedChat && !isShowOldChat) &&
                <Container 
                    sx={{
                        display: "flex",
                        alignItems: "center", 
                        flexDirection: "column", 
                        justifyContent: "end", 
                        height: "75%"
                    }}
                >
                    <Stack alignItems="center" mb={12}>
                        <Typography
                            color="#000"
                            fontWeight={500}
                            fontSize={28}
                        >
                            How Can I Help You Today?
                        </Typography>
                        <Box 
                            src={logo} 
                            component="img" 
                            boxShadow="-4px 4px 10px 0px #00000026"
                            height={69}
                            width={69}
                            borderRadius="50%"
                        />
                    </Stack>
                    <Grid container rowSpacing={2} columnSpacing={1} alignItems={"center"}>
                        <Grid item xs={12} md={6}>
                            <DefaultQuestion 
                                question="Hi, what is the weather" 
                                setIsStartedChat={setIsStartedChat}
                                setQuestion={setQuestion}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DefaultQuestion 
                                question="Hi, what is my location" 
                                setIsStartedChat={setIsStartedChat}
                                setQuestion={setQuestion}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DefaultQuestion 
                                question="Hi, what is the temperature"
                                setIsStartedChat={setIsStartedChat}
                                setQuestion={setQuestion} 
                            />
                        </Grid>
                        {!isMobile && (
                            <Grid item xs={12} md={6}>
                                <DefaultQuestion 
                                    question="Hi, how are you" 
                                    setIsStartedChat={setIsStartedChat}
                                    setQuestion={setQuestion}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            }

            {/* for current ongoing chat */}
            {
                (isStartedChat && !isShowOldChat) &&
                <CurrentConversation 
                    currentChatList={currentChatList}
                    setCurrentChatList={setCurrentChatList}
                    question={question}
                />
            }
            
            {/* for old conversation chat */}
            {
                isShowOldChat &&
                <OldConversation 
                    conversation={oldConversation}
                />
            }

            <Stack direction="row" mx={2} mt={4} mb={2} gap={2}>
                <TextField 
                    sx={{width: "85%"}}
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
                <Button onClick={handleAsk}>Ask</Button>
                <Button onClick={handleSave}>Save</Button>
            </Stack>

            
        </div>
    );
};

export default ChatSection;