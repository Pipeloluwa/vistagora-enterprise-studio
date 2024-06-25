import { Html, useProgress } from "@react-three/drei";
import { useDispatch } from "react-redux";
import { setModelLoaded } from "../state_management/reducers/modelsLoaded";




export const HomeLoading= () => {
  const { progress } = useProgress();
  const dispatch= useDispatch();

  if (progress >= 1){
    dispatch(setModelLoaded());
  }

  return(
    <Html>
      <div className="z-30 fixed w-screen h-screen flex flex-col items-center justify-center bg-black font-serif">
        <div className='bg-white p-4 rounded-full animate-bounce shadow shadow-black/90'>
            <h1 className='text-blue-600 font-bold text-lg'>{progress.toFixed(0)}%  </h1>
          </div>
          <p className="text-white text-xl animate-pulse">Loading, your first visit might take time, please wait ...</p>
    </div>
    </Html>

         
  );
}