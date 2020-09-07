import React from "react";
import Ball from "./Ball.js";

class App extends React.Component {

  setCookie = (cookiename, cookievalue) => {
    console.log("SetCookcie: " + cookiename +" : " + cookievalue);
    var cookieexpires = "";
    var daysexpires = 40;
    var today = new Date();
    today.setTime(today.getTime() + (daysexpires * 864e5));
    cookieexpires = "expires=" + today.toUTCString() + ";";
    
    document.cookie = cookiename + "=" + cookievalue + ";" + cookieexpires + "path=/";
  }

  // the DeleteAllCookies
  deleteAllCookies = (cookiepath = '/') => {
    console.log("delete cookie");
    document.cookie.split(';').forEach(function(c) {
      document.cookie = c.trim().split('=')[0] + '=;expires=Thu, 01 Jan 1970 00:00:01 UTC; path='+cookiepath;
    });
  }

  getCookies = () => {
    console.log("GetCookies");
    return document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
  }

  getRandomColor = () => {
    var colors = ["red", "blue"];
    var randomNum = Math.floor(Math.random() * colors.length);
    return colors[randomNum];
  }

  getVisitCounts = () => {
    var cookies = this.getCookies();
    if(!cookies.visit) {
      this.setCookie("visit", 1);
      this.setCookie("color", this.getRandomColor());
    } else {
      var c = parseInt(cookies.visit);
      this.setCookie("visit", c + 1 );
    }
  }

  provideReport = () => {
    console.log("Report : ");
  }

  render() 
  {
    console.log("Render");
    this.getVisitCounts();
    return (
      <div>
        <h1> Hello. Welcome ~!</h1>
        <h2> You've visited {}</h2>
        <button onClick={this.deleteAllCookies}>Delete All Cookies</button>
        <button onClick={this.provideReport}>Report</button>
        <Ball />
      </div>
    );
  }
}

export default App;
