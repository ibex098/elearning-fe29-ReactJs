import React, { Component } from "react";

//Sass
import "../../sass/Layout/_learning.scss";
import "../../sass/Layout/_logo.scss";
import "../../sass/Layout/_admintrator.scss";
import "../../sass/Layout/_campusNew.scss";
import "../../sass/Layout/_banner.scss";

class HomeChild extends Component {
  render() {
    return (
      <div>

        {/* Course */}

        {/* Learning */}
        <section className="learning py-5 my-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-md-4">
                <h2 className="mb-4">Learning at Educati</h2>
                <div className="bottom_line container" />
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 learning__content"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "slideInUp"
                }}
              >
                <div className="media">
                  <div className="learning__icon rounded font-size-24 text-white mt-2">
                    <span className="lnr lnr-pencil" />
                  </div>
                  <div className="learning__body media-body ml-4">
                    <h4 className="mt-0 mb-3">A Valuable Certificate</h4>
                    <p>
                      Investig ationes demons travg vunt lectores legere lrus
                      quod legunt saepius claritas est.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 learning__content"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "slideInUp"
                }}
              >
                <div className="media">
                  <div className="learning__icon rounded font-size-24 text-white mt-2">
                    <i className="fa fa-medal" />
                  </div>
                  <div className="learning__body media-body ml-4">
                    <h4 className="mt-0 mb-3">Credit-Eligible</h4>
                    <p>
                      Investig ationes demons travg vunt lectores legere lrus
                      quod legunt saepius claritas est.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 learning__content"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "slideInUp"
                }}
              >
                <div className="media">
                  <div className="learning__icon rounded font-size-24 text-white mt-2">
                    <span className="lnr lnr-flag" />
                  </div>
                  <div className="learning__body media-body ml-4">
                    <h4 className="mt-0 mb-3">Professional Certificate</h4>
                    <p>
                      Investig ationes demons travg vunt lectores legere lrus
                      quod legunt saepius claritas est.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 learning__content"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "slideInUp"
                }}
              >
                <div className="media">
                  <div className="learning__icon rounded font-size-24 text-white mt-2">
                    <span className="lnr lnr-magic-wand" />
                  </div>
                  <div className="learning__body media-body ml-4">
                    <h4 className="mt-0 mb-3">MicroMasters Programs</h4>
                    <p>
                      Investig ationes demons travg vunt lectores legere lrus
                      quod legunt saepius claritas est.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 learning__content"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "slideInUp"
                }}
              >
                <div className="media">
                  <div className="learning__icon rounded font-size-24 text-white mt-2">
                    <span className="lnr lnr-book" />
                  </div>
                  <div className="learning__body media-body ml-4">
                    <h4 className="mt-0 mb-3">XSeries Programs</h4>
                    <p>
                      Investig ationes demons travg vunt lectores legere lrus
                      quod legunt saepius claritas est.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 mt-5 learning__content"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "slideInUp"
                }}
              >
                <div className="media">
                  <div className="learning__icon rounded font-size-24 text-white mt-2">
                    <i className="fa fa-pencil-ruler" />
                  </div>
                  <div className="learning__body media-body ml-4">
                    <h4 className="mt-0 mb-3">Take The Tour</h4>
                    <p>
                      Investig ationes demons travg vunt lectores legere lrus
                      quod legunt saepius claritas est.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo */}
        <section className="logo">
          <div className="container">
            <div className="row text-center align-items-center">
              <div className="col-lg-3 col-sm-4">
                <img src="./img/2.png" alt="..." />
              </div>
              <div className="col-lg-3 col-sm-4">
                <img src="./img/1.png" alt="..." />
              </div>
              <div className="col-lg-3 col-sm-4">
                <img src="./img/4.png" alt="..." />
              </div>
              <div className="col-lg-3 col-sm-4">
                <img src="./img/5.png" alt="..." />
              </div>
            </div>
          </div>
        </section>

        {/* admintrator */}
        <section className="admintrator py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 admintrator__left">
                <img src="./img/1_2.jpg" alt="..." />
              </div>
              <div className="col-md-6 mt-5 mb-5 mb-md-0 pl-lg-5 admintrator__right">
                <p className="mb-4">
                  I learned most of my programming skills and database
                  management skills and web design skills through self-study and
                  the material available on Educati.
                </p>
                <h6>
                  <span>Iqbal Mahmud,</span> Database Administrator
                </h6>
                <button href="." className="btn_green btn-md mt-4">
                  All Testimonials
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CamPus New */}
        <section className="campusNew py-5">
          <div className="container">
            <h1 className="text-center">Campus News</h1>
            <div className="bottom_line container mt-3 mb-5" />
            <div className="row">
              <div className="col-md-6 campus__left">
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src="./img/1.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body col-md-8 p-4">
                      <p className="card-text">June 9, 2019</p>
                      <a href=".">
                        <h5 className="card-title campus__title">
                          Kudiyattam: Sanskrit Theater by the Napathya Troupe
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src="./img/2.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body col-md-8 p-4">
                      <p className="card-text">June 12, 2019</p>
                      <a href=".">
                        <h5 className="card-title campus__title">
                          How to become a math super hero by
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb-3" style={{ maxWidth: 540 }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src="./img/3.jpg" className="card-img" alt="..." />
                    </div>
                    <div className="card-body col-md-8 p-4">
                      <p className="card-text">June 17, 2019</p>
                      <a href=".">
                        <h5 className="card-title campus__title">
                          Increase your English skill with Anthony Brooks
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 campus__right">
                <div className="card">
                  <img src="./img/10.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-text text_1">20 July 2019</p>
                    <a href=".">
                      <h5 className="card-title campus__title">
                        Hidden in Plain Sight: Family Secrets and American
                        History
                      </h5>
                    </a>
                    <p className="card-text">
                      Investig ationes demons trave wanrunt the lectore legere
                      kliushy was aequod legunt saeph claritas.
                    </p>
                    <button className="btn_outline_green">Go somewhere</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner */}
        <section className="myBanner">
          <div className="container">
            <div className="banner__content row py-5">
              <div className="col-md-6 mx-auto text-center">
                <h2 className="text-white mb-4">Become an Instructor</h2>
                <p>
                  Share your knowledge and reach millions of students across the
                  globe. Join the world's largest online learning marketplace.
                </p>
                <button className="btn_white-green">Start Teaching</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeChild;
