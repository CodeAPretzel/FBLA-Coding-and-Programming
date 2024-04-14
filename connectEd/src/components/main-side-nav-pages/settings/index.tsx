import { useState } from "react";
import { Box } from "@mui/material";
import Header from "components/main-side-nav-pages/object-files/header";
import "components/main-side-nav-pages/help/help.less"

interface NotificationProps {
	message: string;
	type: 'error' | 'success';
	onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
	return (
		<div className={`notification ${type}`}>
			<span>{message}</span>
			<button onClick={onClose}>Close</button>
		</div>
	);
};

const SettingsPage: React.FC = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [notification, setNotification] = useState<{ message: string, type: 'error' | 'success' } | null>(null);

	const handleSuccessNotification = (type: 'error' | 'success', message: string) => {
		setNotification({ message, type });
	};

	const closeNotification = () => {
		setNotification(null);
	};

	const handleChangeUsername = () => {
		if (username.trim() === '') {
			setNotification({ message: 'Please Enter a Username.', type: 'error' });
			return;
		}

		handleSuccessNotification('success', 'Username Changed Successfully!');
	};

	const handleChangePassword = () => {
		if (password.trim() === '') {
			setNotification({ message: 'Please enter a password.', type: 'error' });
			return;
		}

		handleSuccessNotification('success', 'Password Changed Successfully!');
	};

	const handleExportCSV = () => {
		
	};

	return (
		<Box
			m="20px 895px 0 40px"
		>
			<Header title={"Settings"} subtitle={"Change Username, Password, or Export Data from Server"} editable={false} />

			<div className="setting-container">
				{notification && <Notification message={notification.message} type={notification.type} onClose={closeNotification} />}

				<div style={{ margin: "0px 0 0 0" }}>
					<h3>Change Username</h3>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Enter New Username"
					/>
					<button className="submit-buttons" onClick={handleChangeUsername}>Submit</button>
				</div>

				<div style={{ margin: "60px 0 0 0" }}>
					<h3>Change Password</h3>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter New Password"
					/>
					<button className="submit-buttons" onClick={handleChangePassword}>Submit</button>
				</div>

				<div>
					<button className="submit-export-button" onClick={handleExportCSV}>Download .CSV File From Server</button>
				</div>
			</div>
		</Box>
	);
}

export default SettingsPage;
