import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import { CardWidget, Header } from '../components/UI';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const ComingSoonScreen: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full bg-white">
            <Header title="Update Later" onBack={() => navigate(-1)} />
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-person-digging text-5xl text-gray-400"></i>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Feature Updating</h2>
                    <p className="text-gray-500">This feature is currently under development and will be available in the next update.</p>
                </div>
                <button 
                    onClick={() => navigate(-1)} 
                    className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-md active:opacity-90 transition-opacity"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

const HomeScreen: React.FC = () => {
    const navigate = useNavigate();
    const data = [{ name: 'Full', value: 100 }];

    return (
        <div className="flex-1 bg-gray-50 overflow-y-auto no-scrollbar p-4 space-y-4 h-full">
            <button className="w-full bg-primary p-4 rounded-2xl flex items-center shadow-sm border border-gray-100 active:scale-[0.99] transition-transform">
                <div className="w-20 h-20 flex items-center justify-center p-2 bg-white/10 rounded-xl">
                    <img src="https://lh3.googleusercontent.com/d/1_xSMtSZwk3uO-ro6zdXT4LYO-lfxMN91" className="w-full object-contain" alt="PTE Logistics" />
                </div>
                <div className="flex-1 px-4 text-left">
                    <h1 className="font-bold text-white text-xl">PTE Logistics</h1>
                    <div className="h-px bg-rose-200/30 my-2"></div>
                    <p className="text-xs text-rose-100 font-medium">Referral link: <span className="text-white font-bold">pte.vn/ref/123</span></p>
                </div>
            </button>

            {/* Financial Report */}
            <CardWidget onClick={() => navigate(RoutePath.REPORT)}>
                <div className="flex justify-between mb-4 items-center">
                    <h3 className="font-bold text-gray-800">Financial Report</h3>
                    <span className="text-xs text-gray-400 flex items-center hover:text-primary">view <i className="fa-solid fa-chevron-right text-[10px] ml-1"></i></span>
                </div>
                <div className="flex justify-between items-end">
                    <div className="space-y-4">
                        <div><p className="font-bold text-xl text-gray-900">0 ₫</p><p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Revenue</p></div>
                        <div><p className="font-bold text-xl text-gray-900">0 ₫</p><p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Profit</p></div>
                    </div>
                    <div className="flex items-end space-x-1 h-24">
                        <div className="w-4 bg-yellow-400 rounded-t h-[80%]"></div>
                        <div className="w-4 bg-green-400 rounded-t h-[60%]"></div>
                        <div className="w-4 bg-red-400 rounded-t h-[60%]"></div>
                        <div className="w-4 bg-blue-400 rounded-t h-[40%]"></div>
                        <div className="w-4 bg-purple-400 rounded-t h-[55%]"></div>
                    </div>
                </div>
            </CardWidget>

            {/* Cash Flow */}
            <CardWidget onClick={() => navigate(RoutePath.CASH_FLOW)}>
                <div className="flex justify-between mb-4 items-center">
                    <h3 className="font-bold text-gray-800">Cash Flow</h3>
                    <span className="text-xs text-gray-400 flex items-center hover:text-primary">view<i className="fa-solid fa-chevron-right text-[10px] ml-1"></i></span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="space-y-4">
                        <div><p className="font-bold text-xl text-gray-900">0 ₫</p><p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Service charge</p></div>
                        <div><p className="font-bold text-xl text-gray-900">0 ₫</p><p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Money back</p></div>
                    </div>
                    <div className="w-24 h-24 relative flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={data} innerRadius={32} outerRadius={42} dataKey="value" startAngle={90} endAngle={-270} stroke="none">
                                    <Cell fill="#D1D5DB" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-400">100%</div>
                    </div>
                </div>
            </CardWidget>

            {/* Orders Attention */}
            <CardWidget onClick={() => navigate(RoutePath.ORDER_ATTENTION)}>
                 <div className="flex justify-between mb-4 items-center">
                    <h3 className="font-bold text-gray-800">Orders Attention</h3>
                    <span className="text-xs text-gray-400 flex items-center hover:text-primary">view<i className="fa-solid fa-chevron-right text-[10px] ml-1"></i></span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col"><p className="font-bold text-gray-900">0 / 0</p><p className="text-xs text-gray-400 font-medium">Orders Taken</p></div>
                    <div className="h-8 w-px bg-gray-100"></div>
                    <div className="flex flex-col"><p className="font-bold text-gray-900">0</p><p className="text-xs text-gray-400 font-medium">Orders Delivered</p></div>
                    <div className="flex flex-col space-y-1.5 opacity-50">
                        <div className="w-10 h-1 bg-gray-800 rounded-full"></div>
                        <div className="w-8 h-1 bg-gray-800 rounded-full"></div>
                        <div className="w-6 h-1 bg-gray-800 rounded-full"></div>
                    </div>
                </div>
            </CardWidget>

             {/* Recipient */}
             <CardWidget onClick={() => navigate(RoutePath.RECIPIENTS)}>
                <div className="flex justify-between mb-4 items-center">
                    <h3 className="font-bold text-gray-800">Recipient List</h3>
                    <span className="text-xs text-gray-400 flex items-center hover:text-primary">view<i className="fa-solid fa-chevron-right text-[10px] ml-1"></i></span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="space-y-3">
                        <div><p className="font-semibold text-gray-900">0 people</p><p className="text-xs text-gray-400 font-medium">Not received</p></div>
                        <div><p className="font-semibold text-gray-900">0 people</p><p className="text-xs text-gray-400 font-medium">Received</p></div>
                    </div>
                    <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center text-primary"><i className="fa-regular fa-user text-3xl"></i></div>
                </div>
             </CardWidget>

             <CardWidget onClick={() => navigate(RoutePath.ACCOUNT)} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <div className="bg-gray-100 p-2 rounded-lg text-gray-600"><i className="fa-solid fa-user"></i></div>
                    <span className="font-bold text-gray-800">Account information</span>
                </div>
                <i className="fa-solid fa-chevron-right text-gray-400"></i>
             </CardWidget>
        </div>
    );
};

export default HomeScreen;