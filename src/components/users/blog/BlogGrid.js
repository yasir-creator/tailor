import React, { Component } from "react";
import { Link } from "react-router-dom";

class BlogGrid extends Component {
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
                    <li className="tg-active">blog Grid</li>
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
                    <div className="row">
                      <div id="tg-content" className="tg-content">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="tg-pagehead">
                            <h2>Latest News &amp; Articles</h2>
                            <div className="tg-description">
                              <p>
                                Consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt utnalo labore dolore magna
                                aliquia minimate veniaam quis nostrud
                                exercitation ullamco laboris nisi ut aliquip
                                commodo consequat auis autetatio irure dolor
                                inceri reprderit voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur sint occaecat.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="tg-articlenews tg-articlenewsgrid">
                          <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                            <article className="tg-news">
                              <figure className="tg-newsimg">
                                <span className="tg-themetag tg-featuredtag">
                                  <i className="icon-bookmark" />
                                </span>
                                <a href="#">
                                  <img
                                    src="images/news/img-04.jpg"
                                    alt="image description"
                                  />
                                </a>
                                <figcaption>
                                  <Link
                                    className="tg-btnreadmore"
                                    to="newsdetail"
                                  >
                                    Read Full Article
                                  </Link>
                                </figcaption>
                              </figure>
                              <div className="tg-newscontentbox">
                                <figure className="tg-authorimg">
                                  <Link to="#">
                                    <img
                                      src="images/author/img-04.jpg"
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
                                      <Link to="#">News</Link>
                                    </li>
                                  </ul>
                                  <div className="tg-description">
                                    <p>
                                      Consectetur adipisicg elitae sied doita
                                      eiusmod adunt ut labore dolore magna.
                                    </p>
                                  </div>
                                  <ul className="tg-postmetadata">
                                    <li>
                                      <Link to="#">
                                        <i className="fas fa-comment" />
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
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                            <article className="tg-news">
                              <figure className="tg-newsimg">
                                <span className="tg-themetag tg-featuredtag">
                                  <i className="icon-bookmark" />
                                </span>
                                <Link to="#">
                                  <img
                                    src="images/news/img-05.jpg"
                                    alt="image description"
                                  />
                                </Link>
                                <figcaption>
                                  <Link
                                    className="tg-btnreadmore"
                                    to="newsdetail"
                                  >
                                    Read Full Article
                                  </Link>
                                </figcaption>
                              </figure>
                              <div className="tg-newscontentbox">
                                <figure className="tg-authorimg">
                                  <Link to="#">
                                    <img
                                      src="images/author/img-05.jpg"
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
                                      Consectetur adipisicg elitae sied doita
                                      eiusmod adunt ut labore dolore magna.
                                    </p>
                                  </div>
                                  <ul className="tg-postmetadata">
                                    <li>
                                      <Link to="#">
                                        <i className="fas fa-comment" />
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
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                            <article className="tg-news">
                              <figure className="tg-newsimg">
                                <span className="tg-themetag tg-featuredtag">
                                  <i className="icon-bookmark" />
                                </span>
                                <Link to="#">
                                  <img
                                    src="images/news/img-06.jpg"
                                    alt="image description"
                                  />
                                </Link>
                                <figcaption>
                                  <Link
                                    className="tg-btnreadmore"
                                    to="newsdetail"
                                  >
                                    Read Full Article
                                  </Link>
                                </figcaption>
                              </figure>
                              <div className="tg-newscontentbox">
                                <figure className="tg-authorimg">
                                  <Link to="#">
                                    <img
                                      src="images/author/img-06.jpg"
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
                                      Consectetur adipisicg elitae sied doita
                                      eiusmod adunt ut labore dolore magna.
                                    </p>
                                  </div>
                                  <ul className="tg-postmetadata">
                                    <li>
                                      <Link to="#">
                                        <i className="fas fa-comment" />
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
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                            <article className="tg-news">
                              <figure className="tg-newsimg">
                                <span className="tg-themetag tg-featuredtag">
                                  <i className="icon-bookmark" />
                                </span>
                                <Link to="#">
                                  <img
                                    src="images/news/img-07.jpg"
                                    alt="image description"
                                  />
                                </Link>
                                <figcaption>
                                  <Link
                                    className="tg-btnreadmore"
                                    to="newsdetail"
                                  >
                                    Read Full Article
                                  </Link>
                                </figcaption>
                              </figure>
                              <div className="tg-newscontentbox">
                                <figure className="tg-authorimg">
                                  <Link to="#">
                                    <img
                                      src="images/author/img-07.jpg"
                                      alt="image description"
                                    />
                                  </Link>
                                </figure>
                                <div className="tg-newscontent">
                                  <div className="tg-newstitle">
                                    <h3>
                                      <Link to="newsdetail">
                                        Dedicated Follower Of Fashion{" "}
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
                                      Consectetur adipisicg elitae sied doita
                                      eiusmod adunt ut labore dolore magna.
                                    </p>
                                  </div>
                                  <ul className="tg-postmetadata">
                                    <li>
                                      <Link to="#">
                                        <i className="fas fa-comment" />
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
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                            <article className="tg-news">
                              <figure className="tg-newsimg">
                                <span className="tg-themetag tg-featuredtag">
                                  <i className="icon-bookmark" />
                                </span>
                                <Link to="#">
                                  <img
                                    src="images/news/img-08.jpg"
                                    alt="image description"
                                  />
                                </Link>
                                <figcaption>
                                  <Link
                                    className="tg-btnreadmore"
                                    to="newsdetail"
                                  >
                                    Read Full Article
                                  </Link>
                                </figcaption>
                              </figure>
                              <div className="tg-newscontentbox">
                                <figure className="tg-authorimg">
                                  <Link to="#">
                                    <img
                                      src="images/author/img-10.jpg"
                                      alt="image description"
                                    />
                                  </Link>
                                </figure>
                                <div className="tg-newscontent">
                                  <div className="tg-newstitle">
                                    <h3>
                                      <Link to="newsdetail">
                                        Forever In Blue Jeans
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
                                      Consectetur adipisicg elitae sied doita
                                      eiusmod adunt ut labore dolore magna.
                                    </p>
                                  </div>
                                  <ul className="tg-postmetadata">
                                    <li>
                                      <Link to="#">
                                        <i className="fas fa-comment" />
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
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
                            <article className="tg-news">
                              <figure className="tg-newsimg">
                                <span className="tg-themetag tg-featuredtag">
                                  <i className="icon-bookmark" />
                                </span>
                                <Link to="#">
                                  <img
                                    src="images/news/img-09.jpg"
                                    alt="image description"
                                  />
                                </Link>
                                <figcaption>
                                  <Link
                                    className="tg-btnreadmore"
                                    to="newsdetail"
                                  >
                                    Read Full Article
                                  </Link>
                                </figcaption>
                              </figure>
                              <div className="tg-newscontentbox">
                                <figure className="tg-authorimg">
                                  <Link to="#">
                                    <img
                                      src="images/author/img-09.jpg"
                                      alt="image description"
                                    />
                                  </Link>
                                </figure>
                                <div className="tg-newscontent">
                                  <div className="tg-newstitle">
                                    <h3>
                                      <Link to="newsdetail">
                                        My Futures So Bright, I Gotta Wear
                                        Shades
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
                                      Consectetur adipisicg elitae sied doita
                                      eiusmod adunt ut labore dolore magna.
                                    </p>
                                  </div>
                                  <ul className="tg-postmetadata">
                                    <li>
                                      <Link to="#">
                                        <i className="fas fa-comment" />
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
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <nav className="tg-pagination">
                            <ul>
                              <li className="tg-prevpage">
                                <Link to="#">
                                  <i className="fa fa-angle-left" />
                                </Link>
                              </li>
                              <li>
                                <Link to="#">1</Link>
                              </li>
                              <li>
                                <Link to="#">2</Link>
                              </li>
                              <li>
                                <Link to="#">3</Link>
                              </li>
                              <li>
                                <Link to="#">4</Link>
                              </li>
                              <li className="tg-active">
                                <Link to="#">5</Link>
                              </li>
                              <li>...</li>
                              <li>
                                <Link to="#">10</Link>
                              </li>
                              <li className="tg-nextpage">
                                <Link to="#">
                                  <i className="fa fa-angle-right" />
                                </Link>
                              </li>
                            </ul>
                          </nav>
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
                                <Link to="#">
                                  <img
                                    src="images/author/img-10.jpg"
                                    alt="image description"
                                  />
                                </Link>
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
                                <Link to="#">
                                  <img
                                    src="images/author/img-13.jpg"
                                    alt="image description"
                                  />
                                </Link>
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
                                <Link to="#">
                                  <img
                                    src="images/author/img-14.jpg"
                                    alt="image description"
                                  />
                                </Link>
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
                                <Link to="#">
                                  <img
                                    src="images/author/img-01.jpg"
                                    alt="image description"
                                  />
                                </Link>
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
                                <Link to="#">
                                  <img
                                    src="images/author/img-02.jpg"
                                    alt="image description"
                                  />
                                </Link>
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
                                <Link to="#">
                                  <img
                                    src="images/author/img-03.jpg"
                                    alt="image description"
                                  />
                                </Link>
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
                                <Link to="#">
                                  <img
                                    src="images/author/img-04.jpg"
                                    alt="image description"
                                  />
                                </Link>
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
                                <Link to="#">
                                  <img
                                    src="images/author/img-05.jpg"
                                    alt="image description"
                                  />
                                </Link>
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

export default BlogGrid;
