/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import AppStoreLogo from '../img/app_store.png';

const joinCircleFallback = () => {
  return (
    <div className="downloadContainer" id="download">
      <h1 className="styledTitle">
        We see you're trying to join a circle...
      </h1>
      <p className="basicTextBoldWhite">
        Download our app for iOS or Android to join this circle and access tons of other fun events 😉.
      </p>
      <a href="https://apps.apple.com/us/app/id1527341310">
        <img className="appStoreLogo" src={AppStoreLogo} alt="img" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.downatdart.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
        <img className="googlePlayLogo" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
      </a>
      <p className="basicTextBoldWhite">
        Are You Down?
      </p>
      <br /><br /><br />
      <p className="basicTextBoldWhite"> ————   presented by   ————</p>
      <h1 className="styledTitle">
        {'\n\n\nWho\'s Down'}
      </h1>
    </div>
  );
};

export default joinCircleFallback;
