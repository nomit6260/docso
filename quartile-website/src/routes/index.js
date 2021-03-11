
import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import SLUGS from 'utils/slugs';
import LoadingComponent from "components/Loading/LoadingComponent"
import Navbar from "components/Navbar/Navbar"
import Footer from "components/Footer/Footer"

const HomeComponent = lazy(() => import('components/Home/HomeComponent'));

export const Root = ({ theme }) => (
  <BrowserRouter>
    <Navbar />
    <Suspense fallback={<LoadingComponent loading />}>
      <Switch>
        <Route exact path={SLUGS.home} component={HomeComponent} />
        <Redirect to={SLUGS.home} />
      </Switch>
    </Suspense>
    <Footer />
  </BrowserRouter>
);
