import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //should add the data array of weather data reated to the searched city to the state
      //return [action.payload.data]; //we don't want to return the array of that city,
      // we want to add it to the old array of other cities
      //return state.push(action.payload.data) //this mutates the state !! NO
      //return state.concat([action.payload.data]); //the right approach : concat doesn't mutate the old array,
      return [action.payload.data, ...state]; // same line as thze above, but just
    //nice ES6 syntax: returns [city,city, city]
    //but crates a new array and add it to the state
    // => returning a new version of our state
  }
  return state;
}
