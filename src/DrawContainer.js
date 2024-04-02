import * as React from "react";
import Draw from "./Draw";
import { DAILY_PRIZES, WEEKLY_PRIZES, SUPER_PRIZES } from "./mocks";

const DrawContainer = ({ originalType, date }) => {
  const [type, setType] = React.useState(originalType);
  const onChangeType = React.useCallback((t) => {
    setType(t);
  }, []);

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

  return (
    <Draw lotteryData={lotteryData} type={type} onChangeType={onChangeType} />
  );
};

export default DrawContainer;
