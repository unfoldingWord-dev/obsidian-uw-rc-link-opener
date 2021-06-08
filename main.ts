import { Plugin } from 'obsidian';
import * as path from 'path';

export default class UwRcLinkOpener extends Plugin {
	async onload() {
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => this.handleLinkClick(evt));
	}

	handleLinkClick(evt: MouseEvent) {
        const ele = evt.target as HTMLInputElement;
        evt.preventDefault();
        const url = ele.getAttribute('href');
        if (url && url.startsWith('rc://')) {
            evt.preventDefault();
            const parts = url.split("/");
            const resource = parts[3];
            var filePathToOpen = [parts[2] + "_" + resource].concat(parts.slice(5)).join("/");
            if (resource == 'ta') {
                filePathToOpen = path.join(filePathToOpen, '01.md');
            }
            console.log("RC link "+url+ " converted to " + filePathToOpen);
            this.app.workspace.openLinkText(filePathToOpen, '', true, { active: true });
            return false;
		}
	}
}



