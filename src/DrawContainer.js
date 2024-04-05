import * as React from "react";
import Draw from "./Draw";
import Box from "@mui/material/Box";
import api from "./api";
import { formatDate } from "./format";

const todayDate = formatDate(new Date());

const DrawContainer = ({ originalType }) => {
  const [date, setDate] = React.useState(formatDate(new Date()));
  const [type, setType] = React.useState(originalType);
  const onChangeType = React.useCallback((t) => {
    setType(t);
  }, []);

  const [data, setData] = React.useState(undefined);
  const [allData, setAllData] = React.useState(undefined);

  const onChangeDate = React.useCallback((d) => {
    console.log("onChangeDate", d);
    setDate(d);
  }, []);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const allPossibleDates = await api.getDataByData(
        todayDate,
        type === "daily"
          ? "DAILY"
          : type === "weekly"
          ? "WEEKLY"
          : type === "super"
          ? "SUPER"
          : undefined,
        100
      );
      setAllData(allPossibleDates);
      setIsLoading(false);
    };
    fetchData();
  }, [type]);

  React.useEffect(() => {
    if (!allData?.length) {
      setData(undefined);
      return;
    }

    const response = allData.find((item) => item.date === date) || allData[0];

    console.log("response", response);

    setData(
      !response
        ? undefined
        : {
            ...response,
            currentPrize: response.prizes[0],
            dates: allData?.map((item) => item.date),
          }
    );
  }, [allData, type, date]);

  if (isLoading) {
    return (
      <Box
        // full screen and center
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          }}
        >
          Chargement...
        </Box>
      </Box>
    );
  }

  return (
    <Draw
      lotteryData={data}
      type={type}
      onChangeType={onChangeType}
      onChangeDate={onChangeDate}
    />
  );
};

export default DrawContainer;
