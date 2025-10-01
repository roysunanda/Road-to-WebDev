import ImageDisplay from "./ImageDisplay"

function Home() {
  return (
    <div id="home" className="site-main">
      <div className="container">
        <section className="intro">
          <h2>Welcome to my Website</h2>
          <p>
            This is a simple website to demonstrate how to use components. Each part of the page is a seperate component.
          </p>
        </section>
        <ImageDisplay src={`https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} alt={`tokyo image`} />
        <section className="about" id=" about">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia eveniet suscipit corporis possimus earum neque id iure libero obcaecati. Voluptates.</p>
        </section>
        <section className="contact" id=" contact">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out via email at <a href="mailto:contact@email.com">contact@email.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
export default Home
