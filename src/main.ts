import { Plugin } from 'obsidian';

export default class UwRcLinkOpener extends Plugin {
	async onload() {
		console.log('loading plugin');
        
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => this.handleLinkClick(evt));
	}

	handleLinkClick(evt: MouseEvent) {
        const ele = evt.target as HTMLInputElement;
        evt.preventDefault();
        const url = ele.getAttribute('href');
        if (url && url.startsWith('rc://')) {
        	evt.preventDefault();
            const parts = url.split("/");
            const filePathToOpen = [parts[2] + "_" + parts[3]].concat(parts.slice(5)).join("/");
            console.log("RC link "+url+ " converted to " + filePathToOpen);
            this.app.workspace.openLinkText(filePathToOpen, '', true, { active: true });
            return false;
		}
	}
}



