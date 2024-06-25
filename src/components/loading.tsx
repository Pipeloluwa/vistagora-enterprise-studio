import { Html, useProgress } from '@react-three/drei'

export const Loading= () => {
  const { progress } = useProgress()
  return <Html center>
          <div className='bg-white p-2 rounded-full animate-pulse shadow shadow-black/90'>
            <h1 className='text-blue-600 font-bold'>{progress.toFixed(0)}%  </h1>
          </div>
        </Html>
}