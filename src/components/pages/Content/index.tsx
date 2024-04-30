import React from 'react'
import MiniPost from '@/components/Sidebar/MiniPost/MiniPost'
import styles from "./ContentPage.module.scss";
import Image from 'next/image';

interface ContentPageProps {
    lng: string;
}

const ContentPage:React.FC<ContentPageProps> = ({lng}) => {
  
  const src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";
  
  return (
    <div className={styles.pageContainer}>
        <div className={styles.contentHeader}>
            <Image src={src} alt="img" width={225} height={225} className={styles.contentImage} />
        </div>
        <h3 className={styles.headerTitle}>Header Title</h3>
        <div className={styles.contentContainer}>

        <div className={styles.articleContainer}>
            <h3>Article Header Line</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus felis ante, eget interdum ante blandit vitae. Nunc mauris nunc, volutpat vel porttitor faucibus, auctor vel nisi. Suspendisse dapibus, turpis vitae pellentesque viverra, ipsum nisi blandit nulla, ac gravida quam purus ac sapien. Aenean hendrerit lobortis viverra. Ut libero ipsum, cursus id ullamcorper at, elementum eu lorem. In laoreet molestie bibendum. Quisque lacinia mi in nulla interdum, in blandit urna laoreet. Integer ut augue augue. Vestibulum est dolor, faucibus id iaculis sit amet, auctor quis nisi. Mauris pellentesque egestas purus, vel pellentesque nisi tempus sed. Nunc eu volutpat mauris. Quisque eros lectus, auctor a ex a, scelerisque eleifend leo. Ut sollicitudin magna ac magna bibendum sollicitudin. Nullam feugiat lacus gravida lectus sagittis, sit amet rhoncus libero convallis. Nam sollicitudin, enim at pellentesque molestie, augue eros lobortis neque, at sagittis mi odio vel augue. In molestie aliquam nisl efficitur suscipit.

            Integer faucibus dolor vitae suscipit fermentum. Cras fringilla fringilla quam, at hendrerit lorem blandit in. Etiam accumsan dolor at sagittis consectetur. Maecenas vitae dictum lectus, a ullamcorper augue. Duis non leo orci. Aenean interdum quam enim, sed egestas ipsum imperdiet non. Morbi ac justo et justo aliquam ultricies quis vitae sapien.

            Aenean a leo ac libero bibendum posuere. Nulla scelerisque vehicula libero eget molestie. Curabitur lorem dolor, tincidunt id aliquet nec, fringilla quis purus. Vestibulum suscipit gravida diam, ac rhoncus tortor gravida sit amet. Nunc suscipit ligula ac neque laoreet molestie. Vestibulum sit amet efficitur diam, vel tincidunt lacus. Vestibulum congue eleifend velit, vitae convallis ex congue eget. Donec felis ipsum, imperdiet non tortor commodo, rhoncus viverra diam.
            </p>
            <Image src={src} width={225} height={225} alt="img" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus felis ante, eget interdum ante blandit vitae. Nunc mauris nunc, volutpat vel porttitor faucibus, auctor vel nisi. Suspendisse dapibus, turpis vitae pellentesque viverra, ipsum nisi blandit nulla, ac gravida quam purus ac sapien. Aenean hendrerit lobortis viverra. Ut libero ipsum, cursus id ullamcorper at, elementum eu lorem. In laoreet molestie bibendum. Quisque lacinia mi in nulla interdum, in blandit urna laoreet. Integer ut augue augue. Vestibulum est dolor, faucibus id iaculis sit amet, auctor quis nisi. Mauris pellentesque egestas purus, vel pellentesque nisi tempus sed. Nunc eu volutpat mauris. Quisque eros lectus, auctor a ex a, scelerisque eleifend leo. Ut sollicitudin magna ac magna bibendum sollicitudin. Nullam feugiat lacus gravida lectus sagittis, sit amet rhoncus libero convallis. Nam sollicitudin, enim at pellentesque molestie, augue eros lobortis neque, at sagittis mi odio vel augue. In molestie aliquam nisl efficitur suscipit.

            Integer faucibus dolor vitae suscipit fermentum. Cras fringilla fringilla quam, at hendrerit lorem blandit in. Etiam accumsan dolor at sagittis consectetur. Maecenas vitae dictum lectus, a ullamcorper augue. Duis non leo orci. Aenean interdum quam enim, sed egestas ipsum imperdiet non. Morbi ac justo et justo aliquam ultricies quis vitae sapien.

            Aenean a leo ac libero bibendum posuere. Nulla scelerisque vehicula libero eget molestie. Curabitur lorem dolor, tincidunt id aliquet nec, fringilla quis purus. Vestibulum suscipit gravida diam, ac rhoncus tortor gravida sit amet. Nunc suscipit ligula ac neque laoreet molestie. Vestibulum sit amet efficitur diam, vel tincidunt lacus. Vestibulum congue eleifend velit, vitae convallis ex congue eget. Donec felis ipsum, imperdiet non tortor commodo, rhoncus viverra diam.
            </p>
        </div>
            
            
        <MiniPost lng={lng}/>
        </div>
    </div>
  )
}

export default ContentPage;