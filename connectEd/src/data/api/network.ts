import axios from "axios";

const baseUrl = "http://localhost:6061/api";

type RequestType = "GET" | "POST" | "PATCH" | "DELETE";

export function Request<T>(path: string, type: RequestType, params?: any, body?: T){
	return new Promise<T | void>((resolve, reject) => {
		axios({
			method: type,
			url: `${ baseUrl }/${ path }`,
			params: params,
			data: body
		})
			.then(response => {
				if (response.status >= 200 && response.status < 300){
					resolve(response.data);
				} else {
					reject();
				}
			});
	});
}