import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from '../types';
import { Header } from '../components/UI';

const ActionPopup: React.FC<{ title: string; children: React.ReactNode; onClose: () => void; isOpen: boolean }> = ({ title, children, onClose, isOpen }) => {
    if (!isOpen) return null;
    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-up"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="bg-primary p-4 relative flex items-center justify-center min-h-[64px]">
                    <button onClick={onClose} className="absolute left-4 w-8 h-8 bg-black rounded-full flex items-center justify-center active:scale-90 transition-transform shadow-md">
                        <i className="fa-solid fa-xmark text-white text-lg"></i>
                    </button>
                    <h2 className="text-white font-bold text-xl text-center">{title}</h2>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

const CreateOrderScreen: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const orderType = (location.state as any)?.type || 'light';

    const [popup, setPopup] = useState<'none' | 'create' | 'draft' | 'leave' | 'pickup_time' | 'print' | 'truck' | 'pickup_method' | 'delivery_method' | 'delivery_shift'>('none');
    const [truckWeight, setTruckWeight] = useState('500 kg truck');

    const [transportMethod, setTransportMethod] = useState('method1'); 
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    
    const [pickupMethod, setPickupMethod] = useState('Get it on the spot');
    const [deliveryMethod, setDeliveryMethod] = useState('Delivery');

    const [deliveryShift, setDeliveryShift] = useState('Delivery Shift');
    const [product, setProduct] = useState('General Goods');
    const [weight, setWeight] = useState('0 kg');
    const [payer, setPayer] = useState('Customer pays');
    const [collectionType, setCollectionType] = useState('Have collection');
    const [isShopDelivery, setIsShopDelivery] = useState(false);
    const [hasPhoto, setHasPhoto] = useState(false);

    const [pickupData, setPickupData] = useState({
        method: 'delivery' as 'pickup' | 'delivery',
        date: '21/12',
        time: '19-20h'
    });

    const getTitle = () => {
        if (orderType === 'heavy') return 'Create Order over 20kg';
        if (orderType === 'express') return 'Create Order Express';
        return 'Create Order under 20kg';
    };

    const getWeightOptions = () => {
        if (orderType === 'heavy') {
            return ['25 kg', '30 kg', '40 kg', '50 kg', '75 kg', '100 kg', '> 100 kg'];
        }
        if (orderType === 'express') {
             return ['0.5 kg', '1 kg', '2 kg', '5 kg'];
        }
        return ['0.5 kg', '1 kg', '2 kg', '3 kg', '5 kg', '10 kg', '15 kg', '20 kg'];
    };

    const handleBack = () => {
        setPopup('leave');
    };

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const selectOption = (setter: (val: any) => void, value: any) => {
        setter(value);
        setActiveDropdown(null);
    };

    const getPickupMethodLabel = () => {
        if (pickupMethod === 'Get it on the spot') return 'Pickup';
        if (pickupMethod.includes('Warehouse')) return 'Warehouse';
        if (pickupMethod.includes('post office')) return 'Post Office';
        return 'Pickup';
    };

    const getDeliveryMethodLabel = () => {
        if (deliveryMethod === 'Delivery') return 'Delivery';
        if (deliveryMethod.includes('post office')) return 'Post Office';
        return 'Delivery';
    };

    return (
        <div className="flex flex-col h-full bg-gray-50 relative" onClick={() => setActiveDropdown(null)}>
            <Header title={getTitle()} onBack={handleBack} />

            <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-4 pb-44">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden p-4">
                    {orderType === 'light' && (
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer" onClick={() => setTransportMethod('method1')}>
                                <i className={`fa-regular ${transportMethod === 'method1' ? 'fa-circle-check' : 'fa-circle'} text-2xl text-gray-700 transition-colors`}></i>
                                <span className="text-gray-700 text-lg font-medium">Road</span>
                                <div className="ml-auto flex gap-2">
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); setPopup('pickup_method'); }} 
                                        className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 flex items-center gap-2 active:bg-gray-200"
                                    >
                                        {getPickupMethodLabel()} <i className="fa-solid fa-caret-down"></i>
                                    </button>
                                    
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); setPopup('delivery_method'); }} 
                                        className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 flex items-center gap-2 active:bg-gray-200"
                                    >
                                        {getDeliveryMethodLabel()} <i className="fa-solid fa-caret-down"></i>
                                    </button>
                                </div>
                            </label>
                            <div className="h-px bg-gray-100"></div>
                            <label className="flex items-center gap-3 cursor-pointer" onClick={() => setTransportMethod('method2')}>
                                <i className={`fa-regular ${transportMethod === 'method2' ? 'fa-circle-check' : 'fa-circle'} text-2xl text-gray-700 transition-colors`}></i>
                                <span className="text-gray-700 text-lg font-medium">Flight route</span>
                            </label>
                        </div>
                    )}
                    {orderType === 'heavy' && (
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer" onClick={() => setTransportMethod('method1')}>
                                <i className={`fa-regular ${transportMethod === 'method1' ? 'fa-circle-check' : 'fa-circle'} text-2xl text-gray-700 transition-colors`}></i>
                                <span className="text-gray-700 text-lg font-medium">Whole trip</span>
                                <button onClick={(e) => { e.stopPropagation(); setPopup('truck'); }} className="ml-auto bg-gray-100 border border-gray-200 px-4 py-1.5 rounded-lg text-xs font-medium text-gray-600 flex items-center gap-2 active:bg-gray-200">
                                    {truckWeight} <i className="fa-solid fa-caret-down"></i>
                                </button>
                            </label>
                            <div className="h-px bg-gray-100"></div>
                            <label className="flex items-center gap-3 cursor-pointer opacity-60" onClick={() => setTransportMethod('method2')}>
                                <i className={`fa-regular ${transportMethod === 'method2' ? 'fa-circle-check' : 'fa-circle'} text-2xl text-gray-700 transition-colors`}></i>
                                <span className="text-gray-700 text-lg font-medium">Transplant transfer</span>
                            </label>
                        </div>
                    )}
                    {orderType === 'express' && (
                        <div className="space-y-4">
                             <label className="flex items-center justify-between cursor-pointer" onClick={() => setTransportMethod('method1')}>
                                <div className="flex items-center gap-3">
                                    <i className={`fa-regular ${transportMethod === 'method1' ? 'fa-circle-check' : 'fa-circle'} text-2xl text-gray-700 transition-colors`}></i>
                                    <span className="text-gray-700 text-lg font-medium">Standard</span>
                                </div>
                                <div onClick={(e) => { e.stopPropagation(); navigate(RoutePath.COMING_SOON); }} className="flex items-center gap-2 text-gray-400 text-xs font-medium cursor-pointer active:opacity-60 bg-gray-50 px-2 py-1 rounded">
                                    From 2 to 4 hours <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </label>
                            <div className="h-px bg-gray-100"></div>
                            <label className="flex items-center justify-between opacity-60 cursor-pointer" onClick={() => setTransportMethod('method2')}>
                                <div className="flex items-center gap-3">
                                    <i className={`fa-regular ${transportMethod === 'method2' ? 'fa-circle-check' : 'fa-circle'} text-2xl text-gray-700 transition-colors`}></i>
                                    <span className="text-gray-700 text-lg font-medium">Connect points</span>
                                </div>
                                <div onClick={(e) => { e.stopPropagation(); navigate(RoutePath.COMING_SOON); }} className="flex items-center gap-2 text-gray-400 text-xs font-medium cursor-pointer active:opacity-60 bg-gray-50 px-2 py-1 rounded">
                                    Within 2 hours <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </label>
                        </div>
                    )}
                </div>
                <div className="relative h-48 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_of_New_York_City_location_map.svg/1200px-Map_of_New_York_City_location_map.svg.png')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button onClick={() => setPopup('pickup_time')} className="bg-white/95 backdrop-blur border border-gray-200 rounded-xl shadow-sm px-4 py-2.5 text-xs flex items-center gap-6 text-gray-800 active:scale-95 transition-transform">
                            <div className="text-left">
                                <div className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">Pickup Method</div>
                                <div className="font-bold text-sm text-primary">{pickupData.method === 'pickup' ? 'Pickup' : 'Delivery'} • {pickupData.date} ({pickupData.time})</div>
                            </div>
                            <i className="fa-solid fa-caret-down text-primary"></i>
                        </button>
                    </div>
                     <i className="fa-solid fa-location-dot text-primary text-4xl absolute bottom-8 left-1/2 -translate-x-1/2 drop-shadow-md z-0"></i>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <div className="flex bg-gray-50 border-b border-gray-100">
                        <div className="flex-1 p-4 flex items-center gap-3 border-r border-gray-100">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <i className="fa-solid fa-location-dot text-sm"></i>
                            </div>
                            <span className="text-gray-800 font-bold text-sm">Delivery</span>
                        </div>
                        <div 
                            className="relative flex-1 p-4 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
                            onClick={() => setPopup('delivery_shift')}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <i className="fa-solid fa-print text-sm"></i>
                                </div>
                                <span className={`text-sm font-medium ${deliveryShift === 'Delivery Shift' ? 'text-gray-500' : 'text-gray-600'}`}>{deliveryShift}</span>
                            </div>
                            <i className="fa-solid fa-caret-down text-gray-400"></i>
                        </div>
                    </div>
                    <div className="p-5 space-y-6">
                        <div className="flex gap-4 border-b border-gray-100 pb-2">
                            <input type="text" placeholder="Phone number" className="flex-1 outline-none text-gray-900 placeholder:text-gray-400 bg-transparent text-sm font-medium" />
                            <span className="text-gray-200">|</span>
                            <input type="text" placeholder="Name" className="flex-1 outline-none text-gray-900 placeholder:text-gray-400 bg-transparent text-sm font-medium" />
                        </div>

                        <input type="text" placeholder="Address details" className="w-full border-b border-gray-100 pb-2 outline-none text-gray-900 placeholder:text-gray-400 bg-transparent text-sm font-medium" />

                        <div className="flex gap-6">
                            <div 
                                className="relative flex-1 border-b border-gray-100 pb-2 flex justify-between items-center cursor-pointer group"
                                onClick={(e) => { e.stopPropagation(); toggleDropdown('product'); }}
                            >
                                <span className={`text-sm font-medium ${product === 'General Goods' ? "text-gray-500" : "text-gray-900"}`}>{product === 'General Goods' ? 'Choose product' : product}</span>
                                <i className="fa-solid fa-caret-down text-gray-300 group-hover:text-gray-500 text-xs"></i>
                                {activeDropdown === 'product' && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-100">
                                        {['General Goods', 'Food', 'Electronics', 'Fragile', 'Documents'].map(p => (
                                            <div key={p} onClick={() => selectOption(setProduct, p)} className="px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer">{p}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div 
                                className="relative flex-1 border-b border-gray-100 pb-2 flex justify-between items-center cursor-pointer group"
                                onClick={(e) => { e.stopPropagation(); toggleDropdown('weight'); }}
                            >
                                <span className="text-gray-500 text-sm font-medium">Weight</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-900 text-sm font-bold">{weight}</span>
                                    <i className="fa-solid fa-caret-down text-gray-300 group-hover:text-gray-500 text-xs"></i>
                                </div>
                                {activeDropdown === 'weight' && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-100 max-h-48 overflow-y-auto no-scrollbar">
                                        {getWeightOptions().map(w => (
                                            <div key={w} onClick={() => selectOption(setWeight, w)} className="px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer">{w}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-1 border-b border-gray-100 pb-2 flex justify-between items-center">
                                <span className="text-gray-500 text-sm font-medium">Shipping fee</span>
                                <span className="text-gray-900 text-sm font-bold">0 đ</span>
                            </div>
                            <div 
                                className="relative flex-1 border-b border-gray-100 pb-2 flex justify-between items-center cursor-pointer group"
                                onClick={(e) => { e.stopPropagation(); toggleDropdown('payer'); }}
                            >
                                <span className="text-gray-900 text-sm font-medium">{payer}</span>
                                <i className="fa-solid fa-caret-down text-gray-300 group-hover:text-gray-500 text-xs"></i>
                                {activeDropdown === 'payer' && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-100">
                                        {['Customer pays', 'Sender pays'].map(p => (
                                            <div key={p} onClick={() => selectOption(setPayer, p)} className="px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer">{p}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-1 border-b border-gray-100 pb-2 flex justify-between items-center">
                                <span className="text-gray-500 text-sm font-medium">Collection</span>
                                <span className="text-gray-900 text-sm font-bold">0 đ</span>
                            </div>
                            <div 
                                className="relative flex-1 border-b border-gray-100 pb-2 flex justify-between items-center cursor-pointer group"
                                onClick={(e) => { e.stopPropagation(); toggleDropdown('collection'); }}
                            >
                                <span className="text-gray-900 text-sm font-medium">{collectionType}</span>
                                <i className="fa-solid fa-caret-down text-gray-300 group-hover:text-gray-500 text-xs"></i>
                                {activeDropdown === 'collection' && (
                                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-100">
                                        {['Have collection', 'No collection'].map(c => (
                                            <div key={c} onClick={() => selectOption(setCollectionType, c)} className="px-4 py-3 text-sm hover:bg-gray-50 border-b border-gray-50 last:border-0 cursor-pointer">{c}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-1 border-b border-gray-100 pb-2 flex justify-between items-center">
                                <span className="text-gray-500 text-sm font-medium">Item value</span>
                                <span className="text-gray-900 text-sm font-bold">0 đ</span>
                            </div>
                            <div className="flex-1 border-b border-gray-100 pb-2 flex justify-end items-center">
                                <span className="text-primary-soft text-xs font-bold bg-rose-50 px-2 py-0.5 rounded">Free insurance (?)</span>
                            </div>
                        </div>

                        <div className="flex gap-4 border-b border-gray-100 pb-2">
                            <span className="text-gray-500 w-16 text-sm font-medium">Note</span>
                            <input type="text" placeholder="Other notes" className="flex-1 outline-none text-gray-900 placeholder:text-gray-400 bg-transparent text-sm" />
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 w-24 text-sm font-medium">Order photo</span>
                            <button 
                                onClick={() => setHasPhoto(!hasPhoto)}
                                className={`w-12 h-12 border border-dashed rounded-xl flex items-center justify-center text-xl transition-all ${hasPhoto ? 'border-primary bg-primary/10 text-primary' : 'border-gray-300 text-gray-400 hover:border-primary hover:text-primary'}`}
                            >
                                <i className={`fa-solid ${hasPhoto ? 'fa-check' : 'fa-plus'}`}></i>
                            </button>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <button onClick={() => navigate(RoutePath.RECIPIENTS)} className="border border-gray-200 hover:border-primary hover:text-primary rounded-lg px-4 py-2 flex items-center gap-2 text-gray-600 text-sm font-medium active:bg-gray-50 transition-colors">
                                <i className="fa-solid fa-plus"></i> Add recipient
                            </button>
                            <label 
                                className="flex items-center gap-2 text-gray-600 text-sm font-medium cursor-pointer select-none group"
                                onClick={() => setIsShopDelivery(!isShopDelivery)}
                            >
                                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isShopDelivery ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                                    {isShopDelivery && <i className="fa-solid fa-check text-white text-xs"></i>}
                                </div>
                                Delivered to shop
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-100">
                    <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">Increased service</span>
                    <button onClick={() => navigate(RoutePath.COMING_SOON)} className="text-primary text-xs font-bold flex items-center gap-1 active:opacity-60">Policy <i className="fa-solid fa-chevron-right text-[10px]"></i></button>
                </div>
                <div className="p-4 flex gap-4 pb-safe bg-white">
                    <button onClick={() => setPopup('draft')} className="flex-1 bg-rose-100 text-primary font-bold py-3.5 rounded-xl text-sm tracking-wide active:scale-[0.98] transition-transform">Save draft</button>
                    <button onClick={() => setPopup('create')} className="flex-1 bg-primary text-white font-bold py-3.5 rounded-xl text-sm tracking-wide active:scale-[0.98] transition-transform shadow-lg shadow-rose-200">Create order</button>
                </div>
            </div>

            <ActionPopup isOpen={popup === 'create'} title="Create Order" onClose={() => setPopup('none')}>
                <div className="text-center space-y-8">
                    <p className="text-gray-700 text-lg px-4">Do you want to create the order C0015?</p>
                    <div className="flex gap-4">
                        <button onClick={() => { setPopup('none'); setPopup('print'); }} className="flex-1 bg-primary text-white font-bold py-3 rounded shadow-lg active:scale-95 transition-transform">Create</button>
                        <button onClick={() => setPopup('none')} className="flex-1 bg-rose-300 text-white font-bold py-3 rounded shadow-lg active:scale-95 transition-transform">Cancel</button>
                    </div>
                </div>
            </ActionPopup>

            <ActionPopup isOpen={popup === 'draft'} title="Draft" onClose={() => setPopup('none')}>
                 <div className="text-center space-y-8">
                    <p className="text-gray-700 text-lg px-4">Do you want to save the order C0015 draft?</p>
                    <div className="flex gap-4">
                        <button onClick={() => { setPopup('none'); navigate(-1); }} className="flex-1 bg-primary text-white font-bold py-3 rounded shadow-lg active:scale-95 transition-transform">Save</button>
                        <button onClick={() => setPopup('none')} className="flex-1 bg-rose-300 text-white font-bold py-3 rounded shadow-lg active:scale-95 transition-transform">Cancel</button>
                    </div>
                </div>
            </ActionPopup>

            <ActionPopup isOpen={popup === 'leave'} title="Leave" onClose={() => setPopup('none')}>
                 <div className="text-center space-y-8">
                    <p className="text-gray-700 text-lg px-4">Do you want to save the order C0015 draft before you leave?</p>
                    <div className="flex gap-4">
                        <button onClick={() => { setPopup('none'); navigate(-1); }} className="flex-1 bg-primary text-white font-bold py-3 rounded shadow-lg active:scale-95 transition-transform">Save</button>
                        <button onClick={() => { setPopup('none'); navigate(-1); }} className="flex-1 bg-rose-300 text-white font-bold py-3 rounded shadow-lg active:scale-95 transition-transform">Cancel</button>
                    </div>
                </div>
            </ActionPopup>

            <ActionPopup isOpen={popup === 'print'} title="Print" onClose={() => setPopup('none')}>
                 <div className="text-center space-y-8">
                    <p className="text-gray-700 text-lg px-4">Do you want to print the order C0015 ?</p>
                    <div className="flex gap-4">
                        <button onClick={() => { setPopup('none'); navigate(-1); }} className="flex-1 bg-primary text-white font-bold py-3 rounded shadow-lg active:scale-95 transition-transform">Print</button>
                        <button onClick={() => { setPopup('none'); navigate(-1); }} className="flex-1 bg-rose-300 text-white font-bold py-3 rounded shadow-lg active:scale-95 transition-transform">Cancel</button>
                    </div>
                </div>
            </ActionPopup>

            <ActionPopup isOpen={popup === 'pickup_method'} title="Pickup" onClose={() => setPopup('none')}>
                <div className="space-y-4">
                    {['Get it on the spot', 'Warehouse number 1: 8 Nguyen Van Trang', 'Send it to the post office'].map(opt => (
                        <label key={opt} onClick={() => { setPickupMethod(opt); setPopup('none'); }} className="flex items-center gap-4 cursor-pointer py-1">
                             <div className={`w-6 h-6 rounded-full border-2 ${pickupMethod === opt ? 'border-black' : 'border-black'} flex items-center justify-center`}>
                                {pickupMethod === opt && <i className="fa-solid fa-check text-sm text-black"></i>}
                            </div>
                            <span className="text-lg text-gray-900 leading-tight">{opt}</span>
                        </label>
                    ))}
                </div>
            </ActionPopup>

            <ActionPopup isOpen={popup === 'delivery_method'} title="Delivery" onClose={() => setPopup('none')}>
                 <div className="space-y-4">
                    {['Delivery', 'Receive at the post office'].map(opt => (
                        <label key={opt} onClick={() => { setDeliveryMethod(opt); setPopup('none'); }} className="flex items-center gap-4 cursor-pointer py-1">
                            <div className={`w-6 h-6 rounded-full border-2 ${deliveryMethod === opt ? 'border-black' : 'border-black'} flex items-center justify-center`}>
                                {deliveryMethod === opt && <i className="fa-solid fa-check text-sm text-black"></i>}
                            </div>
                            <span className="text-lg text-gray-900 leading-tight">{opt}</span>
                        </label>
                    ))}
                </div>
            </ActionPopup>

            <ActionPopup isOpen={popup === 'delivery_shift'} title="Delivery Shift" onClose={() => setPopup('none')}>
                 <div className="space-y-4">
                    {['Morning', 'Afternoon', 'Evening', 'Night'].map(opt => (
                        <label key={opt} onClick={() => { setDeliveryShift(opt); setPopup('none'); }} className="flex items-center gap-4 cursor-pointer py-1">
                            <div className={`w-6 h-6 rounded-full border-2 ${deliveryShift === opt ? 'border-black' : 'border-black'} flex items-center justify-center`}>
                                {deliveryShift === opt && <i className="fa-solid fa-check text-sm text-black"></i>}
                            </div>
                            <span className="text-lg text-gray-900 leading-tight">{opt}</span>
                        </label>
                    ))}
                </div>
            </ActionPopup>

            <ActionPopup isOpen={popup === 'pickup_time'} title="Pick-up method and time" onClose={() => setPopup('none')}>
                <div className="space-y-6">
                    <div className="space-y-4">
                        <label className="flex items-center gap-3 cursor-pointer" onClick={() => setPickupData({ ...pickupData, method: 'pickup' })}>
                            <div className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center transition-all ${pickupData.method === 'pickup' ? 'bg-primary border-primary text-white' : ''}`}>
                                {pickupData.method === 'pickup' && <i className="fa-solid fa-check text-xs"></i>}
                            </div>
                            <span className="text-lg text-gray-900">Pickup</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer" onClick={() => setPickupData({ ...pickupData, method: 'delivery' })}>
                            <div className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center transition-all ${pickupData.method === 'delivery' ? 'bg-primary border-primary text-white' : ''}`}>
                                {pickupData.method === 'delivery' && <i className="fa-solid fa-check text-xs"></i>}
                            </div>
                            <span className="text-lg text-gray-900">Delivery</span>
                            <div className="border border-black rounded px-2 py-0.5 ml-auto text-sm">8 Nguyen Van Trang</div>
                        </label>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-3">Make an appointment</h3>
                        <div className="space-y-2">
                             {[
                                { date: '21/12', time: '19-20h' },
                                { date: '22/12', time: '20-21h' },
                                { date: '23/12', time: '21-22h' }
                             ].map((slot) => (
                                <div 
                                    key={slot.date}
                                    onClick={() => setPickupData({ ...pickupData, date: slot.date, time: slot.time })}
                                    className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer border ${pickupData.date === slot.date ? 'border-primary bg-rose-50' : 'border-gray-200'}`}
                                >
                                    <div className={`flex-1 text-center font-medium p-1 rounded ${pickupData.date === slot.date ? 'text-primary' : 'text-gray-900'}`}>{slot.date}</div>
                                    <div className={`flex-1 text-center p-1 rounded ${pickupData.date === slot.date ? 'text-primary' : 'text-gray-500'}`}>{slot.time}</div>
                                </div>
                             ))}
                        </div>
                    </div>

                    <button onClick={() => setPopup('none')} className="w-full bg-primary text-white font-bold py-3 rounded-full shadow-lg text-lg active:scale-95 transition-transform">Confirm</button>
                </div>
            </ActionPopup>

             <ActionPopup isOpen={popup === 'truck'} title="Order created" onClose={() => setPopup('none')}>
                <div className="space-y-4 py-2">
                    {['500 kg truck', '1500 kg truck', '2000 kg truck', '2500 kg truck', '3000 kg truck'].map(truck => (
                        <label key={truck} onClick={() => { setTruckWeight(truck); setPopup('none'); }} className="flex items-center gap-4 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                            <div className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center ${truckWeight === truck ? '' : 'opacity-40'}`}>
                                {truckWeight === truck && <i className="fa-solid fa-check text-sm"></i>}
                            </div>
                            <span className="text-lg text-gray-800">{truck}</span>
                        </label>
                    ))}
                </div>
            </ActionPopup>

        </div>
    );
};
export default CreateOrderScreen;