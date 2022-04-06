function Footer() {
    return (
        <div>
            <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="f-left-menu">
                <ul>
                  <li><a href>Home</a></li>
                  <li><a href>About Us </a></li>
                  <li><a href>Features</a></li>
                  <li><a href>Pricing</a></li>
                  <li><a href>Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-end">
              <div className="f-right-menu">
                <ul>
                  <li><a href><i className="fa fa-facebook-official" aria-hidden="true" /></a></li>
                  <li><a href><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
                  <li><a href><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                  <li><a href><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}
export default Footer