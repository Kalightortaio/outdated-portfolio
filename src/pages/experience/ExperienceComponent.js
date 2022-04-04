import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceList from "../../containers/experience/ExperienceList.js";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceSVG from "./ExperienceSVG";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    const experience = {
        title: "Experience",
        subtitle: "Work and Internship",
        description:
            "I have worked with a range of evolving startups, community projects, and well established companies. I also have experience outside my field, however programming continues to my true passion.",
        header_image_path: "experience.svg",
        sections: [
            {
                title: "Employment History",
                experiences: [
                    {
                        title: "Self Employed Freelance",
                        company: "Kalightortaio",
                        company_url: "http://www.kalightortaio.com/",
                        logo_path: "/images/freelance.gif",
                        duration: "February 2019 - Present",
                        location: "Oakland, CA",
                        description: "I have begun my prospective programming career. I have much to offer, and always willing to learn.",
                        color: "rgb(0, 28, 85)"
                    },
                    {
                        title: "Fulfillment Center Associate",
                        company: "Amazon Fresh",
                        company_url: "https://www.amazon.com/",
                        logo_path: "/images/amazon.png",
                        duration: "January 2022 - Present",
                        location: "Brisbane, CA",
                        description: "Working for amazon has been honest work. Falling between neither retail or programming work, this job serves to keep the lights running.",
                        color: "rgb(0, 28, 85)"
                    },
                    {
                        title: "Cashier & Overnight Grocery",
                        company: "Sprouts LLC",
                        company_url: "https://www.sprouts.com/",
                        logo_path: "/images/sprouts.png",
                        duration: "March 2020 - January 2022",
                        location: "Thousand Oaks, CA | Albany, CA",
                        description: "This is a food distribution company. I worked as a sales associate during the covid-19 pandemic. This position strengthened my verbal and interpersonal communication skills, while harboring a friendly work environment and providing excellent customer service.",
                        color: "rgb(0, 28, 85)"
                    },
                    {
                        title: "Full Stack Developer, Volunteer",
                        company: "Community Care & Hospice",
                        company_url: "https://www.communitycareandhospice.com/",
                        logo_path: "/images/cch.png",
                        duration: "June 2015 - December 2021",
                        location: "Camarillo, CA",
                        description: "This is an established hospice company in the area. I have worked for this company to develop their website, maintain their hardware and software needs, and provide auxiliary healthcare support. In depth details of the website development can be found within the Projects page of this domain.",
                        color: "rgb(0, 28, 85)"
                    },
                    {
                        title: "Front End Developer",
                        company: "Enterprise Beacon Inc.",
                        company_url: "https://apps.apple.com/us/app/drain-sensei/id1538107952",
                        logo_path: "/images/drainsensei.png",
                        duration: "June 2019 - December 2019",
                        location: "Burbank, CA",
                        description: "As rising startup, this project involved react native to easily launch on both mobile platforms. Over the course of several weeks, I learned the language and implemented a front end for both users and professionals. The app serves two functions, to serve information to all users, and to connect users to professionals and vice-versa.",
                        color: "rgb(0, 28, 85)"
                    },
                    {
                        title: "Certified Technician",
                        company: "Staples Inc. LLC",
                        company_url: "https://www.staples.com/",
                        logo_path: "/images/staples.png",
                        duration: "April 2016 - November 2017",
                        location: "Camarillo, CA | Thousand Oaks, CA | Westlake, CA",
                        description: "This is a technology sales company. During my stay, I primarily completed selling and marketing, with an emphasis on technician duties. Here, I gained invaluable sales experience, alonside hardware and software familiarity across multiple operating systems and solutions.",
                        color: "rgb(0, 28, 85)"
                    },
                ]
            }
        ]
    };
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                <ExperienceSVG theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceList sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
      </div>
    );
  }
}

export default Experience;