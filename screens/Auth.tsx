import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RoutePath } from '../types';
import { Button, Input } from '../components/UI';

const Logo = () => (
    <div className="w-32 h-32 relative flex items-center justify-center mb-4">
        <img src="https://lh3.googleusercontent.com/d/1_xSMtSZwk3uO-ro6zdXT4LYO-lfxMN91" alt="PTE Logo" className="w-full h-full object-contain drop-shadow-md" />
    </div>
);

// --- Welcome Screen ---
export const Welcome: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="h-full bg-primary flex flex-col items-center justify-center p-6 text-white relative">
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm">
                <Logo />
                <div className="text-center mt-2 mb-12">
                    <h1 className="text-6xl font-black tracking-widest drop-shadow-lg font-nicomoji">PTE</h1>
                    <p className="text-lg font-bold tracking-[0.4em] text-rose-100 mt-2 uppercase">Logistics</p>
                </div>
                <div className="w-full space-y-4">
                    <Button variant="secondary" onClick={() => navigate(RoutePath.LOGIN)}>Login</Button>
                    <Button variant="secondary" onClick={() => navigate(RoutePath.REGISTER)}>Register</Button>
                </div>
            </div>
            <div className="text-rose-200 text-sm font-medium opacity-80 pt-8">Chat or call 19005081 for support</div>
        </div>
    );
};

// --- Login Screen ---
export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = () => {
        setError('');
        
        if (!username.trim() || !password.trim()) {
            setError('Please check and try again');
            return;
        }

        navigate(RoutePath.HOME);
    };

    return (
        <div className="h-full flex flex-col bg-white">
            <div className="pt-10 pb-6 px-4 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
                <p className="text-gray-500">Sign in to access your account</p>
            </div>
            
            <div className="flex-1 px-6 pt-4 overflow-y-auto no-scrollbar">
                <div className="space-y-4 mb-2">
                    <Input 
                        placeholder="Phone number or email" 
                        value={username}
                        onChange={(e) => { setUsername(e.target.value); setError(''); }}
                        className="!bg-[#F3F3F3] border-none"
                    />
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        icon="fa-regular fa-eye-slash" 
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setError(''); }}
                        className="!bg-[#F3F3F3] border-none"
                    />
                </div>
                <div className="min-h-[20px] mb-2">
                    {error && <p className="text-xs text-primary font-medium">{error}</p>}
                </div>

                <div className="flex justify-between items-center mb-8">
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none">
                        <input 
                            type="checkbox" 
                            className="w-4 h-4 accent-primary rounded border-gray-300" 
                            checked={rememberMe}
                            onChange={(e) => { setRememberMe(e.target.checked); setError(''); }}
                        />
                        <span>Remember me</span>
                    </label>
                    <button onClick={() => navigate(RoutePath.FORGOT_PASSWORD)} className="text-primary text-sm hover:underline">Forget password ?</button>
                </div>

                <Button onClick={handleLogin}>Login <i className="fa-solid fa-chevron-right ml-2"></i></Button>
                
                <div className="relative text-center my-8">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                    <span className="relative bg-white px-4 text-sm text-gray-500 bg-white">Or</span>
                </div>

                <div className="space-y-3">
                    <button onClick={() => navigate(RoutePath.SOCIAL_LOGIN, { state: { provider: 'facebook', mode: 'login' } })} className="w-full bg-[#F3F3F3] text-gray-700 py-3 rounded-2xl font-medium flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
                        <i className="fa-brands fa-facebook text-[#1877F2] text-xl"></i>
                        Login with Facebook
                    </button>
                    <button onClick={() => navigate(RoutePath.SOCIAL_LOGIN, { state: { provider: 'google', mode: 'login' } })} className="w-full bg-[#F3F3F3] text-gray-700 py-3 rounded-2xl font-medium flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
                         <i className="fa-brands fa-google text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#ea4335] via-[#4285f4] to-[#34a853]"></i>
                        Login with Google
                    </button>
                </div>
            </div>
            
            <div className="p-6 text-center text-sm text-gray-800 pb-safe">
                New member ? <button onClick={() => navigate(RoutePath.REGISTER)} className="text-primary font-bold hover:underline">Register now</button>
            </div>
        </div>
    );
};

// --- Register Screen ---
export const Register: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = () => {
        setError('');
        if (!username.trim()) {
            setError('Please enter required information');
            return;
        }
        if (!termsAgreed) {
            setError('Please agree to Terms and Conditions');
            return;
        }
        navigate(RoutePath.OTP);
    };

    return (
        <div className="h-full flex flex-col bg-white">
            <div className="pt-4 px-4">
                <button onClick={() => navigate(RoutePath.WELCOME)} className="flex items-center gap-2 text-black font-medium text-lg">
                    <i className="fa-solid fa-chevron-left"></i> Back
                </button>
            </div>
             <div className="pt-6 pb-4 px-4 text-center">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">Create your account</h1>
            </div>
            
            <div className="flex-1 px-6 pt-4 overflow-y-auto no-scrollbar">
                <div className="mb-2">
                    <Input 
                        placeholder="Phone number or email" 
                        value={username}
                        onChange={(e) => { setUsername(e.target.value); setError(''); }}
                        className="!bg-[#F3F3F3] border-none mb-2"
                    />
                </div>
                <div className="min-h-[20px] mb-4">
                    {error && <p className="text-xs text-primary font-medium">{error}</p>}
                </div>

                <label className="flex items-start gap-3 mb-8 px-1 cursor-pointer">
                    <input 
                        type="checkbox" 
                        className="mt-1 w-4 h-4 accent-primary shrink-0" 
                        checked={termsAgreed}
                        onChange={(e) => { setTermsAgreed(e.target.checked); setError(''); }}
                    />
                    <p className="text-sm text-gray-500 leading-tight select-none">By checking the box you agree to our <span className="text-primary font-medium">Terms</span> and <span className="text-primary font-medium">Conditions</span></p>
                </label>

                <Button onClick={handleRegister}>Sign up <i className="fa-solid fa-chevron-right ml-2"></i></Button>
                
                <div className="relative text-center my-8">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                    <span className="relative bg-white px-4 text-sm text-gray-500">Or</span>
                </div>

                <div className="space-y-3">
                    <button onClick={() => navigate(RoutePath.SOCIAL_LOGIN, { state: { provider: 'facebook', mode: 'register' } })} className="w-full bg-[#F3F3F3] text-gray-700 py-3 rounded-2xl font-medium flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
                        <i className="fa-brands fa-facebook text-[#1877F2] text-xl"></i>
                        Sign up with Facebook
                    </button>
                    <button onClick={() => navigate(RoutePath.SOCIAL_LOGIN, { state: { provider: 'google', mode: 'register' } })} className="w-full bg-[#F3F3F3] text-gray-700 py-3 rounded-2xl font-medium flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
                        <i className="fa-brands fa-google text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#ea4335] via-[#4285f4] to-[#34a853]"></i>
                        Sign up with Google
                    </button>
                </div>
            </div>
            <div className="p-6 text-center text-sm text-gray-800 pb-safe">
                Already a member ? <button onClick={() => navigate(RoutePath.LOGIN)} className="text-primary font-bold hover:underline">Log in</button>
            </div>
        </div>
    );
};

// --- OTP Screen ---
export const OTP: React.FC = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const [error, setError] = useState('');
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (val: string, index: number) => {
        setError('');
        if (!/^\d*$/.test(val)) return; 

        const newOtp = [...otp];
        newOtp[index] = val;
        setOtp(newOtp);

        if (val !== '' && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        if (otp.some(digit => digit === '')) {
            setError('*Fill OTP code');
            return;
        }
        navigate(RoutePath.SUCCESS);
    };

    return (
        <div className="h-full flex flex-col bg-white">
            <div className="pt-4 px-4">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-black font-medium text-lg">
                    <i className="fa-solid fa-chevron-left"></i> Back
                </button>
            </div>
            <div className="flex-1 px-8 pt-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Code Authentication</h2>
                <p className="text-gray-500 mb-10 text-sm leading-relaxed">Please enter the 6-digit code sent to your phone number/ email for changing password.</p>
                
                <div className="flex justify-between gap-2 mb-2">
                    {otp.map((digit, i) => (
                        <input 
                            key={i} 
                            ref={(el) => { inputsRef.current[i] = el; }}
                            type="text" 
                            maxLength={1} 
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            className="w-12 h-14 text-center text-2xl font-bold bg-[#F3F3F3] rounded-lg outline-none focus:ring-2 focus:ring-primary/20 transition-all caret-primary" 
                        />
                    ))}
                </div>
                <div className="min-h-[20px] mb-8 text-right">
                    {error && <p className="text-xs text-primary">{error}</p>}
                </div>

                <Button onClick={handleVerify}>Next <i className="fa-solid fa-chevron-right ml-2"></i></Button>

                <div className="mt-8 text-center">
                    <p className="text-sm text-black font-medium">Didn't receive any code? Resend Again</p>
                    <p className="text-xs text-gray-400 mt-1">Request a new code in 00:30s</p>
                </div>
            </div>
        </div>
    );
};

// --- Success Screen ---
export const Success: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="h-full flex flex-col bg-white">
            <div className="pt-4 px-4">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-black font-medium text-lg">
                    <i className="fa-solid fa-chevron-left"></i> Back
                </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Register</h2>
                <div className="w-40 h-40 rounded-full border-[6px] border-primary flex items-center justify-center mb-8 animate-bounce">
                    <i className="fa-solid fa-check text-7xl text-primary"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Succeeded</h2>
                <Button onClick={() => navigate(RoutePath.LOGIN)} className="max-w-xs">Back to login</Button>
            </div>
        </div>
    );
};

// --- Forgot Password Screen ---
export const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleNext = () => {
        setError('');
        if (!username.trim()) {
            setError('*Fill require information');
            return;
        }
        navigate(RoutePath.OTP);
    };

    return (
        <div className="h-full flex flex-col bg-white">
            <div className="pt-4 px-4">
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-black font-medium text-lg">
                    <i className="fa-solid fa-chevron-left"></i> Back
                </button>
            </div>
            <div className="flex-1 px-8 pt-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Forget password</h2>
                <p className="text-gray-500 mb-10 text-sm">Please re-enter your registered phone number or email</p>
                
                <div className="mb-2">
                    <Input 
                        placeholder="Phone number or email" 
                        value={username}
                        onChange={(e) => { setUsername(e.target.value); setError(''); }}
                        className="!bg-[#F3F3F3] border-none"
                    />
                </div>
                <div className="min-h-[20px] mb-8">
                    {error && <p className="text-xs text-primary">{error}</p>}
                </div>
                <Button onClick={handleNext}>Next <i className="fa-solid fa-chevron-right ml-2"></i></Button>
            </div>
        </div>
    );
};

// --- Social Login Screen ---
export const SocialLogin: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { provider = 'facebook', mode = 'login' } = location.state as any || {};
    const isGoogle = provider === 'google';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="h-full flex flex-col bg-white">
            <div className="bg-primary p-4 shadow-md text-white flex items-center justify-between">
                 <button onClick={() => navigate(-1)} className="flex items-center gap-2 font-medium"><i className="fa-solid fa-chevron-left"></i> Back</button>
                 <h1 className="font-bold text-lg">{isGoogle ? 'Google' : 'Facebook'}</h1>
                 <div className="w-12"></div>
            </div>
            <div className="flex-1 px-8 pt-12">
                <div className="flex flex-col items-center mb-8">
                    {isGoogle ? (
                        <i className="fa-brands fa-google text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ea4335] via-[#4285f4] to-[#34a853]"></i>
                    ) : (
                        <i className="fa-brands fa-facebook text-[#1877F2] text-7xl mb-4"></i>
                    )}
                    <p className="text-center text-gray-600">
                        {mode === 'login' ? 'Login to' : 'Sign up with'} your account to connect to PTE Logistics
                    </p>
                </div>
                <div className="space-y-4 mb-4">
                     <Input placeholder={isGoogle ? 'Email' : 'Phone number or email'} value={email} onChange={e => setEmail(e.target.value)} />
                     <Input type="password" placeholder="Password" icon="fa-regular fa-eye" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="flex items-center gap-2 mb-6">
                    <input type="checkbox" className="w-4 h-4 accent-primary" />
                    <span className="text-sm text-gray-500">Remember me</span>
                </div>
                <Button onClick={() => navigate(RoutePath.HOME)}>{mode === 'login' ? 'Log in' : 'Sign up'}</Button>
            </div>
        </div>
    );
};

const AuthScreens = { Welcome, Login, Register, OTP, Success, ForgotPassword, SocialLogin };
export default AuthScreens;