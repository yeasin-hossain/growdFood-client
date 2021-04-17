import React from 'react';
import AdminRoutes from '../../routes/AdminRoutes';
import Contacts from './Contacts/Contacts';
import NewsLetters from './NewsLetter/NewsLetters';
import Orders from './Orders/Orders';
import AdProducts from './Products/AdProducts';
import AllProducts from './Products/AllProducts';
import SideBar from './SIdebar';
import Users from './Users/Users';

function Admin() {
    return (
        <div>
            <div className="row g-0">
                <div className="col-md-4 col-lg-2">
                    <SideBar />
                </div>
                <div className="col-md-8 col-lg-10">
                    <AdminRoutes path="/admin/orders">
                        <Orders />
                    </AdminRoutes>

                    <AdminRoutes path="/admin/users">
                        <Users />
                    </AdminRoutes>
                    <AdminRoutes path="/admin/products">
                        <AdProducts />
                    </AdminRoutes>
                    <AdminRoutes path="/admin/allProducts">
                        <AllProducts />
                    </AdminRoutes>
                    <AdminRoutes path="/admin/contact">
                        <Contacts />
                    </AdminRoutes>
                    <AdminRoutes path="/admin/nLetter">
                        <NewsLetters />
                    </AdminRoutes>
                </div>
            </div>
        </div>
    );
}

export default Admin;
