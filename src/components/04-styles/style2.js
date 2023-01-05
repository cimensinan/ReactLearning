import React from 'react'

const Style2 = () => {
    const styleTitle = {
        fontSize: "2rem",
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    };
  return (
    <div>
        <h2 style={styleTitle}>JSX Loops</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem illo tempore officiis tempora perferendis illum maxime neque natus ipsam quidem! Voluptas voluptatibus deserunt sapiente porro totam! Aut excepturi asperiores unde?
        </p>
        <h2 style={{...styleTitle, color: "blue"}}>Component Props</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem illo tempore officiis tempora perferendis illum maxime neque natus ipsam quidem! Voluptas voluptatibus deserunt sapiente porro totam! Aut excepturi asperiores unde?
        </p>
    </div>
  )
}

export default Style2