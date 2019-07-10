import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewsArticle extends Component {
  render() {
    return (
      <div>
        {/*************************************
					Latest News Start
			**************************************/}
        <section className="tg-sectionspace tg-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
                <div className="tg-sectionhead">
                  <div className="tg-heading">
                    <h2>Latest News &amp; Articles</h2>
                  </div>
                  <div className="tg-description">
                    <p>
                      Consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore etaiate dolore magna aliqua. Ut enim
                      ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip exea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6 col-sm-12 col-md-4 col-lg-4">
                  <article className="tg-news">
                    <figure className="tg-newsimg">
                      <span className="tg-themetag tg-featuredtag">
                        <i className="icon-bookmark" />
                      </span>
                      <a href="#">
                        <img
                          src="images/news/img-01.jpg"
                          alt="image description"
                        />
                      </a>
                      <figcaption>
                        <Link className="tg-btnreadmore" to="newsdetail">
                          Read Full Article
                        </Link>
                      </figcaption>
                    </figure>
                    <div className="tg-newscontentbox">
                      <figure className="tg-authorimg">
                        <Link to="#">
                          <img
                            src="images/author/img-01.jpg"
                            alt="image description"
                          />
                        </Link>
                      </figure>
                      <div className="tg-newscontent">
                        <div className="tg-newstitle">
                          <h3>
                            <Link to="newsdetail">
                              Don't You Love The Patches
                            </Link>
                          </h3>
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
                            Consectetur adipisicg elitae sied doita eiusmod
                            adunt ut labore dolore magna.
                          </p>
                        </div>
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
                              <time dateTime="2017-12-12">June 27, 2017</time>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-xs-6 col-sm-12 col-md-4 col-lg-4">
                  <article className="tg-news">
                    <figure className="tg-newsimg">
                      <span className="tg-themetag tg-featuredtag">
                        <i className="icon-bookmark" />
                      </span>
                      <Link to="#">
                        <img
                          src="images/news/img-02.jpg"
                          alt="image description"
                        />
                      </Link>
                      <figcaption>
                        <Link className="tg-btnreadmore" to="newsdetail">
                          Read Full Article
                        </Link>
                      </figcaption>
                    </figure>
                    <div className="tg-newscontentbox">
                      <figure className="tg-authorimg">
                        <Link to="#">
                          <img
                            src="images/author/img-02.jpg"
                            alt="image description"
                          />
                        </Link>
                      </figure>
                      <div className="tg-newscontent">
                        <div className="tg-newstitle">
                          <h3>
                            <Link to="newsdetail">
                              The Right Shoes For Every Occasion
                            </Link>
                          </h3>
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
                            Consectetur adipisicg elitae sied doita eiusmod
                            adunt ut labore dolore magna.
                          </p>
                        </div>
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
                              <time dateTime="2017-12-12">June 27, 2017</time>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="col-xs-6 col-sm-12 col-md-4 col-lg-4">
                  <article className="tg-news">
                    <figure className="tg-newsimg">
                      <span className="tg-themetag tg-featuredtag">
                        <i className="icon-bookmark" />
                      </span>
                      <Link to="#">
                        <img
                          src="images/news/img-03.jpg"
                          alt="image description"
                        />
                      </Link>
                      <figcaption>
                        <Link className="tg-btnreadmore" to="newsdetail">
                          Read Full Article
                        </Link>
                      </figcaption>
                    </figure>
                    <div className="tg-newscontentbox">
                      <figure className="tg-authorimg">
                        <Link to="#">
                          <img
                            src="images/author/img-03.jpg"
                            alt="image description"
                          />
                        </Link>
                      </figure>
                      <div className="tg-newscontent">
                        <div className="tg-newstitle">
                          <h3>
                            <Link to="newsdetail">
                              All Dressed Up And No Place To Go!
                            </Link>
                          </h3>
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
                            Consectetur adipisicg elitae sied doita eiusmod
                            adunt ut labore dolore magna.
                          </p>
                        </div>
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
                              <time dateTime="2017-12-12">June 27, 2017</time>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*************************************
					Latest News End
			**************************************/}
      </div>
    );
  }
}

export default NewsArticle;
