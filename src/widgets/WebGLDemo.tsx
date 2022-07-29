import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Canvas,
  MeshProps,
  PerspectiveCameraProps,
  useFrame,
  useThree,
  extend,
  Object3DNode,
} from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

declare module "@react-three/fiber" {
  interface ThreeElements {
    orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
  }
}

type BoxProps = MeshProps & {
  rotationDirection: "horizontal" | "vertical";
};

function Scale({ width, height }: { width: number; height: number }) {
  const state = useThree();
  const [setSize] = useState(() => state.setSize);
  useLayoutEffect(() => {
    setSize(width, height);
    state.set({ setSize: () => null });
    return () => state.set({ setSize });
  }, [setSize, width, height]);
  return null;
}

function Box(props: BoxProps) {
  const { rotationDirection } = props;
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (rotationDirection === "vertical") {
      ref.current!.rotation.x += 0.01;
    } else {
      ref.current!.rotation.y += 0.01;
    }
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      receiveShadow
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function CameraControl() {
  const { camera, gl } = useThree();
  const ctlRef = useRef<OrbitControls>(null);
  useFrame((state) => ctlRef.current?.update());
  return (
    <orbitControls
      args={[camera, gl.domElement]}
      ref={ctlRef}
      minDistance={3}
      maxDistance={20}
      autoRotate={true}
      autoRotateSpeed={5}
    />
  );
}

function WebGLDemo() {
  return (
    <Canvas style={{ width: "450px", height: "350px" }} shadows>
      <Scale width={450} height={350} />
      <CameraControl />
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.6}
        position={[20, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={[2048, 2048]}
        castShadow
      />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} rotationDirection="horizontal" />
      <Box position={[1.2, 0, 0]} rotationDirection="vertical" />
    </Canvas>
  );
}

export default WebGLDemo;
