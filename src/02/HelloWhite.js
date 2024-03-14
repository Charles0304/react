import styles from "./HelloWhite.module.css"
import { MdOutlinePermIdentity } from "react-icons/md";


export default function HelloWhite() {
    const st = {
        color: "yellow",
    }
  return (
    <h1 className={styles.ch1}>
        <MdOutlinePermIdentity className="h-8 w-8"/>
        <p>ID</p>

    </h1>
  )
}
