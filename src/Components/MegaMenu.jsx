import React from "react";

const MegaMenu = () => {
  return (
    <div className="site-nav__dropdown megamenu text-left">
      <div className="page-width">
        <div className="grid grid--center">
          {/* Column 1: All Necklaces & Anti-Tarnish */}
          <div className="grid__item medium-up--one-fifth appear-animation appear-delay-1">
            <div className="h5">
              <a href="/collections/necklaces" className="site-nav__dropdown-link site-nav__dropdown-link--top-level">
                All Necklaces
              </a>
            </div>
            <div className="h5">
              <a href="/collections/anti-tarnish-necklaces" className="site-nav__dropdown-link site-nav__dropdown-link--top-level">
                Anti-Tarnish
              </a>
            </div>
          </div>

          {/* Column 2: By Type */}
          <div className="grid__item medium-up--one-fifth appear-animation appear-delay-2">
            <a href="/collections/necklaces">
              <div className="svg-mask svg-mask--landscape">
                <img
                  src="//salty.co.in/cdn/shop/collections/fashionable-necklaces.webp?v=1721222035&width=2710"
                  alt="All Necklaces"
                  width="2710"
                  height="2710"
                  loading="lazy"
                  className="megamenu__collection-image image-element"
                />
              </div>
            </a>
            <div className="h5">
              <a href="/collections/necklaces" className="site-nav__dropdown-link site-nav__dropdown-link--top-level">
                By Type
              </a>
            </div>
            <div>
              <a href="/collections/pendant-necklaces" className="site-nav__dropdown-link">
                Pendant Necklaces
              </a>
            </div>
            <div>
              <a href="/collections/choker-necklaces" className="site-nav__dropdown-link">
                Choker Necklaces
              </a>
            </div>
            <div>
              <a href="/collections/layered-necklaces" className="site-nav__dropdown-link">
                Layered Necklaces
              </a>
            </div>
            <div>
              <a href="/collections/chain-necklace" className="site-nav__dropdown-link">
                Chain Necklaces
              </a>
            </div>
          </div>

          {/* Column 3: By Occasion */}
          <div className="grid__item medium-up--one-fifth appear-animation appear-delay-3">
            <a href="/collections/necklaces">
              <div className="svg-mask svg-mask--landscape">
                <img
                  src="//salty.co.in/cdn/shop/collections/fashionable-necklaces.webp?v=1721222035&width=2710"
                  alt="All Necklaces"
                  width="2710"
                  height="2710"
                  loading="lazy"
                  className="megamenu__collection-image image-element"
                />
              </div>
            </a>
            <div className="h5">
              <a href="/collections/necklaces" className="site-nav__dropdown-link site-nav__dropdown-link--top-level">
                By Occasion
              </a>
            </div>
            <div>
              <a href="/collections/casual-wear-necklaces" className="site-nav__dropdown-link">
                Casual
              </a>
            </div>
            <div>
              <a href="/collections/party-wear-necklaces" className="site-nav__dropdown-link">
                Party
              </a>
            </div>
            <div>
              <a href="/collections/office-wear-necklaces" className="site-nav__dropdown-link">
                Office
              </a>
            </div>
            <div>
              <a href="/collections/summer-wear-necklaces" className="site-nav__dropdown-link">
                Summer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;