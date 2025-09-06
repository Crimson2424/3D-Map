import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Scene from "./Scene";
import { Suspense, useState } from "react";
import { Html, useProgress } from "@react-three/drei";
// import Loader from "./Loader";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html center>{progress} % loaded</Html>
}


const Experience = () => {
  const [ready, setReady] = useState(false);

  return (
    <>
      <div className="fixed w-30 top-3 right-3 z-10
      sm:w-40
      lg:w-50
      ">
        <img className="invert opacity-80" src="/images/Brainwing-logo.webp" alt="" />
      </div>
      <Canvas
        className="w-full h-full overflow-hidden"
        camera={{
          position: [-267.97348988286245, 281.9980465652199, 6.435369390895175], // move camera far away
          fov: 40, // field of view
          near: 1, // near clipping plane
          far: 3000, // far clipping plane (important if your scene is huge!)
        }}
        onCreated={({ scene }) => {
          scene.fog = new THREE.Fog("#89CFF1", 300, 600); // exponential fog
        }}
      >

          <Scene ready={ready} />
          {/* <Loader  /> */}
      </Canvas>
    </>
  );
};

export default Experience;
