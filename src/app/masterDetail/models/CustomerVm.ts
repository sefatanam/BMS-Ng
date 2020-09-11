import { PurchaseVm } from './PurchaseVm';

export class CustomerVm {
    id = 0;
    name = '';
    contactNo = '';
    address = '';
    invoiceNo = '';

    purchaseDetail: PurchaseVm[] = [];
}
