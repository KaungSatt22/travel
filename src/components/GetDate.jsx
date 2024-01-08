import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const GetDate = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      id="date"
      showIcon
      selected={startDate}
      onSelect={setStartDate}
      dateFormat="dd/MM/yyyy"
      className="outline-none w-full"
    />
  );
};

export default GetDate;
