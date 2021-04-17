import React from 'react';
import { Route } from 'react-router';
import Orders from '../Orders/Orders';
import Review from '../Review/Review';
import SideBar from './SideBar';

function Profile() {
    return (
        <div>
            <div className="row g-0">
                <div className="col-md-4 col-lg-2 ">
                    <SideBar />
                </div>
                <div className="col-md-8 col-lg-10">
                    <Route path="/user/order">
                        <Orders />
                    </Route>
                    <Route path="/user/review">
                        <h1>Review</h1>
                        <Review />
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default Profile;
