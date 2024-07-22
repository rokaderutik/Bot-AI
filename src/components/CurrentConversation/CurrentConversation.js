import { Stack } from "@mui/material";
import ChatCard from "../ChatCard/ChatCard";
import responseList from "../../sampleData.json";
import { format } from "date-fns";
import { useEffect } from "react";


/**
 * CurrentConversation component: component contains list of conversation currently on going
 * @param {Array<Object>} currentChatList
 * @param {Function} setCurrentChatList
 * @param {string} question
 * current question asked
 * @returns 
 */
export default function CurrentConversation({ currentChatList, setCurrentChatList, question }) {

    //set user question data in one obj and then store response in one obj
    const userObj = {
        isAI: false,
        msg: question,
        time: `${format(new Date(), "MM/dd/yyyy 'at' h:mm a")}`
    }
    
    // for finding response for the question
    useEffect(() => {

        const result = responseList.find((res) => res.question.toLowerCase().includes(question.toLowerCase()));
        let msg = '';

        if(!result) {
            msg = "Sorry, Unable to give answer, Try using different question."
        } else {
            msg = result.response;
        }
        
        const AIObj = {
            isAI: true,
            msg: msg,
            time: `${format(new Date(), "MM/dd/yyyy 'at' h:mm a")}`
        }

        setCurrentChatList([
            ...currentChatList,
            userObj,
            AIObj
        ]);

    }, [question]);

    // console.log(currentChatList)

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
                currentChatList.map((item, ind) => {
                    return (
                        <ChatCard 
                            key={ind}  
                            isAI={item.isAI}
                            msg={item.msg}
                            time={item.time}
                        />
                    );
                })
            }
        </Stack>
    );
}