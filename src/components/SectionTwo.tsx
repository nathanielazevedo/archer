import { Box, Button, Card, Typography } from "@mui/material";
import polygons from "../assets/polygons.png";
import creator from "../assets/creator.png";
import mobile from "../assets/mobile.png";
import web from "../assets/web.png";

const SectionTwo = () => {
  const cards = [
    {
      title: "Install",
      description:
        "Install Archer in your field. Archer is solar powered and completely wireless. No need to run power or ethernet cables.",
      icon: web,
    },
    {
      title: "Connect",
      description:
        "Connect Archer to your network. Archer will send you notifications when your irrigation is done.",
      icon: mobile,
    },
    {
      title: "Retrieve",
      description:
        "Retrieve your Archer from the field. Archer will send you a notification when it's battery is low.",
      icon: creator,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px",
        height: "100vh",
        backgroundColor: "#060816",
      }}
    >
      <Box
        sx={{
          width: "1100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <Box
            sx={{
              width: "550px",
            }}
          >
            <Typography variant="h4" mb={0.5} sx={{ fontWeight: "bold" }}>
              How It Works
            </Typography>
            <Typography>
              By utilizing the nearly world wide coverage of the GSM network
              Archer can send you notifications from anywhere in the world.
              Whether your field is in the middle of nowhere or in the middle of
              the city, Archer has you covered.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                height: "50px",
                marginTop: "20px",
                background:
                  "radial-gradient(926px at 2.7% 11%, #30a7d0 0%, rgb(178, 31, 102) 90%)",
              }}
            >
              Request Access
            </Button>
          </Box>
          <img
            src={polygons}
            alt=""
            style={{ width: "300px", marginRight: "70px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "320px",
            gap: "50px",
            marginTop: "100px",
          }}
        >
          {cards.map((card, i) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  width: "800px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "-20px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "green",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    background:
                      "radial-gradient(926px at 2.7% 11%, #30a7d0 0%, rgb(178, 31, 102) 90%)",
                  }}
                >
                  <h4>{i + 1}</h4>
                </div>
                <Card
                  sx={{
                    padding: "30px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    minHeight: "290px",
                    maxHeight: "290px",
                    marginTop: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "150px",
                    }}
                  >
                    <img src={card.icon} width="80px" />
                  </Box>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SectionTwo;
