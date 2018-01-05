import { FuseUtils } from '../../../../core/fuseUtils';

export class <%= capitalizedPageName %> {
    id: string;
    name: string;

    constructor(contact) {
        {
            this.id = contact.id || FuseUtils.generateGUID();
            this.name = contact.name || '';
        }
    }
}
