import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "bulma";

const IndexPage = () => (
  <Layout>
    <SEO title="KINC Minecraft Server" />
    <section className="hero is-dark is-bold is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">KINC Minecraft Server</h1>
          <pre className="url">craft.ラムダ.com</pre>
          <Link className="button" to="/dynmap">
            Dynmap
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
