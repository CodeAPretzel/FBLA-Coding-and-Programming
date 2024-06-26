import { SideNav } from "components/side-nav";
import { useSelector } from "react-redux";
import { getCurrentPage } from "@/data/selectors/navigation";
import { Pages } from "@/data/objects/state";
import "components/main-page/main-page.less"

// Import Page Files
import FilesPage from "@/components/main-side-nav-pages/components/index"
import SettingsPage from "components/main-side-nav-pages/settings/index"
import HelpPage from "components/main-side-nav-pages/help/index"

export default function MainPage() {
	const currentPage = useSelector(getCurrentPage);

	const renderPageContent = () => {
		switch (currentPage) {
			case Pages.COMPONENTS:
				return <FilesPage />;
			case Pages.SETTINGS:
				return <SettingsPage />;
			case Pages.HELP:
				return <HelpPage />;
			case Pages.LOGIN:
				return
		}
	};

	return (
		<div className="main-page">
			<SideNav />
			<div className="page-content">
				{ renderPageContent() }
			</div>
		</div>
	);
}