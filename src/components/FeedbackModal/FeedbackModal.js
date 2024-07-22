import { Modal, Box, Typography, Button, Stack, TextField } from "@mui/material";
import bulb_icon from "../../assets/light_feedback.png";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./FeedbackModal.module.css"
import { useState } from "react";


/**
 * FeedBackModal component: feedback modal form
 * @param {boolean} isOpen
 * for modal opening and closing
 * @param {Function} setIsOpen
 * for closing modal
 * @returns 
 */
const FeedBackModal = ({ open, setOpen }) => {
    const [inputData, setInputData] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // save data to chat feedback

        setInputData("");
        setOpen(false);
    }

    return (
        <Modal 
            open={open} 
            onClose={() => setOpen(false)}
        >
            <Box
                sx={{
                    width: "95%",
                    height: "335px",
                    maxWidth: 600,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "-4px 4px 10px 0px #00000040",
                    p: 3,
                    outline: 0,
                    bgcolor: "#FAF7FF",
                    borderRadius: "10px",
                  }}
            >
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Box src={bulb_icon} component="img" height="42px" width="42px" />
                    <Typography variant="h3" width={"80%"}>
                        Provide Additional Feedback
                    </Typography>
                    <CloseIcon 
                        sx={{height: "42px", width: "35px", fontSize: "28px", fontWeight: 500, cursor: "pointer"}} 
                        onClick={() => setOpen(false)}
                    />
                </Stack>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <textarea
                            className={styles.textarea}
                            rows={7}
                            required
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                    </Box>
                    <Box display={"flex"} justifyContent={"flex-end"}>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default FeedBackModal;