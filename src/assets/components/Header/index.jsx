
const Header = () => {
  return (
    <div className="container header-container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 header-left">
            <h1>Juan Salainti</h1>
            <h2>CEO Creative Circle</h2>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 header-right">
            <ul className="icons no-print">
              <li>
                <a
                  href="https://github.com/jmichaes21"
                  className="button button--sacnite button--round-l"
                >
                  <i className="fab fa-github" title="Github link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/jmichaes"
                  className="button button--sacnite button--round-l"
                >
                  <i className="fab fa-instagram" title="Instagram link" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/juan-salainti-2b738929a"
                  className="button button--sacnite button--round-l"
                >
                  <i className="fab fa-linkedin" title="Linkedin link" />
                </a>
              </li>
              <li>
                <a href="#" className="button button--sacnite button--round-l">
                  <i className="fab fa-twitter" title="Twitter link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/hwannn"
                  className="button button--sacnite button--round-l"
                >
                  <i className="fab fa-youtube" title="Youtube link" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.itsgoingto.be"
                  className="button button--sacnite button--round-l"
                >
                  <i className="fas fa-globe" title="itsgoingto.be" />
                </a>
              </li>
            </ul>
            <p>
              Email:{" "}
              <a href="thinkaboutjuu@gmail.com">thinkaboutjuu@gmail.com</a>
            </p>
            <p>
              Web:
              <a href="//www.github.com/jmichaes21" className>
                www.github.com/jmichaes21
              </a>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Header