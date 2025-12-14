import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import { Header, CardWidget, SimpleCalendar } from '../components/UI';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// REPORT SCREEN
export const ReportScreen: React.FC = () => {
    const [showRevenueCalendar, setShowRevenueCalendar] = useState(false);
    const [showProfitCalendar, setShowProfitCalendar] = useState(false);

    return (
        <div className="flex flex-col h-full bg-gray-50" onClick={() => { setShowRevenueCalendar(false); setShowProfitCalendar(false); }}>
            <Header title="Report" />
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">

                <CardWidget className="relative">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-medium text-lg">Revenue</h2>
                        <div className="relative">
                            <button onClick={(e) => { e.stopPropagation(); setShowRevenueCalendar(!showRevenueCalendar); }} className="bg-gray-100 rounded-2xl px-3 py-1.5 flex items-center gap-12 text-sm text-gray-600">Time <i className="fa fa-chevron-down text-sm"></i></button>
                            {showRevenueCalendar && (
                                <div className="absolute top-full right-0 mt-2 w-64 z-50" onClick={e => e.stopPropagation()}>
                                    <SimpleCalendar onClose={() => setShowRevenueCalendar(false)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex">
                         <div className="w-32 text-xs text-gray-600 space-y-2 shrink-0">
                            {["(VNĐ)", "Total revenue", "Delivery costs", "Refund costs", "Storage costs", "Redelivery costs", "Costs incurred", "Profit"].map((t, i) => (
                                <div key={i} className={`h-6 flex items-center ${i === 0 ? 'text-gray-400' : ''}`}>{t}</div>
                            ))}
                        </div>
                        <div className="flex-1 relative border-l border-gray-100 mt-2">
                             <div className="absolute inset-0 flex justify-between text-xs text-gray-400 -mt-6">
                                {[0, 0, 0, 0].map((v, i) => (
                                    <div key={i} className="flex flex-col items-center h-full">
                                        <span className="mb-2">{i === 0 ? '0' : '0k'}</span>
                                        <div className="flex-1 w-px bg-gray-100"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                     <div className="flex justify-center gap-8 mt-4">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-indigo-800"></div><span className="text-sm text-gray-600">Cash</span></div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-emerald-500"></div><span className="text-sm text-gray-600">Fee</span></div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-600"></div><span className="text-sm text-gray-600">Refund</span></div>
                    </div>
                </CardWidget>

                <CardWidget className="relative">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="font-medium text-lg">Profit</h2>
                        <div className="relative">
                            <button onClick={(e) => { e.stopPropagation(); setShowProfitCalendar(!showProfitCalendar); }} className="bg-gray-100 rounded-2xl px-3 py-1.5 flex items-center gap-12 text-sm text-gray-600">Time <i className="fa fa-chevron-down text-sm"></i></button>
                            {showProfitCalendar && (
                                <div className="absolute top-full right-0 mt-2 w-64 z-50" onClick={e => e.stopPropagation()}>
                                    <SimpleCalendar onClose={() => setShowProfitCalendar(false)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-6">Revenue (VNĐ)</div>
                    <div className="relative ml-8 h-40 border-l border-b border-gray-200">
                        <div className="absolute w-full top-0 border-t border-dashed border-gray-200"></div>
                        <div className="absolute w-full top-1/3 border-t border-dashed border-gray-200"></div>
                        <div className="absolute w-full top-2/3 border-t border-dashed border-gray-200"></div>
                        <div className="absolute -left-8 top-0 text-xs text-gray-400">0k</div>
                        <div className="absolute -left-6 bottom-0 text-xs text-gray-400">0</div>
                    </div>
                    <div className="flex justify-between ml-8 mt-2 text-xs text-gray-400">
                        {[1,2,3,4,5,6].map(i => <span key={i}>{i}/12</span>)}
                    </div>
                </CardWidget>
            </div>
        </div>
    );
};

// CASH FLOW SCREEN
export const CashFlowScreen: React.FC = () => {
    const navigate = useNavigate();
    const pieData = [{ name: 'Empty', value: 1 }];
    const [showFeeCalendar, setShowFeeCalendar] = useState(false);

    return (
        <div className="flex flex-col h-full bg-gray-50" onClick={() => setShowFeeCalendar(false)}>
            <Header title="Cash Flow" onBack={() => navigate(RoutePath.HOME)} />
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <button onClick={() => navigate(RoutePath.BALANCE_WALLET)} className="w-full p-5 flex justify-between items-center active:bg-gray-50 transition">
                        <span className="font-medium text-gray-900">Balance wallet</span>
                        <div className="flex items-center gap-3">
                            <span className="text-xl text-gray-900">0 ₫</span>
                            <i className="fa-solid fa-chevron-right text-gray-400"></i>
                        </div>
                    </button>
                    <div className="h-px bg-gray-100"></div>
                    <div className="p-5 space-y-4">
                         <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-gray-900 text-lg">Cash flow</h3>
                                <div className="flex items-center gap-1 mt-1">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                    <span className="text-sm text-primary font-medium">Live</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => navigate(RoutePath.MONEY_CIRCULATING)} className="flex justify-between items-center py-4 border-t border-gray-100 cursor-pointer active:opacity-70">
                            <span className="text-gray-700">Total money circulating</span>
                            <div className="flex items-center gap-3"><span className="text-gray-900">0 ₫</span><i className="fa-solid fa-chevron-right text-gray-400"></i></div>
                        </div>
                        <div className="flex justify-between items-center py-4 border-t border-gray-100">
                            <span className="text-gray-700">Total amount returned to wallet</span>
                            <span className="text-green-600">+0 ₫</span>
                        </div>
                         <div onClick={() => navigate(RoutePath.SERVICE_FEE)} className="flex justify-between items-center py-4 border-t border-gray-100 cursor-pointer active:opacity-70">
                            <span className="text-gray-700">Total service fee</span>
                            <div className="flex items-center gap-3"><span className="text-red-600">-0 ₫</span><i className="fa-solid fa-chevron-right text-gray-400"></i></div>
                        </div>
                        <div className="flex justify-between items-center py-4 border-t border-gray-100">
                            <span className="text-gray-700">Total amount withdrawn</span>
                            <span className="text-gray-900">-0 ₫</span>
                        </div>
                    </div>
                </div>

                <CardWidget className="relative">
                     <div className="flex justify-between items-center mb-6">
                        <h3 className="font-medium text-gray-900 text-lg">Service fee</h3>
                        <div className="relative">
                            <button onClick={(e) => { e.stopPropagation(); setShowFeeCalendar(!showFeeCalendar); }} className="bg-gray-100 rounded-2xl px-3 py-1.5 flex items-center gap-12 text-sm text-gray-600">Time <i className="fa fa-chevron-down text-sm"></i></button>
                            {showFeeCalendar && (
                                <div className="absolute top-full right-0 mt-2 w-64 z-50" onClick={e => e.stopPropagation()}>
                                    <SimpleCalendar onClose={() => setShowFeeCalendar(false)} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-40 h-40 relative">
                             <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={pieData} innerRadius={50} outerRadius={70} dataKey="value" stroke="none">
                                        <Cell fill="#D1D5DB" />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex-1 space-y-4">
                             {[
                                {label: "Service fee", color: "bg-green-400"},
                                {label: "Return fee", color: "bg-blue-300"},
                                {label: "Storage charges", color: "bg-yellow-400"},
                                {label: "Other fees", color: "bg-red-400"}
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col border-b border-gray-100 last:border-0 pb-1 last:pb-0">
                                    <span className="font-medium text-sm">0 đ</span>
                                    <span className="text-xs text-gray-500">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardWidget>
            </div>
        </div>
    );
};

export const BalanceWalletScreen: React.FC = () => {
    const navigate = useNavigate();
     return (
        <div className="flex flex-col h-full bg-gray-50">
            <Header title="Balance Wallet" />
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
                <CardWidget onClick={() => navigate(RoutePath.COMING_SOON)} className="flex justify-between items-center cursor-pointer active:opacity-60">
                    <span className="text-gray-900">Balance wallet</span>
                    <div className="flex items-center gap-2"><span className="font-medium text-gray-900">0 đ</span><i className="fa-solid fa-chevron-right"></i></div>
                </CardWidget>

                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 grid grid-cols-3 gap-4">
                    {[
                        {icon: "fa-regular fa-credit-card", label: "Pay"},
                        {icon: "fa-solid fa-money-bill-transfer", label: "Withdraw money"},
                        {icon: "fa-solid fa-plus", label: "Add money"}
                    ].map((btn, i) => (
                        <button key={i} className="bg-primary rounded-lg p-3 flex flex-col items-center justify-center gap-2 text-white h-24 shadow-sm active:opacity-90">
                            <i className={`${btn.icon} text-2xl`}></i>
                            <span className="text-center text-xs font-medium leading-tight">{btn.label}</span>
                        </button>
                    ))}
                </div>

                <CardWidget>
                    <div className="pb-4 border-b border-gray-100 mb-2">
                        <h2 className="text-gray-900 font-medium">Cash flow</h2>
                        <div className="flex items-center gap-1 mt-1 text-xs text-gray-400"><i className="fa-solid fa-rss text-primary"></i> Live</div>
                    </div>
                     {[
                        "Total money circulating",
                        "Total amount returned to wallet",
                        "Total service fee",
                        "Total amount withdrawn"
                    ].map((label, i) => (
                        <div key={i} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                            <span className="text-gray-800 text-sm">{label}</span>
                            <span className="font-medium text-gray-900 text-sm">0 đ</span>
                        </div>
                    ))}
                </CardWidget>
            </div>
        </div>
     );
}

export const MoneyCirculatingScreen: React.FC = () => (
    <div className="flex flex-col h-full bg-gray-50">
        <Header title="Total Money Circulating" />
        <div className="p-4 bg-white mb-2">
             <div className="flex justify-between items-center">
                <span className="text-gray-800">Haven't paid via wallet yet</span>
                <div className="flex items-center gap-2"><span className="font-medium text-gray-900">0 đ</span><i className="fa-solid fa-chevron-left"></i></div>
            </div>
        </div>
        <div className="flex gap-2 p-4 bg-white border-b border-gray-100 overflow-x-auto no-scrollbar">
            {['Status', 'Pickup', 'Delivery'].map(f => (
                <button key={f} className="bg-gray-100 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-gray-600 whitespace-nowrap">
                    {f} <i className="fa-solid fa-caret-down"></i>
                </button>
            ))}
        </div>
        <div className="flex-1 bg-white"></div>
        <div className="bg-gray-100 p-4 flex justify-between text-xs text-gray-600 shrink-0 border-t border-gray-200">
             <div className="text-center flex-1 border-r border-gray-300">
                <div className="font-medium text-gray-900">Total 0 order</div>
                <div>0 đ</div>
            </div>
            <div className="text-center flex-1 border-r border-gray-300">
                <div className="font-medium text-gray-900">CoD money</div>
                <div>0 đ</div>
            </div>
            <div className="text-center flex-1">
                <div className="font-medium text-gray-900">Service fee</div>
                <div>0 đ</div>
            </div>
        </div>
    </div>
);

export const ServiceFeeScreen: React.FC = () => (
    <div className="flex flex-col h-full bg-gray-50">
        <Header title="Total Service Fee" />
        <div className="bg-white p-4 space-y-3">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                <button className="bg-primary text-white px-6 py-1.5 rounded-full text-sm font-medium whitespace-nowrap shadow-sm">All</button>
                <button className="bg-gray-100 text-gray-600 px-6 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">Paid</button>
                <button className="bg-gray-100 text-gray-600 px-6 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">Unpaid</button>
            </div>
        </div>
        <div className="flex justify-between items-center px-4 py-3 bg-white border-t border-gray-100">
            <span className="font-medium text-gray-900">Total 0 order / 0 đ</span>
            <button className="bg-gray-100 rounded-full px-4 py-1.5 flex items-center gap-2 text-sm text-gray-600">
                Incremental <i className="fa-solid fa-caret-down"></i>
            </button>
        </div>
        <div className="flex-1 bg-white"></div>
    </div>
);