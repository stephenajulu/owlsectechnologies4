import React from 'react';
import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      OwlSec Technologies is a strategic I.T and Cybersecurity agency in Nairobi, Kenya.{' '} That builds&nbsp;
      <Highlight>beautiful&nbsp;digital&nbsp;products</Highlight>,&nbsp;<Highlight>brands</Highlight>&nbsp;and&nbsp;<Highlight>experiences</Highlight>
      <br />
      OwlSec helps you create, grow and foster connections with your customers. And we think we’re pretty good at it.
    </Intro>
          
          <hr width="75%" />
          
          
          <BlockText
      heading="What do we do"
      description={
        <>
                <h4 align="left">Web Development and Design</h4>
                <p align="left">
                  A strong web presence attracts your target visitors and turns them into your new customers.
                  But it’s paying attention to the detail that makes all the difference.
                  A well-designed website is about far more than just its visual appearance.
                </p> 
<br />
                <h4 align="center">I.T and Cybersecurity Consultation</h4>
                <p align="center">
                  We help you shape your strategy by going through a Consultation Session.
                  What comes out of the session is a clear understanding of your objectives, how to fix the present errors and what needs to be put in place to achieve your goals
                </p>
<br />                
                <h5 align="right">Web App/Site Performance, Search Engine and Security Optimization</h5>
                <p align="right">
                  We believe in fast, search engine friendly
                </p>
          .
        </>
      }
    />

    <BlockText
      heading="About"
      description={
        <>
          Want to Learn About OwlSec Technologies? Go to{' '}
          <a href="https://owlsectechnologies4.netlify.app" target="_blank" rel="noopener noreferrer">
            OwlSec Tech Co
          </a>
          .
        </>
      }
    />
  </>
);
