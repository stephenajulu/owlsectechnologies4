import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import Logo from '../../assets/svg/ueno-logo.svg';
import Dribbble from '../../assets/svg/dribbble.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Github from '../../assets/svg/github.svg';
import Instagram from '../../assets/svg/instagram.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Linkedin from '../../assets/svg/linkedin.svg';

import { helmet } from '../../utils/helmet';
import { Header } from '../header/Header';
import { HeaderLink } from '../header/HeaderLink';
import { Footer } from '../footer/Footer';
import { Devtools } from '../devtools/Devtools';

import s from './AppLayout.scss';

interface AppLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

// tslint:disable no-default-export
export default ({ children }: AppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink name="about" to="/about" />
    </Header>

    {children}

    <Footer
      logo={<Logo />}
      social={[
        { icon: <Dribbble />, to: 'https://dribbble.com/paracyco' },
        { icon: <Twitter />, to: 'https://twitter.com/paracyco' },
        { icon: <Github />, to: 'https://github.com/paracyco' },
        { icon: <Instagram />, to: 'https://www.instagram.com/paracyco' },
        { icon: <Facebook />, to: 'https://www.facebook.com/paracyco' },
        { icon: <Linkedin />, to: 'https://www.linkedin.com/company/paracy' },
      ]}
    />

    {isDev && <Devtools />}
  </div>
);
