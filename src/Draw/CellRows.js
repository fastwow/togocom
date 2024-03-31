import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const CellRow = React.memo(({ values, size, onAnimateFinished }) => {
  // convert string values to array of number
  const valuesToRender = React.useMemo(() => {
    const result = values?.split("").map((value) => parseInt(value));

    if (!result?.length) {
      return [];
    }

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
    }, 1600);
    return () => clearInterval(interval);
  }, [valuesToRender]);

  React.useEffect(() => {
    if (itemToRender.length === valuesToRender.length) {
      onAnimateFinished();
    }
  }, [itemToRender, valuesToRender, onAnimateFinished]);

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
});

export const Cell = ({ value }) => {
  // do 2 loops from 0 to 9 and from 9 to 0 when showing the value. this draw
  // the value in a circular way

  console.log(value);

  const [currentValue, setCurrentValue] = React.useState(-1);

  React.useEffect(() => {
    let loop = 0;

    if (value === undefined) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentValue((currentValue) => {
        // stop the interval when the loop is 3
        if (loop === 2 && currentValue === value) {
          clearInterval(interval);
          return currentValue;
        }

        if (currentValue === 9) {
          loop++;
          return 0;
        }
        return (currentValue === -1 ? 0 : currentValue) + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [value]);

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
        {currentValue === -1 ? "" : currentValue}
      </Typography>
    </Box>
  );
};

const CellRows = ({ values }) => {
  const [source, setSource] = React.useState([]);

  const sourceEmpty = !source?.length;
  React.useEffect(() => {
    const interval = setInterval(
      () => {
        setSource((source) => {
          console.log("inside setSource");
          if (source.length < values.length) {
            return values.slice(0, source.length + 1);
          }
          return source;
        });
      },
      sourceEmpty ? 100 : 9600
    );

    return () => clearInterval(interval);
  }, [values, sourceEmpty]);

  const ui = source;

  const onAnimateFinished = React.useCallback(() => {
    console.log("onAnimateFinished");
  }, []);

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
        {Array(values.length)
          .fill(0)
          .map((_value, index) => (
            <CellRow
              values={ui[index]}
              size={8}
              onAnimateFinished={onAnimateFinished}
            />
          ))}
      </Box>
    </Box>
  );
};

export default CellRows;
