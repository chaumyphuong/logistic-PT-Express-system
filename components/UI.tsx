import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC<{ 
    title?: string; 
    onBack?: () => void; 
    className?: string;
    rightElement?: React.ReactNode;
    transparent?: boolean;
}> = ({ title, onBack, className = '', rightElement, transparent }) => {
    const navigate = useNavigate();
    const handleBack = onBack || (() => navigate(-1));

    return (
        <div className={`flex items-center justify-between p-4 z-10 shrink-0 ${transparent ? 'bg-transparent text-white' : 'bg-primary text-white shadow-md'} ${className}`}>
            <button onClick={handleBack} className="flex items-center gap-1 active:opacity-70">
                <i className="fa-solid fa-chevron-left text-lg"></i>
                <span className="font-medium">Back</span>
            </button>
            {title && <h1 className="flex-grow text-center font-bold text-lg absolute left-0 right-0 pointer-events-none">{title}</h1>}
            <div className="w-12 flex justify-end">{rightElement}</div>
        </div>
    );
};

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'social' }> = ({ className = '', variant = 'primary', children, ...props }) => {
    const baseStyles = "w-full py-3 rounded-2xl font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center gap-2";
    const variants = {
        primary: "bg-primary text-white shadow-lg hover:bg-primary-hover",
        secondary: "bg-rose-100 text-primary hover:bg-white shadow-lg",
        social: "bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 !text-base !py-3 !justify-start px-6"
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { icon?: string }> = ({ className = '', icon, ...props }) => {
    return (
        <div className="relative w-full">
            <input 
                className={`w-full bg-[#F3F3F3] border border-gray-100 rounded-2xl py-3 px-4 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${icon ? 'pr-10' : ''} ${className}`}
                {...props}
            />
            {icon && (
                <i className={`${icon} absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}></i>
            )}
        </div>
    );
};

export const CardWidget: React.FC<{ children: React.ReactNode, onClick?: () => void, className?: string }> = ({ children, onClick, className = '' }) => (
    <div 
        onClick={onClick}
        className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 ${onClick ? 'cursor-pointer active:scale-[0.99] transition-transform' : ''} ${className}`}
    >
        {children}
    </div>
);

export const Popup: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
}> = ({ isOpen, onClose, title, children, footer }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl animate-slide-up">
                <div className="bg-primary text-white p-4 text-center relative font-bold text-lg">
                    <i className="fa-solid fa-xmark absolute left-4 top-1/2 -translate-y-1/2 text-xl cursor-pointer" onClick={onClose}></i>
                    {title}
                </div>
                <div className="p-6">
                    {children}
                </div>
                {footer && <div className="p-4 pt-0 flex gap-4">{footer}</div>}
            </div>
        </div>
    );
};

export const SimpleCalendar: React.FC<{ onClose?: () => void }> = ({ onClose }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg z-50 animate-fade-in">
        <div className="flex justify-between items-center mb-3 border-b border-gray-100 pb-2">
            <span className="font-bold text-sm text-gray-700">December 2023</span>
            <div className="flex gap-2">
                <i className="fa-solid fa-chevron-left text-xs text-gray-400"></i>
                <i className="fa-solid fa-chevron-right text-xs text-gray-400"></i>
            </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
            {['S','M','T','W','T','F','S'].map(d => <div key={d} className="font-bold text-gray-400">{d}</div>)}
            {[...Array(31)].map((_, i) => (
                <div key={i} onClick={onClose} className={`p-1.5 rounded-full cursor-pointer hover:bg-gray-100 ${i === 15 ? 'bg-primary text-white shadow-md' : 'text-gray-700'}`}>
                    {i + 1}
                </div>
            ))}
        </div>
        <div className="flex justify-end pt-2 border-t border-gray-100">
             <button onClick={onClose} className="text-xs font-bold text-primary">Done</button>
        </div>
    </div>
);