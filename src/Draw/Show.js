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
  // value is number. i want create an animation drawing the number. number will be changing from 0 to value
  // const [currentValue, setCurrentValue] = React.useState(
  // value === undefined ? undefined : 0
  // );

  // React.useEffect(() => {
  //   if (value === undefined) {
  //     return;
  //   }

  //   const interval = setInterval(() => {
  //     setCurrentValue((currentValue) => {
  //       if (currentValue < value) {
  //         return currentValue + 1;
  //       }
  //       return currentValue;
  //     });
  //   }, 200);

  //   return () => clearInterval(interval);
  // }, [value]);

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
          // animation when value is changing. duration 5s
          transition: "all 5s",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

const CellRow = ({ values }) => {
  // convert string values to array of number
  const valuesToRender = React.useMemo(() => {
    const result = values.split("").map((value) => parseInt(value));

    result.push(undefined);
    result.push(undefined);

    return result;
  }, [values]);

  // const [itemToRender, setItemToRender] = React.useState([]);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setItemToRender((itemToRender) => {
  //       if (itemToRender.length < valuesToRender.length) {
  //         return valuesToRender.slice(0, itemToRender.length + 1);
  //       }
  //       return itemToRender;
  //     });
  //   }, 400);

  //   return () => clearInterval(interval);
  // }, [valuesToRender]);

  // const extectedValues = valuesToRender.length;
  // const uiItems = React.useMemo(() => {
  //   return [
  //     ...itemToRender,
  //     ...new Array(extectedValues - itemToRender.length).fill(0),
  //   ];
  // }, [itemToRender, extectedValues]);

  // console.log(uiItems);

  const uiItems = valuesToRender;

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
      {uiItems.map((value, index) => (
        <Box
          // margin right 4
          sx={{
            marginRight: index < uiItems.length - 1 ? 4 : 0,
          }}
        >
          <Cell value={value} />
        </Box>
      ))}
    </Box>
  );
};

const CellRows = ({ values }) => {
  const [source, setSource] = React.useState([]);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSource((source) => {
  //       if (source.length < values.length) {
  //         return values.slice(0, source.length + 1);
  //       }
  //       return source;
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [values]);

  // console.log("CellRows");

  // const ui = React.useMemo(() => {
  //   console.log(
  //     "inside. source = " + source.length + " values = " + values.length
  //   );
  //   if (source.length < values.length) {
  //     return [
  //       ...source,
  //       ...new Array(values.length - source.length).fill(undefined),
  //     ];
  //   }
  //   return source;
  // }, [source, values]);

  // console.log(ui);

  const ui = values;

  return (
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
        {ui.map((value, index) => (
          <CellRow values={value} />
        ))}
      </Box>
    </Box>
  );
};

const PrizeInfo = ({ values, date, prize }) => {
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
        {prize.title}
      </Box>
      <CellRows values={values} />
    </Box>
  );
};

const Show = ({ onDrawCompleted, values, date, prize, shortCode }) => {
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Draw completed");
      onDrawCompleted();
    }, 5000);
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
        <PrizeInfo date={date} prize={prize} values={values} />
      </Box>
    </Box>
  );
};

export default Show;
