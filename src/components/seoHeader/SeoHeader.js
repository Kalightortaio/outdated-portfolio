import React from "react";
import { Helmet } from "react-helmet";

function SeoHeader() {
  return(
    <Helmet>
      <title>Kalightortaio's Portfolio</title>
      <meta name="description" content="A passionate individual who is constantly seeking to learn and amass more experience, while commiting to dedicate their time into productivity and creativity." />
      <meta property="og:title" content="Kalightortaio's Portfolio" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://portfolio.kalightortaio.com/" />
    </Helmet>
  );
}

export default SeoHeader;
