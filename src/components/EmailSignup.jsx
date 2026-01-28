import { TextField, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

const EmailSignup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) return;
    setOpen(true);
    setEmail(""); // clear input after submit
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4 px-6 mb-16">
        <TextField
          variant="outlined"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "100%",
            maxWidth: 360,
            backgroundColor: "#FFFFFF",
            borderRadius: "6px",
            "& fieldset": {
              borderColor: "#C6A664",
            },
          }}
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#3B2F2F",
            color: "#FAF7F2",
            "&:hover": {
              backgroundColor: "#2a1f1f",
            },
            paddingX: "24px",
            paddingY: "10px",
          }}>
          Notify Me
        </Button>
      </motion.div>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ backgroundColor: "#160b0b", color: "#d6c6a9" }}>
          Thanks for joining! We’ll notify you at launch .
        </Alert>
      </Snackbar>
    </>
  );
};

export default EmailSignup;
