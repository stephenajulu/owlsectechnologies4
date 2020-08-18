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
      We help you create, grow and foster connections with your customers and users. And we believe we’re pretty good at it.
    </Intro>
          
          <hr width="75%" />
          
           <BlockText
      heading="About"
      description={
        <>
          
    <h2>What We Do</h2>
<div class="row">
          <div align="left" class="column" style="float:left;">
          <p><strong><b>Web Development and Design</b></strong></p>
                <p>
                  A strong web presence attracts your target visitors and turns them into your new customers.
                  But it’s paying attention to the detail that makes all the difference.
                  A well-designed website is about far more than just its visual appearance.
                </p> 
          </div>
<br />
          <div align="center" class="column" style="float:left;">
          <p><strong><b>I.T and Cybersecurity Consultation</b></strong></p>
                <p>
                  We help you shape your strategy by going through a Consultation Session.
                  What comes out of the session is a clear understanding of your objectives, how to fix the present errors and what needs to be put in place to achieve your goals
                </p>
          </div>
<br />     
          <div align="right" class="column" style="float:left;">
          <p><strong><b>Web App/Site Performance, Search Engine and Security Optimization</b></strong></p>
                <p>
                  We believe in fast, search engine and mobile friendly websites.
                  With OwlSec Technologies, we'll make sure yoru website is top notch.
                  We may not have been the agency in charge of building the initial website but you can be sure we'll be the agency incharge of putting your website on the top of the search list.
                </p>
          </div>
</div>
  </>
      }
    />        .


    <BlockText
      heading="About"
      description={
        <>
          Want to Learn About OwlSec Technologies? Go to {' '}
          <a href="https://owlsectechnologies4.netlify.app/about" target="_blank" rel="noopener noreferrer">
            About
          </a>
          .
        </>
      }
    />
  </>
);
