export interface Column {
    key: string;
    header: string;
}

export interface Row {
    logoUrl?: string;
    financialInstitution?: string;
    amount?: string;
    client?: string;
    dni?: string;
    fee?: string;
    installments?: number;
    installmentValue?: string;
    annualRate?: string;
    status?: string;
    probability?: number;
    actions?: boolean;
    btnText: string;
}