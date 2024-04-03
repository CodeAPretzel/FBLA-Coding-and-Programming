import { useSelector } from 'react-redux';
import { getCurrentPage } from 'data/selectors/navigation';
import { getCurrentUser, getAuthToken } from 'data/selectors/user';
import MainPage from 'components/main-page';
import 'styles/App.less'
import { Pages } from 'data/objects/state';
import LoginPage from 'components/login';

export default function App() {
	const currentPage = useSelector(getCurrentPage);
	const currentUser = useSelector(getCurrentUser);
	const authToken = useSelector(getAuthToken);

	const renderMainContent = () => {
		if (currentPage === Pages.LOGIN || !currentUser || !authToken) {
			return <LoginPage />
		}

		return <MainPage />;
	};

	return (
		<div className='app'>
			{ renderMainContent() }
		</div>
	);
}
