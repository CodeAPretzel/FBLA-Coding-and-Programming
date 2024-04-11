/* 
Changes to make:
1. Allow the user to change the title.
2. Allow the user to change all data fields and column names except for ID. Check documentation: https://mui.com/x/react-data-grid/editing/
3. Allow the user to add and remove columns and rows. Check documentation: https://mui.com/x/react-data-grid/editing/ 
   (scroll down until you see "_action: 'delete'")
4. Allow the user to import .csv and export to server.
5. Allow the user to reorganize their rows and columns. Documentation is not included.

Things to not add if running out of time: 4. and 5.
*/

// Time is 1:46:11

import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "./objects/header";
// import { tokens } from "theme"
// import { data } from "dataFile"

const ComponentsPage = () => {
	return (
		<Box m={"20px"}>
			<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
				<Header title={"CREATE BUSINESSES"} subtitle={"Add and Customize Businesses"} />
			</Box>
		</Box>
	);
};

export default ComponentsPage