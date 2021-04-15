import { lazy } from 'react';

export const privateRoutes = [
    {
        path: '/user',
        component: lazy(() => import('../views/User/Profile/Profile')),
    },
    {
        path: '/order/:userId',
        component: lazy(() => import('../views/User/Orders/Orders')),
    },
    {
        path: '/product/:productId',
        component: lazy(() => import('../views/Product/Product')),
    },
    {
        path: '/checkout/:productId',
        component: lazy(() => import('../views/Product/Checkout')),
    },
];

export const publicRoutes = [
    {
        path: '/',
        component: lazy(() => import('../views/Home/Home')),
    },
];

export const authRoutes = [
    {
        path: '/auth',
        component: lazy(() => import('../views/Auth/Auth')),
    },
];
