import * as React from "react";
import DailyPrizeResults from "./DailyPrizeResults";
import DailyPrizeDraw from "./DailyPrizeDraw";
import DailyPrizeStart from "./DailyPrizeStart";
import DailyPrizeFinished from "./DailyPrizeFinished";

const App = () => {
  const [state, setState] = React.useState("drawAnnouncement");

  const onStart = () => {
    setState("drawStart");
  };

  const onDrawCompleted = () => {
    setState("drawCompleted");
  };

  const onDrawResultsCompleted = () => {
    setState("drawFinished");
  };

  return (
    <div>
      {state === "drawAnnouncement" && <DailyPrizeStart onStart={onStart} />}
      {state === "drawStart" && (
        <DailyPrizeDraw onDrawCompleted={onDrawCompleted} />
      )}
      {state === "drawCompleted" && (
        <DailyPrizeResults onDrawResultsCompleted={onDrawResultsCompleted} />
      )}
      {state === "drawFinished" && <DailyPrizeFinished />}
    </div>
  );
};

export default App;
