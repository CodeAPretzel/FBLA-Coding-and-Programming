import React, { useState } from 'react';
import "components/main-side-nav-pages/components/components.less"

//////////////////////////////////////////////////////////////
///////////   NOTE: Option is Business Creation   ///////////
//////////////////////////////////////////////////////////////


// Define the default type for Option data
type stateOption = {
	id: number;
	name: string;
	type: string;
	contact: string;
	resources: string;
};

const componentsPage: React.FC = () => {
	// Define state for Option and search filter
	const [stateMultiOption, setStateOption] = useState<stateOption[]>([]);
	const [selectedOption, setSelectedOption] = useState<number[]>([]);
	const [searchFilter, setSearchFilter] = useState<string>('');

	// Function to handle adding a new Option
	const addOption = () => {
		// Add to array
		const newOptionId = stateMultiOption.length + 1

		// Create a new object
		const newOption: stateOption = {
			id: newOptionId,
			name: 'New Business',
			type: 'Type',
			contact: 'Contact',
			resources: 'Resources'
		};

		// Add the new option to the state
		setStateOption([...stateMultiOption, newOption])
	};

	// Function to edit field values
	const handleFieldChange = (id: number, field: keyof stateOption, value: string) => {
		const updatedOption = stateMultiOption.map(
			option => option.id === id ? { ...option, [field]: value } : option
		);
		setStateOption(updatedOption);
	}

	// Function to delete options
	const deleteOption = (id: number) => {
		const updatedOption = stateMultiOption.filter(business => business.id !== id);
		setStateOption(updatedOption);
		setSelectedOption(selectedOption.filter(selectedId => selectedId !== id))
	}

	// Function to toggle/select options
	const toggleSelectOption = (id: number) => {
		const isSelected = selectedOption.includes(id);
		if (isSelected) {
			setSelectedOption(selectedOption.filter(selectedId => selectedId !== id));
		} else {
			setSelectedOption([...selectedOption, id]);
		}
	};

	// Function to delete selected options
	const deleteSelectedOption = () => {
		const updatedOption = stateMultiOption.filter(option => !selectedOption.includes(option.id));
		setStateOption(updatedOption);
		setSelectedOption([]);
	}

	// Function to handle filtering Option based on search filter
	const filteredOption = stateMultiOption.filter(option =>
		Object.values(option).some(value =>
			typeof value === 'string' && value.toLowerCase().includes(searchFilter.toLowerCase())
		)
	);

	return (
		<div>
			<h2>Businesses</h2>
			{/* Search input */}
			<input
				type="text"
				placeholder="Search by Name..."
				value={searchFilter}
				onChange={(e) => setSearchFilter(e.target.value)}
			/>
			{/* Table */}
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Type</th>
						<th>Contact</th>
						<th>Resources</th>
					</tr>
				</thead>
				<tbody>
					{filteredOption.map(option => (
						<tr key={option.id}>
							<td>{option.id}</td>
							<td>
								<input 
									type="text"
									value={option.name}
									onChange={(e) => handleFieldChange(option.id, 'name', e.target.value)} 
								/>
							</td>
							<td>
								<input 
									type="text"
									value={option.type}
									onChange={(e) => handleFieldChange(option.id, 'type', e.target.value)} 
								/>
							</td>
							<td>
								<input 
									type="text"
									value={option.contact}
									onChange={(e) => handleFieldChange(option.id, 'contact', e.target.value)} 
								/>
							</td>
							<td>
								<input 
									type="text"
									value={option.resources}
									onChange={(e) => handleFieldChange(option.id, 'resources', e.target.value)} 
								/>
							</td>
							<td>
								<button onClick={() => deleteOption(option.id)}>Delete</button>
								<input 
									type="checkbox"
									checked={selectedOption.includes(option.id)}
									onChange={() => toggleSelectOption(option.id)} 
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* Button to add a new Option */}
			<button onClick={addOption}>Add Business</button>
			{selectedOption.length > 0 && (
				<button onClick={deleteSelectedOption}>Delete Selected</button>
			)}
		</div>
	);
};

export default componentsPage;
