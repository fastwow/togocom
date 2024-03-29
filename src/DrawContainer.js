import * as React from "react";
import Draw from "./Draw";
import { DAILY_PRIZES, WEEKLY_PRIZES, SUPER_PRIZES } from "./mocks";

const DrawContainer = ({ type, date }) => {
  const lotteryData = React.useMemo(() => {
    if (type === "daily") {
      return DAILY_PRIZES[date];
    }
    if (type === "weekly") {
      return WEEKLY_PRIZES[date];
    } else if (type === "super") {
      return SUPER_PRIZES[date];
    }
  }, [type, date]);

  return <Draw lotteryData={lotteryData} />;
};

export default DrawContainer;
