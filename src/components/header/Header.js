import React from 'react';
import { Route, Link, Routes, Router } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <p>
        <Link to="/">홈</Link>
      </p>
      <p>
        <Link to="/login">로그인</Link>
      </p>
      <p>
        <Link to="/admin">어드민</Link>
      </p>
    </div>
  );
}

export default Header