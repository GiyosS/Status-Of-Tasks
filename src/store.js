import {configureStore} from "@reduxjs/toolkit";
import Card_Slice from "./feacures/cards/Card_Slice";
export const store = configureStore({
    reducer: {
        Card_Slice: Card_Slice,
    }
})