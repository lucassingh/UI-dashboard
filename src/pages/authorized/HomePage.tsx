import { motion } from "framer-motion";
import { JumbotronComponent } from "../../components";
import imgBg from '../../assets/UIDashboard/backgrounds/top-header.png';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from "recharts";
import img0 from '../../assets/UIDashboard/brands/19.png';
import img1 from '../../assets/UIDashboard/brands/20.png';
import img2 from '../../assets/UIDashboard/brands/21.png';
import img3 from '../../assets/UIDashboard/brands/22.png';

const data = [
    { name: "Oct 2020", intereses: 500 },
    { name: "Nov 2020", intereses: 720 },
    { name: "Dic 2020", intereses: 950 },
    { name: "Ene 2021", intereses: 1200 },
    { name: "Feb 2021", intereses: 1450 },
    { name: "Mar 2021", intereses: 1750 },
    { name: "Abr 2021", intereses: 2100 },
];

const cardVariants = {
    offscreen: {
        y: 10,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

const staggeredVariants = {
    offscreen: {
        y: 10,
        opacity: 0,
    },
    onscreen: (custom: any) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: custom * 0.2,
        },
    }),
};

export const HomePage = () => {
    return (
        <div>
            <JumbotronComponent
                imageUrl={imgBg}
                title="Bienvenido Héctor Dominguez"
            />
            <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto -mt-16">
                <main>
                    <div className="pt-6 px-4">
                        <div className="mt-4 mb-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {/* Card 1 */}
                            <motion.div
                                variants={staggeredVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={0}
                                className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8"
                            >
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="text-2xl sm:text-2xl leading-none font-bold text-dark">$ 500.00</span>
                                        <h3 className="text-base font-normal text-tertiary">Intereses ganados esta semana</h3>
                                    </div>
                                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-secondary text-3xl font-bold">
                                        14.6%
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={staggeredVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={1}
                                className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8"
                            >
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="text-2xl sm:text-2xl leading-none font-bold text-dark">5</span>
                                        <h3 className="text-base font-normal text-tertiary">Coutas restantes</h3>
                                    </div>
                                    <div className="ml-5 w-0 flex items-center justify-end flex-1 text-secondary text-3xl font-bold">
                                        50%
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                variants={staggeredVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                                custom={2}
                                className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8"
                            >
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="sm:text-3xl leading-none font-bold text-dark text-3xl">3</span>
                                        <h3 className="text-base font-normal text-tertiary">Créditos aprobados</h3>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                            {/* Gráfico */}
                            <motion.div
                                variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                                className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex-shrink-0">
                                        <span className="text-2xl sm:text-3xl leading-none font-bold text-dark">$8.670</span>
                                        <h3 className="text-base font-normal text-tertiary">Intereses ganados en total</h3>
                                    </div>
                                </div>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={data}>
                                        <defs>
                                            <linearGradient id="colorIntereses" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#08b1ba" stopOpacity={0.6} />
                                                <stop offset="95%" stopColor="#08b1ba" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Area
                                            type="monotone"
                                            dataKey="intereses"
                                            stroke="none"
                                            fill="url(#colorIntereses)"
                                            fillOpacity={1}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="intereses"
                                            stroke="#08b1ba"
                                            strokeWidth={2}
                                            dot={{ r: 5 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </motion.div>

                            <motion.div
                                variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                                className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-dark mb-2">Historial de pagos</h3>
                                        <span className="text-base font-normal text-tertiary">Cuota 5 de 12</span>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a href="#" className="text-sm font-medium text-dark hover:bg-gray-100 rounded-lg p-2">Ver todo</a>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-8">
                                    <div className="overflow-x-auto rounded-lg">
                                        <div className="align-middle inline-block min-w-full">
                                            <div className="shadow overflow-hidden sm:rounded-lg">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead className="bg-gray-50">
                                                        <tr>
                                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Operación
                                                            </th>
                                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Fecha
                                                            </th>
                                                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Monto
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white">
                                                        <tr>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Cuota 7
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Abr 23 ,2021
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-tertiary">
                                                                $2300
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary rounded-lg rounded-left">
                                                                Cuota 6
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Mar 23 ,2021
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-tertiary">
                                                                $2300
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Cuota 5
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Feb 23 ,2021
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-tertiary">
                                                                $2300
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary rounded-lg rounded-left">
                                                                Cuota 4
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Ene 23 ,2021
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-tertiary">
                                                                $2300
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Cuota 3
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Dic 23 ,2020
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-tertiary">
                                                                $2300
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-gray-50">
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary rounded-lg rounded-left">
                                                                Cuota 2
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Nov 23 ,2020
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-tertiary">
                                                                $2300
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Cuota 1
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-normal text-tertiary">
                                                                Oct 23 ,2020
                                                            </td>
                                                            <td className="p-4 whitespace-nowrap text-sm font-semibold text-tertiary">
                                                                $2300
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                            <motion.div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full"
                                variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold leading-none text-dark">Entidades</h3>
                                    <a href="#" className="text-sm font-medium text-secondary hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                                        Ver todo
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200">
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <img className="h-8 w-8 rounded-sm" src={img0} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-tertiary truncate">
                                                        Banco Santander
                                                    </p>
                                                    {/* <p className="text-sm text-tertiary truncate">
                                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&#160;protected]</a>
                                                    </p> */}
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-tertiary">
                                                    $1000
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <img className="h-8 w-8 rounded-sm" src={img1} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-tertiary truncate">
                                                        Visa
                                                    </p>
                                                    {/* <p className="text-sm text-tertiary truncate">
                                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&#160;protected]</a>
                                                    </p> */}
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-tertiary">
                                                    $1000
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <img className="h-8 w-8 rounded-sm" src={img2} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-tertiary truncate">
                                                        Paypal
                                                    </p>
                                                    {/* <p className="text-sm text-tertiary truncate">
                                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&#160;protected]</a>
                                                    </p> */}
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-tertiary">
                                                    $1000
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <img className="h-8 w-8 rounded-sm" src={img3} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-tertiary truncate">
                                                        Mastercard
                                                    </p>
                                                    {/* <p className="text-sm text-tertiary truncate">
                                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&#160;protected]</a>
                                                    </p> */}
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-tertiary">
                                                    $1000
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pt-3 sm:pt-4 pb-0">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex-shrink-0">
                                                    <img className="h-8 w-8 rounded-sm" src={img0} alt="Neil image" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-tertiary truncate">
                                                        Banco Santander
                                                    </p>
                                                    {/* <p className="text-sm text-tertiary truncate">
                                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&#160;protected]</a>
                                                    </p> */}
                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-tertiary">
                                                    $1000
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                            <motion.div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 "
                                variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <h3 className="text-xl leading-none font-bold text-dark mb-10">Historial Crediticio</h3>
                                <div className="block w-full overflow-x-auto">
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">AÑO</th>
                                                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">MONTO</th>
                                                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left text-tertiary">2018</th>
                                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 text-tertiary">$300.000</td>
                                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">30%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-cyan-600 h-2 rounded-sm" style={{ width: 30 }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left text-tertiary">2019</th>
                                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 text-tertiary">250.000</td>
                                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">24%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-orange-300 h-2 rounded-sm" style={{ width: 24 }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left text-tertiary">2018</th>
                                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 text-tertiary">200.000</td>
                                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">18%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-teal-400 h-2 rounded-sm" style={{ width: 18 }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="text-gray-500">
                                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left text-tertiary">2017</th>
                                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 text-tertiary">190.000</td>
                                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                                    <div className="flex items-center">
                                                        <span className="mr-2 text-xs font-medium">12%</span>
                                                        <div className="relative w-full">
                                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                                <div className="bg-pink-600 h-2 rounded-sm" style={{ width: 12 }}></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};