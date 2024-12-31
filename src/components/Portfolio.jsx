import React from 'react';
import portfolioitem1 from '../assets/images/portfolioitem1.png';
import portfolioitem2 from '../assets/images/portfolioitem2.png';
import portfolioitem3 from '../assets/images/portfolioitem3.png';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="text-center mb-4">Project Portfolio</h2>
        <p className="text-center text-white">
          If you want to discuss your upcoming project with our customer support team, <br /> call us now. Let’s connect and resolve all your queries promptly.
        </p>

        <ul className="nav nav-tabs justify-content-center mt-4" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="all-tab"
              data-bs-toggle="tab"
              data-bs-target="#all"
              type="button"
              role="tab"
              aria-controls="all"
              aria-selected="true"
            >
              All
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="applications-tab"
              data-bs-toggle="tab"
              data-bs-target="#applications"
              type="button"
              role="tab"
              aria-controls="applications"
              aria-selected="false"
            >
              Applications
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="logo-tab"
              data-bs-toggle="tab"
              data-bs-target="#logo"
              type="button"
              role="tab"
              aria-controls="logo"
              aria-selected="false"
            >
              Logo Design
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="branding-tab"
              data-bs-toggle="tab"
              data-bs-target="#branding"
              type="button"
              role="tab"
              aria-controls="branding"
              aria-selected="false"
            >
              Branding
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="video-tab"
              data-bs-toggle="tab"
              data-bs-target="#video"
              type="button"
              role="tab"
              aria-controls="video"
              aria-selected="false"
            >
              Video Animation
            </button>
          </li>
        </ul>

        {/* Tab Content */}
        <div className="tab-content mt-4">
          {/* All Tab */}
          <div
            className="tab-pane fade show active"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div className="row">
              {renderAllCards()}
            </div>
          </div>

          {/* Applications Tab */}
          <div
            className="tab-pane fade"
            id="applications"
            role="tabpanel"
            aria-labelledby="applications-tab"
          >
            <div className="row">
              {renderApplicationsCards()}
            </div>
          </div>

          {/* Logo Design Tab */}
          <div
            className="tab-pane fade"
            id="logo"
            role="tabpanel"
            aria-labelledby="logo-tab"
          >
            <div className="row">
              {renderLogoDesignCards()}
            </div>
          </div>

          {/* Branding Tab */}
          <div
            className="tab-pane fade"
            id="branding"
            role="tabpanel"
            aria-labelledby="branding-tab"
          >
            <div className="row">
              {renderBrandingCards()}
            </div>
          </div>

          {/* Video Animation Tab */}
          <div
            className="tab-pane fade"
            id="video"
            role="tabpanel"
            aria-labelledby="video-tab"
          >
            <div className="row">
              {renderVideoAnimationCards()}
            </div>
          </div>
        </div>

        <div className="text-center mt-4 all-project">
          <button className="btn">View All Projects</button>
        </div>
      </div>
    </section>
  );
};

const renderAllCards = () => {
  return (
    <>
      {renderApplicationsCards()}
      {renderLogoDesignCards()}
      {renderBrandingCards()}
      {renderVideoAnimationCards()}
    </>
  );
};

const renderApplicationsCards = () => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem1} alt="Application 1" />
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem2} alt="Application 2" />
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem1} alt="Application 2" />
        </div>
      </div>
    </>
  );
};

const renderLogoDesignCards = () => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem2} alt="Logo Design 1" />
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem3} alt="Logo Design 2" />
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem1} alt="Logo Design 2" />
        </div>
      </div>
    </>
  );
};

const renderBrandingCards = () => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem3} alt="Branding 1" />
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem2} alt="Branding 1" />
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem1} alt="Branding 1" />
        </div>
      </div>
    </>
  );
};

const renderVideoAnimationCards = () => {
  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem3} alt="Video Animation 1" />
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem2} alt="Video Animation 1" />
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card">
          <img src={portfolioitem1} alt="Video Animation 1" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
