import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ShortCode = () => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        borderRadius: 2,
        boxShadow: 4,
        height: 48,
        // align items in center
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          fontSize: 28,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 6,
          paddingRight: 6,
        }}
      >
        909
      </Box>
    </Box>
  );
};

const Logo = () => {
  return (
    <Box
      sx={{
        width: 64,
        height: 64,
        backgroundColor: "white",
        borderRadius: 16,
        boxShadow: 4,
        padding: 2,
      }}
    >
      <img
        src="/logo192.png"
        alt="logo"
        width="64"
        height="64"
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
};

const PrizeInfo = ({ onStart, prizes }) => {
  return (
    <Box
      sx={{
        padding: 2,
        marginTop: 16,
      }}
    >
      <Box
        sx={{
          fontSize: 36,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        Bienvenue au Jeu Fan Foot!
      </Box>
      <Box
        sx={{
          fontSize: 48,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        Jeu Fan Foot!
      </Box>
      <Box
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        Lots:
      </Box>
      {prizes.map((prize, index) => (
        <Box
          sx={{
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            lineHeight: "64px",
            paddingLeft: 4,
            paddingRight: 4,
          }}
        >
          {prize}
        </Box>
      ))}

      <Box
        sx={{
          // align content to center
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <Button
          variant="outlined"
          onClick={onStart}
          sx={{
            color: "black",
            paddingTop: 1,
            paddingBottom: 1,
            paddingLeft: 8,
            paddingRight: 8,
            backgroundColor: "white",
            borderColor: "red",
            borderWidth: 2,
            fontSize: 18,
            "&:hover": {
              backgroundColor: "#E1E1E1",
              borderColor: "red",
              borderWidth: 2,
              boxShadow: "none",
            },
          }}
        >
          Commencer
        </Button>
      </Box>
    </Box>
  );
};

const DailyPrizeStart = () => {
  const onStart = () => {
    console.log("Start the game");
  };

  const prizes = [
    "Grand Prix: une voiture SUV BAIC X35!",
    "Samsung A24+6Go de data",
    "Airtime 5000 FCFA chacun",
  ];

  return (
    <Box
      sx={{
        // full screen
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        backgroundImage: "url(/main_background.jpg)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 24,
          left: 24,
          top: 24,
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ShortCode />
        <Logo />
      </Box>
      <Box
        sx={{
          position: "absolute",
          // center top
          top: 0,
          left: 0,
          right: 0,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PrizeInfo onStart={onStart} prizes={prizes} />
      </Box>
    </Box>
  );
};

export default DailyPrizeStart;
