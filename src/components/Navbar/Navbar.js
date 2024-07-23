import { Box, Stack, Typography, useMediaQuery, IconButton } from "@mui/material";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo_bot_ai.png";
import pen_icon from "../../assets/pen_bot_ai.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";


/**
 * Navbar component: New chat and past conversations
 * 
 * @param {boolean} isStartedChat 
 * is new conversation started
 * 
 * @param {Function} setIsStartedChat
 * function to set state value for new chat is started (used here from pen_icon button)
 * 
 * @param {Array<Object>} oldChatLists
 * list of all old conversation
 * 
 * @param {boolean} isShowOldChat
 * to show old chat
 * 
 * @param {boolean} setIsShowOldChat
 * for showing old chats in chat section
 * 
 * @param {Function} setOldConversation
 * for seeting old conversation data when user click on any of the old conversation to see it
 * @returns 
 */
const Navbar = ({ 
    isStartedChat, 
    setIsStartedChat, 
    oldChatLists, 
    isShowOldChat,
    setIsShowOldChat, 
    setOldConversation     
}) => {
    const isMobile = useMediaQuery("(max-width: 900px)");
    const [menuOpen, setMenuOpen] = useState(false);

    function handleNewChat() {
        if(isStartedChat) {
            return;
        }
        if(isShowOldChat) {
            setIsShowOldChat(false);
        }
        setIsStartedChat(true);
    }

    function handleOpenOldConversation(conversation) {
        setOldConversation(conversation);
        setIsShowOldChat(true);
    }

    return (
        <div className={`${!menuOpen ? styles.menu_full : styles.hamburger}`}>
            {isMobile && (
                <IconButton sx={{paddingX: 0}} onClick={() => setMenuOpen(true)}>
                    <MenuIcon 
                        sx={{
                            color: "#9785BA",
                            height: "36px",
                            width: "50px",
                        }}
                    />
                </IconButton>
            )}
            <div className={`${styles.navbar_wrapper} ${menuOpen && styles.active}`}>
                <Stack 
                    direction="row"
                    spacing={2}
                    pl={2}
                    pr={0}
                    py={1}
                    bgcolor="primary.main"
                    alignItems="center"
                >
                    <Box
                        src={logo}
                        component="img"
                        sx={{
                            boxShadow: "0px 4px 4px 0px #00000040",
                            height: '32px',
                            width: '34px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            overflow: 'hidden'
                        }}
                    />
                    <Typography 
                        color="#000"
                        fontWeight={400}
                        fontSize={20}
                        mb={0}
                    >
                        New Chat
                    </Typography>
                    <Box 
                        src={pen_icon} 
                        component="img" 
                        height={24} 
                        width={24} 
                        mb={0} 
                        sx={{cursor: "pointer"}}
                        onClick={handleNewChat}
                    />
                    {isMobile && (
                        <IconButton
                            onClick={() => setMenuOpen(false)}
                            sx={{
                                position: "absolute",
                                top: -5,
                                right: -15,
                                color: "#000",
                            }}
                        >
                            <CloseIcon sx={{
                                height: "40px",
                                width: "40px",
                                color: "#9785BA"
                            }} />
                        </IconButton>
                    )}
                </Stack>
                <Stack mx={2} my={1.5} spacing={2} overFlowY={"auto"}>
                    <Box 
                        bgcolor="primary.main"
                        color="#414146"
                        borderRadius={"10px"}
                        px={1.5}
                        py={1}
                        fontSize={16}
                        fontWeight={700}
                    >
                        Past Conversations
                    </Box>

                    {/* list of past conversations */}
                    {
                        oldChatLists.map((conversation) => {
                            return (
                                <Box 
                                    key={conversation.id}
                                    bgcolor="primary.main"
                                    color="#414146"
                                    borderRadius={"10px"}
                                    px={1.5}
                                    py={1}
                                    fontSize={16}
                                    fontWeight={700}
                                    onClick={() => handleOpenOldConversation(conversation)}
                                >
                                    {conversation.title}
                                </Box>
                            );
                        })
                    }

                </Stack>
            </div>
        </div>
    );
};

export default Navbar;