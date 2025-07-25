
import { TaskStatus } from '../TaskStatus/TaskStatus';
import { Todo } from '../ToDo/Todo';
import { Banner } from '../WelcomeBanner/Banner';
import styles from './Main.module.scss';


export default function Main () {
    return (
        <main className={styles.mainContainer}>
            <Banner/>
            <div className={styles.taskWrapper}>
                <Todo/>
                <TaskStatus/>
            </div>
        </main>
    )
}