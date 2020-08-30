import React from 'react';
import { Helmet } from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';
import { Row } from 'components/row/Row';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Paracy is a strategic I.T and Cybersecurity agency in Nairobi, Kenya.{' '} That builds&nbsp;
      <Highlight>beautiful&nbsp;digital&nbsp;products</Highlight>,&nbsp;<Highlight>brands</Highlight>&nbsp;and&nbsp;<Highlight>experiences</Highlight>
      <br />
      We help you create, grow and foster connections with your customers and users. And we believe we’re pretty good at it.
      <br />{' '}
       <a href="https://paracy.netlify.app/about"  target="_blank" rel="noopener noreferrer">
         Learn more
      </a>
    </Intro>
          
          <hr width="75%" />
          

    <BlockText
      heading="Got a Project?"
      description={
        <>
          Let's Talk{' '}
          <a href="mailto:paracy.co@gmail.com" target="_blank" rel="noopener noreferrer">
            Tell Us Everything
          </a>
          .
        </>
      }
    />
  </>
);
