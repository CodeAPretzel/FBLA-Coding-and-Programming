import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder, faGear, faQuestionCircle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPage } from "@/data/selectors/navigation";
import { setActivePage } from "@/data/actions/navigation";
import { Pages } from "@/data/objects/state";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "components/side-nav/side-nav.less";

interface ISideNavItem {
	key: string;
	page: Pages;
	icon: IconDefinition;
}

const sideNavItems: ISideNavItem[] = [
	{
		key: "Home",
		page: Pages.HOME,
		icon: faHouse
	},
	{
		key: "Components",
		page: Pages.FILES,
		icon: faFolder
	},
	{
		key: "Settings",
		page: Pages.SETTINGS,
		icon: faGear
	},
	{
		key: "Help",
		page: Pages.HELP,
		icon: faQuestionCircle
	},
	{
		key: "Logout",
		page: Pages.LOGIN,
		icon: faArrowLeft
	}
]

export function SideNav() {
	const dispatch = useDispatch();
	const currentPage = useSelector(getCurrentPage);
	const setCurrentPage = (page: Pages) => dispatch(setActivePage(page));

	const renderSideNavItem = (item: ISideNavItem) => {
		const { key, icon, page } = item;
		const compositeClass = [ "item", currentPage === page ? "selected" : "" ].join(" ");

		return (
			<div
				key={ key }
				className={ compositeClass }
				onClick={ () => setCurrentPage(page) }
				title={key}
			>
				<FontAwesomeIcon icon={ icon } />
			</div>
		);
	};

	return (
		<div className="side-nav">
			{ sideNavItems.map(renderSideNavItem) }
		</div>
	)
}