import { lazy } from 'react';

export const privateRoutes = [
    // Admin Routes
    {
        path: '/admin/orders',
        component: lazy(() => import('../views/Admin/Admin')),
    },
    {
        path: '/admin/users',
        component: lazy(() => import('../views/Admin/Admin')),
    },
    {
        path: '/admin/products',
        component: lazy(() => import('../views/Admin/Admin')),
    },
    {
        path: '/admin/allProducts',
        component: lazy(() => import('../views/Admin/Admin')),
    },
    // Users Routes
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
        path: '/products',
        component: lazy(() => import('../views/Product/AllProducts/Products')),
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
