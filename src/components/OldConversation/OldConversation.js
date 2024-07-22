import { Stack } from "@mui/material";
import ChatCard from "../ChatCard/ChatCard";



/**
 * CurrentConversation component: component contains list of conversation currently on going
 * @returns 
 */
export default function OldConversation() {

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