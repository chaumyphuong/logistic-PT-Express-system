import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import { Header, Input, Button, Popup, SimpleCalendar } from '../components/UI';

export const RecipientListScreen: React.FC = () => {
    const navigate = useNavigate();
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleItemClick = (id: number) => {
        navigate(RoutePath.CREATE_RECIPIENT, { state: { recipientId: id, mode: 'edit' } });
    };

    const handleDelete = (id: number) => {
        setSelectedId(id);
        setShowDeletePopup(true);
    };

    const confirmDelete = () => {
        console.log("Deleted recipient:", selectedId);
        setShowDeletePopup(false);
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 pb-20">
            <Header title="Recipient List" onBack={() => navigate(RoutePath.HOME)} />
            <div className="px-4 py-4 bg-white shadow-sm z-10">
                <div className="flex items-center gap-3">
                    <input type="text" placeholder="Search here" className="w-full bg-gray-100 p-3 rounded-lg text-sm outline-none placeholder:text-gray-400" />
                    <button onClick={() => navigate(RoutePath.CREATE_RECIPIENT)} className="flex flex-col items-center justify-center text-gray-600 text-[10px] font-medium w-12 shrink-0">
                        <i className="fa-solid fa-plus text-lg mb-0.5"></i> Create new
                    </button>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4">
                {[1, 2, 3].map(i => (
                    <div key={i} onClick={() => handleItemClick(i)} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer active:opacity-95 transition-opacity">
                        <div className="bg-primary p-2 flex justify-between items-center px-3">
                            <span className="bg-white text-primary text-xs font-medium px-4 py-0.5 rounded-full shadow-sm">A00{i}</span>
                            <div className="flex gap-3 text-white/90">
                                <i className="fa-solid fa-rotate cursor-pointer hover:text-white"></i>
                                <i 
                                    onClick={(e) => { 
                                        e.stopPropagation(); 
                                        handleDelete(i); 
                                    }}
                                    className="fa-regular fa-trash-can cursor-pointer hover:text-white"
                                ></i>
                            </div>
                        </div>
                        <div className="p-4 space-y-1 text-sm">
                            <div className="flex items-center gap-2 mb-1 text-primary font-medium">Shipment detail <i className="fa-solid fa-pen text-xs"></i></div>
                            <div><span className="font-bold">Name:</span> User {i}</div>
                            <div><span className="font-bold">Phone:</span> 09000000{i}</div>
                            <div><span className="font-bold">Address:</span> District {i}, HCMC</div>
                        </div>
                    </div>
                ))}
            </div>

            <Popup 
                isOpen={showDeletePopup} onClose={() => setShowDeletePopup(false)} title="Delete Recipient"
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
                        Are you sure you want to delete recipient <span className="font-bold text-gray-900">A00{selectedId}</span>?
                    </p>
                    <p className="text-xs text-gray-400">This action cannot be undone.</p>
                </div>
            </Popup>
        </div>
    );
}

export const CreateRecipientScreen: React.FC = () => {
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState<'address' | 'pickup' | 'delivery' | null>(null);
    const [address, setAddress] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [deliveryTime, setDeliveryTime] = useState('');

    const toggleDropdown = (name: 'address' | 'pickup' | 'delivery') => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <div className="flex flex-col h-full bg-white pb-safe" onClick={() => setActiveDropdown(null)}>
            <Header title="Create recipient List" />
            
            <div className="flex-1 overflow-y-auto no-scrollbar p-5 space-y-6">
                <div>
                    <div className="flex items-center gap-2 mb-2 text-primary font-bold text-base">
                        Shipment detail <i className="fa-solid fa-pen text-sm"></i>
                    </div>
                    <div className="text-sm text-gray-900 space-y-1 font-medium">
                        <div><span className="font-bold">Name:</span> Phát Lê</div>
                        <div><span className="font-bold">Phone:</span> 0900500000</div>
                        <div><span className="font-bold">Address:</span> 7/1 Thành Thái, P.14, Q.10, Tp.HCM</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-primary font-bold text-base">Receiving information</h3>
                    
                    <div className="space-y-1">
                        <label className="font-bold text-sm text-gray-900">Name</label>
                        <input type="text" placeholder="Sender name" className="w-full bg-[#F3F3F3] rounded-xl px-4 py-3 text-sm outline-none placeholder:text-gray-500" />
                    </div>

                    <div className="space-y-1">
                        <label className="font-bold text-sm text-gray-900">Phone</label>
                        <input type="text" placeholder="Sender phone" className="w-full bg-[#F3F3F3] rounded-xl px-4 py-3 text-sm outline-none placeholder:text-gray-500" />
                    </div>

                    <div className="space-y-1">
                        <label className="font-bold text-sm text-gray-900">Address</label>
                        <div className="relative">
                            <div 
                                onClick={(e) => { e.stopPropagation(); toggleDropdown('address'); }}
                                className="relative w-full"
                            >
                                <input 
                                    type="text" 
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Select location" 
                                    className="w-full bg-[#F3F3F3] rounded-xl px-4 py-3 text-sm outline-none placeholder:text-gray-500 cursor-pointer"
                                    readOnly 
                                />
                                <i className="fa-solid fa-caret-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"></i>
                            </div>
                            {activeDropdown === 'address' && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                    {['District 1, HCMC', 'District 3, HCMC', 'District 10, HCMC', 'Tan Binh District, HCMC', 'Hanoi Capital'].map(loc => (
                                        <div 
                                            key={loc} 
                                            onClick={() => { setAddress(loc); setActiveDropdown(null); }}
                                            className="px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0"
                                        >
                                            {loc}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-primary font-bold text-base">Schedule a time</h3>
                    
                    <div className="flex items-center justify-between gap-4">
                        <label className="font-bold text-sm text-gray-900 w-32 shrink-0">Expected pickup</label>
                         <div className="relative flex-1">
                            <button 
                                onClick={(e) => { e.stopPropagation(); toggleDropdown('pickup'); }}
                                className={`w-full bg-[#F3F3F3] rounded-xl px-4 py-3 text-sm text-left flex justify-between items-center ${pickupTime ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                <span>{pickupTime || "Select pickup date & time"}</span>
                                <i className="fa-solid fa-caret-down text-gray-600"></i>
                            </button>
                            {activeDropdown === 'pickup' && (
                                <div className="absolute top-full right-0 mt-2 w-64 z-50 shadow-xl" onClick={e => e.stopPropagation()}>
                                    <SimpleCalendar onClose={() => { setPickupTime("20 Dec 2023 09:00"); setActiveDropdown(null); }} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <label className="font-bold text-sm text-gray-900 w-32 shrink-0">Expected delivery</label>
                         <div className="relative flex-1">
                            <button 
                                onClick={(e) => { e.stopPropagation(); toggleDropdown('delivery'); }}
                                className={`w-full bg-[#F3F3F3] rounded-xl px-4 py-3 text-sm text-left flex justify-between items-center ${deliveryTime ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                <span>{deliveryTime || "Select delivery date & time"}</span>
                                <i className="fa-solid fa-caret-down text-gray-600"></i>
                            </button>
                            {activeDropdown === 'delivery' && (
                                <div className="absolute top-full right-0 mt-2 w-64 z-50 shadow-xl" onClick={e => e.stopPropagation()}>
                                    <SimpleCalendar onClose={() => { setDeliveryTime("21 Dec 2023 15:00"); setActiveDropdown(null); }} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-primary font-bold text-base">Goods information</h3>
                    
                    <div className="bg-[#F3F3F3] rounded-xl overflow-hidden border border-gray-100">
                        <div className="flex items-center px-4 py-3 gap-3">
                            <span className="text-gray-900 font-medium">1.</span>
                            <input className="bg-transparent w-full outline-none text-sm placeholder:text-gray-500" placeholder="Item name" />
                        </div>
                        <div className="border-t border-gray-300 mx-4"></div>
                        <div className="flex items-center px-4 py-3 gap-4">
                            <div className="flex items-center gap-2 flex-1">
                                <span className="text-sm text-gray-900 font-medium whitespace-nowrap">Weight (KG):</span>
                                <input type="text" className="w-full min-w-[50px] border border-gray-400 rounded h-7 px-2 text-sm bg-transparent outline-none" />
                            </div>
                            <div className="flex items-center gap-2 flex-1">
                                <span className="text-sm text-gray-900 font-medium whitespace-nowrap">Quantity:</span>
                                <input type="text" className="w-full min-w-[50px] border border-gray-400 rounded h-7 px-2 text-sm bg-transparent outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 pb-8">
                     <button onClick={() => navigate(-1)} className="w-full bg-primary text-white font-bold py-3.5 rounded-full text-lg shadow-lg active:scale-[0.98] transition-transform">
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}
