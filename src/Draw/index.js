import * as React from "react";
import Results from "./Results";
import Show from "./Show";
import Start from "./Start";
import Finished from "./Finished";

const Draw = ({ lotteryData }) => {
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
    <div>
      {state === "drawAnnouncement" && (
        <Start
          prizes={lotteryData.prizes}
          onStart={onStart}
          date={lotteryData.date}
          shortCode={lotteryData.shortCode}
        />
      )}
      {state === "drawStart" && (
        <Show
          onDrawCompleted={onDrawCompleted}
          date={lotteryData.date}
          shortCode={lotteryData.shortCode}
          values={lotteryData.winners}
          prize={lotteryData.currentPrize}
        />
      )}
      {state === "drawCompleted" && (
        <Results
          onDrawResultsCompleted={onDrawResultsCompleted}
          date={lotteryData.date}
          shortCode={lotteryData.shortCode}
          values={lotteryData.winners}
          notes={lotteryData.notes}
        />
      )}
      {state === "drawFinished" && (
        <Finished
          date={lotteryData.date}
          shortCode={lotteryData.shortCode}
          values={lotteryData.winners}
          prize={lotteryData.currentPrize}
        />
      )}
    </div>
  );
};

export default Draw;
