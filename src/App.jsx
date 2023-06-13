import { Canvas } from "@react-three/fiber";
import { Background } from "./components/Background";
import { Experience } from "./components/Experience";
import { SphereBackground } from "./components/SphereBackground";
import { SphereGeometry, MeshBasicMaterial, Mesh } from 'three';
import { useScroll, useTransform, motion } from "framer-motion";
import logo from './components/amor.png';
import style from '././index.css'
import styled from "styled-components";

function App() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const Heading = styled.h1`
  font-family: "Durer", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  /* Add any other desired typography styles */
`;

  return (
    <>
<div style={{ zIndex: 9999,position: "fixed", top: 0, left: 0, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
  <nav style={{ backgroundColor: "transparent", display: "flex", justifyContent: "center", alignItems: "center" }}>
    {/* Add your navbar content here */}
    <img src={logo} style={{ width: '30px' }} alt="image 2" />
  </nav>
</div>

        <div style={{ position: "fixed", zIndex: 9999 }}>
        <motion.h1 className="myHeading" style={{ x }}>
          <Heading> HOLAAAA</Heading>
        </motion.h1>
      </div>
      <div style={{ display: "flex" }}>
        <Canvas style={{ width: "50vw", height: "80vh" }}>
        <SphereBackground/>
        </Canvas>
        <Canvas style={{ width: "50vw", height: "80vh" }}>
          <color attach="background" args={["green"]} />
          <Experience/>
        </Canvas>
      </div>
      <div style={{ display: "flex" }}>
        <Canvas style={{ width: "30vw", height: "100vh" }}>
        <Experience/>
    
        </Canvas>
        <Canvas style={{ width: "70vw", height: "100vh" }}>
          <color attach="background" args={["red"]} />
          <SphereBackground/>
        </Canvas>
      </div>
    </>
  );
}

export default App;
