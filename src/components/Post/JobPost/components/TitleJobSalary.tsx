import React from 'react'
import styles from '../JobPost.module.scss'

interface TitleJobSalaryProps{
    jobTitle: string,
    salary: string
}

const TitleJobSalary = ({jobTitle,salary}:TitleJobSalaryProps) => {
  return (
    <div className={styles.titleJobSalary}>
        <div className={`${styles.flexRow} ${styles.centerRow}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M3 15.75C2.5875 15.75 2.23425 15.603 1.94025 15.309C1.64625 15.015 1.4995 14.662 1.5 14.25V6C1.5 5.5875 1.647 5.23425 1.941 4.94025C2.235 4.64625 2.588 4.4995 3 4.5H6V3C6 2.5875 6.147 2.23425 6.441 1.94025C6.735 1.64625 7.088 1.4995 7.5 1.5H10.5C10.9125 1.5 11.2658 1.647 11.5598 1.941C11.8538 2.235 12.0005 2.588 12 3V4.5H15C15.4125 4.5 15.7657 4.647 16.0598 4.941C16.3538 5.235 16.5005 5.588 16.5 6V14.25C16.5 14.6625 16.353 15.0158 16.059 15.3098C15.765 15.6038 15.412 15.7505 15 15.75H3ZM3 14.25H15V6H3V14.25ZM7.5 4.5H10.5V3H7.5V4.5Z"
              fill="black"
            />
          </svg>
          <h6 className={styles.boldText}>{jobTitle}</h6>
        </div>
        <div className={`${styles.flexRow} ${styles.centerRow}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M8.30386 12.8829V14.1815M8.30386 6.44145V7.65002M8.30386 17.3443C12.4558 17.3443 15.4215 15.75 15.4215 12.2015C15.4215 8.34431 13.6421 5.77288 10.0833 3.84431L11.4831 1.89002C11.5542 1.7618 11.5927 1.61548 11.5949 1.46589C11.597 1.3163 11.5626 1.16877 11.4951 1.03823C11.4277 0.907703 11.3296 0.798816 11.2108 0.722612C11.092 0.646408 10.9568 0.605595 10.8188 0.604309H5.78898C5.65095 0.605595 5.51569 0.646408 5.3969 0.722612C5.27812 0.798816 5.18003 0.907703 5.11259 1.03823C5.04515 1.16877 5.01074 1.3163 5.01286 1.46589C5.01498 1.61548 5.05356 1.7618 5.12467 1.89002L6.52446 3.85717C2.96566 5.79859 1.18626 8.37002 1.18626 12.2272C1.18626 15.75 4.15193 17.3443 8.30386 17.3443Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.1176 12.2914C7.26234 12.4777 7.44451 12.6255 7.65015 12.7235C7.85578 12.8216 8.0794 12.8673 8.30386 12.8571C8.64694 12.8825 8.98572 12.7627 9.24898 12.5229C9.51224 12.2831 9.67947 11.9421 9.71552 11.5714C9.67947 11.2008 9.51224 10.8597 9.24898 10.62C8.98572 10.3802 8.64694 10.2604 8.30386 10.2857C7.96079 10.3111 7.62201 10.1913 7.35875 9.95149C7.09548 9.71171 6.92825 9.37065 6.8922 9C6.92536 8.62806 7.09178 8.28504 7.35573 8.04464C7.61968 7.80424 7.9601 7.68563 8.30386 7.71429C8.52437 7.69967 8.74513 7.73821 8.95025 7.82714C9.15537 7.91606 9.33975 8.05316 9.49013 8.22858"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className={styles.boldText}>{salary}</span>
        </div>
      </div>
  )
}

export default TitleJobSalary