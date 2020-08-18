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
      OwlSec Technologies is a strategic I.T product and service agency in Nairobi, Kenya.{' '} That builds&nbsp;
      <Highlight>beautiful digital products</Highlight>,&nbsp;
      <Highlight>brands</Highlight>&nbsp;
      and 
      <Highlight>experiences</Highlight> with a lot of love and dedication.
      We believe the future is Static Progressive Web Applications that work even when offline. Therefore we use
      <br>
        web technologies/framework such as Hugo, Gatsby and Gridsome.
        Headless CMS such as Netlify CMS, Forestry CMS and Contentfull among others.
        <br>
          Ensuring <Highlight>fast first contentfull paint</Highlight>,&nbsp; <Highlight>fast time to interactive</Highlight>,&nbsp; <Highlight>improved security</Highlight>,&nbsp; <Highlight>SEO</Highlight> and <Highlight>mobile friendliness</Highlight>
          <br>
            You can say we have a need for speed 😉
    </Intro>
          
          <hr width="75%">
          <style type="text/css">
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;margin: auto 0px;}}
          </style>
<div class="tg-wrap"><table class="tg" border="0" cellpadding="5" cellspacing="0">
<thead>
  <tr>
    <th class="tg-ul38">Web Development and Design</th>
    <th class="tg-ul38">I.T and Cybersecurity Strategic Consultation</th>
    <th class="tg-ul38">Web App/Site Performance, Search Engine and Security Optimization</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">A strong web presence attracts your target visitors and turns them into your new customers.
<br>
                  But it’s paying attention to the detail that makes all the difference.
<br>
                  A well-designed website is about far more than just its visual appearance.</td>
    <td class="tg-0lax">We help you shape your strategy by going through a Consultation Session.
<br>
What comes out of the session is a clear understanding of your objectives, how to fix the present errors and what needs to be put in place to achieve your goals</td>
    <td class="tg-0lax">As we mentioned above we have a need for speed. Statistics state users will rarely spend more than 20 seconds waiting for all elements of a webpage to load before leaving.
<br>
      A fast, User Friendly and Search Engine Optimized website boosts user engagement and lead generation </td>
  </tr>
</tbody>
</table></div>
          
          <BlockText
      heading="What do we do"
      description={
        <>
                <h5 align="left">Web Development and Design</h5>
                <p align="left">
                  A strong web presence attracts your target visitors and turns them into your new customers.
<br>
                  But it’s paying attention to the detail that makes all the difference.
<br>
                  A well-designed website is about far more than just its visual appearance.
                </p> 
                
                <h5 align="center">I.T and Cybersecurity Consultation</h5>
                <p align="center">
                  We help you shape your strategy by going through a Consultation Session.
<br>
                  What comes out of the session is a clear understanding of your objectives, how to fix the present errors and what needs to be put in place to achieve your goals
                </p>
                
                <h5 align="right">Web App/Site Performance, Search Engine and Security Optimization</h5>
                <p align="right">
                  
                </p>
          <br>
                For more informations go to{' '}
          <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
            ueno.co
          </a>
          .
        </>
      }
    />

    <BlockText
      heading="Who we are"
      description={
        <>
          OwlSec Technologies. For more informations go to{' '}
          <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
            ueno.co
          </a>
          .
        </>
      }
    />
  </>
);
