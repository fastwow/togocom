import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ShortCode = ({ code }) => {
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
        {code}
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

const Winner = ({ value }) => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        height: 76,
        alignContent: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "red",
        borderRadius: 2,
        borderWidth: 2,
        borderStyle: "solid",
        boxShadow: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "white",
          paddingLeft: 6,
          paddingRight: 6,
          // spacing between characters
          letterSpacing: "0.10em",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const Winners = ({ values }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {values.map((value, index) => (
        <Box
          sx={{
            marginBottom: index === values.length - 1 ? 0 : 4,
          }}
        >
          <Winner value={value} />
        </Box>
      ))}
    </Box>
  );
};

const PrizeInfo = ({ values, date }) => {
  return (
    <Box
      sx={{
        padding: 2,
        marginTop: 16,
      }}
    >
      <Box
        sx={{
          fontSize: 48,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
          textDecoration: "underline",
        }}
      >
        Jeu Fan Foot
      </Box>
      <Box
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          color: "black",
          marginTop: -2,
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        {date}
      </Box>
      <Box
        sx={{
          // align content to center
          display: "flex",
          justifyContent: "center",
          marginTop: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Winners values={values} />
        </Box>
      </Box>
    </Box>
  );
};

const Results = ({
  onDrawResultsCompleted,
  date,
  values,
  shortCode,
  notes,
}) => {
  const { width, height } = useWindowSize();

  // write timeout to simulate the draw 5 seconds
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Draw completed");
      onDrawResultsCompleted();
    }, 10000);
    return () => clearTimeout(timeout);
  }, [onDrawResultsCompleted]);

  const onConfettiComplete = React.useCallback(() => {
    onDrawResultsCompleted();
  }, [onDrawResultsCompleted]);

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
        <ShortCode code={shortCode} />
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
        <PrizeInfo values={values} date={date} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          // center bottom
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            marginBottom: 8,
            width: "100%",
          }}
        >
          <Box
            sx={{
              fontSize: 24,
              fontWeight: "bold",
              color: "black",
              textAlign: "center",
              width: "100%",
              lineHeight: "64px",
              // make this text moving from left to right by circular motion over the screen with the same speed the start and at the end
              animation: "move 10s linear infinite",
              // make this text moving from left to right by circular motion over the screen with the same speed the start and at the end
              "@keyframes move": {
                "0%": {
                  transform: "translateX(-100%)",
                },
                "100%": {
                  transform: "translateX(100%)",
                },
              },
            }}
          >
            {notes}
          </Box>
        </Box>
      </Box>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={1000}
        tweenDuration={10000}
        onConfettiComplete={onConfettiComplete}
      />
    </Box>
  );
};

export default Results;
