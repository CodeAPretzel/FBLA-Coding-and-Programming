import { Typography, Box } from "@mui/material";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ title, subtitle, editable }) => {
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	return (
		<Box mb={"30px"}>
			<Typography
				variant={"h4"}
				fontWeight={"bold"}
				sx={{ mb: "5px" }}
			>
				{editable ? (
					<div style={{ display: "inline-flex" }}>
						<div
							contentEditable="true"
							suppressContentEditableWarning
							onKeyDown={handleKeyDown}
							style={{ minWidth: "50%", minHeight: "100%" }}
						>
							{title}
						</div>
						<FontAwesomeIcon icon={faPenToSquare} style={{ padding: "0 0 0 20px" }} />
					</div>
				) : (
					title
				)}
			</Typography>
			<Typography variant={"h6"} color="#38b2ac">
				{editable ? (
					<div style={{ display: "inline-flex" }}>
						<div
							contentEditable="true"
							suppressContentEditableWarning
							onKeyDown={handleKeyDown}
							style={{ minWidth: "50%", minHeight: "100%" }}
						>
							{subtitle}
						</div>
						<FontAwesomeIcon icon={faPenToSquare} style={{ padding: "0 0 0 15px" }} />
					</div>
				) : (
					subtitle
				)}
			</Typography>
		</Box>
	);
};

export default Header;