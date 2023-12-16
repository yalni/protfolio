import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';

import logo from '../assets/img/logo1.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img//nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = ()=>{
    const [activeLink, setActiveLink] = useState('homes');
    const [scrolled, seScrolled ] = useState(false);

    useEffect(()=>{
        const onScroll =()=>{
            if(window.scrollY>50){
                seScrolled(true);

            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return ()=> window.removeEventListener("scroll", onScroll);

    },[])

        const onUpdateActiveLink=(value)=>{
            setActiveLink(value);
        }

    return(
    <div className='nav'>
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container className='containernav'>
        <Navbar.Brand  href="#home">
            <img className='logo' src={logo} alt='Logo'/>
        </Navbar.Brand>
        
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={ activeLink=== 'home' ? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={ activeLink=== 'skills' ? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}> Skills</Nav.Link>
            <Nav.Link href="#projects" className={ activeLink=== 'projects' ? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>

          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='http://www.linkedin.com/in/hariyalni-panneerselvam'><img src={navIcon1} alt=''/> </a>
                <a href='https://github.com/yalni/protfolio'><img src={navIcon2} alt=''/> </a>
                <a href='https://www.hackerrank.com/profile/yalni'><img src={navIcon3} alt=''/> </a>
            </div>
            <Nav.Link href="#contacts" className={ activeLink=== 'contacts' ? 'active-navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('contacts')}>
            <button className='vvd' onClick={()=>console.log('connect')}><span>Let's Connect</span> </button>
            </Nav.Link>

            
          </span>
      </Container>
    </Navbar>
    </div>
    )
}

