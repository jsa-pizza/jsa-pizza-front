import React, { useState } from 'react';
import styled from 'styled-components';
import dashboardWindow from 'img/admin/dashboardWindow.png';
import whiteboard from 'img/admin/whiteboard.png';


export default function AdminDashboard({users, comments}){
    return(
        <AdminDashboardStyle>
            <div className="dashboard-container1 container">
                <div className="top top-left">
                    <img src={dashboardWindow} />
                    <div className="dashboard-title">전체 회원 수</div>
                    <div className="dashboard-content">{users.users}명 확인됨</div>
                </div>
                <div className="top top-middle">
                    <img src={dashboardWindow} />
                    <div className="dashboard-title">현재 피자 수</div>
                    <div className="dashboard-content">{users.pizzas}건 확인됨</div>
                </div>
                <div className="top top-right">
                    <img src={dashboardWindow} />
                    <div className="dashboard-title">오늘 피드백</div>
                    <div className="dashboard-content">{users.feedbacks}건 확인됨</div>
                </div>
            </div>
            <div className="dashboard-container2 container">
                <div className="bottom bottom-left">
                    <img src={whiteboard}/>
                    <div className="dashboard-title">실시간 댓글</div>
                        {comments.map((val, index) => (
                            <div className="comment-container">
                                <div className="comment-user" key={index}>{val.user}</div>
                                <div className="comment-content">{val.text}</div>
                            </div>
                        ))}
                    
                    
                </div>
                <div className="bottom bottom-right">
                    <img src={whiteboard}/>
                    <div className="dashboard-title">인기 피자</div>
                </div>
            </div>
        </AdminDashboardStyle>
    )
}
const AdminDashboardStyle = styled.div`
    top: 10%;
    left: 20%;
    position: absolute;
    overflow: hidden;
    width: 100wh;
    
    .container{
        display: flex;
    }
    .dashboard-container1{
        width: 90%;
    }
    .dashboard-container2{
        width: 100%;
        height: 300px;
        overflow: hidden;
    }
    img {
        position: relative;
        width: 100%;
    }
    .top{
        width: 70%; 
        margin-bottom: 3%;
        position: relative;
    }
    .bottom{
        width: 40%;
        position: relative;
    }
    .top-middle{
        margin: 0 10% 3%;
    }
    .top-right{
        right: 5px;
    }
    .bottom-left{
        margin-right: 10%;
    }
    .dashboard-title{
        position: absolute;
        top:0;
        color: #fff;
        left: 5px;
        font-size: 0.7rem;
    }
    .dashboard-content{
        font-size: 0.8rem;
        text-align: center;
        position:relative;
        bottom: 50%;
    }
    .comment-container{
        display: flex;
        position: relative;
        bottom: 85%;
        left: 5%;
        align-items:center;
        font-size: 0.8rem;
        margin-bottom: 1%;
    }
    .comment-user{
        
        margin-right: 3%;
        width: 40px;
        // margin-bottom: 0.8%;
        font-weight: bold;
    }
    .comment-content{
        
    }
`
