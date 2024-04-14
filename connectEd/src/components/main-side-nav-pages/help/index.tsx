import { Box, Typography } from "@mui/material";
import { exec } from 'child_process';
import Header from "components/main-side-nav-pages/object-files/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
			m="20px 325px 0 0"
			sx={{
				"& .MuiPaper-root": {
					backgroundColor: "#393939"
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
						<div
							style={{
								maxWidth: "155vh", wordWrap: "break-word"
							}}
						>
						
						</div>
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
						This is the answer to the question.
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
						<div style={{ margin: "0 0 30px 0" }}>
							Email the developer team and ask questions or request a feature!
						</div>
						<button onClick={sendEmail}>Send Email</button>
					</Typography>
				</AccordionDetails>
			</Accordion>

		</Box>
	);
}

export default HelpPage;
