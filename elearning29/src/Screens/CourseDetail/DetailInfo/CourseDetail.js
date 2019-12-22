import React, { Component } from "react";

class CourseDetail extends Component {
  render() {
    return (
      <div className="col-lg-9 mt-5 courseDetails__left">
        <h3>Node.js, Express &amp; MongoDB Dev to Deployment</h3>

        {/* Course Detail Header */}
        <div className="row mt-3 courseDetails__header">
          <div className="col-lg-3 col-md-6 my-2">
            <div className="media border-right h-100">
              <img className="iconbox mr-3" src="./img/30 (9).jpg" alt="..." />
              <div className="media-body">
                <span className="text-gray d-block text_gray">Instructor:</span>
                <a href="/" className="h6">
                  John Richi
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-2">
            <div className="border-right h-100">
              <span className="text_gray d-block">Categories:</span>
              <a href="/" className="h6">
                Development
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-2">
            <div className="border-right h-100">
              <span className="text_gray">Reviews:</span>
              <p className="mb-0">
                <i className="fas fa-star text_yellow small" />
                <i className="fas fa-star text_yellow small" />
                <i className="fas fa-star text_yellow small" />
                <i className="fas fa-star text_yellow small" />
                <i className="fas fa-star-half text_black small" />
                <span className="text_black">4.9</span>
                <span>(793)</span>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 my-2">
            <div className="text-md-right h-100">
              <h2 className="font-weight-bold text_green mb-2">$99.45</h2>
              <a className="btn_green text_white" href="/">
                Add To Cart
              </a>
            </div>
          </div>
        </div>

        {/* Course Detail Body */}
        <div className="card p-4 shadow_2 border-0 my-4 courseDetails__body">
          <h4>Features Includes:</h4>
          <ul className="list-inline mb-0 mt-2">
            <li className="list-inline-item my-2 pr-md-4">
              <i className="fa fa-headphones-alt text_green" />
              <span className="ml-2">246 lectures</span>
            </li>

            <li className="list-inline-item my-2 pr-md-4">
              <span className="lnr lnr-clock text_green" />
              <span className="ml-2">27.5 Hours</span>
            </li>

            <li className="list-inline-item my-2 pr-md-4">
              <span className="lnr lnr-user text_green" />
              <span className="ml-2">98,250 students entrolled</span>
            </li>

            <li className="list-inline-item my-2 pr-md-4">
              <i className="fa fa-sync text_green" />
              <span className="ml-2">Lifetime access</span>
            </li>

            <li className="list-inline-item my-2 pr-md-4">
              <i className="fa fa-crown text_green" />
              <span className="ml-2">Certificate of Completion</span>
            </li>

            <li className="list-inline-item my-2 pr-md-4">
              <i className="fa fa-crown text_green" />
              <span className="ml-2">
                30-Day Money-Back Guarantee of Completion
              </span>
            </li>
          </ul>
        </div>

        {/* Course Detail Footer */}
        <div className="col-12 mt-4 courseDetails__footer">
          <ul className="nav tab-line border-bottom mb-5" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active show"
                data-toggle="tab"
                href="/tabDescription"
                role="tab"
                aria-selected="true"
              >
                Description
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="/tabCurriculum"
                role="tab"
                aria-selected="false"
              >
                Curriculum
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="/tabInstructors"
                role="tab"
                aria-selected="false"
              >
                Instructors
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="/tabReviews"
                role="tab"
                aria-selected="false"
              >
                Reviews
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade active show"
              id="tabDescription"
              role="tabpanel"
            >
              <h4>Course Description</h4>
              <p>
                Investig ationes demons travge vunt lectores legee lrus quodk
                legunt saepius claritas est conctetur adip sicing. Dummy text of
                the printing and typesetting industry. Lorem Ipsum has been the
                industry standad dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it make type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting remaining essentially
                unchanged.
              </p>
              <p>
                Sed non mauris vitae erat consequat auctor eu in elit. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimen tum sit amet a augue. Sed non neque elit.
                Sed ut imperdiet nisi.
              </p>
              <div className="row mt-5">
                <div className="col-12">
                  <h4>What Will I Learn?</h4>
                </div>
                <div className="col-md-6 my-2">
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-check " />
                      Learn how to captivate your audience
                    </li>
                    <li>
                      <i className="fa fa-check " />
                      Get rid of negative self talk that brings you down before
                      your presentations
                    </li>
                    <li>
                      <i className="fa fa-check " />
                      Take your business / job to the next level
                    </li>
                    <li>
                      <i className="fa fa-check " />
                      Overcome the fear of public speaking
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 my-2">
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-check " />
                      Learn how to captivate your audience
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Get rid of negative self talk that brings you down before
                      your presentations
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Take your business / job to the next level
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Overcome the fear of public speaking
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 my-2">
                  <h4>Course Requirments</h4>
                  <ul className="list-unstyled list-style-icon list-icon-bullet">
                    <li>
                      <i className="fa fa-circle" />
                      Learn how to captivate your audience
                    </li>
                    <li>
                      <i className="fa fa-circle" />
                      Take your business / job to the next level
                    </li>
                    <li>
                      <i className="fa fa-circle" />
                      Overcome the fear of public speaking
                    </li>
                    <li>
                      <i className="fa fa-circle" />
                      Learn how to captivate your audience
                    </li>
                    <li>
                      <i className="fa fa-circle" />
                      Take your business / job to the next level
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 my-2">
                  <h4>Who is the Target Audience?</h4>
                  <ul className="list-unstyled list-style-icon list-icon-bullet">
                    <li>
                      <i className="fa fa-circle" />
                      Learn how to captivate your audience
                    </li>
                    <li>
                      <i className="fa fa-circle" />
                      Take your business / job to the next level
                    </li>
                    <li>
                      <i className="fa fa-circle" />
                      Overcome the fear of public speaking
                    </li>
                    <li>
                      <i className="fa fa-circle" />
                      Learn how to captivate your audience
                    </li>
                    <li>
                      <i className="fa fa-circle" />
                      Take your business / job to the next level
                    </li>
                  </ul>
                </div>
              </div>
              {/* END row*/}
            </div>
            {/* END tab-pane*/}
            <div className="tab-pane fade" id="tabCurriculum" role="tabpanel">
              <div id="accordionCurriculum">
                <div className="accordion-item list-group mb-3">
                  <div className="list-group-item bg-light curriculumButton">
                    <a
                      className="row"
                      href="/accordionCurriculum_1"
                      data-toggle="collapse"
                      aria-expanded="true"
                    >
                      <span className="col-9 col-md-8">
                        <span className="accordion__icon mr-2">
                          <i className="fa fa-plus" />
                          <i className="fa fa-minus" />
                        </span>
                        <span className="h6 d-inline accordion_left">
                          Getting Started
                        </span>
                      </span>
                      <span className="col-2 d-none d-md-block text-right">
                        6 Lectures
                      </span>
                      <span className="col-3 col-md-2 text-right">20:20</span>
                    </a>
                  </div>
                  <div
                    id="accordionCurriculum_1"
                    className="collapse show text_gray curriculumItem"
                    data-parent="/accordionCurriculum"
                  >
                    <div className="list-group-item">
                      <span className="row">
                        <a className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Introduction To Getting Started Section
                        </a>
                        <span className="col-2 d-none d-md-block text-right">
                          <a
                            href="https://www.youtube.com/embed/nrJtHemSPW4?rel=0"
                            data-fancybox
                            className="text_green"
                          >
                            Preview
                          </a>
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          00:36
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <a className="col-9 col-md-8" href="/">
                          <i className="fa fa-file small text_green  small mr-1" />
                          Your First Webpage
                        </a>
                        <span className="col-2 d-none d-md-block text-right">
                          <a
                            href="https://www.youtube.com/embed/nrJtHemSPW4?rel=0"
                            data-fancybox
                            className="text_green"
                          >
                            Preview
                          </a>
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          2:36
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Creating A Full Webpage
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          7:12
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-copy small text_green small mr-1 " />
                          Accessing Elements - Files
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Responding To A Click
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Changing Website Content - Files
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* END accordion-item */}
                <div className="accordion-item list-group mb-3">
                  <div className="list-group-item bg-light curriculumButton">
                    <a
                      className="row collapsed"
                      href="/accordionCurriculum_2"
                      data-toggle="collapse"
                      aria-expanded="true"
                    >
                      <span className="col-9 col-md-8">
                        <span className="accordion__icon  mr-2">
                          <i className="fa fa-plus" />
                          <i className="fa fa-minus" />
                        </span>
                        <span className="h6 d-inline accordion_left">
                          HTML 5
                        </span>
                      </span>
                      <span className="col-2 d-none d-md-block text-right">
                        19 Lectures
                      </span>
                      <span className="col-3 col-md-2 text-right">2:37:10</span>
                    </a>
                  </div>
                  <div
                    id="accordionCurriculum_2"
                    className="collapse text_gray curriculumItem"
                    data-parent="/accordionCurriculum"
                  >
                    <div className="list-group-item">
                      <span className="row">
                        <a className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Introduction To Getting Started Section
                        </a>
                        <span className="col-2 d-none d-md-block text-right">
                          <a
                            href="https://www.youtube.com/embed/nrJtHemSPW4?rel=0"
                            data-fancybox
                            className="text_green"
                          >
                            Preview
                          </a>
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          00:36
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <a className="col-9 col-md-8" href="/">
                          <i className="fa fa-file small text_green  small mr-1" />
                          Your First Webpage
                        </a>
                        <span className="col-2 d-none d-md-block text-right">
                          <a
                            href="https://www.youtube.com/embed/nrJtHemSPW4?rel=0"
                            data-fancybox
                            className="text_green"
                          >
                            Preview
                          </a>
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          2:36
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Creating A Full Webpage
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          7:12
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-copy small text_green small mr-1 " />
                          Accessing Elements - Files
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Responding To A Click
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Changing Website Content - Files
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* END accordion-item */}
                <div className="accordion-item list-group mb-3">
                  <div className="list-group-item bg-light curriculumButton">
                    <a
                      className="row collapsed"
                      href="/accordionCurriculum_3"
                      data-toggle="collapse"
                      aria-expanded="true"
                    >
                      <span className="col-9 col-md-8">
                        <span className="accordion__icon  mr-2">
                          <i className="fa fa-plus" />
                          <i className="fa fa-minus" />
                        </span>
                        <span className="h6 d-inline accordion_left">
                          Bootstrap 4
                        </span>
                      </span>
                      <span className="col-2 d-none d-md-block text-right">
                        8 Lectures
                      </span>
                      <span className="col-3 col-md-2 text-right">40:40</span>
                    </a>
                  </div>
                  <div
                    id="accordionCurriculum_3"
                    className="collapse text_gray curriculumItem"
                    data-parent="/accordionCurriculum"
                  >
                    <div className="list-group-item">
                      <span className="row">
                        <a className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Introduction To Getting Started Section
                        </a>
                        <span className="col-2 d-none d-md-block text-right">
                          <a
                            href="https://www.youtube.com/embed/nrJtHemSPW4?rel=0"
                            data-fancybox
                            className="text_green"
                          >
                            Preview
                          </a>
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          00:36
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <a className="col-9 col-md-8" href="/">
                          <i className="fa fa-file small text_green  small mr-1" />
                          Your First Webpage
                        </a>
                        <span className="col-2 d-none d-md-block text-right">
                          <a
                            href="https://www.youtube.com/embed/nrJtHemSPW4?rel=0"
                            data-fancybox
                            className="text_green"
                          >
                            Preview
                          </a>
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          2:36
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Creating A Full Webpage
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          7:12
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-copy small text_green small mr-1 " />
                          Accessing Elements - Files
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Responding To A Click
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Changing Website Content - Files
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* END accordion-item */}
                <div className="accordion-item list-group mb-3">
                  <div className="list-group-item bg-light curriculumButton">
                    <a
                      className="row collapsed"
                      href="/accordionCurriculum_4"
                      data-toggle="collapse"
                      aria-expanded="true"
                    >
                      <span className="col-9 col-md-8">
                        <span className="accordion__icon  mr-2">
                          <i className="fa fa-plus" />
                          <i className="fa fa-minus" />
                        </span>
                        <span className="h6 d-inline accordion_left">
                          JavaScript: The Tricky Stuff
                        </span>
                      </span>
                      <span className="col-2 d-none d-md-block text-right">
                        12 Lectures
                      </span>
                      <span className="col-3 col-md-2 text-right">1:20:40</span>
                    </a>
                  </div>
                  <div
                    id="accordionCurriculum_4"
                    className="collapse text_gray curriculumItem"
                    data-parent="/accordionCurriculum"
                  >
                    <div className="list-group-item">
                      <span className="row">
                        <a className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Introduction To Getting Started Section
                        </a>
                        <span className="col-2 d-none d-md-block text-right">
                          <a
                            href="https://www.youtube.com/embed/nrJtHemSPW4?rel=0"
                            data-fancybox
                            className="text_green"
                          >
                            Preview
                          </a>
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          00:36
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <a className="col-9 col-md-8" href="/">
                          <i className="fa fa-file small text_green  small mr-1" />
                          Your First Webpage
                        </a>
                        <span className="col-2 d-none d-md-block text-right">
                          <a
                            href="https://www.youtube.com/embed/nrJtHemSPW4?rel=0"
                            data-fancybox
                            className="text_green"
                          >
                            Preview
                          </a>
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          2:36
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Creating A Full Webpage
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          7:12
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-copy small text_green small mr-1 " />
                          Accessing Elements - Files
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Responding To A Click
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                    <div className="list-group-item">
                      <span className="row">
                        <span className="col-9 col-md-8" href="/">
                          <i className="fa fa-play small text_green mr-1 " />
                          Changing Website Content - Files
                        </span>
                        <span className="col-3 col-md-2 ml-auto text-right">
                          4:07
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* END accordion-item */}
              </div>
              {/* END accordion*/}
            </div>
            {/* END tab-pane */}
            <div className="tab-pane fade" id="tabInstructors" role="tabpanel">
              <h4 className="mb-4">About Instructors</h4>
              <div className="border-bottom mb-4 pb-4">
                <div className="d-md-flex mb-4">
                  <a href="/">
                    <img
                      className="iconbox iconbox_xl"
                      src="./img/30 (1).jpg"
                      alt="..."
                    />
                  </a>
                  <div className="media-body ml-md-4 mt-4 mt-md-0">
                    <h6>Hasan Jubayer</h6>
                    <p className="mb-2">
                      <i className="fa fa-globe mr-2" /> Web Developer and
                      Instructor
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item mb-2">
                        <i className="lnr lnr-user mr-1" />
                        147570 studends
                      </li>
                      <li className="list-inline-item mb-2">
                        <i className="fa fa-book-open text_gray mr-1" />
                        20 Courses
                      </li>
                      <li className="list-inline-item mb-2">
                        <i className="fa fa-star text_yellow text-warning mr-1" />
                        4.9 Average Rating (4578)
                      </li>
                    </ul>
                    <a href="/" className="btn_outline_green btn_border">
                      View Profile
                    </a>
                  </div>
                </div>
                <h5>Experience as Web Developer</h5>
                <p>
                  Investig ationes demons travge vunt lectores legee lrus quodk
                  legunt saepius claritas est conctetur adip sicing. Dummy text
                  of the printing and typesetting industry. Lorem Ipsum has been
                  the industry standad dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it make
                  type specimen book. It has survived not only five centuries.
                </p>
              </div>
              <div className="border-bottom mb-4 pb-5">
                <div className="d-md-flex mb-4">
                  <a href="/">
                    <img
                      className="iconbox iconbox_xl"
                      src="./img/30 (10).jpg"
                      alt="..."
                    />
                  </a>
                  <div className="media-body ml-md-4 mt-4 mt-md-0">
                    <h4>Hasan Jubayer</h4>
                    <p className="mb-2">
                      <i className="fa fa-globe mr-2" /> Web Developer and
                      Instructor
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item mb-2">
                        <i className="lnr lnr-user mr-1" />
                        147570 studends
                      </li>
                      <li className="list-inline-item mb-2">
                        <i className="fa fa-book-open text_gray mr-1" />
                        20 Courses
                      </li>
                      <li className="list-inline-item mb-2">
                        <i className="fa fa-star text_yellow text-warning mr-1" />
                        4.7 Average Rating (4578)
                      </li>
                    </ul>
                    <a href="/" className="btn_outline_green btn_border">
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* END tab-pane */}
            <div className="tab-pane fade" id="tabReviews" role="tabpanel">
              <h4 className="mb-4">Students Feedback</h4>
              <div className="row px-0 align-items-center border p-4">
                <div className="col-md-4 text-center">
                  <h1 className="display-4  mb-0 text_green">4.70</h1>
                  <p className="my-2">
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                  </p>
                  <p className="mb-0">Average Rating</p>
                </div>
                <div className="col-md-8">
                  <div className="d-flex align-items-center mb-2">
                    <div className="width-7rem text-light d-none d-sm-block mr-3">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                    </div>
                    <div
                      className="progress flex-auto mr-3"
                      style={{ height: 10 }}
                    >
                      <div
                        className="progress-bar bg_green"
                        style={{ width: "100%" }}
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={20}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>90%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="width-7rem text-light d-none d-sm-block mr-3">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star" />
                    </div>
                    <div
                      className="progress flex-auto mr-3"
                      style={{ height: 10 }}
                    >
                      <div
                        className="progress-bar bg_green"
                        style={{ width: "80%" }}
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={20}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>87%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="width-7rem text-light d-none d-sm-block mr-3">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div
                      className="progress flex-auto mr-3"
                      style={{ height: 10 }}
                    >
                      <div
                        className="progress-bar bg_green"
                        style={{ width: "60%" }}
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={20}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>34%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="width-7rem text-light d-none d-sm-block mr-3">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div
                      className="progress flex-auto mr-3"
                      style={{ height: 10 }}
                    >
                      <div
                        className="progress-bar bg_green"
                        style={{ width: "40%" }}
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={20}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>12%</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="width-7rem text-light d-none d-sm-block mr-3">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <div
                      className="progress flex-auto mr-3"
                      style={{ height: 10 }}
                    >
                      <div
                        className="progress-bar bg_green"
                        style={{ width: "10%" }}
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={20}
                        aria-valuemax={100}
                      />
                    </div>
                    <span>2%</span>
                  </div>
                </div>
              </div>
              <div className="row border-bottom mx-0 py-4 mt-4">
                <div className="col-md-4 my-2 media">
                  <img
                    className="iconbox iconbox_xl"
                    src="./img/30 (1).jpg"
                    alt="..."
                  />
                  <div className="media-body ml-4">
                    <small className="text-gray">7 min ago</small>
                    <h6>Anthony Forsey</h6>
                  </div>
                </div>
                <div className="col-md-8 my-2">
                  <p>
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                  </p>
                  <p className="font-size-18">Awesome course</p>
                  <p>
                    Investig ationes demons travge vunt lectores legee lrus
                    quodk legunt saepius was claritas kesty they conctetur they
                    kedadip lectores legee sicing.
                  </p>
                </div>
              </div>
              {/* END row*/}
              <div className="row border-bottom mx-0 py-4 mt-4">
                <div className="col-md-4 my-2 media">
                  <img
                    className="iconbox iconbox_xl"
                    src="./img/30 (9).jpg"
                    alt="..."
                  />
                  <div className="media-body ml-4">
                    <small className="text-gray">1 mon ago</small>
                    <h6>Justin Nam</h6>
                  </div>
                </div>
                <div className="col-md-8 my-2">
                  <p className="text-light">
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </p>
                  <p className="font-size-18">Test review lol</p>
                  <p>
                    Investig ationes demons travge vunt lectores legee lrus
                    quodk legunt saepius was claritas kesty.
                  </p>
                </div>
              </div>
              {/* END row*/}
              <div className="row border-bottom mx-0 py-4 mt-4">
                <div className="col-md-4 my-2 media">
                  <div className="iconbox iconbox_xl border">MD</div>
                  <div className="media-body ml-4">
                    <small className="text-gray">3 Mon ago</small>
                    <h6>Murir Dokan</h6>
                  </div>
                </div>
                <div className="col-md-8 my-2">
                  <p>
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                  </p>
                  <p className="font-size-18">
                    This is a title of review. the developer suffer from lot's
                    of vitamin. what about you?
                  </p>
                  <p>
                    Investig ationes demons travge vunt lectores legee lrus
                    quodk legunt saepius was claritas kesty they conctetur they
                    kedadip lectores legee sicing.
                  </p>
                </div>
              </div>
              {/* END row*/}
              <div className="row border-bottom mx-0 py-4 mt-4">
                <div className="col-md-4 my-2 media">
                  <img className="iconbox iconbox_xl" src="./img/51.jpg" alt="..." />
                  <div className="media-body ml-4">
                    <small className="text-gray">1 year ago</small>
                    <h6>John Doe</h6>
                  </div>
                </div>
                <div className="col-md-8 my-2">
                  <p>
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                    <i className="fas fa-star text-warning" />
                  </p>
                  <p className="font-size-18">Best course ever</p>
                  <p>
                    Investig ationes demons travge vunt lectores legee lrus
                    quodk legunt saepius was claritas kesty they conctetur they
                    kedadip lectores legee sicing. Investig ationes demons
                    travge vunt lectores legee lrus quodk legunt saepius was
                    claritas kesty they conctetur they kedadip lectores legee
                    sicing.
                  </p>
                </div>
              </div>
              {/* END row*/}
              <div className="text-center mt-5">
                <a href="/" className="btn_green">
                  <i className="fa fa-sync" />
                  Load More
                </a>
              </div>
            </div>
            {/* END tab-pane */}
          </div>
          {/* END tab-content*/}
        </div>
      </div>
    );
  }
}

export default CourseDetail;
