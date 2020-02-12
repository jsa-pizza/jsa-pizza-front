import React, { useState } from 'react';
import styled from 'styled-components';
import pizza from 'img/loading/pizza.png';
import emptyHeartIcon from 'img/detail/empty-heart-icon.png';
import heartIcon from 'img/detail/heart-icon.png';
import recent from 'img/mypage/recent.png';
import go from 'img/mypage/go.png';

import { Link } from 'react-router-dom';
import { ResultsPageDetail } from 'components';

export default function MyPage({
  user,
  recentTopping,
  likePizza,
  handleSubmit,
  handleFavorite,
  getDetail,
  detail,
  userInfo,
  handleKeyPress,
  comment,
  handleUpdate,
}) {
  const [favorite, setFavorite] = useState(true);
  const [open, setOpen] = useState(true);

  return (
    <MyPageStyle open={open}>
      {window.innerWidth < 840
        ? <NotiStyle>헤헤<br />마이페이지는<br />웹에서<br />확인하세요</NotiStyle>
        : (
          <>
            <div className="mypage">
              <div className="mypage-user">
                <div className="user-img">
                  <img src={user.profileImage} />
                </div>
                <div className="user-name">{user.name}님</div>
              </div>
              <div className="mypage-wrapper">
                <div className="mypage-title">
                  <div className="title-background" />
                  <Link to="MyPage">
                    <div className="title">MY PAGE</div>
                  </Link>
                </div>
                <div className="mypage-content">
                  <div className="mypage-like">
                    <img src={heartIcon} className="heart" />
                    <div className="like-title">좋아한 피자</div>
                    <div className="like-content">
                      {likePizza.length !== 0 ? (
                        likePizza.map((val) => (
                          <div className="like-content-1 swing-in-top-fwd">
                            <div key={val._id}>
                              {favorite ? (
                                <>
                                  <img
                                    src={heartIcon}
                                    alt="hearticon"
                                    className="emptyHeart"
                                    onClick={() => {
                                      {
                                        handleFavorite(val._id);
                                      }
                                    }}
                                  />
                                </>
                              ) : (
                                <img
                                  src={emptyHeartIcon}
                                  alt="hearticon"
                                  className="emptyHeart"
                                  onClick={() => {
                                    handleFavorite(val._id);
                                  }}
                                />
                              )}
                            </div>
                            <div className="like-content-wrapper">
                              <div className="like-brand">{val.brand}</div>
                              <div className="like-pizza">{val.name}</div>
                            </div>
                            <button
                              className="like-detail"
                              onClick={() => {
                                getDetail(val._id);
                                setOpen(!open);
                              }}
                            >
                            자세히
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="none">
                          <div className="none-title">피자를 좋아해주세요</div>
                          <Link to="selectTopping">고르러 가기</Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mypage-recent">
                    <img src={recent} className="recent" />
                    <div className="recent-title">최근 고른 토핑</div>
                    <div className="recent-content">
                      {recentTopping.length !== 0 ? (
                        recentTopping.map((val, index) => (
                          <div
                            className="recent-content-1 swing-in-top-fwd"
                            key={index}
                            onClick={() => {
                              handleSubmit(val);
                            }}
                          >
                            <div className="recent-toppings">
                              {val.map((v, index) => (
                                <div className="recent-topping" key={index}>
                                  <img src={v.image} />
                                  <span className="topping-hover">{v.name}</span>
                                </div>
                              ))}
                            </div>
                            <img src={go} className="go" />
                          </div>
                        ))
                      ) : (
                        <div className="none">
                          <div className="none-title">토핑을 고른 적이 없군요!</div>
                          <Link to="selectTopping">고르러 가기</Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {detail && (
                  <>
                    <div
                      className="back-background"
                      onClick={() => {
                        getDetail();
                        setOpen(true);
                      }}
                    />
                    <button
                      className="back"
                      onClick={() => {
                        getDetail();
                        setOpen(true);
                      }}
                    >
                    돌아가기
                    </button>
                    <ResultsPageDetail
                      handleFavorite={handleFavorite}
                      detail={detail}
                      handleUpdate={handleUpdate}
                      handleSubmit={handleSubmit}
                      userInfo={userInfo}
                      handleKeyPress={handleKeyPress}
                      comment={comment}
                    />
                  </>
                )}
              </div>
            </div>

            {/* background pizzas */}
            <div className="pizzas">
              <img src={pizza} className="pizza1" />
              <img src={pizza} className="pizza2" />
              <img src={pizza} className="pizza3" />
              <img src={pizza} className="pizza4" />
              <img src={pizza} className="pizza5" />
            </div>
          </>
        )}
    </MyPageStyle>
  );
}

const MyPageStyle = styled.div`
  background-color: #ededed;
  justify-content: center;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;

  .mypage-user {
    color: black;
    display: flex;
    align-items: center;
    align-content: center;
    position: relative;
    top: 22px;
    left: 30px;
    justify-content: left;
  }
  .user-img {
    width: 49px;
    height: 49px;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0px; /* 세로축 스크롤바 길이 */
      height: 0px; /* 가로축 스크롤바 길이 */
    }
  }
  .user-img img {
    width: 49px;
    height: 49px;
    border-radius: 50%;
  }
  .user-name {
    margin-left: 10px;
    font-weight: 600;
  }
  .pizzas {
    z-index: ${(props) => (props.open ? '0' : '-1')};
    display: flex;
    width: 100%;
    position: fixed;
    min-width: 1805px;
    height: auto;
    left: -13%;
    top: 80%;
  }
  .pizza1,
  .pizza2,
  .pizza3,
  .pizza4,
  .pizza5 {
    width: 400px;
  }
  .mypage {
    width: 100%;
    justify-content: center;
  }
  .mypage-wrapper {
    display: flex;
    width: 100%;
    height: 600px;
    justify-content: center;
    top: 8%;
    position: relative;
  }
  .mypage-title {
    z-index: ${(props) => (props.open ? '0' : '-1')};
    font-weight: 700;
    font-size: 54px;
    text-align: center;
    position: absolute;
  }
  .mypage-title a {
    position: relative;
    bottom: 60px;
    height: 80px;
  }
  .title {
    z-index: 2;
    color: #cc1b28;

    position: relative;
  }
  .title-background {
    width: 245px;
    height: 35px;
    background-color: rgba(255, 201, 13, 0.45);
    z-index: 0;
    border-radius: 15%;
    position: relative;
    top: 10px;
  }
  .mypage-content {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    // display: flex;
    top: 17%;
    position: absolute;
    justify-content: space-between;
    width: 700px;
  }

  .mypage-like {
    text-align: center;
  }
  .mypage-recent {
    flex-wrap: wrap;
    text-align: center;
  }
  .like-title,
  .recent-title {
    font-size: 20px;
    font-weight: 600;
    bottom: 7px;
    position: relative;
    margin-top: 5px;
  }
  .recent,
  .heart,
  .emptyHeart {
    width: 33px;
    height: 30px;
  }
  .like-content,
  .recent-content {
    width: 285px;
    height: 260px;
    overflow: auto;
    margin-top: 10px;
  }
  .like-content {
    text-align: right;
    color: #fff;
  }
  .mypage-like a {
    color: black;
    text-align: right;
    &:hover {
      font-weight: 700;
    }
  }
  .like-content-1,
  .recent-content-1 {
    background-color: rgba(0, 0, 0, 0.2);
    width: 270px;
    height: 70px;
    margin-top: 10px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    align-content: center;
    overflow: auto;
  }
  .like-content-1 {
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
    img {
      cursor: pointer;
    }
    .like-detail {
      text-align: center;
      position: absolute;
      left: 215px;
      width: 40px;
      padding: 5px 5px;
      font-size: 5px;
      border-radius: 10px;
      transition: 0.2s;
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
      &:hover {
        background-color: rgba(255, 201, 13, 1);
        box-shadow: 0 3px 6px 6px rgba(0, 0, 0, 0.2);
      }
    }
  }
  .back {
    text-align: center;
    position: absolute;
    z-index: 1;
    top: -20px;
    left: 400px;
    width: 70px;
    height: 70px;
    padding: 5px 5px;
    border-radius: 50%;
    transition: 0.2s;
    background-color: rgba(255, 201, 13, 0.7);
    box-shadow: 0 3px 18px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
    &:hover {
      background-color: rgba(255, 201, 13, 1);
      box-shadow: 0 3px 6px 6px rgba(0, 0, 0, 0.2);
    }
  }
  .back-background{
    width: 1440px;
    height: 800px;
    position: absolute;
  }
  .recent-content-1 {
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .emptyHeart {
    margin-left: 10px;
  }
  .like-content-wrapper {
    text-align: left;

    margin-left: 10px;
  }
  .like-brand {
    font-size: 16px;

    color: #fff;
    opacity: 0.8;
  }
  .like-pizza {
    font-size: 20px;
    font-weight: 600;
  }

  a {
    text-decoration: none;
  }

  .go {
    text-align: right;
    position: relative;
    right: 10px;
  }
  .recent-toppings {
    width: 250px;
    display: flex;

    overflow: auto;
    flex-direction: row;
    ::-webkit-scrollbar {
      width: 0px; /* 세로축 스크롤바 길이 */
      height: 0px; /* 가로축 스크롤바 길이 */
    }
  }
  .recent-topping {
    width: 49px;
    min-width: 49px;
    height: 49px;
    border-radius: 50%;
    justify-content: center;
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    background-color: rgba(237, 237, 237, 0.7);
    align-items: center;
    .topping-hover {
      display: none;
    }
    &:hover {
      background-color: #b93030;

      img {
        display: none;
      }
      .topping-hover {
        display: block;
        font-size: 13px;
        color: white;
      }
    }
  }
  .recent-topping img {
    width: 35px;
    height: 35px;
  }
  span {
    width: 70px;
    font-size: 0.875rem;
    color: #fff;
    opacity: 0.8;
  }
  .recent-content-1 a {
    text-align: right;
  }
  .none {
    background-color: rgba(0, 0, 0, 0.2);
    width: 285px;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5%;
  }
  .none-title {
    display: block;
    color: #fff;
    font-weight: bold;
  }
  .none a {
    text-align: CENTER;
    width: 100px;
    padding: 5px 15px;
    margin-top: 1rem;
    border-radius: 4px;
    transition: 0.2s;
    background-color: rgba(255, 201, 13, 0.7);
    box-shadow: 0 3px 6px 4px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    color: #fff;
    &:hover {
      background-color: rgba(255, 201, 13, 1);
      box-shadow: 0 3px 6px 6px rgba(0, 0, 0, 0.2);
    }
  }
  .bg {
    width: 100px;
    height: 100px;
    float: left;
    display: absolute;
  }
`;

const NotiStyle = styled.div`
  font-weight: 100;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.7);
  color: white;
  font-size: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 10px;
  padding-bottom: 10px;
  text-align: right;
`;
