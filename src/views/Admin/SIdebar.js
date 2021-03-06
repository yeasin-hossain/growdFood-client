import React from 'react';
import { Link } from 'react-router-dom';
import '../User/Profile/Sidebar.css';

function SideBar() {
    return (
        <aside>
            <p> All YOur Needs </p>
            <Link to="/admin/orders">
                <strong> Manage Orders</strong>
            </Link>

            <Link to="/admin/users">
                <strong> Manage Users </strong>
            </Link>
            <Link to="/admin/allProducts">
                <strong> Manage Products </strong>
            </Link>
            <Link to="/admin/products">
                <strong> Add Products </strong>
            </Link>
            <Link to="/admin/contact">
                <strong> Contact Request </strong>
            </Link>
            <Link to="/admin/nLetter">
                <strong> NewsLetter </strong>
            </Link>
        </aside>
    );
}

export default SideBar;
