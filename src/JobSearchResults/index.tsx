"use client"
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import queryString from 'query-string';
import { searchJobsApi } from '../components/JobSearch/api';
import SearchForm from '../components/JobSearch/SearchForm';
import Jobs from '../components/JobSearch/JobsPage/Jobs';
import styles from './JobSearchResults.module.scss';
import { useTranslation } from 'react-i18next';


const JobSearchResults: React.FC = () => {
  const [results, setResults] = useState<any>(null);
  const [JobsDisplayed, setJobsDisplayed] = useState<any>({status: ""});
  const [jobListLoading, setJobListLoading] = useState<boolean>(false);
  const {t} = useTranslation('jobSearchResults')


  const parsedQuery = queryString.parse(window.location.search);
  const { type, name, category, subcategory, city, state, country, address, placeId } = parsedQuery;


  const searchJobs = async () => {
    if (!(name || city || state || country)) {
      setResults(null);
    } else {
      const jobs = await searchJobsApi({ type, name, city, state, country, placeId });
      setResults(jobs);
      
      
    }
  };

  useEffect(() => {
    searchJobs();
    
  }, [type, name, city, state, country, address]);

 
  
  const titleText = () => {
    let heading: any;
    !name && !subcategory && !category
       //Unclear text
      ? (heading = ('searchForm.jobsIn'))                //Unclear text 
      : (heading = `${name || subcategory || category} ${('searchForm.jobsInSmall')}`);
    return heading;
  };
  const metaText = () => {
    let text: any;
    !name && !subcategory && !category
      ? (text = ('jobs'))                             //Unclear text
      : (text = `${name || subcategory || category} ${('results.jobsSmall')}`);
    return text;
  };

  const locationText = () => {
    let locText: any;
    if (country && !state && !city) {
      locText = `${country} `;
    } else if (country && city && !state) {
      locText = `${city}, ${country} `;
    } else {
      locText = `${city}, ${state}, ${country} `;
    }
    return locText;
  };

  const renderEndMessage = () => {
    if (results) {
      console.log({results});
      return null
    }
  }

  return (
    <div className={styles.container}>
      <Helmet titleTemplate="%s" defaultTitle="">
        <title>
          {titleText()}
          {locationText()}
        </title>
        <meta name="description" content={`${metaText()} ${t('meta-data.content',{location:locationText()})}`} />
      </Helmet>
      <SearchForm
        // name={name}
        // type={type}
        locationFilter={{ city, state, country, address, placeId }}
        jobsCount={results?.length}
        //category={category}
       // subcategory={subcategory}
      />

      <div className={styles.jobs}>
        {results && <Jobs jobsList={results} setJobsDisplayed={setJobsDisplayed} setJobListLoading={setJobListLoading} />}
          {renderEndMessage()}
        </div>
      </div>
  );
};

export default JobSearchResults;
