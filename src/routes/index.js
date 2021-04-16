import { lazy } from 'react';

export const privateRoutes = [
    {
        path: '/user',
        component: lazy(() => import('../views/User/Profile/Profile')),
    },
    {
        path: '/user/order',
        component: lazy(() => import('../views/User/Profile/Profile')),
    },
    {
        path: '/user/review',
        component: lazy(() => import('../views/User/Profile/Profile')),
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
