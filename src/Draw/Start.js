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

const PrizeInfo = ({ onStart, prizes, isPending }) => {
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
          {prize.title}
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
            color: isPending ? "white" : "black",
            paddingTop: 1,
            paddingBottom: 1,
            paddingLeft: 8,
            paddingRight: 8,
            backgroundColor: isPending ? "red" : "white",
            borderColor: "red",
            disabled: isPending,
            borderWidth: 3,
            borderRadius: 3,
            fontSize: 24,
            // bold
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              borderColor: "red",
              borderWidth: 3,
              borderRadius: 3,
              boxShadow: "none",
            },
          }}
        >
          Commencer
        </Button>
      </Box>

      {isPending ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 4,
            // add spacing between items
            gap: 1,
            // add wave effect to children. first becomer bigger, that second item become bigger and first smaller. and so on. from left item to right item. infinite animatin. apply to all children
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 42,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              // wave effect in loop. 1 second delay after every loop
              animation: "wave 1s infinite 25ms",
              // keyframes for wave effect
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 38,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              // add wave effect to this item with delay 200 ms
              animation: "wave 1s infinite 200ms",
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 38,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              animation: "wave 1s infinite 375ms",
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 38,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              animation: "wave 1s infinite 550ms",
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              width: 12,
              height: 38,
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              borderRadius: 1,
              borderWidth: 2,
              borderStyle: "solid",
              boxShadow: 4,
              animation: "wave 1s infinite 700ms",
              "@keyframes wave": {
                "0%": {
                  transform: "scale(1)",
                },
                "50%": {
                  transform: "scale(1.5)",
                },
                "100%": {
                  transform: "scale(1)",
                },
              },
            }}
          />
        </Box>
      ) : undefined}
    </Box>
  );
};

const Start = ({ onStart, prizes }) => {
  const [isPending, setIsPending] = React.useState(false);
  React.useEffect(() => {
    if (isPending) {
      const timeout = setTimeout(() => {
        console.log("Draw completed");
        onStart();
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [isPending, onStart]);

  const onStartClick = React.useCallback(() => {
    setIsPending(true);
  }, []);

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
        <PrizeInfo
          onStart={onStartClick}
          prizes={prizes}
          isPending={isPending}
        />
      </Box>
    </Box>
  );
};

export default Start;
