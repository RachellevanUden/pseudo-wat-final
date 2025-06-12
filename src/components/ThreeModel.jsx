import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const interactieveOnderdelen = [
	"Lever",
	"Dunne_darm",
	"Blinde_darm",
	"Blaas",
	"Galblaas",
	"Lichaam",
	"Peritoneum",
	"Slijm",
	"Maag",
	"Eierstokken",
	"Eierstokken_1",
	"Eierstokken_2",
	"Dikke_darm",
	"Dikke_darm_1",
	"Dikke_darm_2",
];

const nameMap = {
	Dikke_darm_1: "Dikke_darm",
	Dikke_darm_2: "Dikke_darm",
	Eierstokken_1: "Eierstokken",
	Eierstokken_2: "Eierstokken",
};

useGLTF.preload("/models/pmp-model.glb");

export default function ThreeModel({ onSelect }) {
	const { nodes, materials } = useGLTF("/models/pmp-model.glb");

	const handleClick = (name) => {
		if (onSelect) onSelect(name);
	};

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<Canvas camera={{ position: [0, 0.5, 3], fov: 50 }}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[2, 2, 2]} />

				<Suspense fallback={null}>
					<group scale={0.05} rotation={[3, 0, 0]} position={[0, 0.55, 0]}>
						{Object.entries(nodes).map(([name, node]) => {
							if (!node.geometry) return null;

							const isClickable = interactieveOnderdelen.includes(name);
							const displayName = nameMap[name] || name;

							return (
								<mesh
									key={name}
									geometry={node.geometry}
									material={
										node.material ? materials[node.material.name] : undefined
									}
									onClick={(e) => {
										e.stopPropagation();
										if (isClickable) handleClick(displayName);
									}}
								/>
							);
						})}
					</group>
				</Suspense>

				<OrbitControls enablePan enableZoom enableRotate />
			</Canvas>
		</div>
	);
}
