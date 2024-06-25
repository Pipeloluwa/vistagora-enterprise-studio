import { createSlice } from "@reduxjs/toolkit";

interface switchState{
    value: boolean;
}

const initialValue: switchState= {
    value: false
}

const wheel_model= createSlice ({
    name: "wheel_model",
    initialState: initialValue,
    reducers: {
        wheelSwitchAction: (state) => {
            state.value= !state.value;
        }

    }
});

export const {wheelSwitchAction}= wheel_model.actions;
export default wheel_model.reducer;
