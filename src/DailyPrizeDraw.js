import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

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

const Cell = ({ value }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: 56,
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
          color: "red",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const CellRow = ({ values }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4,
      }}
    >
      {values.map((value, index) => (
        <Box
          // margin right 4
          sx={{
            marginRight: index < values.length - 1 ? 4 : 0,
          }}
        >
          <Cell value={value} />
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
          fontSize: 36,
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          lineHeight: "64px",
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        Jeu Fan Foot
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
          color: "red",
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
        Airtime 5000 FCFA chacun
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
          <CellRow values={values[0]} />
          <CellRow values={values[1]} />
          <CellRow values={values[2]} />
          <CellRow values={values[3]} />
        </Box>
      </Box>
    </Box>
  );
};

const DailyPrize = ({ onDrawCompleted }) => {
  const values = [
    [1, 2, 3, 4, 5, 6, undefined, undefined],
    [1, 2, 3, 4, 5, 6, undefined, undefined],
    [1, 2, 3, 4, 5, 6, undefined, undefined],
    [1, 2, 3, 4, 5, 6, undefined, undefined],
  ];
  const date = "29/03/2024";
  const shortCode = "909";

  // write timeout to simulate the draw 5 seconds
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Draw completed");
      onDrawCompleted();
    }, 2000);
    return () => clearTimeout(timeout);
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
        <PrizeInfo date={date} values={values} />
      </Box>
    </Box>
  );
};

export default DailyPrize;