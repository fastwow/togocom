import * as React from "react";
import Draw from "./Draw";
import Box from "@mui/material/Box";
import api from "./api";

const DrawContainer = ({ originalType, date }) => {
  const [type, setType] = React.useState(originalType);
  const onChangeType = React.useCallback((t) => {
    setType(t);
  }, []);

  const [data, setData] = React.useState(undefined);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await api.getDataByData(
        date,
        type === "daily"
          ? "DAILY"
          : type === "weekly"
          ? "WEEKLY"
          : type === "super"
          ? "SUPER"
          : undefined
      );
      console.log(response);

      setIsLoading(false);

      if (!response) return;

      setData({
        ...response,
        currentPrize: response.prizes[0],
      });
    };
    fetchData();
  }, [date, type]);

  console.log("data", data);

  if (!data) {
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
          Pas de données pour {type} le {date}
        </Box>
      </Box>
    );
  }

  return <Draw lotteryData={data} type={type} onChangeType={onChangeType} />;
};

export default DrawContainer;
