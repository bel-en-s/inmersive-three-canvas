import { OrbitControls } from "@react-three/drei";
import { Background } from "./Background";
import { Cloud } from "./Cloud";
import { Text } from '@react-three/drei';


export const Experience = () => {
  const handleClick = () => {
    window.open('https://www.google.com', '_blank');
  }
  

  return (
    <>
      <OrbitControls/>
      <Cloud/>
      <pointLight position={[0, -10, 0]} intensity={1} color="red" />
    </>
  );
};


