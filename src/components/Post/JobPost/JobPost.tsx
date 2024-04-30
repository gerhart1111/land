"use client"
import React, { useRef, useLayoutEffect, useState } from "react";
import styles from "./JobPost.module.scss";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Menu from "./components/Menu";
import WarpTop from "./components/WarpTop";
import TitleJobSalary from "./components/TitleJobSalary";
import Footer from "./components/Footer";

const JobPost = () => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [fullDescription, setFullDescription] = useState(false);
  const { t } = useTranslation('common')

  useLayoutEffect(() => {
    if (descriptionRef.current !== null) {
      // its checks if there more 2 lines at description for show more button
      const element = descriptionRef.current;
      const lines = element.scrollHeight > element.clientHeight;
      setShowMoreButton(lines); // To display button 'Show More'
    }
  }, [descriptionRef]);

  const src = "https://s3-alpha-sig.figma.com/img/6849/c00c/fd480759cefdac75331181d45457dcc8?Expires=1694995200&Signature=F0zqC8a2Bbf21284KyTG972GeUkdSKta7e76oK-ZR9v~rG6-iFS~zViC-Gld0laTK5fvWeLUg-D2C1FJzzqR3TxAltdgobm7hCaovYwFT7skHbHw3OB5MomK6wHU249AAWX-12fImBDBVbfeSsEDlMvcqePG2QEcqbSSmQpHCTvPShe9T4BaUEc9i65rj4xLPZetPsQAm83qXwHLG8SIz~aVzx8IJD3GgoJVOrw-gp7s6Be4LLrXjrvzB1EoqBB8SzwXAIlrSzmG9hzIjIhcqGENLS0DFUl77OztLNGZzOUjD31f65mCU9Zj0mvWEFIl4SeMTnMlLO08kbvsAJKaEw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

  return (
    <div className={styles.root}>
      <Menu />
      <WarpTop
        name={'BigKuala'}
        src={src}
        location={'Tel Aviv, Israel'} />
      <TitleJobSalary jobTitle={'Front End Developer'} salary={'15,000-20,000 NIS'} />
      <div className={styles.description}>
        <div
          className={!fullDescription ? styles.descriptionLimit : ""}
          ref={descriptionRef}
        >
          BigPanda is a fast-growing, values-driven, global company that enables
          Tech Ops teams to keep the digital economy running BigPanda is a
          fast-growing, values-driven, global company that enables Tech Ops
          teams to keep the digital economy running
        </div>
        {showMoreButton && (
          <span
            className={styles.showMoreButton}
            onClick={() => {
              setFullDescription((fullDescription) => !fullDescription);
              setShowMoreButton((showMoreButton) => !showMoreButton);
            }}
          >
            {t('common.show-more')}
          </span>
        )}
      </div>

      <Image
        width={768}
        height={768}
        src={src}
        alt="main_Image"
        className={styles.img}
      />

      <Footer t={t} />
    </div>
  );
};

export default JobPost;
