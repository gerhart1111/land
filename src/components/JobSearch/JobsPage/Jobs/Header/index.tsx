import React from 'react';
import { Link } from 'react-router-dom';

import logoPlaceholder from './images/logoPlaceholder.png';
import headerPlaceholder from './images/headerPlaceholder.png';
import styles from './Header.module.scss';
import OptionMenu from '../../../../OptionMenu';
import { useTranslation } from 'react-i18next';


interface HeaderProps{
  isMobile:boolean,
  currentCompany:any
}


const Header = (props:HeaderProps) => {
  const { currentCompany, isMobile } = props;
  const {t} = useTranslation('jobsPage')

  const companyLogo = currentCompany.mainMedia.find((m:any) => m.type === 'logo');
  const companyHeader = currentCompany.mainMedia.find((m:any) => m.type === 'header');

  const menuMoreOptions = [
    { label: t('jobspage.jobs'), type: 'text', onClick: () => (window.location.href = `/company/${currentCompany._id}/jobs`) },
    { label: t('jobspage.menu-label.about'), type: 'text', onClick: () => (window.location.href = `/company/${currentCompany._id}`) },
    { label: t('jobspage.menu-label.search'), type: 'text', onClick: () => (window.location.href = '/search') },
    { label: t('jobspage.menu-label.share'), type: 'text' },
  ];

  return (
    <div className={styles.header}>
      <div>
        <div className={styles.logoContainer}>
          <Link
            to={`/company/${currentCompany._id}`}
            className={styles.logo}
            style={//direction === 'rtl' ? { right: '-6.4rem' } :
             { left: '-6.4rem' }}>
            <img
              src={companyLogo?.linkToOriginal || currentCompany.logo || logoPlaceholder}
              className={styles.logoImage}
              alt="logo"
            />
            <h1 className={styles.logoTitle}>{currentCompany.name}</h1>
          </Link>
          {isMobile && (
            <OptionMenu
              options={menuMoreOptions}
              postLink={`http://${window.location.host}/company/${currentCompany.id}`}
              menuStyles={{ marginLeft: -30, marginTop: 45 }}
            />
          )}
        </div>
      </div>
      <img src={companyHeader?.linkToOriginal || headerPlaceholder} className={styles.cover} alt="header" />
    </div>
  );
};

export default Header;
