import { useState, useEffect } from "react";
import { mongoDBApi } from "../../Utils/axios";
import ProfileSetting from "./ProfileSetting";
import OrderList from "./OrderList";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CircularProgress from "@mui/material/CircularProgress";
import { grey } from "@mui/material/colors";
import coverPic from "../../assets/Gust_Profile_CoverPhoto.png";
import userPic from "../../assets/user.png";
import moment from "moment-timezone";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

moment.tz.setDefault("Asia/Bangkok");

const initial = {
  profile: [],
  loading: false,
  error: null,
};

function Profile(values) {
  const { token } = values;
  const [getprofile, setGetprofile] = useState(initial);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchProfile = async () => {
    setGetprofile((prev) => ({
      ...prev,
      loading: true,
    }));
    let profile;
    let fetchError;

    try {
      const profileResponse = await mongoDBApi.get(`users/profile`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      profile = await profileResponse?.data;
    } catch (error) {
      fetchError = error;
    }

    setGetprofile((prev) => ({
      ...prev,
      profile,
      loading: false,
      error: fetchError,
    }));
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      {getprofile.loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: "5rem" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box sx={{ mt: "3rem", mx: "6rem", position: "relative" }}>
          <TabContext value={value}>
            <Grid container xs={12} sm={12} md={12}>
              <Grid xs={12} sm={12} md={4.8} sx={{ px: "2rem" }}>
                <Paper elevation={3} sx={{ mb: "2rem" }}>
                  <Box
                    sx={{
                      backgroundImage: `url(${coverPic})`,
                      height: "10.5rem",
                      backgroundSize: "cover",
                    }}
                  ></Box>

                  <Box sx={{ pt: "1.5rem", height: "12rem" }}>
                    <Paper
                      id="Profile__img"
                      component="img"
                      elevation={9}
                      src={userPic}
                      sx={{
                        width: "9rem",
                        borderRadius: "50%",
                        ml: "2rem",
                        position: "absolute",
                        top: "7rem",
                      }}
                    ></Paper>

                    <Grid container xs={12} sm={12} md={12}>
                      <Grid xs={5} sm={6} md={5}></Grid>
                      <Grid xs={7} sm={6} md={7}>
                        <Box>
                          <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                            {getprofile.profile.data?.username}
                          </Typography>
                          <Typography sx={{ wordWrap: "break-word" }}>
                            Joined{" "}
                            {moment(getprofile.profile.data?.createdAt).format(
                              "D MMMM, YYYY"
                            )}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box>
                    <TabList
                      orientation="vertical"
                      variant="fullWidth"
                      sx={{
                        "& button.Mui-selected": {
                          bgcolor: "#f0f7e9",
                          color: grey[900],
                        },
                      }}
                      onChange={handleChange}
                      TabIndicatorProps={{ hidden: true }}
                    >
                      <Tab
                        label="Profile Settings"
                        value="1"
                        sx={{
                          borderBottom: 1,
                          borderTop: 1,
                          borderColor: "divider",
                        }}
                      />
                      <Tab
                        icon={<StyledBadge badgeContent={5} color="red500" />}
                        iconPosition="end"
                        label="Orders List"
                        value="2"
                        sx={{ minHeight: "48px" }}
                      />
                    </TabList>
                  </Box>
                </Paper>
              </Grid>

              <Grid xs={12} sm={12} md={7.2}>
                <TabPanel value="1">
                  <ProfileSetting />
                </TabPanel>
                <TabPanel value="2">
                  <OrderList />
                </TabPanel>
              </Grid>
            </Grid>
          </TabContext>
        </Box>
      )}
    </div>
  );
}

export default Profile;

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -10,
  },
}));
