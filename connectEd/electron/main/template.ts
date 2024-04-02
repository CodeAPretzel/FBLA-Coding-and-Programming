import { app, shell } from "electron"

export const template: Electron.MenuItemConstructorOptions[] = [{
	// ConnectEd
		label: 'File',
		submenu: [
			{ role: 'quit' }
		]
	},
	// Edit
	{
		label: 'Edit',
		submenu: [
			{ role: 'undo' },
			{ role: 'redo' },
			{ type: 'separator' },
			{ role: 'cut' },
			{ role: 'copy' },
			{ role: 'paste' },
		]
	},
	// View
	{
		label: 'View',
		submenu: [
			{ role: 'reload' },
			{ role: 'forceReload' },
			{ type: 'separator' },
			{ role: 'resetZoom' },
			{ role: 'zoomIn' },
			{ role: 'zoomOut' },
			{ type: 'separator' },
			{ role: 'togglefullscreen' }
		]
	},
	// Window
	{
		label: 'Window',
		submenu: [
			{ role: 'minimize' },
		]
	},
	// Help
	{
		role: 'help',
		submenu: [
			{
				label: 'Learn More About ConnectEd',
				click: async () => {
					await shell.openExternal('https://example.com')
				}
			}
		]
	}
]