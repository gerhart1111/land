"use client"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Divider from '@mui/material/Divider';

import logoPlaceholder from './Header/images/logoPlaceholder.png';
import SalaryIcon from './Header/images/wallet.png';
import LocatorIcon from './Header/images/locator.png';
import JobFooter from './JobFooter';
import styles from './Jobs.module.scss';
import OptionMenu from '../../../OptionMenu';
import Media from '../../../MediaComponent';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';



const siteUrl = window.location.href;

interface IJobs {
  jobsList: any;
  setJobsDisplayed?: any;
  setJobListLoading?: any;

}




const Jobs: React.FC<IJobs> = ({ jobsList, setJobsDisplayed, setJobListLoading})  => {
  const [isMobileFormat, setIsMobileFormat] = useState<boolean>(window.innerWidth < 959);

  const {t} = useTranslation('jobsPage')

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    if(setJobListLoading) {
      setJobListLoading(true);
    }
  
  }, []);

  const handleWindowResize = () => {
    setIsMobileFormat(window.innerWidth < 959);
  };



  // function compare( a, b ) {
  //   if ( a.pro > b.pro ){
  //     return -1;
  //   }
  //   if ( a.pro < b.pro ){
  //     return 1;
  //   }
  //   return 0;
  // }
  
  // async function sort(){ jobsList.sort((a, b) => {
  //   return scores.findIndex(p => p.id === a.id) - scores.findIndex(p => p.id === b.id);
  //   })};
    
 
  

  const isTooLong = (txt:any) => {
    if (txt.length > 400) return true;
    else return false;
  };

  const shortDescription = (txt:any) => {
    if (typeof txt !== 'string') txt = txt.toString();
    txt = txt.replace(/(<([^>]+)>)/gi, '');
    txt = txt.replace(/&nbsp;/g, '');
    return '<p>' + txt.slice(0, 380) + '...' + '</p>';
  };
  const shortMobileDescription = (txt:any) => {
    if (typeof txt !== 'string') txt = txt.toString();
    txt = txt.replace(/(<([^>]+)>)/gi, '');
    txt = txt.replace(/&nbsp;/g, '');
    return '<p>' + txt.slice(0, 160) + '...' + '</p>';
  };

  const renderJobList = () => {
      return (
      <div className={styles.jobs}>
        {
        jobsList.map((job:any) => {
          const salary = job.salary;
          const currency = salary && salary.currency;
  
          const menuMoreOptions = [
            { label: t('jobspage.viewJob'), type: 'text', onClick: () => (window.location.href = `/jobs/${job.id}`) },
            { label: t('jobspage.declineJob'), type: 'text'},
            { label: t('jobspage.sharePost'), type: 'text' },
          ];
  
          return (
            <div className={styles.job} key={job.id}>
              <div className={styles.jobHeader}>
                <div className={styles.subHeader}>
                  <Link to={`/jobs/${job.id}`}>
                    <Image
                      src={job.mainMedia.find((m:any) => m.type === 'logo')?.linkToOriginal || logoPlaceholder}
                      className={styles.jobLogo}
                      alt="logo"
                    />
                  </Link>
                  <Link to={`/jobs/${job.id}`} className={styles.jobHeaderText}>
                    <h2 className={styles.jobTitle}>{job.name}</h2>
                    <span className={styles.jobCompany}>{job.company.name}</span>
                  </Link>
                </div>
  
  
  
                <OptionMenu options={menuMoreOptions} postLink={`http://${window.location.host}/jobs/${job.id}`} />
              </div>
              {!salary && !job.locations.length ? null : (
                <>
                  <Divider className={styles.jobDivider} />
                  <div className={styles.jobBenefits}>
                    {salary ? (
                      <div className={styles.benefit}>
                        <Image src={SalaryIcon} className={styles.benefitIcon} alt="salary" />
                        <span className={styles.benefitTitle}>
                          {currency?.symbol} {salary.from} - {salary.to} {salary.period}
                        </span>
                      </div>
                    ) : (<div className={styles.benefit} />)}
                    {job.locations.length ? (
                      <div className={styles.benefit}>
                        <Image src={LocatorIcon} className={styles.benefitIcon} alt="location" />
                        <span className={styles.benefitTitle}>
                          {isMobileFormat ? job.locations[0].city : job.locations[0].address}
                        </span>
                      </div>
                    ) : (<div className={styles.benefit} />)}
                  </div>
                </>
              )}
              {isTooLong(job.description) ? (
                <span className={styles.jobText}>
                  {isMobileFormat
                    ? parse(shortMobileDescription(job.description))
                    : parse(shortDescription(job.description))}
                  <Link to={`/jobs/${job.id}`}>{t('jobspage.read-more')}</Link>
                </span>
              ) : (
                <span className={styles.jobText}>{parse(job.description)}</span>
              )}
              <Media companyName={job.company.name} obj={job}/>
              <JobFooter jobId={job.id}/>
            </div>
          );
        })}
      </div>
    );
  }
  



 
  return (jobsList.length === 0 ? <></> : renderJobList())
  
};

export default Jobs;
