import "../styles/WatIsPmp.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ThreeModel from "../components/ThreeModel";

const orgaanInfo = {
	Lever:
		"De lever is een groot orgaan dat gifstoffen uit het bloed filtert, gal aanmaakt om vetten te verteren en betrokken is bij de verwerking van voedingsstoffen. Bij PMP kunnen tumoren of slijmvorming de lever soms onder druk zetten, wat spijsverteringsklachten kan veroorzaken.",
	Dunne_darm:
		"De dunne darm zorgt voor de opname van voedingsstoffen en speelt een essentiële rol in de spijsvertering. Slijmophoping bij PMP kan de werking van de dunne darm beïnvloeden, wat leidt tot een opgeblazen gevoel, misselijkheid of verstoorde stoelgang.",
	Blinde_darm:
		"De blinde darm is een klein, blind eindigend stukje darm. PMP ontstaat vaak uit een tumor in de appendix (blinde darm). Een vroege tumor in deze regio wordt soms pas ontdekt na een appendectomie.",
	Blaas:
		"De blaas verzamelt urine uit de nieren en slaat dit tijdelijk op. Door de opbouw van slijm of tumoren bij PMP kunnen sommige patiënten aandrang, moeite met plassen of een drukkend gevoel in de onderbuik ervaren.",
	Galblaas:
		"De galblaas slaat gal op, een vloeistof die helpt bij de vertering van vetten. Hoewel PMP de galblaas meestal niet direct aantast, kunnen buikdruk of operaties de werking beïnvloeden.",
	Lichaam:
		"Het lichaam als geheel wordt bij PMP niet altijd direct aangetast, maar de impact op energie, spijsvertering en emotioneel welzijn is groot. De ziekte kan een grote invloed hebben op dagelijkse activiteiten en kwaliteit van leven.",
	Peritoneum:
		"Het peritoneum is een dun vlies dat de buikholte en de organen bekleedt. PMP tast juist dit vlies aan, door er slijm en tumorcellen in af te zetten. De behandeling richt zich daarom vaak op het verwijderen van dit slijm en aangetaste delen van het buikvlies.",
	Slijm: (
		<>
			Het slijm is kenmerkend voor Pseudomyxoma Peritonei en bouwt zich op in de
			buikholte.
			<br></br>Er bestaan twee varianten PMP: hooggradig en laaggradig PMP.
			<br></br>
			<br></br>
			<strong>Hooggradig PMP</strong> is agressiever en bevat cellen die sneller
			delen. Dit type komt vaker terug na behandeling en vereist doorgaans
			intensievere opvolging. <br></br>
			<br></br>
			<strong>Laaggradig PMP</strong> groeit meestal trager en is vaak beter
			behandelbaar. Toch kan het zich blijven verspreiden in de buikholte en
			klachten veroorzaken over tijd.
		</>
	),
	Maag: "De maag breekt voedsel af met behulp van zuur en enzymen. Door de verspreiding van slijm of tumorweefsel in de buikholte kunnen klachten ontstaan zoals een vol gevoel, misselijkheid of verminderde eetlust.",
	Eierstokken:
		"De eierstokken produceren eicellen en vrouwelijke hormonen zoals oestrogeen en progesteron. PMP kan zich verspreiden naar de eierstokken, wat soms leidt tot het verwijderen ervan tijdens de behandeling. Dit kan gevolgen hebben voor vruchtbaarheid en werking van hormonen.",
	Dikke_darm:
		"De dikke darm haalt water uit voedselresten en vormt ontlasting. PMP kan druk uitoefenen op de dikke darm of deze gedeeltelijk blokkeren, wat leidt tot een opgeblazen gevoel, obstipatie of buikpijn.",
};

const displayNameMap = {
	Dunne_darm: "Dunne Darm",
	Dikke_darm: "Dikke Darm",
	Blinde_darm: "Blinde Darm",
	Galblaas: "Galblaas",
	Eierstokken: "Eierstokken",
	Lichaam: "Lichaam",
	Lever: "Lever",
	Blaas: "Blaas",
	Peritoneum: "Peritoneum",
	Slijm: "Slijm",
	Maag: "Maag",
};

function WatIsPmp() {
	const [selectedOrgan, setSelectedOrgan] = useState(null);

	return (
		<main className="pmp-layout">
			<section className="pmp-canvas">
				<div className="canvas-placeholder">
					<ThreeModel
						onSelect={setSelectedOrgan}
						selectedOrgan={selectedOrgan}
					/>
				</div>
			</section>

			<aside className="pmp-info-box">
				<h2 id="PMP">Wat is PMP?</h2>
				<h3 id="Instructies">
					{selectedOrgan
						? displayNameMap[selectedOrgan] || selectedOrgan
						: "Instructies"}
				</h3>
				<p>
					{selectedOrgan
						? orgaanInfo[selectedOrgan] ||
						  "Geen informatie beschikbaar voor dit onderdeel."
						: "Klik en sleep om het 3D-model van het lichaam te draaien en te zoomen op specifieke delen en het slijm."}
				</p>

				{/* Knoppen */}
				<div className="button-row">
					{selectedOrgan && (
						<button className="button" onClick={() => setSelectedOrgan(null)}>
							Terug
						</button>
					)}
					<Link to="/Behandelingsopties" className="button">
						Meer behandelingen
					</Link>
				</div>
			</aside>
		</main>
	);
}

export default WatIsPmp;
