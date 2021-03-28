import moment from "moment";
import { connect } from "react-redux";
import { selectDate } from "./actions";

const Kg = (props) => {
  const newStats = props.dates.filter(
    (x) => x.date === moment(props.selectedDate).format("YYYY-MM-DD")
  );
  console.log(newStats);

  return (
    <div id="recovered">
      <div className="img-container">
        <img src="/recycling.png" alt="recycling" />
        <span>Recovered</span>
      </div>
      {newStats.length ? (
        <div className="data">
          {newStats[0].recoveredKg}
          <span id="kg">kg</span>
        </div>
      ) : (
        <div className="data">
          812<span id="kg">kg</span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);

  return { dates: state.dates, selectedDate: state.selectedDate };
};
export default connect(mapStateToProps, { selectDate })(Kg);
