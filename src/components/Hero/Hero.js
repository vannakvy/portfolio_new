import React from 'react';
import styled from 'styled-components';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {AiFillFilePdf} from 'react-icons/ai';

export const ContactButton = styled.div`
  width: ${({ alt }) => alt ? '150px' : '200px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:10px;
  color: #fff;
  background: #00B4DB;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
      
        <SectionText>
       Hello, I am <span style={{fontWeight:600,color:"#fff"}}> Vannak</span>. I am a Full Stack Developer. Thanks for coming here to see my Portfolio. If you think I might be a good fit for your company, please get in touch or download my CV and Resume by clicking on the button below.
        </SectionText>
       <div style={{display:"flex",marginTop:"10px"}}>
       <Button onClick={props.handleClick}>Contact Me</Button>
        <ContactButton onClick={props.handleClick}>My CV <AiFillFilePdf/></ContactButton>
       </div>
      
      </LeftSection>
    </Section>
  </>
);

export default Hero;