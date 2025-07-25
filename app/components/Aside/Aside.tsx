import { Navigation } from '../Navigation/Navigation';
import styles from './Aside.module.scss';





export default function Aside () {
    return (
        <aside className={styles.asideContainer}>
            <div className={styles.asideLogo}>
                <div className={styles.asideProfile}></div>
                <div className={styles.profileInfo}>
                    <h2 className={styles.hedlain}>Sundar Gurung</h2>
                    <span className={styles.subtitle}>sundargurung360@gmail.com</span>
                </div>

            </div>
            <Navigation/>
        
        </aside>
    )
}