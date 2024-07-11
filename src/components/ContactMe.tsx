import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTheme } from "@/context/ThemeContext";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactMe = (props: Props) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setSeverity("success");
        setSnackbarMessage(
          "Thank you for contacting me. I will get back to you!"
        );
        reset();
      } else {
        setSeverity("error");
        setSnackbarMessage("Failed to send email.");
      }
    } catch (error) {
      setSeverity("error");
      setSnackbarMessage("Failed to send email.");
      console.error(error);
    } finally {
      setOpen(true);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3
        className="absolute top-20 lg:top-24 uppercase tracking-[1rem] text-gray-500 text-2xl font-bold"
        style={{
          color: "var(--color-primary)",
          textShadow:
            theme === "dark" ? "1px 1px 5px var(--color-contrast)" : "",
        }}
      >
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10 mt-20">
        <div className="space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#1976d2] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+1234567890</p>
          </div> */}

          {/* <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#1976d2] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Fresno, CA</p>
          </div> */}

          {/* <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#1976d2] h-7 w-7 animate-pulse" />
            <p className="text-2xl">gmtiwale@gmail.com</p>
          </div> */}
        </div>

        <form
          className="flex flex-col space-y-4 w-fit mx-auto text-center justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4
            className="text-4xl mb-5 font-semibold text-center"
            style={{
              color: "var(--color-primary)",
              textShadow:
                theme === "dark" ? "1px 1px 5px var(--color-contrast)" : "",
            }}
          >
            Lets Talk...
          </h4>
          <div className="flex flex-col space-y-4 w-full md:space-y-0 md:flex-row md:space-x-2">
            <input
              {...register("name")}
              placeholder="Full Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-full"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput w-full"
            rows={5}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="animate-pulse w-full"
            disabled={loading}
            style={{
              backgroundColor: "var(--color-primary)",
            }}
          >
            {loading && (
              <CircularProgress
                size={24}
                color="inherit"
                style={{ marginRight: 8 }}
              />
            )}
            Send
          </Button>
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default ContactMe;
