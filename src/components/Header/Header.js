import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck,DiJsBadge } from 'react-icons/di';
import {RiAccountPinCircleFill} from 'react-icons/ri';
// import {DiJsBadge} from 'react-icons/bs';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white",marginBottom:"30px" }}>
          <RiAccountPinCircleFill size="3rem" /> <span style={{marginLeft:"10px",fontSize:"3rem"}}>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Get CV</NavLink>
        </Link>
      </li>   
    </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillYoutube size="3rem" color='red'/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
