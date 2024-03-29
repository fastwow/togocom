import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const CellRow = ({ values, size, onAnimateFinished }) => {
  // convert string values to array of number
  const valuesToRender = React.useMemo(() => {
    const result = values.split("").map((value) => parseInt(value));

    result.push(undefined);
    result.push(undefined);

    return result;
  }, [values]);

  const [itemToRender, setItemToRender] = React.useState([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setItemToRender((itemToRender) => {
        if (itemToRender.length < valuesToRender.length) {
          return valuesToRender.slice(0, itemToRender.length + 1);
        }
        return itemToRender;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [valuesToRender]);

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
      {Array(size)
        .fill(0)
        .map((_value, index) => (
          <Box
            // margin right 4
            sx={{
              marginRight: index < size - 1 ? 4 : 0,
            }}
          >
            <Cell value={itemToRender[index]} />
          </Box>
        ))}
    </Box>
  );
};

export const Cell = ({ value }) => {
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
          <CellRow values={value} size={8} />
        ))}
      </Box>
    </Box>
  );
};

export default CellRows;
