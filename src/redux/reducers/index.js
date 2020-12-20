import { combineReducers} from "redux";

import filtersReducers from "./filters";
import pizzasReducers from "./pizzas";


const rootRedicer = combineReducers({
    filters: filtersReducers,
    pizzas: pizzasReducers
})


export default rootRedicer