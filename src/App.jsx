import { useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/body";
import "./App.css";

function App() {
  const [day, setDay] = useState("--");
  const [month, setMonth] = useState("--");
  const [year, setYear] = useState("--");
  const [resultDay, setResultDay] = useState("--");
  const [resultMonth, setResultMonth] = useState("--");
  const [resultYear, setResultYear] = useState("--");
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const today = new Date();
  const birthDay = new Date(`${year}, ${month}, ${day}`);
  const todayMS = today.getTime();
  const birthDayMs = birthDay.getTime();
  const diffTime = Math.abs(todayMS - birthDayMs);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const validation = () => {
    let dayError = "";
    let monthError = "";
    let yearError = "";

    if (day < 1 || day > 31) {
      dayError = "Input a number between 1 and 31";
    }
    if (month < 1 || month > 12) {
      monthError = "Input a number between 1 and 12";
    }
    if (year < 0 || year > new Date().getFullYear()) {
      yearError = "Input a number between 0 and the current year";
    }
    setDayError(dayError);
    setMonthError(monthError);
    setYearError(yearError);
    if (dayError || monthError || yearError) {
      return false;
    }
    return true;
  };

  const handleDayChange = (e) => {
    e.preventDefault();
    setDay(e.target.value);
  };
  const handleMonthChange = (e) => {
    e.preventDefault();
    setMonth(e.target.value);
  };
  const handleYearChange = (e) => {
    e.preventDefault();
    setYear(e.target.value);
  };
  const getAge = (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      const years = Math.floor(diffDays / 365);
      const months = Math.floor((diffDays % 365) / 30);
      setResultYear(years);
      setResultMonth(months);
      setResultDay(diffDays - years * 365 - months * 30);
    }
  };

  return (
    <div className="App">
      <Header
        changeDay={handleDayChange}
        changeMonth={handleMonthChange}
        changeYear={handleYearChange}
        dayError={dayError}
        monthError={monthError}
        yearError={yearError}
        getAge={getAge}
      />
      <Body day={resultDay} month={resultMonth} year={resultYear} />
    </div>
  );
}

export default App;
