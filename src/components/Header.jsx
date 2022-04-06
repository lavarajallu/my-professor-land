function Header() {
  return (
    <div>
        <header className="fixed-top">
        <div className="header-top">
          <div className="container">
            <div className="header-top-area">
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  <ul className="left">
                    <li>
                      <a href="#"><i className="fa fa-phone" aria-hidden="true" /> +800-123-4567 6587</a>
                    </li>
                    <li>
                      <i className="fa fa-clock-o" aria-hidden="true" /> 9:30am - 6:30pm Mon - Sun
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12 d-flex justify-content-end align-items-center">
                  <div className="right-login">
                    <a href="#">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand me-auto" href="#"><img src="imges/logo.png" alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                  <i className="fa fa-bars" aria-hidden="true" />
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav d-flex mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Feature</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
export default Header