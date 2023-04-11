import React, { useState } from "react";
import "./Header.css";
import Frame29 from "../../assets/Frame 29.svg";

function Header(props) {
  const {
    changeDay,
    changeMonth,
    changeYear,
    getAge,
    dayError,
    monthError,
    yearError,
  } = props;

  return (
    <div className="header-container">
      <header className="header">
        <form className="form">
          <div className="form-items">
            <label className="label" htmlFor="day">
              day
            </label>
            <input
              onChange={changeDay}
              id="day"
              className="input"
              type="number"
              placeholder="DD"
            />

            {dayError && <span className="error">{dayError}</span>}
          </div>
          <div className="form-items">
            <label className="label" htmlFor="month">
              month
            </label>
            <input
              onChange={changeMonth}
              id="month"
              className="input"
              type="text"
              placeholder="MM"
            />
            {monthError && <span className="error">{monthError}</span>}
          </div>
          <div className="form-items">
            <label className="label" htmlFor="year">
              year
            </label>
            <input
              onChange={changeYear}
              id="year"
              className="input"
              type="text"
              placeholder="YYYY"
            />
            {yearError && <span className="error">{yearError}</span>}
          </div>
        </form>
      </header>
      <div className="button-group">
        <button onClick={getAge} className="btn">
          <img className="btn-svg" src={Frame29} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Header;
