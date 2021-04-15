/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import discountImg from '../../../../Images/discount.svg';
import './TodaySpecial.css';

function TodaySpecial() {
    return (
        <>
            <div className=" todaySpecial">
                <div className="blog-card ">
                    <input type="radio" name="select" id="tap-1" defaultChecked />
                    <input type="radio" name="select" id="tap-2" />
                    <input type="radio" name="select" id="tap-3" />
                    <input type="checkbox" id="imgTap" />
                    <div className="sliders">
                        <label htmlFor="tap-1" className="tap tap-1" />
                        <label htmlFor="tap-2" className="tap tap-2" />
                        <label htmlFor="tap-3" className="tap tap-3" />
                    </div>
                    <div className="inner-part">
                        <label htmlFor="imgTap" className="img">
                            <img src={discountImg} alt="" />
                        </label>
                        <div className="content content-1">
                            <span>রমজান মোবারক</span>
                            <div className="title">রমজান উপলক্ষে আমাদের বিশেষ ছাড়!</div>
                            <div className="text">
                                অর্ডার করতে এখন রেজিষ্টার করে, ঝাপিয়ে পড়ুন আপনার পছন্দের খাবাররে
                                সাথে
                            </div>

                            <button type="button">Read more</button>
                        </div>
                    </div>
                    <div className="inner-part">
                        <label htmlFor="imgTap" className="img">
                            <img src={discountImg} alt="" />
                        </label>
                        <div className="content content-2">
                            <span>রমজান মোবারক</span>
                            <div className="title">রমজান উপলক্ষে আমাদের বিশেষ ছাড়!</div>
                            <div className="text">
                                অর্ডার করতে এখন রেজিষ্টার করে, ঝাপিয়ে পড়ুন আপনার পছন্দের খাবাররে
                                সাথে
                            </div>
                            <button type="button">Read more</button>
                        </div>
                    </div>
                    <div className="inner-part">
                        <label htmlFor="imgTap" className="img">
                            <img src={discountImg} alt="" />
                        </label>
                        <div className="content content-3">
                            <span>রমজান মোবারক</span>
                            <div className="title">রমজান উপলক্ষে আমাদের বিশেষ ছাড়!</div>
                            <div className="text">
                                অর্ডার করতে এখন রেজিষ্টার করে, ঝাপিয়ে পড়ুন আপনার পছন্দের খাবাররে
                                সাথে
                            </div>
                            <button type="button">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodaySpecial;
