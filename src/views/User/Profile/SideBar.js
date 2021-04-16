import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function SideBar() {
    return (
        <aside>
            <p> All YOur Needs </p>
            <Link to="/user/order">
                <i className="fa fa-user-o" aria-hidden="true" />
                View All Order
            </Link>

            <Link to="/user/review">
                <i className="fa fa-laptop" aria-hidden="true" />
                Write your review
            </Link>
        </aside>
    );
}

export default SideBar;
