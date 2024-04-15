import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";
import SidebarContent from "./SideBarContant";



import "../css/main.css"

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We offer you end-to-end service with our team working in different areas of new generation technologies."
        className="mt-24 sm:mt-32 lg:mt-40"
        sidebarContent={<SidebarContent />}
      >
        <p>
          Additionally, we create added value for our country with our ongoing projects in the field of artificial intelligence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Artificial Intelligence Solutions">
              Unlock the potential of AI to revolutionize your business. Our custom solutions leverage cutting-edge technology to streamline operations, improve customer interactions, and deliver unparalleled growth in the digital age.
              <br />
              <br />
              In addition, we are developing a Saas-based AI platform called <a href="https://zobox.net" className="zobox">ZOBOX</a> for online artificial intelligence tools.
            </ListItem>
            <ListItem title="Web Development">
              Transforming visions into stunning realities. Elevate your online presence with our bespoke web solutions. From captivating marketing pages to seamless user experiences, we bring your brand to life.
            </ListItem>
            <ListItem title="Mobile Application Development">
              Unlock the power of mobility with our cutting-edge app development services. Our skilled team harnesses the latest frameworks to build dynamic and intuitive mobile experiences tailored to your unique needs
            </ListItem>
            <ListItem title="Digital Marketing / SEO">
              Harness the full potential of digital marketing with our expert strategies. From SEO optimization to targeted campaigns, we propel your brand to the forefront of online visibility, ensuring maximum impact and ROI.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
