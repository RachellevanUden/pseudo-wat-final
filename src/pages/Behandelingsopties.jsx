import "../styles/Behandelingsopties.css";
import { FaRegHospital, FaStethoscope, FaMicroscope } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Accordion from "../components/Accordion";

function Behandelingsopties() {
	return (
		<main className="container">
			<h2 id="Behandelingsopties">
				Behandelingsopties voor Pseudomyxoma Peritonei (PMP)
			</h2>
			<h3 id="Opties">
				Pseudomyxoma Peritonei kent verschillende behandelmethoden. <br />
				Hieronder vind je de belangrijkste opties.
			</h3>

			<section className="video-section">
				<div className="responsive-video">
					<iframe
						src="https://www.youtube.com/embed/LqXk4g5ntow"
						title="CRS-HIPEC behandeling voor PMP"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</section>

			<Accordion
				title="Standaardbehandeling (CRS-HIPEC)"
				icon={<FaRegHospital />}
			>
				<p>
					<strong>Wat is CRS-HIPEC?</strong>
				</p>
				<ul>
					<li>
						Een combinatiebehandeling van een operatie (CRS) en een spoeling met
						warme chemotherapie (HIPEC).
					</li>
					<li>
						Wordt vaak toegepast bij Pseudomyxoma Peritonei (PMP) om zoveel
						mogelijk slijm en tumoren te verwijderen.
					</li>
					<li>
						Het doel is om de ziekte onder controle te krijgen of zelfs volledig
						te verwijderen.
					</li>
				</ul>
				<br />
				<p>
					<strong>Stap 1: Cytoreductieve Chirurgie (CRS)</strong>
				</p>
				<ul>
					<li>De chirurg verwijdert het slijm en tumoren uit de buikholte.</li>
					<li>Dit gebeurt via een snee van borstbeen tot schaambeen.</li>
					<li>
						Organen zoals de blinde darm, milt of delen van de darmen kunnen
						verwijderd worden als ze aangetast zijn.
					</li>
				</ul>
				<br />
				<p>
					<strong>Stap 2: HIPEC (warme chemotherapie in de buik)</strong>
				</p>
				<ul>
					<li>
						Direct na de operatie wordt de buikholte gespoeld met warme
						chemotherapie.
					</li>
					<li>
						Dit doodt achtergebleven kankercellen die met het blote oog niet
						zichtbaar zijn.
					</li>
					<li>Het doel is om zoveel mogelijk ziekte terugkeer te voorkomen.</li>
				</ul>
			</Accordion>

			<Accordion title="Ondersteunende behandelingen" icon={<FaStethoscope />}>
				<p>
					<strong>Palliatieve Chirurgie</strong>
				</p>
				<ul>
					<li>Richt zich op het verlichten van klachten, niet op genezing.</li>
					<li>Kan obstructies in de buik verhelpen of pijn verminderen.</li>
					<li>
						Wordt toegepast bij vergevorderde ziekte of wanneer CRS-HIPEC niet
						mogelijk is.
					</li>
				</ul>
				<br />
				<p>
					<strong>Systemische Chemotherapie</strong>
				</p>
				<ul>
					<li>Chemotherapie via de bloedbaan om tumorgroei af te remmen.</li>
					<li>
						Wordt ingezet als de ziekte zich buiten de buikholte verspreid
						heeft.
					</li>
					<li>Minder effectief dan HIPEC, maar kan soms aanvullend helpen.</li>
				</ul>
				<br />
				<p>
					<strong>Radiotherapie</strong>
				</p>
				<ul>
					<li>
						Behandeling met gerichte straling op tumoren of pijnlijke zones.
					</li>
					<li>
						Wordt zelden toegepast bij PMP, maar kan symptomen verlichten.
					</li>
					<li>
						Geschikt als andere behandelingen niet mogelijk of effectief zijn.
					</li>
				</ul>
				<br />
				<p>
					<strong>Debulking Chirurgie</strong>
				</p>
				<ul>
					<li>
						Een operatie om zoveel mogelijk zichtbare tumormassa te verwijderen.
					</li>
					<li>Minder uitgebreid dan CRS, en zonder HIPEC.</li>
					<li>Wordt soms toegepast als CRS-HIPEC niet mogelijk is.</li>
				</ul>
			</Accordion>

			<Accordion title="Onderzoek & experimenteel" icon={<FaMicroscope />}>
				<p>
					<strong>Immunotherapie & Gerichte Therapieën</strong>
				</p>
				<ul>
					<li>
						Gericht op het versterken van het immuunsysteem of het blokkeren van
						tumorgroei.
					</li>
					<li>Bevinden zich nog in de onderzoeksfase voor PMP.</li>
					<li>
						Kunnen in de toekomst een rol spelen, maar worden nu nog niet
						standaard toegepast.
					</li>
				</ul>
				<br />
				<p>
					<strong>Mucolytische Therapie</strong>
				</p>
				<ul>
					<li>Probeert het slijm in de buikholte af te breken.</li>
					<li>Wordt momenteel nog weinig gebruikt, vooral binnen onderzoek.</li>
					<li>
						Kan in uitzonderlijke gevallen geprobeerd worden wanneer andere
						behandelingen niet effectief zijn.
					</li>
				</ul>
				<br />
				<p>
					<strong>BromAc - Onderzoek in Australië</strong>
				</p>
				<ul>
					<li>
						Experimentele behandeling die eiwitten blokkeert die tumorgroei
						stimuleren.
					</li>
					<li>
						Wordt onderzocht in klinische proeven in Australië en is nog niet
						goedgekeurd in Europa.
					</li>
					<li>
						Als je interesse hebt in deelname aan een proef, bespreek dit met je
						arts.
					</li>
				</ul>
			</Accordion>

			<Accordion title="Wat kun je verwachten?" icon={<SlCalender />}>
				<p>
					<strong>Herstel & Nazorg</strong>
				</p>
				<ul>
					<li>De operatie is zwaar, met een intensief hersteltraject.</li>
					<li>
						Je verblijft op een gespecialiseerde afdeling, zoals de IC-afdeling.
					</li>
					<li>
						Het medische team volgt je nauw op tijdens je herstel en ondersteunt
						je stap voor stap.
					</li>
					<li>
						Hoe fitter en actiever je bent vóór de operatie, hoe beter je
						meestal herstelt.
					</li>
				</ul>
				<br />
				<p>
					<strong>Mogelijke complicaties</strong>
				</p>
				<ul>
					<li>
						Longontsteking - kan ontstaan na de operatie door verminderde
						ademhaling.
					</li>
					<li>Blaasontsteking - vooral bij langdurige kathetergebruik.</li>
					<li>
						Infecties in de buik - mogelijk bij lekkages in de darmen na de
						ingreep.
					</li>
				</ul>
				<br />
				<p>
					Een combinatiebehandeling van een operatie (CRS) en een spoeling met
					warme chemotherapie (HIPEC).
				</p>
			</Accordion>
		</main>
	);
}

export default Behandelingsopties;
