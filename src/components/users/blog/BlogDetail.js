import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogDetail extends Component {
  render() {
    return (
      <div>
        <div>
          {/*************************************
				Inner Page Banner Start
		**************************************/}
          <div className="tg-innerpagebanner">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <ol className="tg-breadcrumb">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="tg-active">news Detail</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/*************************************
				Inner Page Banner End
		**************************************/}
          {/*************************************
				Main Start
		**************************************/}
          <main id="tg-main" className="tg-main tg-haslayout">
            <div className="container">
              <div className="row">
                <div id="tg-twocolumns" className="tg-twocolumns">
                  <div className="col-xs-12 col-sm-7 col-md-8 col-lg-9 pull-right">
                    <div id="tg-content" className="tg-content">
                      <div className="tg-articlenewsdetail">
                        <article className="tg-news">
                          <figure className="tg-newsimg">
                            <span className="tg-themetag tg-featuredtag">
                              <i className="icon-bookmark" />
                            </span>
                            <img
                              src="images/news/img-10.jpg"
                              alt="image description"
                            />
                            <figcaption>
                              <ul className="tg-postmetadata">
                                <li>
                                  <Link to="#">
                                    <i className="fa fa-comment-o" />
                                    <span>357</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <i className="fa fa-calendar-check-o" />
                                    <time dateTime="2017-12-12">
                                      June 27, 2017
                                    </time>
                                  </Link>
                                </li>
                              </ul>
                            </figcaption>
                          </figure>
                          <div className="tg-newscontentbox">
                            <figure className="tg-authorimg">
                              <a href="#">
                                <img
                                  src="images/author/img-15.jpg"
                                  alt="image description"
                                />
                              </a>
                            </figure>
                            <div className="tg-newscontent">
                              <div className="tg-newstitle">
                                <h1>Don't You Love The Patches</h1>
                              </div>
                              <ul className="tg-themetags">
                                <li>
                                  <Link to="#">Frontpage Article</Link>
                                </li>
                                <li>
                                  <Link to="newsdetail">News</Link>
                                </li>
                              </ul>
                              <div className="tg-description">
                                <p>
                                  Consectetur adipisicg elitae sied doita
                                  eiusmod adunt ut labore dolore magna aliqua
                                  enim ad minim veniam quistrud exercitation
                                  ullamco laboris nisi ut aliquip ex ea commodo
                                  consequat aute irure dolor ina reprehenderit
                                  ini voluptate velit esse cillum dolore eu
                                  fugiat nulla pariatur. Excepteur sint occaecat
                                  cupidatat non proident, sunt in culpa
                                  quifficia deserunt mollit anim id est laborum
                                  perspiciatis unde omnis.
                                </p>
                                <blockquote>
                                  <q>
                                    Eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua ut enim ad minim veniam
                                    quis nostrud exercitation ullamco.
                                  </q>
                                </blockquote>
                                <p>
                                  Aiste natus error sit voluptatem accusantium
                                  doloremque laudantium, totam rem aperiam,
                                  eaque ipsa quae abeilloc inventore veritatis
                                  et quasi architecto beatae vitae dicta sunt
                                  explicabo. Nemo enim ipsam voluptatem quia
                                  voluptais sit aspernatur aut odit aut fugit,
                                  sed quia consequuntur magni.
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                        <div className="tg-posttagsshares">
                          <div className="tg-posttags">
                            <strong>Tags:</strong>
                            <ul className="tg-tags">
                              <li>
                                <Link className="tg-tag" to="#">
                                  Gadgets
                                </Link>
                              </li>
                              <li>
                                <Link className="tg-tag" to="#">
                                  Flying Drone
                                </Link>
                              </li>
                              <li>
                                <Link className="tg-tag" to="#">
                                  Smart Phones
                                </Link>
                              </li>
                              <li>
                                <Link className="tg-tag" to="#">
                                  Phones
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="tg-postshare">
                            <strong>Share:</strong>
                            <ul className="tg-socialicons">
                              <li className="tg-facebook">
                                <a
                                  href="https://www.facebook.com/"
                                  target="_blank"
                                >
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li className="tg-twitter">
                                <a href="https://twitter.com/" target="_blank">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li className="tg-linkedin">
                                <a
                                  href="https://www.linkedin.com/feed/"
                                  target="_blank"
                                >
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li className="tg-dribbble">
                                <a href="https://dribbble.com/" target="_blank">
                                  <i className="fa fa-dribbble" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="tg-postauthor">
                          <figure className="tg-authorimg">
                            <a to="#">
                              <img
                                src="images/author/img-06.jpg"
                                alt="image description"
                              />
                            </a>
                          </figure>
                          <div className="tg-postauthorcontent">
                            <div className="tg-authornamedesignation">
                              <h3>
                                <Link to="#">Esteban Defelice</Link>
                              </h3>
                              <span className="tg-authorsince">
                                Since: Sep 19, 2005
                              </span>
                            </div>
                            <ul className="tg-socialicons">
                              <li className="tg-facebook">
                                <a href="#">
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li className="tg-twitter">
                                <a href="#">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li className="tg-linkedin">
                                <a href="#">
                                  <i className="fa fa-linkedin" />
                                </a>
                              </li>
                              <li className="tg-dribbble">
                                <a href="#">
                                  <i className="fa fa-dribbble" />
                                </a>
                              </li>
                            </ul>
                            <div className="tg-description">
                              <p>
                                Consectetur adipisicg elitae sied doita eiusmod
                                adunt ut labore dolore magna aliqua enim ad
                                minim veniam quistrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat
                                aute irure dolor ina reprehenderit ini voluptate
                                velit esse cillum dolore eu fugiat nulla
                                pariatur.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="tg-box">
                          <div className="tg-boxtitle">
                            <h3>03 Comments</h3>
                          </div>
                          <ul id="tg-comments" className="tg-comments">
                            <li>
                              <div className="tg-commentbox">
                                <figure className="tg-authorimg">
                                  <a href="#">
                                    <img
                                      src="images/author/img-06.jpg"
                                      alt="image description"
                                    />
                                  </a>
                                </figure>
                                <div className="tg-commentdata">
                                  <a className="tg-btnreply" href="#">
                                    <i className="fa fa-reply" />
                                  </a>
                                  <div className="tg-authornamedesignation">
                                    <h3>
                                      <a href="#">Marinda Wedderburn</a>
                                    </h3>
                                    <span className="tg-authorsince">
                                      05 Min Ago
                                    </span>
                                  </div>
                                  <div className="tg-description">
                                    <p>
                                      Consectetur adipisicg elitae sied doita
                                      eiusmod adunt ut labore dolore magna
                                      aliqua enim ad minim veniam quistrud
                                      exercitation ullamco laboris nisi ut
                                      aliquip ex ea commodo consequat aute irure
                                      dolor ina reprehenderit ini voluptate
                                      velit esse cillum dolore eu fugiat nulla
                                      pariatur.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <ul className="tg-child">
                                <li>
                                  <div className="tg-commentbox">
                                    <figure className="tg-authorimg">
                                      <a href="#">
                                        <img
                                          src="images/author/img-07.jpg"
                                          alt="image description"
                                        />
                                      </a>
                                    </figure>
                                    <div className="tg-commentdata">
                                      <a className="tg-btnreply" href="#">
                                        <i className="fa fa-reply" />
                                      </a>
                                      <div className="tg-authornamedesignation">
                                        <h3>
                                          <a href="#">Dannie Rispoli</a>
                                        </h3>
                                        <span className="tg-authorsince">
                                          05 Min Ago
                                        </span>
                                      </div>
                                      <div className="tg-description">
                                        <p>
                                          Consectetur adipisicg elitae sied
                                          doita eiusmod adunt ut labore dolore
                                          magna aliqua enim ad minim veniam
                                          quistrud exercitation ullamco laboris
                                          nisi ut aliquip ex ea commodo
                                          consequat aute irure dolor ina
                                          reprehenderit ini voluptate velit esse
                                          cillum dolore eu fugiat nulla
                                          pariatur.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="tg-commentbox">
                                <figure className="tg-authorimg">
                                  <a href="#">
                                    <img
                                      src="images/author/img-08.jpg"
                                      alt="image description"
                                    />
                                  </a>
                                </figure>
                                <div className="tg-commentdata">
                                  <a className="tg-btnreply" href="#">
                                    <i className="fa fa-reply" />
                                  </a>
                                  <div className="tg-authornamedesignation">
                                    <h3>
                                      <a href="#">Susanne Mcclaine</a>
                                    </h3>
                                    <span className="tg-authorsince">
                                      05 Min Ago
                                    </span>
                                  </div>
                                  <div className="tg-description">
                                    <p>
                                      Consectetur adipisicg elitae sied doita
                                      eiusmod adunt ut labore dolore magna
                                      aliqua enim ad minim veniam quistrud
                                      exercitation ullamco laboris nisi ut
                                      aliquip ex ea commodo consequat aute irure
                                      dolor ina reprehenderit ini voluptate
                                      velit esse cillum dolore eu fugiat nulla
                                      pariatur.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="tg-box">
                          <div className="tg-boxtitle">
                            <h3>Leave Your Feedback</h3>
                          </div>
                          <form className="tg-themeform tg-formfeedback">
                            <fieldset>
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Name*"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  placeholder="Email* (Your email address will not be published.)"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="subject"
                                  className="form-control"
                                  placeholder="Subject"
                                />
                              </div>
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  placeholder="Comment"
                                  defaultValue={""}
                                />
                              </div>
                              <button
                                className="tg-btn tg-active"
                                type="submit"
                              >
                                Submit
                              </button>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-5 col-md-4 col-lg-3 pull-left">
                    <aside id="tg-sidebar" className="tg-sidebar">
                      <div className="tg-widget">
                        <form className="tg-themeform tg-themeformsearch">
                          <fieldset>
                            <input
                              type="search"
                              className="form-control"
                              name="searchhere"
                              placeholder="Search Here"
                            />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                          </fieldset>
                        </form>
                      </div>
                      <div className="tg-widget">
                        <div className="tg-widgettitle">
                          <h3>Categories</h3>
                        </div>
                        <div className="tg-widgetcontent">
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="allfabric"
                              name="fabric"
                              defaultValue="All"
                              defaultChecked
                            />
                            <label htmlFor="allfabric">
                              <span>All</span>
                              <span>(256)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="basketweave"
                              name="fabric"
                              defaultValue="Fashion"
                            />
                            <label htmlFor="basketweave">
                              <span>Fashion</span>
                              <span>(521)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="batik"
                              name="fabric"
                              defaultValue="Lifestyle"
                            />
                            <label htmlFor="batik">
                              <span>Lifestyle</span>
                              <span>(314)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="bedfordcord"
                              name="fabric"
                              defaultValue="Frontpage"
                            />
                            <label htmlFor="bedfordcord">
                              <span>Frontpage</span>
                              <span>(65)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="broadcloth"
                              name="fabric"
                              defaultValue="DIY"
                            />
                            <label htmlFor="broadcloth">
                              <span>DIY</span>
                              <span>(127)</span>
                            </label>
                          </span>
                          <span className="tg-radio">
                            <input
                              type="radio"
                              id="canvas"
                              name="fabric"
                              defaultValue="Craft"
                            />
                            <label htmlFor="canvas">
                              <span>Craft</span>
                              <span>(621)</span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="tg-widget">
                        <div className="tg-widgettitle">
                          <h3>Popular Posts</h3>
                        </div>
                        <div className="tg-widgetcontent">
                          <ul>
                            <li>
                              <figure>
                                <a href="#">
                                  <img
                                    src="images/author/img-10.jpg"
                                    alt="image description"
                                  />
                                </a>
                              </figure>
                              <h4>
                                <Link to="#">Live Stress Free</Link>
                              </h4>
                              <div className="tg-posttags">
                                <Link className="tg-tag" to="#">
                                  DIY
                                </Link>
                                <Link className="tg-tag" to="#">
                                  Lifestyle
                                </Link>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <Link to="#">
                                  <img
                                    src="images/author/img-11.jpg"
                                    alt="image description"
                                  />
                                </Link>
                              </figure>
                              <h4>
                                <Link to="#">Day Dream Off Now</Link>
                              </h4>
                              <div className="tg-posttags">
                                <Link className="tg-tag" to="#">
                                  Lifestyle
                                </Link>
                                <Link className="tg-tag" to="#">
                                  Craft
                                </Link>
                                <Link className="tg-tag" to="#">
                                  DIY
                                </Link>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <Link to="#">
                                  <img
                                    src="images/author/img-12.jpg"
                                    alt="image description"
                                  />
                                </Link>
                              </figure>
                              <h4>
                                <Link to="#">Top 10 Blazers in 2017</Link>
                              </h4>
                              <div className="tg-posttags">
                                <Link className="tg-tag" to="#">
                                  Fashion
                                </Link>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <a href="#">
                                  <img
                                    src="images/author/img-13.jpg"
                                    alt="image description"
                                  />
                                </a>
                              </figure>
                              <h4>
                                <Link to="#">Bring Your Inner Diva</Link>
                              </h4>
                              <div className="tg-posttags">
                                <Link className="tg-tag" to="#">
                                  Fashion
                                </Link>
                                <Link className="tg-tag" to="#">
                                  Lifestyle
                                </Link>
                              </div>
                            </li>
                            <li>
                              <figure>
                                <a href="#">
                                  <img
                                    src="images/author/img-14.jpg"
                                    alt="image description"
                                  />
                                </a>
                              </figure>
                              <h4>
                                <Link to="#">Life Full of Joy</Link>
                              </h4>
                              <div className="tg-posttags">
                                <Link className="tg-tag" to="#">
                                  Lifestyle
                                </Link>
                                <Link className="tg-tag" to="#">
                                  Fashion
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tg-widget">
                        <div className="tg-advertisement">
                          <a href="#">
                            <img
                              src="images/adds/img-01.jpg"
                              alt="image description"
                            />
                          </a>
                          href{" "}
                        </div>
                      </div>
                      <div className="tg-widget tg-widgetauthors">
                        <div className="tg-widgettitle">
                          <h3>Popular Author</h3>
                        </div>
                        <div className="tg-widgetcontent">
                          <ul>
                            <li>
                              <figure>
                                <a href="#">
                                  <img
                                    src="images/author/img-01.jpg"
                                    alt="image description"
                                  />
                                </a>
                              </figure>
                              <h4>
                                <Link to="#">Karol Claybrooks</Link>
                              </h4>
                              <span className="tg-authorsince">
                                Since: Jun 27, 1986
                              </span>
                            </li>
                            <li>
                              <figure>
                                <a href="#">
                                  <img
                                    src="images/author/img-02.jpg"
                                    alt="image description"
                                  />
                                </a>
                              </figure>
                              <h4>
                                <Link to="#">Dannie Rispoli</Link>
                              </h4>
                              <span className="tg-authorsince">
                                Since: Apr 22, 1990
                              </span>
                            </li>
                            <li>
                              <figure>
                                <a href="#">
                                  <img
                                    src="images/author/img-03.jpg"
                                    alt="image description"
                                  />
                                </a>
                              </figure>
                              <h4>
                                <Link to="#">Kimberli Conant</Link>
                              </h4>
                              <span className="tg-authorsince">
                                Since: Aug 12, 1994
                              </span>
                            </li>
                            <li>
                              <figure>
                                <a href="#">
                                  <img
                                    src="images/author/img-04.jpg"
                                    alt="image description"
                                  />
                                </a>
                              </figure>
                              <h4>
                                <Link to="#">Esteban Defelice</Link>
                              </h4>
                              <span className="tg-authorsince">
                                Since: Sep 19, 2005
                              </span>
                            </li>
                            <li>
                              <figure>
                                <a href="#">
                                  <img
                                    src="images/author/img-05.jpg"
                                    alt="image description"
                                  />
                                </a>
                              </figure>
                              <h4>
                                <Link to="#">Susanne Mcclaine</Link>
                              </h4>
                              <span className="tg-authorsince">
                                Since: Nov 11, 2007
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/*************************************
				Main End
		**************************************/}
        </div>
      </div>
    );
  }
}

export default BlogDetail;
