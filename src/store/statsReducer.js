const initState = {
  stats: [
    {
      id: 1,
      date: "2021-03-19",
      recoveredKg: 570,
      TRR: 590,
    },
    {
      id: 2,
      date: "2021-03-20",
      recoveredKg: 560,
      TRR: 288,
    },
    {
      id: 3,
      date: "2021-03-21",
      recoveredKg: 812,
      TRR: 123,
    },
    {
      id: 4,
      date: "2021-03-22",
      recoveredKg: 586,
      TRR: 128,
    },
    {
      id: 5,
      date: "2021-03-23",
      recoveredKg: 389,
      TRR: 813,
    },
    {
      id: 6,
      date: "2021-03-24",
      recoveredKg: 610,
      TRR: 269,
    },
    {
      id: 7,
      date: "2021-03-25",
      recoveredKg: 839,
      TRR: 692,
    },
    {
      id: 8,
      date: "2021-03-26",
      recoveredKg: 183,
      TRR: 306,
    },
    {
      id: 9,
      date: "2021-03-27",
      recoveredKg: 604,
      TRR: 159,
    },
    {
      id: 10,
      date: "2021-03-28",
      recoveredKg: 493,
      TRR: 593,
    },
    {
      id: 11,
      date: "2021-03-29",
      recoveredKg: 495,
      TRR: 184,
    },
    {
      id: 12,
      date: "2021-03-30",
      recoveredKg: 506,
      TRR: 273,
    },
    {
      id: 13,
      date: "2021-03-31",
      recoveredKg: 950,
      TRR: 179,
    },
  ],
  newStats: [],
  date: '2021-03-22'
};

const date = (action ) => {
  return {
    date: action.date
  }
}

const statsReducer = (state = initState, action) => {
  if (action.type === "PICK_DATE") {
   

let newdate = [...state, date(action)]
console.log('date as state', newdate)
return newdate, date


    // let dateCopy = state.date
    // dateCopy = [action.payload]

 
  }
  return date;

};


export default statsReducer;
