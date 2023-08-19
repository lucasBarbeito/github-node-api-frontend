"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../styles/NotFound.module.css"; 

const NotFound = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404" className={styles.errorImage} />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Oops! Page not found.
                </h1>
                <button
                    className={styles.button}
                    onClick={() => router.push('/')}
                >
                    Go back to home page
                </button>
            </div>
        </div>
    );
}

export default NotFound;
