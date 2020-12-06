import './App.css';
import Navbar from "./Navbar";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";
import Contact from "./Contact";

function App() {
  return (
    <div>
     <Navbar name="Hello ReactJs" />
     <h2 className="title">About Me</h2>
      <About />
    
      <h2 className="title-top">Service</h2>    
      <section className="column-grid">
      <Service Title="Title" Description="Lorem Ispsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
      <Service Title="Title" Description="Lorem Ispsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
      <Service Title="Title" Description="Lorem Ispsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
      <Service Title="Title" Description="Lorem Ispsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
      <Service Title="Title" Description="Lorem Ispsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
      <Service Title="Title" Description="Lorem Ispsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
      </section>
      <h2 className="title-top">Contact Us</h2>    
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
