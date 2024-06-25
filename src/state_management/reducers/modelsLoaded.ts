import { createSlice } from "@reduxjs/toolkit";

interface modelLoadedInterface{
    value:boolean;
}

const initialValue: modelLoadedInterface= {
    value:false
}

const modelLoaded= createSlice({
    name: "switch_model_loaded_bg",
    initialState: initialValue,
    reducers: {
        setModelLoaded: (state) => {
            state.value= true;

        }
    }
});

export const{setModelLoaded}= modelLoaded.actions;
export default modelLoaded.reducer;