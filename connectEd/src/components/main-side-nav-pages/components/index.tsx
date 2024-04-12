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

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import Header from "./objects/header";
// import { tokens } from "theme"
import { mockData } from "./objects/dataFile"

const ComponentsPage = () => {
	const theme = useTheme();
	
	const columns = [
		{ field: "id", headerName: "ID", flex: 0.5 },
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "type",
			headerName: "Type",
		},
		{
			field: "contact",
			headerName: "Contact",
			flex: 1,
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1,
		},
		{
			field: "address",
			headerName: "Address",
			flex: 1,
		},
	];

	return (
		<Box m={"20px"}>
			<Header title={"CREATE BUSINESSES"} subtitle={"Add and Customize Businesses"} />
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "none",
					},
					"& .name-column--cell": {
						// Color
					},
					"& .MuiDataGrid-columnHeaders": {
						// Background Color
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						// Background Color
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						// Background Color
					},
					"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
						// Color
					}
				}}
			>
				<DataGrid rows={mockData} columns={columns} />	
			</Box>
		</Box>
	);
};

export default ComponentsPage