import React from "react";

function Ball() {
    const cookies = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    var ball_color = cookies.color;
    var file_path = ball_color + ".png";
    return (
        <img src={file_path} alt={ball_color} width="200" height="200" />
    )
}

export default Ball;
