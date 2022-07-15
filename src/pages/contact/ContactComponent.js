import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import AddressSVG from "./AddressSVG";
import BlogSVG from "./BlogSVG";
import "./Contact.css";

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={process.env.PUBLIC_URL + `/images/profile.png`}
                  alt="Krishna Kokatay"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                    Contact Me
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                    I am available on these following accounts. You can message me, and I will typically reply within 24 hours. I can help you with development, inquiries, or bug reports.
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href="https://docs.google.com/document/d/1n8CwRaAkKYZruRzkSozODBA3r4cCuYhe-PUEcQRbcA0/edit?usp=sharing"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                    Blog
                </h1>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                    For my musings on philosophy, battles against programming bugs, and development updates.
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blog"
                    newTab={true}
                    href="https://blog.kalightortaio.com"
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                <BlogSVG theme={theme} />
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressSVG theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                    Email
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                    kokataykrishna@gmail.com
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                    Phone Number
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                    (805) 208-6132
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                    Address
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                    San Francisco, California
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href="https://www.google.com/maps/place/San+Francisco+Bay/@37.7172696,-122.2620379,11z/data=!4m5!3m4!1s0x808f9b5ea6210a07:0xa2950f4ff149c910!8m2!3d37.6909682!4d-122.3107517"
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
      </div>
    );
  }
}

export default Contact;