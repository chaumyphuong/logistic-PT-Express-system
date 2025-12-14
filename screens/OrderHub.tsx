import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RoutePath, OrderType } from '../types';
import { Header, Popup, SimpleCalendar } from '../components/UI';

const OrderItem: React.FC<{ code: string, company: string, status: string, onClick?: () => void, onDelete?: () => void }> = ({ code, company, status, onClick, onDelete }) => (
    <div onClick={onClick} className="bg-white rounded-lg shadow-sm mb-4 border border-gray-100 overflow-hidden cursor-pointer active:opacity-95 transition-opacity">
        <div className="bg-primary p-2 flex justify-between items-center px-3">
             <span className="bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">{code}</span>
             <i 
                onClick={(e) => {
                    e.stopPropagation(); 
                    if (onDelete) onDelete();
                }}
                className="fa-regular fa-trash-can text-white/80 hover:text-white cursor-pointer p-1"
             ></i>             
        </div>
        <div className="p-3 space-y-2">
            <div className="text-primary font-bold text-sm">{company}</div>
            <div className="text-xs text-gray-700"><span className="font-bold">Address:</span> 99 An Trach, Ha Noi</div>
            <div className="text-xs text-gray-700"><span className="font-bold">Collected:</span> 200.000 VND</div>
             <div className="h-px bg-gray-100 my-2"></div>
            <div className="text-xs italic text-gray-600 font-medium">Status: {status}</div>
        </div>
    </div>
);

export const OrderHubScreen: React.FC = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState<'operate' | 'list'>('operate');
    const [activeDropdown, setActiveDropdown] = useState<'calendar' | 'order' | 'customer' | null>(null);
    
    // Delete Popup State
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [selectedOrderCode, setSelectedOrderCode] = useState<string>('');

    const navigateCreate = (type: OrderType) => {
        navigate(RoutePath.CREATE_ORDER, { state: { type } });
    };

    const toggleDropdown = (name: 'calendar' | 'order' | 'customer') => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const handleDelete = (code: string) => {
        setSelectedOrderCode(code);
        setShowDeletePopup(true);
    };

    const confirmDelete = () => {
        console.log("Deleted order:", selectedOrderCode);
        setShowDeletePopup(false);
    };

    const handleOperateClick = (label: string) => {
        if (label === "Delivered successfully") {
            navigate(RoutePath.ORDER_ATTENTION, { state: { title: 'Delivered Orders', type: 'delivered' } });
        } else {
            navigate(RoutePath.COMING_SOON);
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 overflow-y-auto no-scrollbar" onClick={() => setActiveDropdown(null)}>
             <div className="relative bg-white pt-2 pb-4 shadow-sm z-10">
                <div className="flex gap-4 justify-center items-center px-4">
                    {[
                        { icon: "fa-box-open", label: "< 20KG", type: 'light' },
                        { icon: "fa-dolly", label: "> 20KG", type: 'heavy' },
                        { icon: "fa-bolt", label: "Express", type: 'express' }
                    ].map((item) => (
                        <button key={item.label} onClick={() => navigateCreate(item.type as OrderType)} className="w-[85px] h-[85px] bg-primary rounded-2xl flex flex-col items-center justify-center gap-2 text-white font-bold text-xs shadow-lg active:scale-95 transition-transform border border-white/20">
                            <i className={`fa-solid ${item.icon} text-2xl`}></i>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full mb-1"></div>
            </div>

            <div className="bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
                <div className="flex">
                    <button onClick={() => setTab('operate')} className={`flex-1 py-3 font-medium text-sm ${tab === 'operate' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}>OPERATE</button>
                    <button onClick={() => setTab('list')} className={`flex-1 py-3 font-medium text-sm ${tab === 'list' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}>ORDER</button>
                </div>
                 <div className="flex items-center gap-2 p-3 border-t border-gray-100">
                    <div onClick={() => navigate(RoutePath.SEARCH_FILTER)} className="flex-1 bg-gray-100 rounded-full h-10 flex items-center px-4 gap-2 cursor-pointer text-sm text-gray-400 hover:bg-gray-200 transition-colors">
                        <i className="fa-solid fa-magnifying-glass text-primary"></i>
                        <span className="text-gray-400">Search here</span>
                    </div>
                    <button onClick={() => navigate(RoutePath.SEARCH_FILTER)} className="text-primary font-medium text-sm px-2">Filter</button>
                    <button onClick={() => navigate(RoutePath.EXCEL_EXPORT)} className="w-8 h-8 flex items-center justify-center text-green-600 active:scale-90 transition-transform"><i className="fa-solid fa-file-excel text-xl"></i></button>
                </div>
                 
                 <div className="flex gap-2 p-3 pt-0 relative flex-wrap">
                    <div className="relative">
                        <button onClick={(e) => { e.stopPropagation(); toggleDropdown('calendar'); }} className={`bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-medium ${activeDropdown === 'calendar' ? 'text-primary bg-rose-50' : 'text-gray-600'} whitespace-nowrap`}>
                            <i className="fa-regular fa-calendar"></i>
                            <i className="fa-solid fa-caret-down text-gray-400"></i>
                        </button>
                        {activeDropdown === 'calendar' && (
                            <div className="absolute top-full left-0 mt-2 w-64 z-50 shadow-xl" onClick={e => e.stopPropagation()}>
                                <SimpleCalendar onClose={() => setActiveDropdown(null)} />
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button onClick={(e) => { e.stopPropagation(); toggleDropdown('order'); }} className={`bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-medium ${activeDropdown === 'order' ? 'text-primary bg-rose-50' : 'text-gray-600'} whitespace-nowrap`}>
                            Order
                            <i className="fa-solid fa-caret-down text-gray-400"></i>
                        </button>
                        {activeDropdown === 'order' && (
                            <div className="absolute top-full left-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                                {['All', 'Processing', 'Delivering', 'Completed'].map(s => (
                                    <div key={s} onClick={() => setActiveDropdown(null)} className="px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 cursor-pointer">{s}</div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button onClick={(e) => { e.stopPropagation(); toggleDropdown('customer'); }} className={`bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-medium ${activeDropdown === 'customer' ? 'text-primary bg-rose-50' : 'text-gray-600'} whitespace-nowrap`}>
                            Customer
                            <i className="fa-solid fa-caret-down text-gray-400"></i>
                        </button>
                         {activeDropdown === 'customer' && (
                            <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                                {['ABC Company', 'XYZ Corp', 'Personal'].map(s => (
                                    <div key={s} onClick={() => setActiveDropdown(null)} className="px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 cursor-pointer">{s}</div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-4">
                {tab === 'operate' ? (
                     <div className="space-y-0 divide-y divide-gray-100 bg-white rounded-xl border border-gray-100 p-4">
                        <h2 className="text-base font-medium text-gray-900 mb-4">Operational report <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-2">Live</span></h2>
                        {[
                            "Delivered successfully", "Orders delivered to new customers", "Waiting for return", "Returning goods", "Accumulated inventory", "Request not yet fulfilled"
                        ].map((label, i) => (
                             <div key={i} onClick={() => handleOperateClick(label)} className="flex justify-between items-center py-4 first:pt-0 last:pb-0 cursor-pointer active:opacity-60 transition-opacity">
                                <span className="text-gray-700 text-sm">{label}</span>
                                <div className="flex items-center gap-2"><span className="font-medium text-sm">0</span><i className="fa-solid fa-chevron-right text-gray-400 text-xs"></i></div>
                            </div>
                        ))}
                     </div>
                ) : (
                    <div className="space-y-4">
                        <OrderItem code="C0015" company="ABC Company" status="Not received" onClick={() => navigate(RoutePath.ORDER_DETAIL)} onDelete={() => handleDelete("C0015")} />
                        <OrderItem code="C0014" company="XYZ Company" status="Delivered" onDelete={() => handleDelete("C0014")} />
                        <OrderItem code="C0012" company="Logistics Corp" status="Processing" onDelete={() => handleDelete("C0012")} />
                        <OrderItem code="C0011" company="Global Trade" status="Completed" onDelete={() => handleDelete("C0011")} />
                    </div>
                )}
            </div>

            <Popup 
                isOpen={showDeletePopup} onClose={() => setShowDeletePopup(false)} title="Delete Order"
                footer={
                    <>
                        <button onClick={() => setShowDeletePopup(false)} className="flex-1 bg-gray-200 text-gray-700 py-2.5 rounded-xl font-bold text-sm shadow-sm active:opacity-90 transition-opacity">
                            Cancel
                        </button>
                        <button onClick={confirmDelete} className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold text-sm shadow-md active:opacity-90 transition-opacity">
                            Confirm
                        </button>
                    </>
                }
            >
                <div className="text-center space-y-3 py-2">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <i className="fa-regular fa-trash-can text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Are you sure you want to delete order <span className="font-bold text-gray-900">{selectedOrderCode}</span>?
                    </p>
                    <p className="text-xs text-gray-400">This action cannot be undone.</p>
                </div>
            </Popup>
        </div>
    );
};

export const OrderAttentionScreen: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as { title?: string, type?: 'attention' | 'delivered' } | null;
    const title = state?.title || "Attention List";
    const type = state?.type || 'attention';

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [selectedOrderCode, setSelectedOrderCode] = useState<string>('');

    const handleDelete = (code: string) => {
        setSelectedOrderCode(code);
        setShowDeletePopup(true);
    };

    const confirmDelete = () => {
        console.log("Deleted order:", selectedOrderCode);
        setShowDeletePopup(false);
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 pb-20">
            <Header title={title} onBack={() => navigate(RoutePath.HOME)} />
            <div className="flex-1 overflow-y-auto no-scrollbar p-4">
                {type === 'attention' ? (
                    <>
                        <OrderItem 
                            code="C0015" 
                            company="ABC Company" 
                            status="In progress" 
                            onClick={() => navigate(RoutePath.ORDER_DETAIL)} 
                            onDelete={() => handleDelete("C0015")}
                        />
                        <OrderItem 
                            code="C0013" 
                            company="XYZ Company" 
                            status="Issue reported" 
                            onDelete={() => handleDelete("C0013")}
                        />
                    </>
                ) : (
                    <>
                         <OrderItem 
                            code="C0014" 
                            company="XYZ Company" 
                            status="Delivered" 
                            onClick={() => navigate(RoutePath.ORDER_DETAIL, { state: { status: 'delivered' } })} 
                            onDelete={() => handleDelete("C0014")}
                        />
                        <OrderItem 
                            code="C0011" 
                            company="Global Trade" 
                            status="Delivered" 
                            onClick={() => navigate(RoutePath.ORDER_DETAIL, { state: { status: 'delivered' } })} 
                            onDelete={() => handleDelete("C0011")}
                        />
                    </>
                )}
            </div>
            <Popup 
                isOpen={showDeletePopup} onClose={() => setShowDeletePopup(false)} title="Delete Order"
                footer={
                    <>
                        <button onClick={() => setShowDeletePopup(false)} className="flex-1 bg-gray-200 text-gray-700 py-2.5 rounded-xl font-bold text-sm shadow-sm active:opacity-90 transition-opacity">
                            Cancel
                        </button>
                        <button onClick={confirmDelete} className="flex-1 bg-primary text-white py-2.5 rounded-xl font-bold text-sm shadow-md active:opacity-90 transition-opacity">
                            Confirm
                        </button>
                    </>
                }
            >
                <div className="text-center space-y-3 py-2">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <i className="fa-regular fa-trash-can text-primary text-xl"></i>
                    </div>
                    <p className="text-gray-600 text-sm">
                        Are you sure you want to delete order <span className="font-bold text-gray-900">{selectedOrderCode}</span>?
                    </p>
                    <p className="text-xs text-gray-400">This action cannot be undone.</p>
                </div>
            </Popup>
        </div>
    );
};

export const OrderDetailScreen: React.FC = () => {
    const location = useLocation();
    const status = (location.state as any)?.status || 'processing';
    const isDelivered = status === 'delivered';

    return (
        <div className="flex flex-col h-full bg-gray-50 pb-20">
            <Header title="Order Details" />
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
                 <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                    <div className="bg-primary p-2 text-center text-white font-bold">Details</div>
                    <div className="p-3 space-y-2 text-sm">
                        <div className="text-primary font-bold">ABC Company</div>
                        <div className="text-xs text-gray-700"><span className="font-bold">Address:</span> 99 An Trach, Ha Noi</div>
                        <div className="text-xs text-gray-700"><span className="font-bold">Collected:</span> 200.000 VND</div>
                        <div className="h-px bg-gray-100 my-2"></div>
                        <div className={`text-xs font-bold ${isDelivered ? 'text-green-600' : ''}`}>Status: {isDelivered ? 'Delivered' : 'Processing'}</div>
                    </div>
                </div>
                
                 <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                     <div className="bg-primary p-2 flex justify-between items-center text-white px-3 text-sm">
                        <div className="flex items-center gap-2">Ha Noi <i className="fa-solid fa-arrow-right text-xs"></i> Sai Gon</div>
                        <button className="bg-white text-primary text-[10px] px-2 py-0.5 rounded font-bold">MAP</button>
                    </div>
                    <div className="h-32 bg-gray-200 relative flex items-center justify-center text-gray-400 text-xs">
                        [Map Placeholder]
                    </div>
                </div>
                
                {isDelivered ? (
                     <div className="flex items-center justify-between px-8 py-4">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><i className="fa-solid fa-box"></i></div>
                        <div className="flex-1 border-t-2 border-dotted border-primary/30 mx-2"></div>
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary"><i className="fa-solid fa-truck-fast"></i></div>
                        <div className="flex-1 border-t-2 border-dotted border-primary mx-2"></div>
                        <div className="relative flex flex-col items-center">
                            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white ring-4 ring-green-100"><i className="fa-solid fa-check"></i></div>
                            <span className="absolute -bottom-6 text-xs text-green-600 font-bold whitespace-nowrap">Delivered</span>
                        </div>
                    </div>
                ) : (
                     <div className="flex items-center justify-between px-8 py-4">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white"><i className="fa-solid fa-box"></i></div>
                        <div className="flex-1 border-t-2 border-dotted border-primary mx-2"></div>
                        <div className="relative flex flex-col items-center">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white ring-4 ring-rose-100"><i className="fa-solid fa-truck-fast"></i></div>
                            <span className="absolute -bottom-6 text-xs text-primary font-bold whitespace-nowrap">Delivering</span>
                        </div>
                        <div className="flex-1 border-t-2 border-dotted border-primary mx-2"></div>
                        <div className="w-10 h-10 bg-primary/40 rounded-lg flex items-center justify-center text-white"><i className="fa-solid fa-truck-ramp-box"></i></div>
                    </div>
                )}

                {isDelivered ? (
                     <div className="bg-green-50 rounded-xl p-4 border border-green-100 relative shadow-sm">
                        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">COMPLETED</span>
                        <div className="space-y-3 mt-2 text-sm">
                            <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-cube w-4 text-green-600"></i> Materials</div>
                            <div className="flex items-center gap-3 text-gray-700"><i className="fa-solid fa-truck w-4 text-green-600"></i> 24 ton Truck</div>
                             <div className="flex items-center gap-3 text-gray-700"><i className="fa-regular fa-clock w-4 text-green-600"></i> Delivered at 14:30</div>
                        </div>
                    </div>
                ) : (
                     <div className="bg-primary rounded-xl p-4 text-white relative shadow-sm">
                        <span className="absolute top-4 right-4 bg-white text-xs font-bold text-primary px-2 py-0.5 rounded">IN PROGRESS</span>
                        <div className="space-y-3 mt-2 text-sm">
                            <div className="flex items-center gap-3"><i className="fa-solid fa-cube w-4"></i> Materials</div>
                            <div className="flex items-center gap-3"><i className="fa-solid fa-truck w-4"></i> 24 ton Truck</div>
                        </div>
                    </div>
                )}

                <div className="flex gap-3 pt-2">
                    <button className={`flex-1 ${isDelivered ? 'bg-gray-100 text-gray-600' : 'bg-primary text-white'} py-3 rounded-xl font-bold text-sm shadow-md transition-colors`}>
                        {isDelivered ? 'Report Issue' : 'Disable'}
                    </button>
                    <button className="flex-1 bg-blue-400 text-white py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2"><i className="fa-brands fa-rocketchat"></i> Zalo</button>
                </div>
            </div>
        </div>
    );
}

export const SearchFilterScreen: React.FC = () => {
    const navigate = useNavigate();
    const [showResults, setShowResults] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [hasData, setHasData] = useState(false); 

    const handleFilter = () => {
        setShowResults(true);
        setHasData(false);
    };

    return (
        <div className="flex flex-col h-full bg-white pb-safe" onClick={() => setShowCalendar(false)}>
            <Header title="Search for orders" />
            
            <div className="p-4 space-y-6 flex-1 overflow-y-auto">
                 <div>
                    <p className="text-gray-800 text-sm mb-2">Search by order or filter orders</p>
                    <input type="text" placeholder="Enter phone number or order code to search" className="w-full bg-gray-100 p-3 rounded-lg text-sm outline-none placeholder:text-gray-400" />
                 </div>
                 
                 <div className="space-y-3">
                     <div className="flex items-center justify-between relative">
                        <label className="text-gray-800 text-sm w-36">Time:</label>
                        <button 
                            onClick={(e) => { e.stopPropagation(); setShowCalendar(!showCalendar); }}
                            className="flex-1 border border-black/80 rounded-md py-1 px-3 flex justify-between items-center bg-white text-sm h-8 active:bg-gray-50"
                        >
                            <span>10/12 - 17/12</span><i className="fa-solid fa-chevron-right text-xs"></i>
                        </button>
                        {showCalendar && (
                            <div className="absolute top-full right-0 mt-2 w-64 z-50" onClick={e => e.stopPropagation()}>
                                <SimpleCalendar onClose={() => setShowCalendar(false)} />
                            </div>
                        )}
                    </div>

                     {[
                        {l: "Session:", v: "All"},
                        {l: "Pickup address:", v: "8 Ng Van Trang"},
                        {l: "Delivery address:", v: "Nationwide"},
                        {l: "Order type:", v: "Not yet printed"},
                        {l: "Order status:", v: "All"}
                     ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <label className="text-gray-800 text-sm w-36">{item.l}</label>
                            <button onClick={() => navigate(RoutePath.COMING_SOON)} className="flex-1 border border-black/80 rounded-md py-1 px-3 flex justify-between items-center bg-white text-sm h-8 active:bg-gray-50">
                                <span>{item.v}</span><i className="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                        </div>
                     ))}
                 </div>
                 
                 <button onClick={handleFilter} className="w-full bg-primary text-white py-3 rounded-xl font-bold text-lg shadow-md mt-4 active:scale-95 transition-transform">Filter orders</button>

                 {showResults && (
                    <div className="pt-4 animate-fade-in border-t border-gray-100 mt-4">
                        <h3 className="text-sm font-bold text-gray-700 mb-3">Results</h3>
                        {hasData ? (
                            <OrderItem code="C0015" company="ABC Company" status="Not received" onClick={() => navigate(RoutePath.ORDER_DETAIL)} />
                        ) : (
                            <div className="py-8 text-center">
                                <i className="fa-regular fa-folder-open text-4xl text-gray-300 mb-2"></i>
                                <p className="text-gray-400 text-sm font-medium">No recently data</p>
                            </div>
                        )}
                    </div>
                 )}
            </div>
            
            <div className="border-t border-gray-200 p-3 flex justify-between items-center bg-gray-50 pb-safe">
                <span className="text-primary text-sm font-medium">Select 0 orders</span>
                <button onClick={() => navigate(RoutePath.COMING_SOON)} className="bg-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 active:opacity-70">
                    Operation <i className="fa-solid fa-chevron-right text-[10px]"></i>
                </button>
            </div>
        </div>
    )
}

export const ExcelExportScreen: React.FC = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const [emailPopup, setEmailPopup] = useState(false);
    const [exportType, setExportType] = useState<'operate' | 'control'>('operate');
    const [showCalendar, setShowCalendar] = useState(false);
    
    const [checks, setChecks] = useState({
        all: true,
        idOrder: true,
        address: true,
        orderType: true,
        cod: true,
        email: true,
        save: true
    });

    const toggle = (key: keyof typeof checks) => setChecks(prev => ({...prev, [key]: !prev[key]}));

    return (
        <div className="flex flex-col h-full bg-white pb-safe" onClick={() => setShowCalendar(false)}>
            <Header title="Excel Export" />
            
            <div className="p-4 flex-1 overflow-y-auto space-y-6">
                
                <div className="space-y-3">
                    <h2 className="text-primary text-sm font-medium uppercase">SEARCH</h2>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between relative">
                            <label className="text-gray-800 text-sm w-36">Time:</label>
                            <button 
                                onClick={(e) => { e.stopPropagation(); setShowCalendar(!showCalendar); }}
                                className="flex-1 border border-black/80 rounded-md py-1 px-3 flex justify-between items-center bg-white text-sm h-7 active:bg-gray-50"
                            >
                                <span className="truncate">10/12 - 17/12</span><i className="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                             {showCalendar && (
                                <div className="absolute top-full right-0 mt-2 w-64 z-50" onClick={e => e.stopPropagation()}>
                                    <SimpleCalendar onClose={() => setShowCalendar(false)} />
                                </div>
                            )}
                        </div>

                         {[
                            {l: "Session:", v: "All"},
                            {l: "Pickup address:", v: "8 Ng Van Trang"},
                            {l: "Delivery address:", v: "Nationwide"},
                            {l: "Order status:", v: "All"}
                         ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <label className="text-gray-800 text-sm w-36">{item.l}</label>
                                <button onClick={() => navigate(RoutePath.COMING_SOON)} className="flex-1 border border-black/80 rounded-md py-1 px-3 flex justify-between items-center bg-white text-sm h-7 active:bg-gray-50">
                                    <span className="truncate">{item.v}</span><i className="fa-solid fa-chevron-right text-xs"></i>
                                </button>
                            </div>
                         ))}
                    </div>
                </div>

                <div className="space-y-3">
                     <h2 className="text-primary text-sm font-medium uppercase">INFORMATION IN EXCEL</h2>
                     <p className="text-gray-700 text-sm">Received</p>
                     
                     <div className="flex gap-8 mb-4">
                        <label className="flex items-center gap-2 cursor-pointer" onClick={() => setExportType('operate')}>
                            <i className={`fa-regular ${exportType === 'operate' ? 'fa-circle-check text-primary' : 'fa-circle text-gray-400'} text-lg`}></i>
                            <span className="text-sm text-gray-700">Operate</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer" onClick={() => setExportType('control')}>
                            <i className={`fa-regular ${exportType === 'control' ? 'fa-circle-check text-primary' : 'fa-circle text-gray-400'} text-lg`}></i>
                            <span className="text-sm text-gray-700">For control</span>
                        </label>
                     </div>

                     <div className="space-y-2">
                        {[
                            { k: 'all', l: 'All' }, 
                            { k: 'idOrder', l: 'ID order' },
                            { k: 'address', l: 'Address' },
                            { k: 'orderType', l: 'Order type' },
                            { k: 'cod', l: 'CoD money' }
                        ].map((item) => (
                            <label key={item.k} className="flex items-center gap-3 cursor-pointer" onClick={() => toggle(item.k as any)}>
                                <div className={`w-5 h-5 border-2 ${checks[item.k as keyof typeof checks] ? 'border-primary bg-primary' : 'border-gray-300'} rounded flex items-center justify-center transition-colors`}>
                                    {checks[item.k as keyof typeof checks] && <i className="fa-solid fa-check text-white font-bold text-xs"></i>}
                                </div>
                                <span className="text-sm text-gray-800">{item.l}</span>
                            </label>
                        ))}
                     </div>
                </div>

                 <div className="space-y-3">
                     <h2 className="text-primary text-sm font-medium uppercase">INFORMATION WILL BE SENT</h2>
                     <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer" onClick={() => toggle('email')}>
                            <div className={`w-5 h-5 border-2 ${checks.email ? 'border-primary bg-primary' : 'border-gray-300'} rounded flex items-center justify-center`}>
                                {checks.email && <i className="fa-solid fa-check text-white font-bold text-xs"></i>}
                            </div>
                            <span className="text-sm text-gray-800">PTE2023@gmail.com</span>
                        </label>
                        <div className="flex justify-between items-center">
                            <label className="flex items-center gap-3 cursor-pointer" onClick={() => toggle('save')}>
                                <div className={`w-5 h-5 border-2 ${checks.save ? 'border-primary bg-primary' : 'border-gray-300'} rounded flex items-center justify-center`}>
                                    {checks.save && <i className="fa-solid fa-check text-white font-bold text-xs"></i>}
                                </div>
                                <span className="text-sm text-gray-800">Save information</span>
                            </label>
                            <button onClick={() => setEmailPopup(true)} className="border border-black rounded px-2 py-0.5 text-xs flex items-center gap-1 active:bg-gray-100">
                                <i className="fa-solid fa-plus"></i> Email
                            </button>
                        </div>
                     </div>
                </div>
                
                 <button onClick={() => setSuccess(true)} className="w-full bg-primary text-white py-3 rounded-full font-bold text-lg shadow-md mt-6 active:scale-95 transition-transform">OK</button>
            </div>

            <Popup isOpen={success} onClose={() => { setSuccess(false); navigate(RoutePath.ORDER_HUB); }} title="Success">
                <div className="flex flex-col items-center justify-center space-y-4 py-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-check text-3xl text-green-500"></i>
                    </div>
                    <p className="text-center text-gray-700 font-medium">Export completed successfully!</p>
                    <button onClick={() => { setSuccess(false); navigate(RoutePath.ORDER_HUB); }} className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm">Close</button>
                </div>
            </Popup>

             <Popup isOpen={emailPopup} onClose={() => setEmailPopup(false)} title="Add Email">
                 <div className="space-y-4 py-2">
                    <p className="text-sm text-gray-600">Enter email address to receive reports:</p>
                    <input type="email" placeholder="example@gmail.com" className="w-full border border-gray-300 rounded-lg p-2 outline-none focus:border-primary" />
                    <button onClick={() => setEmailPopup(false)} className="w-full bg-primary text-white py-2 rounded-lg font-bold">Add</button>
                </div>
            </Popup>
        </div>
    );
};