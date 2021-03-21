import { useEffect, useState } from "react";



const Stats = () => {

    const [stats, setStats] = useState(null)

    useEffect(() => {
        setTimeout(() => {
          fetch('http://localhost:8001/stats')
          .then(res => {
            return res.json();
          })
          .then(data => {
            // setIsPending(false);
            setStats(data);
            console.log(data)
          })
        }, 1000);
      }, [])
  return (
    <div id="stats">
      <div id="trr">
        <img src="/trr.png" alt="trr" />
        T.R.R
        {/* need to get the stats for date = date from picker */}
        {/* {stats.TRR} */}
        {console.log(stats)}
      </div>
      <div id="recovered">
        <img src="/recycling.png" alt="recycling" />
        Recovered kg
        {/* {stats.recovered} */}
      </div>
    </div>
  );
};

export default Stats;
