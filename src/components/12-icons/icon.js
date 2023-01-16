import React from 'react'
import {FcHome} from "react-icons/fc"
import {BiAlbum, BiHomeSmile} from "react-icons/bi"
import {FiMic, FiCheck, FiAlertCircle} from "react-icons/fi"
// react-icons çok geniş bir icon kütüphanesidir.

const Icon = () => {
  return (
    <div>
        {/* component mantığıyla iconları ekliyoruz ve istediğimiz gibi stil verebiliyoruz. */}
        <FcHome style={{fontSize: "3rem", color: "red"}}/>
        <BiHomeSmile style={{fontSize: "3rem", color: "red"}}/>
        <FiMic/>
        <FiCheck/>
        <FiAlertCircle/>
        <BiAlbum/>
    </div>
  )
}

export default Icon