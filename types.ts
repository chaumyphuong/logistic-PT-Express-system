export enum RoutePath {
    WELCOME = '/',
    LOGIN = '/login',
    REGISTER = '/register',
    SOCIAL_LOGIN = '/social-login',
    OTP = '/otp',
    SUCCESS = '/success',
    FORGOT_PASSWORD = '/forgot-password',
    HOME = '/home',
    REPORT = '/report',
    CASH_FLOW = '/cash-flow',
    BALANCE_WALLET = '/balance-wallet',
    MONEY_CIRCULATING = '/money-circulating',
    SERVICE_FEE = '/service-fee',
    ORDER_ATTENTION = '/order-attention',
    ORDER_DETAIL = '/order-detail',
    RECIPIENTS = '/recipients',
    CREATE_RECIPIENT = '/create-recipient',
    ORDER_HUB = '/order-hub',
    CREATE_ORDER = '/create-order',
    SEARCH_FILTER = '/search-filter',
    EXCEL_EXPORT = '/excel-export',
    ACCOUNT = '/account',
    COMING_SOON = '/coming-soon'
}

export type OrderType = 'light' | 'heavy' | 'express';