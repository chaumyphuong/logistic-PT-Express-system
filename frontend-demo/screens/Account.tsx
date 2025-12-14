import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';

const AccountScreen: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full bg-gray-50 overflow-y-auto no-scrollbar">
            <div className="bg-primary p-6 pt-12 text-white flex items-center space-x-5 shrink-0 shadow-md">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary shadow-inner border-4 border-rose-300">
                    <i className="fa-solid fa-user text-3xl"></i>
                </div>
                <div className="flex-1">
                    <h2 className="font-bold text-2xl tracking-wide">User Name</h2>
                    <p className="text-rose-100 text-sm font-medium opacity-90">0936676301</p>
                    <div className="flex items-center mt-2 space-x-2">
                        <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase backdrop-blur-sm">Gold Member</span>
                    </div>
                </div>
                <button className="bg-white/20 p-2.5 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <i className="fa-solid fa-pen"></i>
                </button>
            </div>
            
            <div className="flex-1 p-5 space-y-5">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    {[
                        { icon: "fa-solid fa-user", label: "Personal Information" },
                        { icon: "fa-solid fa-map-location-dot", label: "Saved Addresses" },
                        { icon: "fa-regular fa-credit-card", label: "Payment Methods" }
                    ].map((item, i) => (
                        <div key={i} onClick={() => navigate(RoutePath.COMING_SOON)} className="p-4 flex items-center justify-between border-b border-gray-50 last:border-0 cursor-pointer active:bg-gray-50">
                            <div className="flex items-center space-x-4 text-gray-700">
                                <div className="bg-rose-50 p-2 rounded-lg text-primary"><i className={item.icon}></i></div>
                                <span className="font-semibold">{item.label}</span>
                            </div>
                            <i className="fa-solid fa-chevron-right text-gray-400"></i>
                        </div>
                    ))}
                </div>
                
                <button 
                    onClick={() => navigate(RoutePath.WELCOME)}
                    className="w-full bg-white text-primary p-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-sm border border-gray-100 hover:bg-rose-50 hover:shadow-md transition-all active:scale-[0.99]"
                >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Log out</span>
                </button>
                <p className="text-center text-xs text-gray-400 pt-2">Version 1.0.5 (Build 2023)</p>
            </div>
        </div>
    );
};

export default AccountScreen;