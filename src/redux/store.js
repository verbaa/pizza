import { createStore} from "redux";

import rootRedicer from "./reducers";



const store = createStore(rootRedicer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;


export default store;