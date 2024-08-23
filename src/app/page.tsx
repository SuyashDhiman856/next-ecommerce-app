import Image from "next/image";
import Link from "next/link";
import banner from "./Images/banner.jpg"
import monitor from "./Images/monitor.jpg";
import smartWatch from "./Images/smartWatch.jpg";
import earBud from "./Images/earBud.jpg";
import camera from "./Images/camera.jpg";
import printer from "./Images/printer.jpg";
import projector from "./Images/projector.jpg";
import resistanceBand from "./Images/resistanceBand.jpg";
import shaver from "./Images/shaver.png";
import tv from "./Images/tv.jpg";
import book from "./Images/book.jpg";
import styles from "./CSS/home.module.css";

export default function Home()
{
  const handleMouseEnter = (e: { target: { style: { width: string; }; }; }) => {
    e.target.style.width = "220px";
  }

  const handleMouseLeave = (e: { target: { style: { width: string; }; }; }) => {
    e.target.style.width = "200px";
  }
  return (
    <>
    <Image
          src={banner}
          width={0}
          height={0}
          alt="Banner Image"
          style={{width: "100%", height: "auto"}}>
    </Image>

    <div className="container-fluid" id={styles["product-display"]}>
      <ul id={styles["product-display-list"]}>
        <li className={styles["product-display-list-item"]}>
          <Link href="/"></Link><Image src={monitor} width={200} alt="Monitor"></Image>
          <p>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</p>
        </li>
        <li className={styles["product-display-list-item"]}>
        <Link href="/"><Image src={smartWatch} width={200} alt="Monitor"></Image></Link>
        <p>Smart Watch</p>
        </li>
        <li className={styles["product-display-list-item"]}>
        <Link href="/"><Image src={earBud} width={200} alt="Monitor"></Image></Link>
        <p>Noise Ear Buds</p>
        </li>
        <li className={styles["product-display-list-item"]}>
        <Link href="/"><Image src={camera} width={200} alt="Monitor"></Image></Link>
        <p>Camera</p>
        </li>
        <li className={styles["product-display-list-item"]}>
        <Link href="/"><Image src={printer} width={200} alt="Monitor"></Image></Link>
        <p>Printer</p>
        </li>
        <li className={styles["product-display-list-item"]}>
        <Link href="/"><Image src={projector} width={200} alt="Monitor"></Image></Link>
        <p>Projector</p>
        </li>
        <li className={styles["product-display-list-item"]}>
        <Link href="/"><Image src={tv} width={200} alt="Monitor"></Image></Link>
        <p>Samsung 4K TV</p>
        </li>
      </ul>
    </div>
    </>
  )
}