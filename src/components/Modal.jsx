import * as React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import picture from "../assets/Aavatar.jpg";
import styled from "@emotion/styled";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 280,
  border: "2px solid #fff",
  borderRadius: "1rem",
  boxShadow: 24,
  p: 4,
};

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  marginTop: "0.5rem",
});
export default function ModalWindow() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip
        onClick={handleOpen}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", sm: 20 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor={"background.default"} color={"text.primary"}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            color={"gray"}
            textAlign="center"
          >
            Create a Post
          </Typography>
          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src={picture} />
            <Typography variant="span" fontWeight={500}>
              Basat Maqsood
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", marginTop: "1rem" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Whats on your mind!..."
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
}
