import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const CellRow = React.memo(({ values, size, onAnimateFinished }) => {
  // convert string values to array of number
  console.log("size", values);
  
  const valuesToRender = React.useMemo(() => {
    const result = values?.msisdn?.split("").map((value) => parseInt(value));

    if (!result?.length) {
      return [];
    }
    if (values.length < size) {
      const remaining = size - values.length;
      for (let i = 0; i < remaining; i++) {
        result.push(undefined);
      }
    }

    return result;
  }, [values, size]);

  console.log("valuesToRender", valuesToRender);

  const [itemToRender, setItemToRender] = React.useState([]);

  React.useEffect(() => {
    setItemToRender((itemToRender) => {
      if (
        itemToRender.length === 0 &&
        itemToRender.length < valuesToRender.length
      ) {
        return valuesToRender.slice(0, itemToRender.length + 1);
      }
      return itemToRender;
    });
  }, [valuesToRender]);

  const onCellAnimateFinished = React.useCallback(() => {
    console.log("cell animate finished");
    setItemToRender((itemToRender) => {
      if (itemToRender.length < valuesToRender.length) {
        console.log("celllrow animate next");
        return valuesToRender.slice(0, itemToRender.length + 1);
      } else {
        console.log("cellrow animate finished");
        onAnimateFinished();
      }
      return itemToRender;
    });
  }, [valuesToRender, onAnimateFinished]);

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
            <Cell
              value={itemToRender[index]}
              onAnimateFinished={onCellAnimateFinished}
            />
          </Box>
        ))}
    </Box>
  );
});

export const Cell = ({ value, onAnimateFinished }) => {
  // do 2 loops from 0 to 9 and from 9 to 0 when showing the value. this draw
  // the value in a circular way

  const [currentValue, setCurrentValue] = React.useState(-1);

  // create reference to flag
  const flag = React.useRef(false);

  React.useEffect(() => {
    let loop = 0;

    if (value === undefined) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentValue((currentValue) => {
        if (flag.current) {
          return currentValue;
        }

        // stop the interval when the loop is 3
        if (loop === 2 && currentValue === value && !flag.current) {
          clearInterval(interval);

          onAnimateFinished();
          flag.current = true;
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
  }, [value, onAnimateFinished]);

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

const CellRows = ({ values, onAnimateFinished }) => {
  const [source, setSource] = React.useState([]);

  React.useEffect(() => {
    setSource((itemToRender) => {
      if (itemToRender.length === 0 && itemToRender.length < values.length) {
        return values.slice(0, itemToRender.length + 1);
      }
      return itemToRender;
    });
  }, [values]);

  const onCellRowsAnimateFinished = React.useCallback(() => {
    console.log("onCellRowsAnimateFinished");
    setSource((itemToRender) => {
      if (itemToRender.length < values.length) {
        console.log("itemToRender", itemToRender.length, values.length);
        return values.slice(0, itemToRender.length + 1);
      } else {
        onAnimateFinished();
      }
      return itemToRender;
    });
  }, [values, onAnimateFinished]);

  const ui = source;

  const maxSize = Math.max(...values.map((item) => item?.msisdn?.length));

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
              size={maxSize}
              onAnimateFinished={onCellRowsAnimateFinished}
            />
          ))}
      </Box>
    </Box>
  );
};

export default CellRows;
