import React, { useState } from 'react';
import styled from 'styled-components';
import pageWindow from 'img/admin/pageWindow.png';

export default function AdminTopping(){
const [open, setOpen] = useState(false);
    return (
        <AdminToppingStyle>
            <div className="topping-container">
                <img src={pageWindow} className="img-topping images"/>
                <span className="topping-title">토핑사진</span>
                <div className="topping-menu">
                    <div className="topping-size">
                        <div className="topping-big">큰 토핑</div>
                        <div className="topping-small">작은 토핑</div>
                    </div>
                    <div className="topping-search">
                        <input placeholder="검색"></input>
                    </div>
                </div>
                <div className="topping-items">
                    <div className="topping-item">
                        <div className="topping-item-title">
                            <div className="topping-name">토핑 이름</div>
                            <div className="topping-item-menu">
                                <span className="topping-item-del">삭제</span>
                                <span className="topping-item-open" onClick={() => {setOpen(!open);}}>+</span>
                            </div>
                        </div>
                        {open && (<div className="topping-item-body">
                            <div className="body-img">
                                <div className="img"></div>
                                <span className="img-amend">이미지 수정</span>
                            </div>
                            <div className="body-content">
                                <div className="content-container">
                                    <span className="content-name">토핑 이름</span>
                                    <span className="name">미트</span>
                                    <span className="amend">수정하기</span>
                                </div>
                                <div className="content-container">
                                    <span className='content-category'>카테고리</span>
                                    <span className="category">고기</span>
                                    <span className="amend">수정하기</span>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        <div className="add-topping">
            추가하기
        </div>
        </AdminToppingStyle>
    )
}
const AdminToppingStyle = styled.div`
top: 10%;
left: 20%;
position: absolute;
overflow: hidden;
width: 100wh;
.topping-container{
    position: relative;
    display:flex;
    align-content:center;
    left: 8%;
    width: 75%
}
.img-topping{
    position: relative;
    width: 100%;
}
.topping-title{
    position:absolute;
    color: #fff;
    left:10px;
    top: 3px;
    font-weight: 100;
}
.topping-menu{
    display: flex;
    color: black;
    position: absolute;
    justify-content:space-between;
    width: 99%;
    top: 6%;
    
}
.topping-size{
    display:flex;
    width: 15%;
    font-size:0.9rem;
    font-weight: 100;
    justify-content: space-between;
    margin-left: 1%;
}
.topping-big{
    // margin-left: 1%;
    margin-right: 2%;
}
.topping-items{
    display: flex;
    margin-left: 1%;
    font-size: 0.9rem;
    position: absolute;
    margin-top: 10%;
    width: 100%;
}
.topping-item{
    display:flex;
    width: 97%;
    flex-wrap: wrap;
}
.topping-item-title{
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid black;
    padding-bottom: 5px;
}   
.topping-item-menu{
    font-weight: 100;
    width: 8%;
    display: flex;
    justify-content: space-between;
}
.topping-item-open{
    // margin-left:5%;
    cursor:pointer;
}
.topping-item-body{
    width: 100%;
    position: relative;
    // display: flex;
}
.body-img{
    width: 100%;
    position: relative;
    .img-amend{
        position:absolute;
        bottom: 0;
        right: 71%;
    }
}
.img{
    margin-top: 10px;
    width: 15%;
    padding: 10% 15%;
    background-color: #fff;
    position: relative;
}
.body-content{
    width: 85%;
    position:relative;
    display: flex;
    left: 35%;
    bottom: 50%;
    flex-direction: column;
}
.content-container{
    width: 100%;
    flex-direction: row;
    margin-bottom: 0.5rem;
}
.name, .category{
    font-weight: 100;
}
.category{
    margin: 0 1rem 1rem 1rem;
}
.name{
    margin: 0 0.9rem 1rem 0.8rem;
}
.amend{
    font-size: 0.7rem;
}
.add-topping{
    position: absolute;
    bottom: 2%;
    right: 18%;
}
`