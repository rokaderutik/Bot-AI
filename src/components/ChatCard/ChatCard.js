import { Box, Stack, Typography, Rating } from "@mui/material";
import user_icon from "../../assets/user_icon_bot_ai.png";
import AI_icon from "../../assets/logo_bot_ai.png";
// import { format } from "date-fns";
import like_icon from "../../assets/like.png";
import dislike_icon from "../../assets/dislike.png";
import FeedBackModal from "../FeedbackModal/FeedbackModal";
import { useState } from "react";
import styles from "./ChatCard.module.css";

/**
 * ChatCard component: for conversation, handles all chats (AI, user, current conversation and old conversations)
 * @param {boolean} isAI
 * is messege/chat by AI or user
 * 
 * @param {string} msg 
 * @param {string} time
 * @param {boolean} isOldChat
 * is current chat or old chat, use for conditional rendering
 * 
 * @param {Array<Object>} 
 * @returns 
 */
const ChatCard = ({ isAI, msg, time, isOldChat=false }) => {
    // for feedback modal
    const [open, setOpen] = useState(false);

    const [rating, setRating] = useState(0);

    // to open ratings
    const [isLike, setIsLike] = useState(false);

    
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
            className={`${isOldChat ? styles.old_conversation : ""}`}
            sx={{
                '&:hover .feedback-btns': {
                    visibility: 'visible',
                    opacity: 1
                }
            }}
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
                       {time}
                    </Typography>

                    {/* if AI then show like and dislike buttons */}
                    {
                        (isAI) &&
                        <Stack 
                            direction="row" 
                            spacing={2} 
                            visibility='hidden'
                            sx={{ opacity: { xs: 1, md: 0 }, transition: 'opacity 400ms ease' }}
                            className='feedback-btns'
                        >
                            <Box 
                                src={like_icon} 
                                component="img" 
                                sx={{cursor: "pointer"}}
                                onClick={() => setIsLike(prev => !prev)}
                            />
                            {
                                isLike &&
                                <Rating
                                    size="small"
                                    value={rating}
                                    onChange={(event, newValue) => {
                                        setRating(newValue);
                                    }}
                                />
                            }
                            <Box 
                                src={dislike_icon} 
                                component="img" 
                                sx={{cursor: "pointer"}}
                                onClick={() => setOpen(true)}
                            />
                            <FeedBackModal open={open} setOpen={setOpen} />
                        </Stack>
                    }

                    {/* for old chat & AI*/}
                    {
                        (isOldChat && isAI) &&
                        <Rating size="small" value={0} readOnly />
                    }
                </Stack>
                {/* for old chat & AI*/}
                {
                    (isOldChat && isAI) &&
                    <Typography variant="h4">
                        Feedback: <span style={{fontWeight: "400"}}>{"feedback value"}</span>
                    </Typography>
                }
            </Stack>
        </Stack>
    );
};

export default ChatCard;