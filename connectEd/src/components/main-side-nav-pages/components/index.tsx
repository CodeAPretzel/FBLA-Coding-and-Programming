/////////////////
//   Imports   //
/////////////////

import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Header from "../object-files/header";
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, ButtonProps, colors, createSvgIcon } from "@mui/material";
import { MockData } from "./objects/data-file"
import { styled } from '@mui/material/styles';
import { randomId } from '@mui/x-data-grid-generator';
import {
	gridPaginatedVisibleSortedGridRowIdsSelector,
	DataGrid,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarFilterButton,
	GridRowModesModel,
	GridRowModes,
	GridColDef,
	GridActionsCellItem,
	GridEventListener,
	GridRowId,
	GridRowModel,
	GridRowEditStopReasons,
	GridRowsProp,
	GridSlots,
	GridCsvGetRowsToExportParams,
	useGridApiContext,
	GridCsvExportOptions,
} from "@mui/x-data-grid";


/////////////////
//   Toolbar   //
/////////////////

interface EditToolbarProps {
	setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
	setRowModesModel: (
		newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
	) => void;
}

function CustomToolbar(props: EditToolbarProps) {
	const { setRows, setRowModesModel } = props;

	const ExportIcon = createSvgIcon(
		<path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" />,
		'SaveAlt',
	);

	const handleClick = () => {
		const id = randomId();
		setRows((oldRows) => [...oldRows, { id, isNew: true }]);
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
		}));
	};

	const apiRef = useGridApiContext();

	const handleExport = (options: GridCsvExportOptions) =>
		apiRef.current.exportDataAsCsv(options);

	const getRowsFromCurrentPage = ({ apiRef }: GridCsvGetRowsToExportParams) =>
		gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);

	const exportButtonBaseProps: ButtonProps = {
		color: 'primary',
		size: 'small',
		startIcon: <ExportIcon />,
	};

	return (
		<GridToolbarContainer>
			<GridToolbarColumnsButton
				slotProps={{ tooltip: { title: '' } }}
			/>
			<GridToolbarFilterButton
				slotProps={{ tooltip: { title: '' } }}
			/>
			<GridToolbarDensitySelector
				slotProps={{ tooltip: { title: '' } }}
			/>
			<Button
				color="primary"
				startIcon={<AddIcon />}
				onClick={handleClick}
			>
				Add row
			</Button>
			<Box sx={{ flexGrow: 1 }} />
			<Button
				{...exportButtonBaseProps}
				onClick={() => handleExport({ getRowsToExport: getRowsFromCurrentPage })}
			>
				Export Locally
			</Button>
			<Button
				{...exportButtonBaseProps}
			>
				Export To Server
			</Button>
		</GridToolbarContainer>
	);
}


////////////////////////////
//   Display on No Rows   //
////////////////////////////

const StyledGridOverlay = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100%',
	'& .ant-empty-img-1': {
		fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
	},
	'& .ant-empty-img-2': {
		fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
	},
	'& .ant-empty-img-3': {
		fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
	},
	'& .ant-empty-img-4': {
		fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
	},
	'& .ant-empty-img-5': {
		fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
		fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
	},
}));

function CustomNoRowsOverlay() {
	return (
		<StyledGridOverlay>
			<svg
				width="120"
				height="100"
				viewBox="0 0 184 152"
				aria-hidden
				focusable="false"
			>
				<g fill="none" fillRule="evenodd">
					<g transform="translate(24 31.67)">
						<ellipse
							className="ant-empty-img-5"
							cx="67.797"
							cy="106.89"
							rx="67.797"
							ry="12.668"
						/>
						<path
							className="ant-empty-img-1"
							d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
						/>
						<path
							className="ant-empty-img-2"
							d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
						/>
						<path
							className="ant-empty-img-3"
							d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
						/>
					</g>
					<path
						className="ant-empty-img-3"
						d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
					/>
					<g className="ant-empty-img-4" transform="translate(149.65 15.383)">
						<ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
						<path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
					</g>
				</g>
			</svg>
			<Box sx={{ mt: 1, color: '#ffffffde' }}>No Rows</Box>
		</StyledGridOverlay>
	);
}


//////////////////////////////
//   Main Components Page   //
//////////////////////////////

const ComponentsPage = () => {
	const [rows, setRows] = React.useState(MockData);
	const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

	const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
		if (params.reason === GridRowEditStopReasons.rowFocusOut) {
			event.defaultMuiPrevented = true;
		}
	};

	const handleEditClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
	};

	const handleSaveClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
	};

	const handleDeleteClick = (id: GridRowId) => () => {
		setRows(rows.filter((row) => row.id !== id));
	};

	const handleCancelClick = (id: GridRowId) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View, ignoreModifications: true },
		});

		const editedRow = rows.find((row) => row.id === id);
		if (editedRow!.isNew) {
			setRows(rows.filter((row) => row.id !== id));
		}
	};

	const processRowUpdate = (newRow: GridRowModel) => {
		const updatedRow = { ...newRow, isNew: false };
		setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
		return updatedRow;
	};

	const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
		setRowModesModel(newRowModesModel);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	};

	////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//   Do this because too lazy to make and manage arrary; sorry not sorry, will fix later (DRY incoming)   //
	////////////////////////////////////////////////////////////////////////////////////////////////////////////

	const [inputNameValue, setNameInputValue] = React.useState<string>('Name');
	const [inputTypeValue, setTypeInputValue] = React.useState<string>('Type');
	const [inputPhoneValue, setPhoneInputValue] = React.useState<string>('Phone Number');
	const [inputEmailValue, setEmailInputValue] = React.useState<string>('Email');
	const [inputAddressValue, setAddressInputValue] = React.useState<string>('Address');
	const [inputResourcesValue, setResourcesInputValue] = React.useState<string>('Resources');
	const [inputDateValue, setDateInputValue] = React.useState<string>('Date');
	const [inputMembersValue, setMembersInputValue] = React.useState<string>('Members');

	const [inputNameWidth, setNameInputWidth] = React.useState<number>(150);
	const [inputTypeWidth, setTypeInputWidth] = React.useState<number>(150);
	const [inputPhoneWidth, setPhoneInputWidth] = React.useState<number>(150);
	const [inputEmailWidth, setEmailInputWidth] = React.useState<number>(150);
	const [inputAddressWidth, setAddressInputWidth] = React.useState<number>(150);
	const [inputResourcesWidth, setResourcesInputWidth] = React.useState<number>(150);
	const [inputDateWidth, setDateInputWidth] = React.useState<number>(150);
	const [inputMembersWidth, setMembersInputWidth] = React.useState<number>(150);

	const handleNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setNameInputValue(value);

		const newWidth = (value.length + 1) * 8;
		setNameInputWidth(newWidth);
	};

	const handleTypeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setTypeInputValue(value);

		const newWidth = (value.length + 1) * 8;
		setTypeInputWidth(newWidth);
	};

	const handlePhoneInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setPhoneInputValue(value);

		const newWidth = (value.length + 1) * 8;
		setPhoneInputWidth(newWidth);
	};

	const handleEmailInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setEmailInputValue(value);

		const newWidth = (value.length + 1) * 8;
		setEmailInputWidth(newWidth);
	};

	const handleAddressInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setAddressInputValue(value);

		const newWidth = (value.length + 1) * 8;
		setAddressInputWidth(newWidth);
	};

	const handleResourcesInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setResourcesInputValue(value);

		const newWidth = (value.length + 1) * 8;
		setResourcesInputWidth(newWidth);
	};

	const handleDateInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setDateInputValue(value);

		const newWidth = (value.length + 1) * 8;
		setDateInputWidth(newWidth);
	};

	const handleMembersInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setMembersInputValue(value);

		const newWidth = (value.length + 1) * 8;
		setMembersInputWidth(newWidth);
	};

	const columns: GridColDef[] = [
		{
			field: "actions",
			type: "actions",
			headerName: "Actions",
			disableExport: true,
			width: 100,
			getActions: ({ id }) => {
				const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

				if (isInEditMode) {
					return [
						<GridActionsCellItem
							icon={<SaveIcon />}
							label="Save"
							sx={{
								color: 'primary.main',
							}}
							onClick={handleSaveClick(id)}
						/>,
						<GridActionsCellItem
							icon={<CancelIcon />}
							label="Cancel"
							className="textPrimary"
							onClick={handleCancelClick(id)}
							color="inherit"
						/>,
					];
				}

				return [
					<GridActionsCellItem
						icon={<EditIcon />}
						label="Edit"
						className="textPrimary"
						onClick={handleEditClick(id)}
						color="inherit"
					/>,
					<GridActionsCellItem
						icon={<DeleteIcon />}
						label="Delete"
						onClick={handleDeleteClick(id)}
						color="inherit"
					/>,
				];
			},
		},
		{
			field: "Column 1",
			flex: 1,
			headerName: inputNameValue,
			cellClassName: "name-column--cell",
			editable: true,
			renderHeader: () => (
				<div
					onKeyDown={(event) => handleKeyDown(event)}
				>
					<input
						type="text"
						value={inputNameValue}
						onChange={handleNameInputChange}
						style={{
							width: `${inputNameWidth}px`,
							height: "100%",
							fontSize: "14px",
							padding: "2px",
							boxSizing: "border-box",
							border: "none",
							background: "transparent"
						}}
					/>
				</div>
			),
		},
		{
			field: "Column 2",
			headerName: inputTypeValue,
			editable: true,
			flex: 1,
			renderHeader: () => (
				<div
					onKeyDown={(event) => handleKeyDown(event)}
				>
					<input
						type="text"
						value={inputTypeValue}
						onChange={handleTypeInputChange}
						style={{
							width: `${inputTypeWidth}px`,
							height: "100%",
							fontSize: "14px",
							padding: "2px",
							boxSizing: "border-box",
							border: "none",
							background: "transparent"
						}}
					/>
				</div>
			),
		},
		{
			field: "Column 3",
			flex: 1,
			headerName: inputPhoneValue,
			editable: true,
			renderHeader: () => (
				<div
					onKeyDown={(event) => handleKeyDown(event)}
				>
					<input
						type="text"
						value={inputPhoneValue}
						onChange={handlePhoneInputChange}
						style={{
							width: `${inputPhoneWidth}px`,
							height: "100%",
							fontSize: "14px",
							padding: "2px",
							boxSizing: "border-box",
							border: "none",
							background: "transparent"
						}}
					/>
				</div>
			),
		},
		{
			field: "Column 4",
			flex: 1,
			editable: true,
			headerName: inputEmailValue,
			renderHeader: () => (
				<div
					onKeyDown={(event) => handleKeyDown(event)}
				>
					<input 
						type="text"
						value={inputEmailValue}
   	 			        onChange={handleEmailInputChange}
						style={{ 
							width: `${inputEmailWidth}px`, 
							height: "100%", 
							fontSize: "14px", 
							padding: "2px",
							boxSizing: "border-box",
							border: "none",
							background: "transparent"
						}} 
					/>
				</div>
			),
		},
		{
			field: "Column 5",
			flex: 1,
			editable: true,
			headerName: inputAddressValue,
			renderHeader: () => (
				<div
					onKeyDown={(event) => handleKeyDown(event)}
				>
					<input 
						type="text"
						value={inputAddressValue}
   	 			        onChange={handleAddressInputChange}
						style={{ 
							width: `${inputAddressWidth}px`, 
							height: "100%", 
							fontSize: "14px", 
							padding: "2px",
							boxSizing: "border-box",
							border: "none",
							background: "transparent"
						}} 
					/>
				</div>
			),
		},
		{
			field: "Column 6",
			flex: 1,
			editable: true,
			headerName: inputResourcesValue,
			renderHeader: () => (
				<div
					onKeyDown={(event) => handleKeyDown(event)}
				>
					<input 
						type="text"
						value={inputResourcesValue}
   	 			        onChange={handleResourcesInputChange}
						style={{ 
							width: `${inputResourcesWidth}px`, 
							height: "100%", 
							fontSize: "14px", 
							padding: "2px",
							boxSizing: "border-box",
							border: "none",
							background: "transparent"
						}} 
					/>
				</div>
			),
		},
		{
			field: "Column 7",
			flex: 1,
			editable: true,
			headerName: inputDateValue,
			renderHeader: () => (
				<div
					onKeyDown={(event) => handleKeyDown(event)}
				>
					<input 
						type="text"
						value={inputDateValue}
   	 			        onChange={handleDateInputChange}
						style={{ 
							width: `${inputDateWidth}px`, 
							height: "100%", 
							fontSize: "14px", 
							padding: "2px",
							boxSizing: "border-box",
							border: "none",
							background: "transparent"
						}} 
					/>
				</div>
			),
		},
		{
			field: "Column 8",
			flex: 1,
			editable: true,
			headerName: inputMembersValue,
			renderHeader: () => (
				<div
					onKeyDown={(event) => handleKeyDown(event)}
				>
					<input 
						type="text"
						value={inputMembersValue}
   	 			        onChange={handleMembersInputChange}
						style={{ 
							width: `${inputMembersWidth}px`, 
							height: "100%", 
							fontSize: "14px", 
							padding: "2px",
							boxSizing: "border-box",
							border: "none",
							background: "transparent"
						}} 
					/>
				</div>
			),
		},
	];

	return (
		<Box m={"20px 0 0 0"} width={"97%"} >
			<Header title={"INPUT TEMPLATE NAME"} subtitle={"Input Description"} editable={true} />
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiToolbar-root": {
						color: '#ffffffde',
					},
					"& .MuiSvgIcon-root": {
						color: '#ffffffde',
					},
					"& .MuiButtonBase-root": {
						color: "#ffffffde",
						borderWidth: "2px"
					},
					"& .MuiDataGrid-cell": {
						color: "#ffffffde",
					},
					"& .name-column--cell": {
						color: "#38b2ac",
					},
					"& .MuiDataGrid-columnHeaders": {
						color: "#ffffffde",
					},
					"& .MuiDataGrid-columnHeader": {
						backgroundColor: "#1a1a1a"
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: "#393939",
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						backgroundColor: "#1a1a1a",
						color: "#ffffffde"
					},
					"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
						color: "#ffffffde",
					},
					"& .MuiDataGrid-cell:hover": {
						backgroundColor: "#303030",
					},
					"& .MuiButtonBase-root:hover": {
						backgroundColor: "#242424"
					},
					"& .MuiDataGrid-root .Mui-selected": {
						backgroundColor: "#282828"
					},
				}}
			>
				<DataGrid
					rows={rows}
					columns={columns}
					rowModesModel={rowModesModel}
					onRowModesModelChange={handleRowModesModelChange}
					onRowEditStop={handleRowEditStop}
					processRowUpdate={processRowUpdate}
					slots={{
						toolbar: CustomToolbar as GridSlots['toolbar'],
						noRowsOverlay: CustomNoRowsOverlay,
					}}
					slotProps={{
						toolbar: { setRows, setRowModesModel },
					}}
				/>
			</Box>
		</Box>
	);
};

export default ComponentsPage
