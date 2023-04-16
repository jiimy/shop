import React from "react";
import { Link, Routes } from "react-router-dom";
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link to="/shop">메인</Link>
        <div className="inputwrap search">
          <input type="text" name="" id="" placeholder="검색창" />
        </div>
        <div className="etc">
          <div className="noti">알람</div>
          <div className="mypage">
            <Link to="/mypage">마이페이지</Link>
          </div>

          <div className="basket">장바구니</div>
          <div className="admin">
            <Link to="/admin">어드민</Link>
          </div>
        </div>
      </div>
      <ul className="menu">
        <li>
          <Link to="/category">카테고리</Link>
          <ul>
            <li></li>
          </ul>
        </li>
        <li>
          <Link to="/ranking">랭킹</Link>
        </li>
        <li>
          <Link to="/brand">브랜드</Link>
        </li>
        <li>
          <Link to="/event">이벤트</Link>
        </li>
        <li>
          <Link to="/magazin">매거진</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
