import { Box, Typography } from "@mui/material";
import { faFolder, faGear, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "components/main-side-nav-pages/object-files/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const openWebsite = (url: string) => {
	window.open(url, '_blank');
};

const HelpPage: React.FC = () => {
	const sendEmail = () => {
		const subject = encodeURIComponent('Subject');
		const body = encodeURIComponent('Message');
		const mailtoLink = `mailto:smithk25@marionville.us?subject=${subject}&body=${body}`;

		const anchor = document.createElement('a');
		anchor.href = mailtoLink;
		anchor.click();
	};

	return (
		<Box
			m="20px 325px 0 40px"
			sx={{
				"& .MuiPaper-root": {
					backgroundColor: "#393939",
					wordWrap: "break-word"
				},
			}}
		>
			<Header title={"Help Page"} subtitle={"Questions and Answers Page"} editable={false} />

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={"#ffffffde"} variant="h5">
						How to Use ConnectEd
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography color={"#ffffffde"}>
						First is the <FontAwesomeIcon icon={faFolder} /> page that allows you to add columns and make rows
						for a datasheet.
						
						<br />
						<br />

						Second is the <FontAwesomeIcon icon={faGear} /> page. This is where you can modify your username,
						password, and download you datasheet from our server.
						
						<br />
						<br />

						Finally is the <FontAwesomeIcon icon={faArrowLeft} /> page. This logs you out and brings you to the login page.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={"#ffffffde"} variant="h5">
						Documentation for ConnectEd
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography color={"#ffffffde"}>
						If you're curious on how ConnectEd is built, want to see the core functions
						that makes this application work, or what even is ConnectEd, you can view the Github repository here:

						<br />

						<button onClick={() => openWebsite('https://github.com/CodeAPretzel/FBLA-Coding-and-Programming')} style={{ margin: "20px 0 0 0" }}>
							Go to Documentation
						</button>
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={"#ffffffde"} variant="h5">
						Email Developer Team
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography color={"#ffffffde"}>
						Email the developer team and ask questions or request a feature!

						<br />

						<button onClick={sendEmail} style={{ margin: "20px 0 0 0" }}>
							Send Email
						</button>
					</Typography>
				</AccordionDetails>
			</Accordion>

		</Box>
	);
}

export default HelpPage;
