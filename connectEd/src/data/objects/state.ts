import { IUser } from "@/data/interfaces";

export enum Pages {
	LOGIN = "LOGIN",
	HOME = "HOME"
}

export class State {
	constructor() {
		this.User = new UserState();
		this.Navigation = new NavigationState();
	}

	User: UserState;
	Navigation: NavigationState;
}

export class UserState {
	token: string;
	currentUser: IUser;
}

export class NavigationState {
	currentPage: Pages;
}