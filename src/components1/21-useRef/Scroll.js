import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";

const Scroll = () => {
  const refAboutUs = useRef(null);

  useEffect(() => {
    const handleScroll = () => { 
        const aboutUsEl = refAboutUs.current;
        const currentScrollPosition = window.scrollY;
    
        const elScrollPosition = aboutUsEl.offsetTop;
        const currentWindowHeight = window.innerHeight;
        const elCurrentHeight = aboutUsEl.offsetHeight;
    
        const targetScrollPosition =
          elScrollPosition - currentWindowHeight + elCurrentHeight;
    
        if (currentScrollPosition >= targetScrollPosition) {
            aboutUsEl.classList.add("active")
        }
    }
    document.addEventListener("scroll", handleScroll);
  
    return () => {
      document.removeEventListener("scroll", handleScroll);
    }
  }, [])
  

  return (
    <Container>
      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni ut
          ipsam, sequi aliquid consectetur? Id excepturi quam ipsum suscipit,
          enim explicabo quos, aliquid aliquam deserunt nostrum ex, perspiciatis
          corporis. Voluptatem nisi, neque a quam tempora voluptate eveniet
          placeat minus in quisquam voluptas ipsa temporibus aspernatur quae
          cupiditate quia ratione facere inventore. Nobis natus, id dolore
          reiciendis necessitatibus qui! Neque.
        </p>
      ))}

      <p className="about-us" ref={refAboutUs}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni ut
        ipsam, sequi aliquid consectetur? Id excepturi quam ipsum suscipit, enim
        explicabo quos, aliquid aliquam deserunt nostrum ex, perspiciatis
        corporis. Voluptatem nisi, neque a quam tempora voluptate eveniet
        placeat minus in quisquam voluptas ipsa temporibus aspernatur quae
        cupiditate quia ratione facere inventore. Nobis natus, id dolore
        reiciendis necessitatibus qui! Neque.
      </p>

      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magni ut
          ipsam, sequi aliquid consectetur? Id excepturi quam ipsum suscipit,
          enim explicabo quos, aliquid aliquam deserunt nostrum ex, perspiciatis
          corporis. Voluptatem nisi, neque a quam tempora voluptate eveniet
          placeat minus in quisquam voluptas ipsa temporibus aspernatur quae
          cupiditate quia ratione facere inventore. Nobis natus, id dolore
          reiciendis necessitatibus qui! Neque.
        </p>
      ))}
    </Container>
  );
};

export default Scroll;
