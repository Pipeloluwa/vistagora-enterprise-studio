import { configureStore } from "@reduxjs/toolkit";
import computer_model from "./reducers/computer_model";
import nav_bg_state from "./reducers/nav_bg_state";
import nav_type_state from "./reducers/nav_type_state";
import mouse_plane from "./reducers/mouse_plane";
import wheel_model from "./reducers/wheel_model";
import modelsLoaded from "./reducers/modelsLoaded";

export const store= configureStore(
    {
        reducer:{
            computer_model: computer_model,
            nav_bg_state: nav_bg_state,
            nav_type_state: nav_type_state,
            mouse_plane: mouse_plane,
            wheel_model,
            modelsLoaded: modelsLoaded,
        }
    }
);

export type RootState= ReturnType<typeof store.getState>;
