import moment from "moment";
import { connect } from "react-redux";
import { selectDate } from "./actions";

const Trr = (props) => {
  const newStats = props.dates.filter(
    (x) => x.date === moment(props.selectedDate).format("YYYY-MM-DD")
  );
  console.log(newStats);

  return (<>
    <div id="trr">
      <div className="img-container">
        <img src="/trr.png" alt="trr" />
        <span>T.R.R</span>
      </div>
      {newStats.length ?
      <div className="data">{newStats[0].TRR}</div>
  : <div className="data">123</div> }
    </div>
  
    </>
  );
};
const mapStateToProps = (state) => {
  console.log("state", state);

  return { dates: state.dates, selectedDate: state.selectedDate };
};
export default connect(mapStateToProps, { selectDate })(Trr);
