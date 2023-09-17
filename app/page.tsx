import {ResponsiveAppBar} from "@/components/AppBar";
import styles from "./page.module.css";
import {GalleryShop} from "@/components/GalleryShop";

export default function Home() {
  return (
    <main className={styles.main}>
      <GalleryShop />
    </main>
  );
}
