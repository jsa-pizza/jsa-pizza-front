import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import comments from 'img/admin/comments.png';
import dashboard from 'img/admin/dashboard.png';
import users from 'img/admin/users.png';
import topping from 'img/admin/topping.png';
import feedbacks from 'img/admin/feedbacks.png';

export default function AdminNav (){
    return (
    <AdminNavStyle>
        <div className="nav-container">
            <div className="nav-dashboard nav-items">
                <Link to="/Admin">
                    <img src={dashboard} className="img-dashboard images"/>
                    <div>대시보드</div>
                </Link>
            </div>
            <div className="nav-topping nav-items">
                <Link to="/Admin/topping">
                    <img src={topping} className="img-topping images"/>
                    <div>토핑사진</div>
                </Link>
            </div>
            <div className="nav-users nav-items">
                <Link to="/Admin/users">
                    <img src={users} className="img-users images"/>
                    <div>회원목록</div>
                </Link>    
            </div>
            <div className="nav-comments nav-items">
                <Link to="/Admin/comments">
                    <img src={comments} className="img-comments images"/>
                    <div>댓글목록</div>
                </Link>    
            </div>
            <div className="nav-feedbacks nav-items">
                <Link to="/Admin/feedbacks">
                    <img src={feedbacks} className="img-feedbacks images"/>
                    <div>피드백</div>
                </Link>
            </div>
        </div>
    </AdminNavStyle>
        )
}

const AdminNavStyle = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #008081;
    position: relative;
    overflow: hidden;
    a{
        text-decoration: none;
        color: #fff;
        display: inline;
        width: 100%;
        height: 15%;
        font-size: 1rem;
    }
    .nav-container{
        width: 5%;
        height: 80%;
        display: flex;
        top: 10%;
        // left: 5%;
        position: relative;
        flex-direction: column;
        // align-content: space-around;
        margin: auto 5% auto;
    }
    .nav-items{
        width: 100%;
        height: 15%;
        text-align: center;
        margin-bottom: 50%;
    }
    .images{
        width: 70%;
    }
`