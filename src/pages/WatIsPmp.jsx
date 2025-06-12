import "../styles/WatIsPmp.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThreeModel from "../components/ThreeModel";

const orgaanInfo = {
	Lever:
		"De lever is een belangrijk orgaan dat helpt bij het ontgiften van het lichaam en de verwerking van voedingsstoffen.",
	Dunne_darm:
		"De dunne darm is verantwoordelijk voor de opname van voedingsstoffen uit voedsel.",
	Blinde_darm:
		"De blinde darm speelt een beperkte rol in de spijsvertering maar kan ontsteken (appendicitis).",
	Blaas:
		"De blaas slaat urine op voordat het wordt uitgescheiden uit het lichaam.",
	Galblaas:
		"De galblaas slaat gal op die nodig is voor de vertering van vetten.",
	Lichaam: "Dit is het lichaam als geheel waarin de organen zich bevinden.",
	Peritoneum:
		"Het buikvlies bekleedt de binnenkant van de buikholte en de organen daarin.",
	Slijm:
		"Slijm is kenmerkend voor Pseudomyxoma Peritonei en bouwt zich op in de buikholte.",
	Maag: "De maag breekt voedsel af met maagzuur voordat het naar de darmen gaat.",
	Eierstokken: "De eierstokken produceren hormonen en eicellen.",
	Dikke_darm:
		"De dikke darm neemt water op uit voedselresten en vormt ontlasting.",
};

function WatIsPmp() {
	const [selectedOrgan, setSelectedOrgan] = useState(null);

	return (
		<main className="pmp-layout">
			<section className="pmp-canvas">
				<div className="canvas-placeholder">
					<ThreeModel onSelect={setSelectedOrgan} />
				</div>
			</section>

			<aside className="pmp-info-box">
				<h2 id="PMP">Wat is PMP?</h2>
				<h3 id="Instructies">
					{selectedOrgan ? selectedOrgan : "Instructies"}
				</h3>
				<p>
					{selectedOrgan
						? orgaanInfo[selectedOrgan] ||
						  "Geen informatie beschikbaar voor dit onderdeel."
						: "Klik en sleep om het 3D-model van het lichaam te draaien en te zoomen op specifieke delen en het slijm."}
				</p>
				<Link to="/Behandelingsopties" className="button">
					Meer behandelingen
				</Link>
			</aside>
		</main>
	);
}

export default WatIsPmp;
