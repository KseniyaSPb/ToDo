import css from './fotter.module.scss'
import {useTasks} from "../../hooks/tasks/use-tasks";

export const Footer = (props) => {
    const {getActiveTaskCount, getFinishedTaskCount} = useTasks();

    return (
        <footer className={css.footer}>
            <span>Active task: {getActiveTaskCount()}</span>
            <span>Finished task: {getFinishedTaskCount()}</span>
            <div className={css.footerdiv}>
				Created by <a href='https://github.com/KseniyaSPb' target='_blank' rel='noreferrer'>@KseniyaSPb</a>
			</div>
        </footer>
    )
}
