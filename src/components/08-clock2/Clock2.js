// Dijital saat uygulamasının renklerini parametrik hale getiriyoruz.

import moment from "moment/moment";
import React from "react";
import "./clock2.scss";

{/* <Clock2 textColor="red" bgColor="yellow"/> */} // Bu ifadeyi App'de çağırdığımızda Clock2 componentine iki tane (textColor, bgColor)prop göndermiş oluyoruz.

// Bunları props parametresi ile alan Clock2 componentinde bunları destructuring ile açıyoruz ve bu prop değerlerinin ne ifade ettiğini bir değişkenle tanımlıyoruz. Bir stil değeri olduğu için inline şekilde olmasını istediğimiz elemente stil olarak ekliyoruz.

const Clock2 = (props) => {
    const dateTime = moment();
    //require('moment/locale/tr'); // Burayı devreye aldığımızda Türkçe'ye çevirebiliyoruz. "tr" ifadesini değiştirerek başka dillere de çevirebiliyoruz. Bu kısmı option ile kullanıcıya bırakabiliriz.

    const {textColor, bgColor} = props
    console.log(props)

    const timeStr = dateTime.format("HH:mm");
    const dateStr = dateTime.format("LL");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");

    let message = "";

    if(hour >= 6 && hour < 11) message = "Morning";
    else if(hour >= 11 && hour < 14) message = "Noon";
    else if(hour >= 14 && hour < 17) message = "Afternoon";
    else if(hour >= 17 && hour < 22) message = "Evening";
    else message = "Night";

    const clockStyle = {
      backgroundColor: bgColor,
      color: textColor
    }

    // clock-container class'ını ezsin diye stilimizi buraya ekliyoruz.
  return (
    <div className="clock-container" style={clockStyle}>
      <div className="time">{timeStr}</div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">{dayStr} {message}</div>
      </div>
    </div>
  );
};

export default Clock2;
