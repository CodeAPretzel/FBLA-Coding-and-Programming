import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder, faGear, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
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
		key: "home",
		page: Pages.HOME,
		icon: faHouse
	},
	{
		key: "components",
		page: Pages.COMPONENTS,
		icon: faFolder
	},
	{
		key: "settings",
		page: Pages.SETTINGS,
		icon: faGear
	},
	{
		key: "help",
		page: Pages.HELP,
		icon: faQuestionCircle
	},
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