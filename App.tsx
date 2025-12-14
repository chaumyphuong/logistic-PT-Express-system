import React from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { RoutePath } from './types';

// Screens
import AuthScreens from './screens/Auth';
import HomeScreen, { ComingSoonScreen } from './screens/Home';
import { ReportScreen, CashFlowScreen, BalanceWalletScreen, MoneyCirculatingScreen, ServiceFeeScreen } from './screens/Finance';
import { OrderHubScreen, OrderDetailScreen, OrderAttentionScreen, SearchFilterScreen, ExcelExportScreen } from './screens/OrderHub';
import { RecipientListScreen, CreateRecipientScreen } from './screens/Recipients';
import CreateOrderScreen from './screens/CreateOrder';
import AccountScreen from './screens/Account';

const BottomNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;

    const isActive = (path: string) => currentPath === path;

    const showNav = [
        RoutePath.HOME,
        RoutePath.ORDER_HUB,
        RoutePath.ACCOUNT,
        RoutePath.RECIPIENTS
    ].includes(currentPath as RoutePath);

    if (!showNav) return null;

    return (
        <nav className="bg-white border-t border-gray-200 h-16 flex items-center justify-around shrink-0 pb-safe z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <button 
                onClick={() => navigate(RoutePath.HOME)} 
                className={`w-full h-full flex flex-col items-center justify-center ${isActive(RoutePath.HOME) ? 'text-primary' : 'text-gray-400'}`}
            >
                <i className="fa-solid fa-house text-xl mb-1"></i>
                <span className="text-[10px] font-medium">Home</span>
            </button>
            <button className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                <i className="fa-regular fa-comment text-xl mb-1"></i>
                <span className="text-[10px] font-medium">Chat</span>
            </button>
            <button 
                onClick={() => navigate(RoutePath.ORDER_HUB)} 
                className={`w-full h-full flex flex-col items-center justify-center ${isActive(RoutePath.ORDER_HUB) ? 'text-primary' : 'text-gray-400'}`}
            >
                <i className="fa-solid fa-clipboard-list text-xl mb-1"></i>
                <span className="text-[10px] font-medium">Order</span>
            </button>
            <button 
                 onClick={() => navigate(RoutePath.ACCOUNT)}
                className={`w-full h-full flex flex-col items-center justify-center ${isActive(RoutePath.ACCOUNT) ? 'text-primary' : 'text-gray-400'}`}
            >
                <i className="fa-regular fa-user text-xl mb-1"></i>
                <span className="text-[10px] font-medium">Account</span>
            </button>
        </nav>
    );
};

const App: React.FC = () => {
  return (
    <HashRouter>
        <div className="flex flex-col h-full w-full">
            <div className="flex-1 overflow-hidden relative flex flex-col">
                 <Routes>
                    {/* Auth */}
                    <Route path={RoutePath.WELCOME} element={<AuthScreens.Welcome />} />
                    <Route path={RoutePath.LOGIN} element={<AuthScreens.Login />} />
                    <Route path={RoutePath.REGISTER} element={<AuthScreens.Register />} />
                    <Route path={RoutePath.OTP} element={<AuthScreens.OTP />} />
                    <Route path={RoutePath.SUCCESS} element={<AuthScreens.Success />} />
                    <Route path={RoutePath.FORGOT_PASSWORD} element={<AuthScreens.ForgotPassword />} />
                    <Route path={RoutePath.SOCIAL_LOGIN} element={<AuthScreens.SocialLogin />} />

                    {/* Main */}
                    <Route path={RoutePath.HOME} element={<HomeScreen />} />
                    <Route path={RoutePath.ACCOUNT} element={<AccountScreen />} />

                    {/* Finance */}
                    <Route path={RoutePath.REPORT} element={<ReportScreen />} />
                    <Route path={RoutePath.CASH_FLOW} element={<CashFlowScreen />} />
                    <Route path={RoutePath.BALANCE_WALLET} element={<BalanceWalletScreen />} />
                    <Route path={RoutePath.MONEY_CIRCULATING} element={<MoneyCirculatingScreen />} />
                    <Route path={RoutePath.SERVICE_FEE} element={<ServiceFeeScreen />} />

                    {/* Orders */}
                    <Route path={RoutePath.ORDER_HUB} element={<OrderHubScreen />} />
                    <Route path={RoutePath.ORDER_DETAIL} element={<OrderDetailScreen />} />
                    <Route path={RoutePath.ORDER_ATTENTION} element={<OrderAttentionScreen />} />
                    <Route path={RoutePath.CREATE_ORDER} element={<CreateOrderScreen />} />
                    <Route path={RoutePath.SEARCH_FILTER} element={<SearchFilterScreen />} />
                    <Route path={RoutePath.EXCEL_EXPORT} element={<ExcelExportScreen />} />

                    {/* Recipients */}
                    <Route path={RoutePath.RECIPIENTS} element={<RecipientListScreen />} />
                    <Route path={RoutePath.CREATE_RECIPIENT} element={<CreateRecipientScreen />} />
                    
                    {/* Misc */}
                    <Route path={RoutePath.COMING_SOON} element={<ComingSoonScreen />} />
                </Routes>
            </div>
            <BottomNav />
        </div>
    </HashRouter>
  );
};

export default App;