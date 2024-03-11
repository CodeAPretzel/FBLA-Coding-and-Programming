import { SideNav } from "components/side-nav";
import { useSelector } from "react-redux";
import { getCurrentPage } from "@/data/selectors/navigation";
import { Pages } from "@/data/objects/state";
import "components/main-page/main-page.less"

export default function MainPage() {
	const currentPage = useSelector(getCurrentPage);

	const renderPageContent = () => {
		switch (currentPage) {
			case Pages.HOME:
				return <p>Home Content</p>;
			case Pages.COMPONENTS:
				return <p>Components Content</p>;
			case Pages.SETTINGS:
				return <p>Settings Content</p>;
			case Pages.HELP:
				return <p>Help Content</p>;
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