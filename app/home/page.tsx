import Main from '../components/Main/Main'
import styles from './home.module.scss'


export default function  home () {
    return (
         <section className={styles.homeContainer}>
              <Main/>
         </section>
    )
}