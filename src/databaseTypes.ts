
type IAddress = {
    line1: string;
    line2: string | undefined;
    city: string;
    state: string;
    postalCode: string;
}

export type IPolicyHolder = {
    name: string;
    age: number;
    address: IAddress;
    phoneNumber: string;
    isPrimary?: boolean
}