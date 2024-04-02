import * as React from "react";
import Draw from "./Draw";
import api from "./api";

const DrawContainer = ({ originalType, date }) => {
  const [type, setType] = React.useState(originalType);
  const onChangeType = React.useCallback((t) => {
    setType(t);
  }, []);

  const [data, setData] = React.useState(undefined);

  React.useEffect(() => {
    const fetchData = async () => {
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
      setData(response);
    };
    fetchData();
  }, [date, type]);

  if (!data) return null;

  return <Draw lotteryData={data} type={type} onChangeType={onChangeType} />;
};

export default DrawContainer;
