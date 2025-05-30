import * as React from "react";
import Box from "@mui/material/Box";
import CellRows from "./CellRows";

const ShortCode = ({ code }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#00377D",
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
        // backgroundColor: "white",
        borderRadius: 16,
        // boxShadow: 4,
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

const PrizeInfo = ({ values, date, prize, onAnimateFinished }) => {
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
        EduQuiz
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
        {date}
      </Box>
      <Box
        sx={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#00377D",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        Lots:
      </Box>
      <Box
        sx={{
          fontSize: 24,
          marginTop: -3,
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
      <CellRows values={values} onAnimateFinished={onAnimateFinished} />
    </Box>
  );
};

const Show = ({ onDrawCompleted, values, date, prize, shortCode }) => {
  const onAnimateFinished = React.useCallback(() => {
    console.log("Animate finished");
    onDrawCompleted();
  }, [onDrawCompleted]);

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
        overflowY: "auto"
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
        <PrizeInfo
          date={date}
          prize={prize}
          values={values}
          onAnimateFinished={onAnimateFinished}
        />
      </Box>
    </Box>
  );
};

export default Show;
