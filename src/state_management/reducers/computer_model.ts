import { createSlice } from "@reduxjs/toolkit";

interface computerSwitchstate{
    value: boolean;
}

const initialValue: computerSwitchstate= {
    value: false
}

const computer_single_click= createSlice ({
    name: "computer_single_click",
    initialState: initialValue,
    reducers: {
        computerSwitch: (state) => {
            state.value= !state.value;
        }

    }
});

export const {computerSwitch}= computer_single_click.actions;
export default computer_single_click.reducer;
