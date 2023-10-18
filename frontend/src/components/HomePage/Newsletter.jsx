import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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

        <form>
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
            <InputBase
              sx={{
                width: "10rem",
                input: {
                  background: "#1CB803",
                  borderRadius: 5,
                  height: "3rem",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "white",
                  cursor: "pointer",
                },
              }}
              type="submit"
              value="SUBSCRIBE"
            ></InputBase>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Newsletter;
