/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import GoogleAnalytics from '../GoogleAnalytics';
import PageLoading from '../PageLoading';
import { title, description } from '../../config';

class Html extends Component {

  render() {
    return (
      <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{this.props.title || title}</title>
        <meta name="description" content={this.props.description || description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css' />
      </head>
      <body>
        <PageLoading id="page-loader" />
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
        <GoogleAnalytics />
        <script src="/app.js"></script>
      </body>
      </html>
    );
  }

}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string.isRequired,
  debug: PropTypes.bool.isRequired,
};

export default Html;
