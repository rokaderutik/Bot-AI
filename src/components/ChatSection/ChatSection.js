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

/**
 * DefaultQuestion component: card showing default sample questions.
 * @param {string} question
 * @returns 
 */
const DefaultQuestion = ({question}) => {

    return (
        <Box 
            bgcolor="#fff" 
            p={2} 
            pb={2.5}
            boxShadow="0px 4px 10px 0px #00000026"
            borderRadius={"5px"}
            onClick={() => {}}
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

/**
 * ChatSection component
 * @returns 
 */
const ChatSection = () => {
    const isMobile = useMediaQuery("(max-width: 900px)");
    

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
            {
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
                            <DefaultQuestion question="Hi, what is the weather" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DefaultQuestion question="Hi, what is my location" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DefaultQuestion question="Hi, what is the temperature" />
                        </Grid>
                        {!isMobile && (
                            <Grid item xs={12} md={6}>
                                <DefaultQuestion question="Hi, how are you" />
                            </Grid>
                        )}
                    </Grid>
                </Container>
            }

            <Stack direction="row" mx={2} mt={4} mb={2} gap={2}>
                <TextField 
                    sx={{width: "85%"}}
                />
                <Button>Ask</Button>
                <Button>Save</Button>
            </Stack>

        </div>
    );
};

export default ChatSection;