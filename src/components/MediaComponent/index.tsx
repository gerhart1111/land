"use client";
import React, { useState } from "react";
import styles from "./Media.module.scss";
import GalleryModal from "../GalleryModal";
import { useTranslation } from "react-i18next";

interface Media {
  obj?: any;
  companyName?: any;
}

const Media: React.FC<Media> = (props) => {
  const { obj, companyName } = props;
  const images = obj?.media ?? obj?.companyMedia;
  const { t } = useTranslation("mediaComponent");

  const [openModal, setOpenModal] = useState({
    showModal: false,
    media: [],
    caption: "",
    modalSrc: "",
    imageIndex: 0,
    sectionIndex: 0,
  });

  const renderGallery = () => {
    return (
      <div className={styles.gallery}>
        <img
          src={images[0]?.linkToOriginal}
          className={styles.galleryMainImage}
          alt="img"
          onClick={() => {
            setOpenModal({
              media: images,
              showModal: true,
              caption: images[0].linkToOriginal,
              modalSrc: images[0].linkToOriginal,
              imageIndex: 0,
              sectionIndex: 0,
            });
          }}
        />
        <div className={styles.galleryRestImages}>
          {images.slice(1, 4).map((image: any, i: number) =>
            i === 2 ? (
              <div key={i} className={styles.galleryRestImage}>
                <img
                  src={images[3].linkToOriginal}
                  alt="img"
                  onClick={() => {
                    setOpenModal({
                      media: images,
                      showModal: true,
                      caption: image.linkToOriginal,
                      modalSrc: image.linkToOriginal,
                      imageIndex: 3,
                      sectionIndex: 3,
                    });
                  }}
                />
                <div
                  className={styles.galleryRemainingImagesCount}
                  onClick={() => {
                    setOpenModal({
                      media: images,
                      showModal: true,
                      caption: image.linkToOriginal,
                      modalSrc: image.linkToOriginal,
                      imageIndex: 3,
                      sectionIndex: 3,
                    });
                  }}
                >{`+ ${images.length - 4}`}</div>
              </div>
            ) : (
              <img
                key={i}
                src={image.linkToOriginal}
                className={styles.galleryRestImage}
                alt="img"
                onClick={() => {
                  const index = images.findIndex(
                    (obj: any) => obj.linkToOriginal === image.linkToOriginal
                  );
                  setOpenModal({
                    media: images,
                    showModal: true,
                    caption: image.linkToOriginal,
                    modalSrc: image.linkToOriginal,
                    imageIndex: index,
                    sectionIndex: index,
                  });
                }}
              />
            )
          )}
        </div>
        <GalleryModal
          companyName={companyName}
          imageListing={openModal.media}
          openModal={openModal}
        />
      </div>
    );
  };

  if (!images?.length) return null;

  return (
    <div className={styles.container}>
      <span className={styles.title}>{t("media")}</span>
      {renderGallery()}
    </div>
  );
};

export default Media;
