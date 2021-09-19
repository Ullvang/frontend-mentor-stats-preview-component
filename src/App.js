import "./App.css";
import "./App.responsive.css";
import imageHeaderMobile from "./images/image-header-mobile.jpg";

function App() {
  return (
    <>
      <main className="App">
        <section id="card">
          {/* <div id="image-contianer">
            <div id="image-overlay"></div> */}
          <img src={imageHeaderMobile} alt="people sitting around table" />
          {/* </div> */}
          <div id="info-box">
            <h1>
              Get <span id="purple">insights</span> that help your business
              grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <div id="highlights">
              <div>
                <p>
                  <span>10k+</span> COMPANIES
                </p>
              </div>
              <div>
                <p>
                  <span>314</span> TEMPLATES
                </p>
              </div>
              <div>
                <p>
                  <span>12M+</span> QUERIES
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="attribution">
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by <a href="/">Jon Erik Ullvang</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
