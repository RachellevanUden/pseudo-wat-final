import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Edges } from "@react-three/drei";

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

const modelPath = `${import.meta.env.BASE_URL}models/pmp-model.glb`;
useGLTF.preload(modelPath);

export default function ThreeModel({ onSelect, selectedOrgan }) {
	const { nodes, materials } = useGLTF(modelPath);

	const handleClick = (name) => {
		if (onSelect) onSelect(name);
	};

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<Canvas camera={{ position: [0, 0.5, 3], fov: 50 }}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[2, 2, 2]} />

				<Suspense fallback={null}>
					<group scale={0.05} rotation={[3, 0, 0]} position={[0, 0.5, 0]}>
						{Object.entries(nodes).map(([name, node]) => {
							if (!node.geometry) return null;

							const isClickable = interactieveOnderdelen.includes(name);
							const displayName = nameMap[name] || name;
							const isSelected = displayName === selectedOrgan;

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
								>
									{isSelected && (
										<Edges scale={1} color="#2196f3" threshold={15} />
									)}
								</mesh>
							);
						})}
					</group>
				</Suspense>

				<OrbitControls enablePan enableZoom enableRotate />
			</Canvas>
		</div>
	);
}
