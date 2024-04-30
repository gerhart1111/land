"use client"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import { useStyles } from './styles';
import styles from './JobFooter.module.scss';
import { useTranslation } from 'react-i18next';


interface IJobFooterProps {
  jobId: string;
 // declineJob: (jobId: string) => void;
}

const JobFooter: React.FC<IJobFooterProps> = props => {

  const { jobId } = props;
  const [shareAnchorEl, setShareAnchorEl] = useState<any>(null);
  const [userResponse, setUserResponse] = useState<string | null>(null);
  const {t} = useTranslation('common')


  const classes = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Link to={`/jobs/${jobId}`}>
          <Button variant="contained" color="primary" className={classes.button}>
            {t('common.view',{ns:'common'})}
          </Button>
        </Link>
        {/* <Button
          variant="contained"
          className={`${classes.button} ${classes.declineButton}`}
         // onClick={() => declineJob(jobId)}
          disabled={userResponse === 'declined'}>
          {('jobs.declineJob')}
        </Button> */}
      </div>
      <div className={styles.share} onClick={e => setShareAnchorEl(e.currentTarget)}>
        <div className={styles.shareIcon}>
          <ShareIcon />
        </div>
        <span className={styles.shareText}>{t('common.share',{ns:'common'})}</span>
      </div>
      
    </div>
  );
};

export default JobFooter;
