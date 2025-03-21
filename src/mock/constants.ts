import { Integration } from "../interfaces/integration";
import { Column, Row } from '../interfaces/table';
import img1 from '../assets/UIDashboard/brands/19.png'

export const integrations: Integration[] = [
    { id: 1, name: "React", description: "A JavaScript library for building user interfaces", avatar: '/assets/avatars/avatar-1.png' },
    { id: 2, name: "Next JS", description: "A React framework for production", avatar: '/assets/avatars/avatar-2.png' },
    { id: 3, name: "Typescript", description: "A strongly typed programming language", avatar: '/assets/avatars/avatar-3.png' },
    { id: 4, name: "GitHub", description: "A platform for version control and collaboration", avatar: '/assets/avatars/avatar-4.png' },
    { id: 5, name: "Figma", description: "A collaborative interface design tool", avatar: '/assets/avatars/avatar-5.png' },
    { id: 6, name: "Material UI", description: "A popular React UI framework", avatar: '/assets/avatars/avatar-6.png' },
    { id: 7, name: "Jira", description: "A tool for agile project management", avatar: '/assets/avatars/avatar-7.png' },
    { id: 8, name: "Sass", description: "A CSS preprocessor", avatar: '/assets/avatars/avatar-8.png' }
];

export const columns: Column[] = [
    { key: 'financialInstitution', header: 'Financiera' },
    { key: 'amount', header: 'Monto' },
    { key: 'installments', header: 'Cuotas' },
    { key: 'installmentValue', header: 'Valor Cuota' },
    { key: 'annualRate', header: 'TNA' },
    { key: 'status', header: 'Estado' },
    { key: 'probability', header: 'Probabilidad' },
    { key: 'actions', header: 'Acciones' },
];

export const rows: Row[] = [
    {
        financialInstitution: 'Banco Santander',
        amount: '$100.000',
        installments: 24,
        installmentValue: '$6166.67',
        annualRate: '24%',
        status: 'Aprobado',
        probability: 100,
        actions: true,
        btnText: 'Generar Crédito'
    },
    {
        financialInstitution: 'Banco Galicia',
        amount: '$100.000',
        installments: 36,
        installmentValue: '$5777.78',
        annualRate: '36%',
        status: 'Pendiente de Aprobación',
        probability: 30,
        btnText: 'Generar Crédito'
    },
];

export const columnsReq: Column[] = [
    { key: 'financialInstitution', header: 'Financiera' },
    { key: 'client', header: 'Cliente' },
    { key: 'dni', header: 'DNI' },
    { key: 'amount', header: 'Monto' },
    { key: 'installments', header: 'Cuotas' },
    { key: 'status', header: 'Estado' },
    { key: 'actions', header: 'Acciones' },
];

export const rowsReq: Row[] = [
    {
        financialInstitution: 'Banco Santander',
        logoUrl: img1,
        client: 'Héctor Dominguez',
        dni: '27.123.321',
        amount: '$100.000',
        installments: 24,
        status: 'Pendiente Desembolso',
        actions: true,
        btnText: 'Procesar'
    },
];

