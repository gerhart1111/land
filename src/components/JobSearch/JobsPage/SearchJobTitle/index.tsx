"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './styles';
import styles from './SearchJobTitle.module.scss';
import Autocomplete from '@mui/material/Autocomplete';
import { useTranslation } from 'react-i18next';

interface ISearchJobTitle {
  companyName: string;
  locations: any;
  jobsList: any[];
  childToParentFunc(value: string): any;
}

const SearchJobTitle: React.FC<ISearchJobTitle> = props => {
  const { companyName, locations, jobsList, childToParentFunc } = props;
  const classes = useStyles();
  // const [error, setError] = useState<string>('');
  const [jobValue, setJobValue] = useState<any>(null);
  const addresses = locations.map((t:any) => t.address.split(',').slice(1));
  const jobs = jobsList.map(job => job.name);
  const {t} = useTranslation(['jobsPage','common'])

  const submitSearch = () => {
    if (!jobValue) {
      // setError('Job title is required');
      childToParentFunc(jobValue);
    } else {
      //  setError('');
      childToParentFunc(jobValue);
    }
  };


  return (
    <div className={styles.searchJob}>
      <h1 className={styles.title}>
        {companyName} {t('jobspage.jobs')}
      </h1>
      <div className={classes.inputs}>
        <Autocomplete
          options={jobs.map(job => job)}
          className={//direction === 'rtl' ? classes.autocompleteRtl : 
          classes.autocomplete}
          openOnFocus={false}
          popupIcon={null}
          id="companyJobs"
          onChange={(event: any, newValue: string | null) => {
            setJobValue(newValue);
          }}
          renderInput={params => (
            <>
              <TextField
                {...params}
                placeholder={t('searchJobsTitle.allJobs')}
                className={classes.input}
                type="text"
                required
                onChange={e => setJobValue(e.target.value)}
              />
            </>
          )}
        />

        <Autocomplete
          options={addresses.map((adr:any) => String(adr))}
          className={//direction === 'rtl' ? classes.autocompleteRtl : 
            classes.autocomplete}
          openOnFocus={false}
          popupIcon={null}
          disabled={locations.length === 1 ? true : false}
          renderInput={params => (
            <>
              <TextField
                {...params}
                placeholder={locations.length === 1 ? String(addresses[0]) : t('searchJobTitle.selectLocation')}
                className={classes.input}
                type="text"
              />
            </>
          )}
        />

        <Button variant="contained" color="primary" className={classes.button} onClick={submitSearch}>
          <span className={styles.btnTitle}>{t('common.search',{ns:'common'})}</span>
          <SearchIcon className={styles.btnIcon} />
        </Button>
      </div>
      {/* {error && <span className={styles.error}>{error}</span>} */}
    </div>
  );
};

export default SearchJobTitle;
