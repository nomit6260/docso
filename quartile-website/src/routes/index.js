
import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import SLUGS from 'utils/slugs';
import LoadingComponent from "components/Loading/LoadingComponent"
import Navbar from "components/Navbar/Navbar"
import Footer from "components/Footer/Footer"

const HomeComponent = lazy(() => import('components/Home/HomeComponent'));
const WhyUsComponent = lazy(() => import('components/Pages/WhyUsComponent'));
const ContactUsComponent = lazy(() => import('components/Pages/ContactUsComponent'));
const TeamComponent = lazy(() => import('components/Pages/TeamComponent'));
const CareerComponent = lazy(() => import('components/Pages/CareerComponent'));
const JobApplicationComponent = lazy(() => import('components/Pages/JobApplicationComponent'));
const JobdescComponent = lazy(() => import('components/Pages/JobdescComponent'));
const AboutUsComponent = lazy(() => import('components/Pages/AboutUsComponent'));

export const Root = ({ theme }) => (
  <BrowserRouter>
    <Navbar />
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={SLUGS.home} component={HomeComponent} />
        <Route exact path={SLUGS.whyus} component={WhyUsComponent} />
        <Route exact path={SLUGS.contactus} component={ContactUsComponent} />
        <Route exact path={SLUGS.team} component={TeamComponent} />
        <Route exact path={SLUGS.careers} component={CareerComponent} />
        <Route exact path={SLUGS.jobapplication} component={JobApplicationComponent} />
        <Route exact path={SLUGS.jobdesc} component={JobdescComponent} />
        <Route exact path={SLUGS.aboutus} component={AboutUsComponent} />
        <Redirect to={SLUGS.home} />
      </Switch>
    </Suspense>
    <Footer />
  </BrowserRouter>
);
