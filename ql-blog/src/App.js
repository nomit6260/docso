import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

// import BlogPage from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from "components/blogs/blog"
import Author from "components/author/author"

export default function App() {

  return (
    <Container>
      <Header/>
      <ContentWithPaddingXl>
        <Router>
          <Switch>
            <Route exact path="/author/:username">
              <Author/>
            </Route>
            <Route path="/:blog_id">
              <Blog/>
            </Route>
            <Route path="/">
              <MainLandingPage />
            </Route>
          </Switch>
        </Router>
      </ContentWithPaddingXl>
      <Footer />
    </Container>
  );
}
