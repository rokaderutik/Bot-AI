import { Box, Stack, Typography } from "@mui/material";
import user_icon from "../../assets/user_icon_bot_ai.png";
import AI_icon from "../../assets/logo_bot_ai.png";
import { format } from "date-fns";
import like_icon from "../../assets/like.png";
import dislike_icon from "../../assets/dislike.png";
import FeedBackModal from "../FeedbackModal/FeedbackModal";
import { useState } from "react";

/**
 * ChatCard component: for conversation
 * @param {boolean} isAI
 * is messege/chat by AI or user
 * 
 * @param {string} msg 
 * @returns 
 */
const ChatCard = ({ isAI, msg }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Stack
            direction="row"
            bgcolor="#D7C7F421"
            boxShadow="-4px 4px 15px 0px #0000001A"
            borderRadius={"20px"}
            width="100%"
            px={2.25}
            py={2}
            spacing={2}
        >
            <Box 
                src={isAI ? AI_icon : user_icon}
                component="img"
                height="68px"
                width="68px"
                borderRadius="50%"
            />
            <Stack spacing={1}>
                <Typography variant="h4">
                    {isAI ? "Soul AI" : "You"}
                </Typography>
                <Typography variant="h4" fontWeight="400">
                    {msg}
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Typography variant="h5">
                       {format(new Date(), "MM/dd/yyyy 'at' h:mm a")}
                    </Typography>
                    <Box 
                        src={like_icon} 
                        component="img" 
                        // onClick={() => {}}
                    />
                    <Box 
                        src={dislike_icon} 
                        component="img" 
                    />
                    <FeedBackModal />
                </Stack>
            </Stack>
        </Stack>
    );
};


/**
 * CurrentConversation component: component contains list of conversation currently on going
 * @returns 
 */
export default function CurrentConversation() {

    return (
        <Stack 
            spacing={1.5}
            height={"75%"}
            px={2}
            pt={"5%"}
            sx={{
                overflowY: "auto"
            }}
        >
            <ChatCard msg="Hi!"/><ChatCard msg="Hi!"isAI /><ChatCard msg="Hi!"/><ChatCard msg="Hi!" isAI/><ChatCard msg="Hi!"/>
        </Stack>
    );
}