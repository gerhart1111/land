"use client"
import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSwipeable } from 'react-swipeable';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
// import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
// import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import logo from '../Navbar/images/logo.png';
import styles from './GalleryModal.module.scss';
import Image from 'next/image';

interface IGallery {
  imageListing: any[];
  openModal: {
    media: any[];
    showModal: boolean;
    caption: string;
    modalSrc: string;
    imageIndex: number;
    sectionIndex: number;
  };
  companyName?:  any
}

const GalleryModal: React.FC<IGallery> = props => {
  const { imageListing, openModal,companyName} = props;
  const albumId = imageListing[0]?.albumId
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalSrc, setModalSrc] = useState<string>('');
  const [imageIndex, setImageIndex] = useState<number>(0);

  

  const changeChild = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      plusSlides(-1);
    } else if (e.key === 'ArrowRight') {
      plusSlides(1);
    }
  };

  useEffect(() => {
    setShowModal(openModal.showModal);
  }, [openModal]);

  useEffect(() => {
    document.addEventListener('keydown', changeChild);

    return function cleanup() {
      document.removeEventListener('keydown', changeChild);
    };
  });

  useEffect(() => {
    setShowModal(openModal.showModal);
    setModalSrc(openModal.modalSrc);
    setImageIndex(openModal.imageIndex);
  }, [openModal]);

  const plusSlides = (n:number) => {
    let nextIndex = imageIndex + n;
    const numberOfSections = imageListing.length;

    if (nextIndex < 0) {
      nextIndex = numberOfSections - 1;
    }

    if (nextIndex > numberOfSections - 1) {
      nextIndex = 0;
    }
    let nextImage, nextImageIndex;
    if (nextIndex >= 0) {
      nextImage = imageListing[nextIndex];
      nextImageIndex = nextIndex;
    } else if (nextIndex < 0) {
      nextImage = imageListing[nextIndex - 1].length - 1;
      nextImageIndex = imageListing[nextIndex - 1].length - 1;
    } else {
      nextImage = imageListing[nextIndex + 1];
      nextImageIndex = 0;
    }

    setModalSrc(nextImage.linkToOriginal);
    setImageIndex(nextImageIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => plusSlides(1),
    onSwipedRight: () => plusSlides(-1),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className={styles.container}>
      <Modal open={showModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <div className={styles.modalBox}>
          <span className={styles.close} style={//direction === 'rtl' ? { right: '20px', left: 'unset' } :
           undefined}>
            <CloseIcon onClick={() => setShowModal(false)} />
            <Image src={logo} alt="logo" className={styles.logoImage} />
          </span>
          <div className={styles.mySlides} style={{ display: showModal ? 'flex' : 'none' }}>
            <TransformWrapper initialScale={1} disabled={window.innerWidth <= 959}>
              {({ zoomIn, zoomOut, resetTransform }) => {
                return (
                  <React.Fragment>
                    <div
                      className={styles.imageControls}
                      style={ undefined}>
                      <ZoomInIcon className={styles.controlIcon} onClick={() => zoomIn()} />
                      <ZoomOutIcon className={styles.controlIcon} onClick={() => zoomOut()} />
                      {/* <ZoomOutMapIcon/> */}
                    </div>
                    <div className={styles.transformBox} {...handlers}>
                      <TransformComponent
                        contentStyle={{
                          display: 'flex',
                          alignContent: window.innerWidth > 959 ? 'none' : 'flex-start',
                          marginTop: window.innerWidth > 959 ? 'none' : ' 42% ',
                        }}>
                        <Image className={styles.modalContent} id="img01" src={modalSrc} alt="" />
                      </TransformComponent>
                    </div>
                    {imageListing.length > 1 && (
                      <div className={styles.arrows}>
                        <a
                          className={styles.prev}
                          style={
                           undefined
                          }
                          onClick={() => {
                            plusSlides(-1);
                            resetTransform();
                          }}>
                          <ArrowForwardIosIcon style={//direction === 'ltr' ? { transform: 'scaleX(-1)' } : 
                          undefined} />
                        </a>
                        <a
                          className={styles.next}
                          style={
                        undefined
                          }
                          onClick={() => {
                            plusSlides(1);
                            resetTransform();
                          }}>
                          <ArrowForwardIosIcon style={//direction === 'rtl' ? { transform: 'scaleX(-1)' } : 
                          undefined} />
                        </a>
                      </div>
                    )}
                  </React.Fragment>
                );
              }}
            </TransformWrapper>
          </div>
          <div />
        </div>
      </Modal>
    </div>
  );
};

export default GalleryModal;
