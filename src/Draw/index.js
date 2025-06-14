import * as React from "react";
import Results from "./Results";
import Show from "./Show";
import Start from "./Start";
import Box from "@mui/material/Box";
import Finished from "./Finished";

const Draw = ({ lotteryData, type, onChangeType, onChangeDate }) => {
  const [state, setState] = React.useState("drawAnnouncement");

  const onStart = React.useCallback(() => {
    setState("drawStart");
  }, []);

  const onDrawCompleted = React.useCallback(() => {
    setState("drawCompleted");
  }, []);

  const onDrawResultsCompleted = React.useCallback(() => {
    setState("drawFinished");
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        overflowY: "auto"
      }}
    >
      {state === "drawAnnouncement" ? (
        <Start
          prizes={lotteryData?.prizes}
          onStart={onStart}
          date={lotteryData?.date}
          shortCode={lotteryData?.shortCode}
          type={type}
          dates={lotteryData?.dates}
          onChangeType={onChangeType}
          onChangeDate={onChangeDate}
        />
      ) : state === "drawStart" ? (
        <Show
          onDrawCompleted={onDrawCompleted}
          date={lotteryData.date}
          shortCode={lotteryData.shortCode}
          values={lotteryData.winners}
          prize={lotteryData.currentPrize}
        />
      ) : state === "drawCompleted" ? (
        <Results
          onDrawResultsCompleted={onDrawResultsCompleted}
          date={lotteryData.date}
          shortCode={lotteryData.shortCode}
          values={lotteryData.winners}
          notes={lotteryData.notes}
        />
      ) : (
        state === "drawFinished" && (
          <Finished
            date={lotteryData.date}
            shortCode={lotteryData.shortCode}
            values={lotteryData.winners}
            prize={lotteryData.currentPrize}
          />
        )
      )}
    </Box>
  );
};

export default Draw;
