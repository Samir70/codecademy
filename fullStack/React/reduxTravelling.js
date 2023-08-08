const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
};

const reducer = (state = initialWagonState, action = {}) => {
  switch (action.type) {
    case "gather": {
      return { ...state, supplies: state.supplies + 15, days: state.days + 1 };
    }
    case "travel": {
      const daysTravelled = action.payload
      if (state.supplies < daysTravelled * 20) { return state }
      return {
        supplies: state.supplies - 20 * daysTravelled,
        distance: state.distance + 10 * daysTravelled,
        days: state.days + daysTravelled
      }
    }
    case 'tippedWagon': {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1
      }
    }
    default: {
      console.log("default")
      return state;
    }
  }
};

let wagon = reducer()
console.log("start:", wagon)
wagon = reducer(wagon, {
  type: 'travel', payload: 1
})
console.log("step1:", wagon)


wagon = reducer(wagon, {
  type: 'gather'
})
console.log("step2:", wagon)

wagon = reducer(wagon, {
  type: 'tippedWagon'
})
console.log("step3:", wagon)

wagon = reducer(wagon, {
  type: 'travel', payload: 3
})
console.log("step4:", wagon)