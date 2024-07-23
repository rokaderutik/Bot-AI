import { Stack } from "@mui/material";
import ChatCard from "../ChatCard/ChatCard";



/**
 * CurrentConversation component: component contains list of conversation currently on going
 * 
 * @param {Object} conversation
 * object contains all conversation related data(chatList, feedback, rating, id, title)
 * @returns 
 */
export default function OldConversation({conversation}) {

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
            {
                conversation.chatList.map((item,ind) => {
                    return (
                        <ChatCard 
                            key={ind}
                            isAI={item.isAI}
                            msg={item.msg}
                            time={item.time}
                            feedback={item.feedback}
                            rating={item.rating}
                        />
                    );
                })
            }
            
        </Stack>
    );
}