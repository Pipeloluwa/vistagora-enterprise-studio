import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface roomSwitchState{
    intersectPoints: {x:number, y:number}
}

const initialValue: roomSwitchState= {
    intersectPoints: {x:0, y:0}
}

const mouse_plane_click= createSlice({
    name: "mouse_plane_click",
    initialState: initialValue,
    reducers: {
        mouse_plane_clickSwitch: (state, args: PayloadAction<{x: number, y:number}>) => {
            state.intersectPoints.x= args.payload.x;
            state.intersectPoints.y= args.payload.y;

        }
    }
});

export const {mouse_plane_clickSwitch}= mouse_plane_click.actions;
export default mouse_plane_click.reducer;
