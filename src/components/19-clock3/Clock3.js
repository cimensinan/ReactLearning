import moment from "moment/moment";
import React, {useEffect, useState} from "react";
import "./clock3.scss";



const Clock3 = (props) => {

    const [dateTime, setDateTime] = useState(moment()) // Bu haliyle state yapımızı saniyede bir yenileyebileceğiz.

    // const dateTime = moment() // Bu ifadeyi useState yapısına taşıdık ki manipüle edebilelim.

    const {textColor, bgColor} = props

    // state yapımızı saniyede bir güncelleyince aslında buradaki dateTime'lar güncellenmiş oluyor.
    const timeStr = dateTime.format("HH:mm");
    const dateStr = dateTime.format("LL");
    const dayStr = dateTime.format("dddd");
    const hour = dateTime.format("HH");
    const minute = dateTime.format("mm")
    const second = dateTime.format("ss")

    let message = "";

    // dateTime güncellenince buradaki message duruma göre değişiyor.
    if(hour >= 6 && hour < 11) message = "Morning";
    else if(hour >= 11 && hour < 14) message = "Noon";
    else if(hour >= 14 && hour < 17) message = "Afternoon";
    else if(hour >= 17 && hour < 22) message = "Evening";
    else message = "Night";

    console.log(timeStr)

    const clockStyle = {
      backgroundColor: bgColor,
      color: textColor
    }

    // Saniyede bir güncelleme yapabilmek için setDateTime'ın tuttuğu değeri setInterval ile saniyede 1 güncelledik. Ancak saniyede bir güncelledikten sonra ikinci defa buraya geldiğinde artık saniyede 2 defa güncellemeye başladı. Üçüncü gelişinde saniyede 4 defa güncelledi ve durdurmadığımızda logaritmik bir artışa sebep olmuş olduk. Yani her saniye sistem ikiye katlanarak artıyor. İşlemci de boş yere yorulmuş oldu. 
    /* const timer = setInterval( () => { 
      setDateTime(moment())
    }, 1000); */

    // Yukarıda bahsedilen yan etkiden kurtulmak için ise setInterval methodunu useEffect ile kullanmamız gerekiyor.
    // Component'e ilk girişte çalışacak bir yapıyı useEffect ile oluşturabiliriz.
    // Önce mounting sonra da unmounting yapıyoruz. başlangıçta bir kere render oluyor ve sonra da sayfadan ayrıldığımızda da çalışmasın diye hafızadan atıyoruz.
    useEffect(() => {
      const timer = setInterval( () => { 
        setDateTime(moment())
      }, 1000);
      return() => {
        clearInterval(timer)
      }
    }, [])
    

  return (
    <div className="clock-container" style={clockStyle}>
      {/* Burada ise hem saati hem dakikayı hem de saniyeyi aktif hale getiriyoruz. */}
      <div className="time">{hour}<span style={{opacity: second % 2 === 0 ? 1 : 0}}>:</span>{minute}</div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">{dayStr} {message}</div>
      </div>
    </div>
  );
};

export default Clock3;
