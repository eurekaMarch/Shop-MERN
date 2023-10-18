import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import cloth from "../../assets/cloth2.jpg";
import InputBase from "@mui/material/InputBase";

function Newsletter() {
  return (
    <Box sx={{ mt: "5rem", height: "35rem" }}>
      <Box
        sx={{
          width: "100%",
          height: "35rem",
          backgroundImage: `url(${cloth})`,
          backgroundPosition: "100% 80%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: grey[400],
          backgroundBlendMode: "multiply",
          textAlign: "center",
          pt: "12rem",
        }}
      >
        <Typography sx={{ color: "white", mb: "3rem", fontSize: "3rem" }}>
          <div className="Newsletter__font">Sign up To Our Newsletters </div>
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mx: "1rem",
          }}
        >
          <InputBase
            sx={{
              width: "40rem",
              border: "none",
              input: {
                background: "white",
                borderRadius: 5,
                pl: "1rem",
                height: "3rem",
                fontSize: "1.4rem",
              },
            }}
            type="email"
            placeholder="Your Email Address..."
          />
          <Button
            variant="contained"
            color="green"
            sx={{
              fontSize: "1.4rem",
              borderRadius: 5,
              height: "4rem",
            }}
            type="submit"
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Newsletter;
