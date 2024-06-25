import { createSlice } from "@reduxjs/toolkit";

interface navValueInterface{
    value:boolean;
}

const initialValue: navValueInterface= {
    value:false
}

const navBg= createSlice({
    name: "switch_nav_bg",
    initialState: initialValue,
    reducers: {
        setNavBg: (state) => {
            const windowScrollY:number= window.scrollY;
            if (windowScrollY > 0 && state.value=== false){
                state.value= true;
            }

            else if(windowScrollY === 0 && state.value === true ){
                state.value= false;
            }

        }
    }
});

export const{setNavBg}= navBg.actions;
export default navBg.reducer;