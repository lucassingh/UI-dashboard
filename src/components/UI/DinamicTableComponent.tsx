import { motion } from "framer-motion";
import { Column, Row } from '../../interfaces/table';
import { ProgressBarComponent } from '..';

interface DynamicTableProps {
    columns: Column[];
    rows: Row[];
    onGenerateCredit: (row: Row) => void;
}

const tableVariants = {
    offscreen: {
        scale: 0.8,
        opacity: 0,
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.3,
        },
    },
};

export const DinamicTableComponent: React.FC<DynamicTableProps> = ({ columns, rows, onGenerateCredit }) => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={tableVariants}
            className="overflow-x-auto mt-11 shadow-lg overflow-hidden rounded-lg"
        >
            <table className="min-w-full shadow-sm">
                <thead>
                    <tr className="bg-gray ">
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="px-4 py-2 text-dark font-medium"
                            >
                                {column.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="text-center ">
                            {columns.map((column) => (
                                <td
                                    key={column.key}
                                    className="px-4 py-2 text-tertiary"
                                >
                                    {column.key === 'status' ? (
                                        <span
                                            className={`font-medium ${row.status === 'Aprobado' || 'Pendiente Desembolso' ? 'text-secondary' : 'text-red-500'}`}
                                        >
                                            {row.status}
                                        </span>
                                    ) : column.key === 'probability' ? (
                                        <ProgressBarComponent progress={row.probability ?? 0} />
                                    ) : column.key === 'actions' ? (
                                        <div className="flex justify-center">
                                            <button
                                                className="border border-primary text-primary px-4 py-2 rounded hover:bg-secondary hover:border-secondary hover:text-white transition-colors"
                                                onClick={() => onGenerateCredit(row)}
                                            >
                                                {row.btnText}
                                            </button>
                                        </div>
                                    ) : column.key === 'financialInstitution' ? (
                                        <div className="flex items-center">
                                            {row.logoUrl ? (
                                                <img
                                                    src={row.logoUrl}
                                                    alt="Logo"
                                                    className="w-8 h-8 mr-2 rounded-sm"
                                                />
                                            ) : null}
                                            {row.financialInstitution}
                                        </div>
                                    ) : (
                                        row[column.key as keyof Row]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};