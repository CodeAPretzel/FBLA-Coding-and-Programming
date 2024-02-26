import UpdateElectron from 'components/update'
import { useSelector } from 'react-redux';
import { getCurrentPage } from 'data/selectors/navigation';
import { getCurrentUser, getAuthToken } from 'data/selectors/user';
import MainPage from 'components/main-page';
import 'styles/App.less'
import { Pages } from 'data/objects/state';
import LoginPage from './login';

export default function App() {
	const currentPage = useSelector(getCurrentPage);
	const currentUser = useSelector(getCurrentUser);
	const authToken = useSelector(getAuthToken);

	const renderMainContent = () => {
		let content = (
			<MainPage />
		);

		if (currentPage === Pages.LOGIN || !currentUser || !authToken) {
			content = <LoginPage />
		}

		return content;
	};

	return (
		<div className='app'>
			
			<UpdateElectron />
		</div>
	);
}
