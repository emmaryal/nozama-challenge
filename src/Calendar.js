import { useState } from "react";
import DatePicker from "react-datepicker";
import { selectDate } from "./actions";

import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";

const Calendar = (props) => {
  const [pickedDate = new Date("2021-03-21"), setPickedDate] = useState();
  console.log("pickedDate :", pickedDate);
  return (
    <div id="calendar">
      <img src="/calendar.png" alt="calendar" />{" "}
      <DatePicker
        useWeekdays={true}
        selected={pickedDate}
        onChange={(date) => setPickedDate(date)}
        onSelect={(date) => props.selectDate(date)}
        minDate={new Date("2021-03-21")}
        maxDate={new Date("2021-03-31")}
        dateFormat={" eeee d MMMM, yyyy"}
      />
    </div>
  );
};

const mapStateToProps = (state) => {

  console.log("state", state);
  return { dates: state.dates };
};

export default connect(mapStateToProps, { selectDate })(Calendar);
