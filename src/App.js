import * as React from "react";
import DailyPrizeResults from "./DailyPrizeResults";
import DailyPrizeDraw from "./DailyPrizeDraw";
import DailyPrizeStart from "./DailyPrizeStart";
import DailyPrizeFinished from "./DailyPrizeFinished";

const App = () => {
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

  const date = "29/03/2024";
  const shortCode = "909";
  const values = ["123456", "654321", "765432", "987654"];
  const prizes = [
    "Grand Prix: une voiture SUV BAIC X35!",
    "Samsung A24+6Go de data",
    "Airtime 5000 FCFA chacun",
  ];
  const notes = `
  Félicitations! Tu as gagné Airtime d'une valeur de 5000 FCFA du jeu
          "Fan Foot"! Tu recevras automatiquement une dotation de crédit de 5
          000 FCFA`;

  return (
    <div>
      {state === "drawAnnouncement" && (
        <DailyPrizeStart
          prizes={prizes}
          onStart={onStart}
          date={date}
          shortCode={shortCode}
        />
      )}
      {state === "drawStart" && (
        <DailyPrizeDraw
          onDrawCompleted={onDrawCompleted}
          date={date}
          shortCode={shortCode}
          values={values}
        />
      )}
      {state === "drawCompleted" && (
        <DailyPrizeResults
          onDrawResultsCompleted={onDrawResultsCompleted}
          date={date}
          shortCode={shortCode}
          values={values}
          notes={notes}
        />
      )}
      {state === "drawFinished" && (
        <DailyPrizeFinished date={date} shortCode={shortCode} values={values} />
      )}
    </div>
  );
};

export default App;
