import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { portfolioTheme } from 'common/theme/portfolio';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Portfolio/portfolio.style';
import BlogSection from 'containers/Agency/BlogSection';
import BannerSection from 'containers/Portfolio/Banner';
import Navbar from 'containers/Portfolio/Navbar';
import SkillSection from 'containers/Portfolio/Skill';
import CallToAction from 'containers/Portfolio/CallToAction';
import Footer from 'containers/Portfolio/Footer';

const Portfolio = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <Fragment>
        <Head>
          <title>Crafting Artful Web, Mobile & Blockchain Experiences</title>
          <meta name="Description" content="Crafting Artful Web, Mobile & Blockchain Experiences"/>
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Notable&display=swap" rel="stylesheet"></link>
         
          <link rel="icon" href="/irule.png" type="image/png" />
       </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper style={{backgroundColor: '#030b16'}}>
          <Sticky top={0} innerZ={9999} >
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <BlogSection />
          <SkillSection />
          {/* <TestimonialSection /> */}
          {/* <ContactSection /> */}
          
          {/* <ContactSection /> */}
          {/* <ProcessSection /> */}
          <CallToAction />
          {/* <TestimonialSection /> */}
          {/* <ClientsSection /> */}
          {/* <ContactSection /> */}
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Portfolio;
