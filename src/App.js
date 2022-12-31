import React from 'react'
import About from './about/About'
import Experience from './experience/Experience'
import Header from './header/Header'
import Nav from './nav/Nav'
import Services from './services/Services'
import Projects from "./projects/Projects";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";


export default function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}
