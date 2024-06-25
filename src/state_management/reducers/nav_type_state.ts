import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface navValueInterface{
    value:string;
}

const initialValue: navValueInterface= {
    value:''
}

const navBgType= createSlice({
    name: "switch_nav_type",
    initialState: initialValue,
    reducers: {
        setNavType: (state, args:PayloadAction<{action:string}>) => {
            state.value= args.payload.action;

        }
    }
});

export const{setNavType}= navBgType.actions;
export default navBgType.reducer;