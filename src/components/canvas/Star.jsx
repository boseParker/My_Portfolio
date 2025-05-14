import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: 100vh; /* Make sure it fills the screen */
  position: absolute;
  inset: 0;
`;

const Stars = (props) => {
  const ref = useRef();

  const [sphere] = useState(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3); // each point needs x, y, z
    random.inSphere(positions, { radius: 1.2 });

    // (optional) check for NaN values
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) positions[i] = 0;
    }

    return positions;
  });

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
