import styles from "./HelloYellow.module.css"
import { RiLockPasswordLine } from "react-icons/ri";

export default function HelloYellow() {
    return (
      <h1 className={styles.ch1}>
          <RiLockPasswordLine size="30"/>
          <p>Password</p>
      </h1>
    )
  }
  