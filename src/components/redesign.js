/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/heading-has-content */

import React, { Component } from 'react';
import '../style.scss';
import Typed from 'react-typed';
import Carousel from '../hooks/Carousel';
import getWindowDimensions from '../hooks/getWindowDimensions';


const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function mod(n, m) {
  return ((n % m) + m) % m;
}

class Redesign extends Component {
  constructor(props) {
    super(props);
    this.state = { debug: true, debug2: true, slidePosn: 0 };
    this.totalSlides = 3;
    const { height, width } = getWindowDimensions();
  }

  slidePosnChange = (change) => {
    this.setState((prevState) => {
      const slidePosn = mod(prevState.slidePosn + change, this.totalSlides + 1);
      console.log('old', prevState.slidePosn, 'new', slidePosn);
      return {
        slidePosn,
      };
    });
  }

  renderTypedText = () => {
    return (
      <div>
        <Typed
          strings={[
            ' go climbing,', ' go fishing,', ' go roller-blading,', ' go hiking,', ' go on a 3am ~adventure~,', 'go ice skating,']}
          typeSpeed={75}
          backSpeed={50}
          loop
          bindInputFocusEvents
          backDelay={1000}
          startDelay={1000}
          smartBackspace
          cursorChar=""
        />
      </div>
    );
  }

  // renderSliderButtons = () => {
  //   if (this.state.debug2) {
  //     return (
  //       <>
  //         <div className="left-arrow w-slider-arrow-left" role="button" onClick={() => { console.log('hey'); }}>
  //           <div className="w-icon-slider-left" />
  //         </div>
  //         <div className="right-arrow w-slider-arrow-right">
  //           <div className="icon w-icon-slider-right" />
  //         </div>
  //       </>
  //     );
  //   } else return null;
  // }


  renderSectionFeatures = () => {
    if (!this.state.debug) {
      // currently, 2n+1 slides show up

      return (
        <div>
          {/* // <Carousel /> */}
          <p> hi</p>
        </div>
      );
    } else {
      return (
        <div className="section_features">
          <div>
            <div className="div-block-9">
              <h2 className="heading-2">Finally, an app that offers:</h2>
              <div className="slider-left">
                <button onClick={() => { this.slidePosnChange(-1); }}>
                  <img src="src/images/icon_slider.arrow.left.svg" loading="lazy" alt="" />
                </button>
              </div>

              <div className="slider-right">
                <button onClick={() => { this.slidePosnChange(1); }}>
                  <img src="src/images/icon_slider.arrow.right.svg" loading="lazy" alt="" onClick={() => { console.log('hi'); }} />
                </button>
              </div>

              {this.state.slidePosn === 0 && (
              <div className="slide-1 w-slide">
                <div className="w-layout-grid grid-5">
                  <div className="div-block-19">
                    <img src="src/images/whos_down_features_1.png" loading="lazy" alt="" className="image_features" />
                  </div>
                  <div className="div-block-8">
                    <img src="src/images/overlayed_circle_black_mag.png" loading="lazy" alt="" className="features_icon" />
                    {/* <img src="src/images/circle_black.png" loading="lazy" alt="" className="circle_black" /> */}
                    <h4 className="header-4">Comprehensive event discovery</h4>
                    <p className="paragraph">Extensive filtering, searching, and notification options let you find the
                      events
                      and people you’re interested in without getting flooded by the rest. With all events from blitz
                      and
                      more that aren’t, we make event discovery easy.
                    </p>
                  </div>
                </div>
              </div>
              )}

              {this.state.slidePosn === 1 && (
              <div className="slide-1 w-slide">
                <div className="w-layout-grid grid-5">
                  <div className="div-block-19">
                    <img src="src/images/whos_down_features_2.png"
                      loading="lazy"
                      alt=""
                      className="image_features"
                    />
                  </div>
                  <div className="div-block-8">
                    <img src="src/images/overlayed_circle_black_flag.png" loading="lazy" alt="" className="features_icon" />
                    {/* <img src="src/images/circle_black.png" loading="lazy" alt="" className="circle_black" /> */}
                    <h4 className="header-4">Effortless event creation</h4>
                    <p className="paragraph">30 seconds to make and advertise your event. No flyers, no emails, no hassle.</p>
                  </div>
                </div>
              </div>
              )}

              {this.state.slidePosn === 2 && (

              <div className="slide-1 w-slide">
                <div className="w-layout-grid grid-5">
                  <div className="div-block-19">
                    <img src="src/images/whos_down_features_3.png"
                      loading="lazy"
                      alt=""
                      className="image_features"
                    />
                  </div>
                  <div className="div-block-8">
                    <img src="src/images/overlayed_circle_black_vir.png" loading="lazy" alt="" className="features_icon" />
                    {/* <img src="src/images/circle_black.png" loading="lazy" alt="" className="circle_black" /> */}
                    <h4 className="header-4">COVID-19 features</h4>
                    <p className="paragraph">Get close to your class while staying 6 feet apart. With support for virtual
                      events, hard event capacity limits, and background analytics, we make sure fun, spontaneity, and
                      friendships aren’t casualties of COVID-19.
                    </p>
                  </div>
                </div>
              </div>
              )}

              {this.state.slidePosn === 3 && (
              <div className="slide-1 w-slide">
                <div className="w-layout-grid grid-5">
                  <div className="div-block-19">
                    <img src="src/images/whos_down_features_4.png" loading="lazy" alt="" className="image_features" />
                  </div>
                  <div className="div-block-8">
                    <img src="src/images/overlayed_circle_black_chart.png" loading="lazy" alt="" className="features_icon" />
                    {/* <img src="src/images/circle_black.png" loading="lazy" alt="" className="circle_black" /> */}
                    <h4 className="header-4">Event analytics</h4>
                    <p className="paragraph">Stop the guesswork around who’s interested in your event, how best to reach
                      them,
                      what the best time is, blah blah blah. We offer rigorous analytics to help you identify key
                      demographics, gauge interest beyond just who shows up, and to help your events reach your goals.
                    </p>
                  </div>
                </div>
              </div>
              )}
              <div className="slide-nav w-slider-nav w-shadow w-round" />
            </div>
          </div>
        </div>
      );
    }
  }

  renderHero = () => {
    return (
      <div>
        <div className="w-layout-grid grid">
          <div className="div-block-7">
            <div className="div-block-16">
              <h1 className="header-1">Spontaneity organized<span style={{ color: '#d7263d' }}>.</span></h1>
            </div>
            <p className="paragraph paragraph_hero">Who’s Down is the one stop shop to see what’s up and who’s down for
              events near you. Discover, create, and stay up-to-date on the events that matter to you.
            </p>
            <a href="#DownloadCTA" className="button_cta_red button_hero w-button">Download</a>
          </div>
          <div className="div-block-hero-img">
            <img src="src/images/whos_down_hero_image.png"
              loading="lazy"
              width="563"
              sizes="(max-width: 767px) 250.00001525878906px, (max-width: 991px) 350.0000305175781px, 700.0000610351562px"
              srcSet="src/images/whos_down_hero_image-p-500.png 500w, src/images/whos_down_hero_image.png 722w"
              alt=""
              className="image_hero"
            />
          </div>
        </div>
      </div>
    );
  }

  renderBenefits = () => {
    return (
      <>
        <div className="div-block-4">
          <div className="div_benefits_header">
            <h2 className="heading-2-white">Remember when you wanted to </h2>
          </div>
          <div className="typed-text">
            <h2 className="heading-2-white"> {this.renderTypedText()}</h2>
          </div>
        </div>
        <div className="div_benefits_header2">
          <h2 className="heading-2-white">but none of your friends were free?</h2>
        </div>
        <div className="div_benefits_paragraph">
          <p className="paragraph-white">Life is too short for regrets. Who’s Down helps you make those memories.</p>
        </div>
        <div className="div-block-5">
          <div className="w-layout-grid grid-2">
            <div id="w-node-982fe9d01475-873e4a51" className="card_benefits">
              <img src="src/images/icon_phone.svg" loading="lazy" alt="" className="card_benefits_icon" />
              <img src="src/images/circle_red.png"
                loading="lazy"
                width="528"
                sizes="(max-width: 479px) 100vw, 528px"
                srcSet="src/images/circle_red-p-500.png 500w, src/images/circle_red.png 696w"
                alt=""
                className="circle_red"
              />
              <h4 className="heading-4-white">Democratizing event planning</h4>
              <p className="card_benefits_paragraph">Tap into the informal event economy to see everything going on, from the
                events that aren’t making it onto blitz to all the events that are. Also, create events beyond the
                groupchat—reach both friends present and future.
              </p>
            </div>
            <div id="w-node-2ef93d14fd51-873e4a51" className="card_benefits">
              <img src="src/images/icon_hands.svg" loading="lazy" alt="" className="card_benefits_icon" />
              <img src="src/images/circle_red.png"
                loading="lazy"
                width="529"
                sizes="(max-width: 479px) 100vw, 529px"
                srcSet="src/images/circle_red-p-500.png 500w, src/images/circle_red.png 696w"
                alt=""
                className="circle_red"
              />
              <h4 className="heading-4-white">Meeting people commitment-free</h4>
              <p className="card_benefits_paragraph">No club meetings, no membership requirements, no bureaucratic hassle.
                With no expectation of commitment, you spend your free time and only your free time— not a second more.
              </p>
            </div>
            <div id="w-node-efc9f89298ae-873e4a51" className="card_benefits">
              <img src="src/images/icon_clock.svg" loading="lazy" alt="" className="card_benefits_icon" />
              <img src="src/images/circle_red.png"
                loading="lazy"
                width="530"
                sizes="(max-width: 479px) 100vw, 530px"
                srcSet="src/images/circle_red-p-500.png 500w, src/images/circle_red.png 696w"
                alt=""
                className="circle_red"
              />
              <h4 className="heading-4-white">Reclaiming <br />your time</h4>
              <p className="card_benefits_paragraph">Spend your time the way you really want to spend it rather than by doing
                whatever’s available. Spelunking, fishing, busking, whatever your interest, see who’s down and getgoing—
                what are you waiting for?
              </p>
            </div>
          </div>

        </div>
      </>
    );
  }

  renderTestimonials = () => {
    return (
      <div className="div-block-10">
        <h2 className="heading-2">Down for Who’s Down</h2>
        <p className="paragraph paragraph_center">Students love how easy Who’s Down makes it to have a social life, even
          during a pandemic. Don’t take it from us, see what our users have to say!
        </p>
        <div className="w-layout-grid grid-3">
          <div id="w-node-8ba272a3a2b1-873e4a51" className="card_testimonial">
            {/* <div className="just_images"> */}
            <img src="src/images/testimonial_face_4-2.png" loading="lazy" alt="" className="card_testimonial_image" />
            <img src="src/images/circle_white.png" loading="lazy" alt="" className="circle_blue" />
            {/* </div> */}
            <h4 className="heading_testimonial">Jennifer R.</h4>
            <p className="paragraph_testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam ac massa.
              Pellentesque quis justo faucibus.
            </p>
          </div>
          <div className="card_testimonial">
            <img src="src/images/testimonial_face_5-2.png"
              loading="lazy"
              width="60"
              alt=""
              className="card_testimonial_image"
            /><img src="src/images/circle_blue.png"
              loading="lazy"
              width="655"
              alt=""
              className="circle_blue"
            />
            <h4 className="heading_testimonial">Mike P.</h4>
            <p className="paragraph_testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam ac massa.
              Pellentesque quis justo faucibus.
            </p>
          </div>
          <div className="card_testimonial">
            <img src="src/images/testimonial_face_1-2.png"
              loading="lazy"
              width="60"
              alt=""
              className="card_testimonial_image"
            />
            <img src="src/images/circle_white.png"
              loading="lazy"
              width="655"
              alt=""
              className="circle_blue"
            />
            <h4 className="heading_testimonial">Megan T.</h4>
            <p className="paragraph_testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam ac massa.
              Pellentesque quis justo faucibus.
            </p>
          </div>
          <div className="card_testimonial">
            <img src="src/images/testimonial_face_3-2.png"
              loading="lazy"
              width="60"
              alt=""
              className="card_testimonial_image"
            />
            <img src="src/images/circle_blue.png"
              loading="lazy"
              width="655"
              alt=""
              className="circle_blue"
            />
            <h4 className="heading_testimonial">Dan R.</h4>
            <p className="paragraph_testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam ac massa.
              Pellentesque quis justo faucibus.
            </p>
          </div>
          <div className="card_testimonial">
            <img src="src/images/testimonial_face_2-2.png"
              loading="lazy"
              width="60"
              alt=""
              className="card_testimonial_image"
            />
            <img src="src/images/circle_white.png"
              loading="lazy"
              width="655"
              alt=""
              className="circle_blue"
            />
            <h4 className="heading_testimonial">Stacey B.</h4>
            <p className="paragraph_testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam ac massa.
              Pellentesque quis justo faucibus.
            </p>
          </div>
        </div>
      </div>
    );
  }

  renderCTA = () => {
    return (
      <div className="section_cta">
        <div className="div-block-6">
          <h1 className="header-1-white">Are you down?</h1>
          <p className="paragraph-white">See what’s happening on campus, find your people, and have your voice heard. Who’s
            Down is here to redefine the way students engage with each other and their campus, with fewer extraneous
            notifications, more inclusivity, and more fun.
          </p>
          <a href="https://apps.apple.com/us/app/id1527341310" target="_blank" className="button_cta_white w-button">App Store
            Download
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.downatdart.app&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            target="_blank"
            className="button_cta_white w-button"
          >Google Play Download
          </a>
        </div>
      </div>
    );
  }

renderEmailList = () => {
  return (
    <div>
      <div className="w-layout-grid grid-4">
        <div className="div-block-22">
          <img src="src/images/whos_down_listserv.png"
            loading="lazy"
            width="750"
            height="400"
            sizes="(max-width: 479px) 55vw, (max-width: 1919px) 72vw, 810.0000610351562px"
            srcSet="src/images/whos_down_listserv-p-500.png 500w, src/images/whos_down_listserv-p-800.png 800w, images/whos_down_listserv.png 1009w"
            alt=""
            className="image_listserv"
          />
        </div>
        <div className="div-block-11">
          <h2 className="heading-2 heading_listserv">You in?</h2>
          <p className="paragraph paragraph_listserv">Get custom event recs based on your interests, be the first to hear
            about new features, and instantly earn the Who’s Down team’s love forever...🥺👉👈
          </p>
          <div className="form-block w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <label htmlFor="name" className="field-label">First
                Name
              </label>
              <input type="text" className="w-input" maxLength="256" name="name" data-name="Name" placeholder="Enter Your First Name" id="name" required="" />
              <label htmlFor="email" className="field-label-2">Email</label>
              <input type="email" className="w-input" maxLength="256" name="email" data-name="Email" placeholder="Enter Your Email" id="email" required="" />
              <input type="submit" value="Join the Who&#x27;s Down Listserv!" data-wait="Please wait..." className="button_cta_red w-button" />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

renderFooter = () => {

}

render() {
  return (
    <div className="onTopOfTransform">
      <div style={{ /* transform: 'scale(80%)' */}}>
        {/* transform: 'scale(90%)' */}
        <div className="pagewrapper">
          <div className="section_hero">
            {this.renderHero()}
          </div>
          <div className="diagonal_1" />
          <div className="section_benefits">
            {this.renderBenefits()}
          </div>
          <div className="diagonal_2" />
          <div className="diagonal_blue_1" />

          {this.renderSectionFeatures()}

          <div id="DownloadCTA" className="diagonal_3" />
          {this.renderCTA()}

          <div className="diagonal_4" />
          <div className="diagonal_blue_1" />

          <div className="section_testimonials">
            {this.renderTestimonials()}
          </div>

          <div className="section_listserv">
            {this.renderEmailList()}
          </div>

          <div className="section_footer">
            {this.renderFooter()}
            <div className="div-block-15">
              <div className="div_footer_logo">
                <a href="#Top" className="w-inline-block"><img src="src/images/whos_down_logo_white.svg"
                  loading="lazy"
                  alt=""
                />
                </a>
              </div>
              <div className="div_footer_nav">
                <a href="index.html" aria-current="page" className="footer_link w--current">Home</a>
                <a href="about.html" className="footer_link">About</a>
                <a href="#" className="footer_link">Legal</a>
              </div>
            </div>
            <div id="Downloads" className="div-block-13">
              <div className="div_footer_buttons">
                <a href="https://apps.apple.com/us/app/id1527341310"
                  target="_blank"
                  className="button_cta_red button_footer w-button"
                >App Store Download
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.downatdart.app&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                  target="_blank"
                  className="button_cta_red button_footer w-button"
                >Google Play Download
                </a>
              </div>
              <div>
                <p className="paragraph_social">Who&#x27;s Down Social</p>
                <div className="div_footer_social">
                  <a href="#" className="w-inline-block"><img src="src/images/icon_social_linkedin.svg"
                    loading="lazy"
                    alt=""
                    className="social_icons"
                  />
                  </a>
                  <a href="#" className="w-inline-block"><img src="src/images/icon_social_instagram.svg"
                    loading="lazy"
                    alt=""
                    className="social_icons"
                  />
                  </a>
                  <a href="#" className="w-inline-block"><img src="src/images/icon_social_facebook.svg"
                    loading="lazy"
                    alt=""
                    className="social_icons"
                  />
                  </a>
                  <a href="#" className="w-inline-block"><img src="src/images/icon_social_twitter.svg"
                    loading="lazy"
                    alt=""
                    className="social_icons"
                  />
                  </a>
                </div>
              </div>

            </div>
            <div className="div_footer_copywrite">
              <p className="paragraph-5">© Who&#x27;s Down 2020. All rights reserved.</p>
              <a href="mailto:hello.kamalmunshi@gmail.com" className="footer_link footer_link_designedby">Website Designed by
                Kamal Munshi
              </a>
            </div>
          </div>
        </div>
      </div>
      <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=5feaa137162fb584dd3e4a50"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      />
      <script src="webflow.js" type="text/javascript" />
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9" />
      <script src="../hooks/useCustomScript" />
    </div>
  );
}
}

export default Redesign;
