import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ResultsPageDetail, ResultsPageList } from 'components';
import bgLogo from 'img/detail/bg-logo.png';
import click from 'img/detail/click.png';

export default function ResultPage({
  handleFilter, handleFavorite, resultList, getDetail, detail, handleUpdate, handleSubmit, userInfo, handleKeyPress, comment, smallToppings, selectedTopping,
}) {
  return (
    <div className="ResultPage">
      <a href="http://www.prography.org" target="_blank" rel="noopener noreferrer">
        <img src={bgLogo} alt="prography logo" className="prographyLogo" />
      </a>
      <Link to="/selectTopping" className="ResultsPageHeaderStyle">
        <i className="material-icons">chevron_left</i>
        <span className="hide-on-phone">다시 고르러 가기</span>
      </Link>
      <ResultsWrapperStyle>
        <ResultsPageList
          handleFilter={handleFilter}
          getDetail={getDetail}
          resultList={resultList}
          smallToppings={smallToppings}
          selectedTopping={selectedTopping}
        />
        {/* 리스트에서 하나를 클릭하면 */}
        {detail ? (
          <ResultsPageDetail
            handleFavorite={handleFavorite}
            detail={detail}
            handleUpdate={handleUpdate}
            handleSubmit={handleSubmit}
            userInfo={userInfo}
            handleKeyPress={handleKeyPress}
            comment={comment}
          />
        ) : (
          <div className="clickWrapper">
            <img src={click} alt="click" />
          </div>
        )}
      </ResultsWrapperStyle>
    </div>
  );
}

const ResultsWrapperStyle = styled.div`
  width: 1300px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding: 0 1rem;
  @media (max-width: 479px) {
    width: 100%;
  }
  .clickWrapper{
    margin-top: 6rem;
    transform: rotate(-20deg);
    margin-left: 76px;
    img{
      width: 65%;
    }
    @media (max-width: 839px) {
      display: none;
    }
  }
`;
