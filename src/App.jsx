import { Canvas } from "@react-three/fiber";
import { Background } from "./components/Background";
import { Experience } from "./components/Experience";
import { SphereBackground } from "./components/SphereBackground";
import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three';

function App() {
  return (
    <>
        <div style={{ display: "flex", flexDirection: "column", }}>
        <nav style={{ backgroundColor: "transparent", alignItems:"center", display: "flex", justifyContent: "center" }}>
          {/* Add your navbar content here */}
          <h1>Logo</h1>
        </nav>
        </div>
      <div style={{ display: "flex" }}>
        <Canvas style={{ width: "50vw", height: "100vh" }}>
   
        <SphereBackground/>
        </Canvas>
        <Canvas style={{ width: "50vw", height: "100vh" }}>
          <color attach="background" args={["green"]} />
          <Experience/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
