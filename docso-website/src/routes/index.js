
import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import SLUGS from 'utils/slugs';
import LoadingComponent from "components/Loading/LoadingComponent"
import Navbar from "components/Navbar/Navbar"
import Footer from "components/Footer/Footer"

const HomeComponent = lazy(() => import('components/Home/HomeComponent'));
const ContactUsComponent = lazy(() => import('components/Pages/ContactUsComponent'));
const AdvantageComponent = lazy(() => import('components/Pages/AdvantageComponent'));
const FeaturesComponent = lazy(() => import('components/Pages/FeaturesComponent'));
const TermAndConditionComponent = lazy(() => import('components/Pages/TermAndConditionComponent'));
const PrivacyPolicyComponent = lazy(() => import('components/Pages/PrivacyPolicyComponent'));


export const Root = ({ theme }) => (
  <BrowserRouter>
    <Navbar />
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={SLUGS.home} component={HomeComponent} />
        <Route exact path={SLUGS.contactus} component={ContactUsComponent} />
        <Route exact path={SLUGS.advantage} component={AdvantageComponent} />
        <Route exact path={SLUGS.features} component={FeaturesComponent} />
        <Route exact path={SLUGS.termandcondition} component={TermAndConditionComponent} />
        <Route exact path={SLUGS.privacypolicy} component={PrivacyPolicyComponent} />
        <Redirect to={SLUGS.home} />
      </Switch>
    </Suspense>
    <Footer />
  </BrowserRouter>
);
