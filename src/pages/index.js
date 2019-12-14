import React, { useState, createRef } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "bulma";

const IndexPage = () => {
  const [display, setDisplay] = useState("None");

  const copyClipboard = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText("craft.ラムダ.com");
    setDisplay("");
    setTimeout(clearMessage, 2000);
  };

  const clearMessage = () => {
    setDisplay("None");
  };

  return (
    <Layout>
      <SEO title="KINC Minecraft Server" />
      <section className="hero is-dark is-bold is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div
              className="notification is-primary message-box"
              style={{ display }}
            >
              <button className="delete" onClick={clearMessage}></button>
              Copied!
            </div>
            <h1 className="title">KINC Minecraft Server</h1>
            <pre className="url">craft.ラムダ.com</pre>
            <button className="button is-primary" onClick={copyClipboard}>
              Copy URL
            </button>
            <a className="button is-info" href="/dynmap">
              Dynmap
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
