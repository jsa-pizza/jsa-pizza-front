import React, { useState } from 'react';
import styled from 'styled-components';

import detailBg from 'img/detail/detail-bg-el.png';
import emptyHeartIcon from 'img/detail/empty-heart-icon.png';
import heartIcon from 'img/detail/heart-icon.png';
import chatIcon from 'img/detail/chat-icon.png';

export default function ResultsPageDetail({
  handleFavorite, detail, handleUpdate, handleSubmit, userInfo, handleKeyPress, comment,
}) {
  const [favorite, setFavorite] = useState(true);
  const comma = (val) => String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const typeCheckKakaoId = (typeof (userInfo.kakaoId) === 'number') ? String(userInfo.kakaoId) : userInfo.kakaoId;
  return (
    <DetailBackgroundStyle className="scale-up">
      <div className="layout">
        <DetailContentStyle>
          <div className="detail-header">
            <img src={detail.image} className="realImage" alt="pizza" />
            <div className="explain">
              <div className="typo-b3">{detail.name}</div>
              <div className="iconWrapper">
                {/* 클릭하면 붉은색 */}
                <div onClick={() => { handleFavorite(detail._id); setFavorite(!favorite); }} className="icon flex">
                  {(detail.like.findIndex((val) => val === typeCheckKakaoId) > -1)
                    ? <img src={heartIcon} alt="hearticon" className="flip-vertical-left" />
                    : <img src={emptyHeartIcon} alt="hearticon" className="flip-vertical-right" />}
                </div>
                <span>{detail.like.length}</span>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>브랜드</td>
                    <td>{detail.brand}</td>
                  </tr>
                  <tr>
                    <td>칼로리</td>
                    <td>{comma(detail.m_cal)} kcal</td>
                  </tr>
                  <tr>
                    <td>가격</td>
                    <td>{comma(detail.m_price)} 원</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bold">세부토핑</div>
          <div className="typo-s1">
            {detail.toppings.join()}
          </div>
          <div className="bold mt-1">세부설명</div>
          <div className="typo-s1">
            {detail.details}
          </div>
          <div className="detail-chip">
            <div className="chip">#아직</div>
            <div className="chip">#데이터가</div>
            <div className="chip">#없더요유유</div>
          </div>
          <div className="detail-chat">
            <div className="chat-header">
              <div className="flex"><img src={chatIcon} alt="chaticon" width="24px" /></div>
              <span className="typo-s1">{detail.comments.length}</span>
            </div>
            {/* 댓글 작성하는 곳 */}
            <div className="chat-input">
              <div className="chat-input-wrapper">
                <input
                  placeholder=" 피자에 대한 비방은 삼가해주세요."
                  type="text"
                  value={comment}
                  onChange={handleUpdate}
                  onKeyPress={(evt) => handleKeyPress(evt, detail._id)}
                />
              </div>
              <button type="button" onClick={() => handleSubmit(detail._id)}>작성하기</button>
            </div>
            {/* 댓글 리스트 */}
            <div className="chat-list">
              {detail.comments.map((val, index) => (
                <div className="comment" key={index}>
                  <div className="comment-thumbnail" />
                  <div>
                    <div className="comment-id">
                      <span className="bold typo-s1">{val.user}</span>
                      <span className="typo-s2">{val.date}</span>
                    </div>
                    <div className="comment-text">{val.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DetailContentStyle>
        <div className="bg" />
        <img src={detailBg} alt="list background" className="listBg" />
      </div>
    </DetailBackgroundStyle>
  );
}

const DetailContentStyle = styled.div`
  position: absolute;
  z-index: 1;
  padding: 30px;
  height: 100%;
  overflow: auto;
  width: 100%;
  .detail-header{
    display: flex;
    margin-bottom: 24px;
    .realImage{
      width: 400px;
      height: 300px;
      background-color: white;
      flex-shrink: 0;
    }
    .explain{
      margin-left: 24px;
      .iconWrapper{
        display: flex;
        align-items: center;
        font-size: 14px;
        margin: 13px 0 8px 0;
        img{
          width: 22px;
          margin-right: 10px;
        }
        span{
          margin-right: 10px;
        }
      }
      table{
        font-size: 14px;
        td{
          margin-top: 5px;
          &:first-child{
            font-weight: bold;
            width: 80px;
            display: block;
          }
        }
      }
    }
  }
  /* chip 스타일 */
  .detail-chip{
    margin: 24px 0;
    .chip{
      border: 1px solid #E03535;
      border-radius: 100px;
      display: inline-block;
      padding: 2px 20px;
      margin-right: 10px;
    }
  }
  /* 댓글 스타일 */
  .detail-chat{
    .chat-header{
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      span{
        margin-left: 8px;
      }

    }
    /* 댓글 작성 */
    .chat-input{
      width: 95%;
      .chat-input-wrapper{
        height: 42px;
        width: calc(100% - 108px);
        background-color: white;
        display: inline-flex;
        border-radius: 4px;
      }
      input{
        font-size: 14px;
        border: none;
        margin-left: 10px;
        width: 100%;
      }
      button{
        width: 100px;
        background-color: #E03535;
        color: white;
        font-weight: bold;
        height: 42px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        margin-left: 5px;
      }

    }
    /* 댓글 리스트 */
    .chat-list{
      margin-top: 32px;
      .comment{
        margin-bottom: 24px;
        display: flex;
        &-thumbnail{
          width: 60px;
          height: 60px;
          border-radius: 100px;
          background-color: white;
          margin-right: 16px;
        }
        &-id{
          .typo-s2{
            color: #adadad;
            margin-left: 10px;
          }
        }
        &-text{
          margin-top: 8px;
          font-size: 14px;
        }
      }
    }
  }
`;

const DetailBackgroundStyle = styled.div`
  .layout{
    box-shadow: 10px 20px 40px 0 rgba(0,0,0,0.4);
    position: relative;
    width: 750px;
    height: calc(100% - 40px);
    max-height: 768px;
    border-radius: 0 0 150px;
  }
  .listBg{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 155px;
  }
  .bg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #efefef;
    border-radius: 0 0 150px;
    box-shadow: 10px 20px 40px 0 rgba(0,0,0,0.4);
  }
`;
