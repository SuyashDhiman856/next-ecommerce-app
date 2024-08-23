import Image from "next/image";
import styles from "../CSS/products.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import monitor from "../Images/monitor.jpg";
import samMonitorS3 from "../Images/samsungEssentialS3.png";
import samMonitor from "../Images/samsungEssential.png";
import samOdyssey from "../Images/samsungOdyddeyG3.jpg";
import lgMonitor from "../Images/lgMonitor.jpg";
import lgUltraGear from "../Images/lgUltragear.jpg";
import lgUltraFine from "../Images/lgUltrafine.jpg";
import monitor32 from "../Images/32inchMonitor.jpg";

export default function Products(this: any) {
    
    return (
        <>
            <h1>Products</h1>
            
            <div className={styles["monitor-carousal"]}>
                <ul className={styles["monitor-carousal-list"]}>
                    <li className={styles["monitor-carousal-list-item"]}>
                        <div style={{ display: "block", width: "300px" }}>
                            <Image src={monitor} width={300} alt="monitor"></Image>
                            <h6 style={{ height: "50px", margin: "auto", textAlign: "center" }}>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</h6>
                        </div>
                    </li>
                    <li className={styles["monitor-carousal-list-item"]}>
                        <div style={{ display: "block", width: "300px" }}>
                            <Image src={samMonitorS3} width={300} alt="monitor"></Image>
                            <h6 style={{ height: "50px", margin: "auto", textAlign: "center" }}>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</h6>
                        </div>
                    </li>
                    <li className={styles["monitor-carousal-list-item"]}>
                        <div style={{ display: "block", width: "300px" }}>
                            <Image src={samMonitor} width={300} alt="monitor"></Image>
                            <h6 style={{ height: "50px", margin: "auto", textAlign: "center" }}>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</h6>
                        </div>
                    </li>
                    <li className={styles["monitor-carousal-list-item"]}>
                        <div style={{ display: "block", width: "300px" }}>
                            <Image src={samOdyssey} width={300} alt="monitor"></Image>
                            <h6 style={{ height: "50px", margin: "auto", textAlign: "center" }}>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</h6>
                        </div>
                    </li>
                    <li className={styles["monitor-carousal-list-item"]}>
                        <div style={{ display: "block", width: "300px" }}>
                            <Image src={lgMonitor} width={300} alt="monitor"></Image>
                            <h6 style={{ height: "50px", margin: "auto", textAlign: "center" }}>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</h6>
                        </div>
                    </li>
                    <li className={styles["monitor-carousal-list-item"]}>
                        <div style={{ display: "block", width: "300px" }}>
                            <Image src={lgUltraGear} width={300} alt="monitor"></Image>
                            <h6 style={{ height: "50px", margin: "auto", textAlign: "center" }}>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</h6>
                        </div>
                    </li>
                    <li className={styles["monitor-carousal-list-item"]}>
                        <div style={{ display: "block", width: "300px" }}>
                            <Image src={lgUltraFine} width={300} alt="monitor"></Image>
                            <h6 style={{ height: "50px", margin: "auto", textAlign: "center" }}>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</h6>
                        </div>
                    </li>
                    <li className={styles["monitor-carousal-list-item"]}>
                        <div style={{ display: "block", width: "300px" }}>
                            <Image src={monitor32} width={300} alt="monitor"></Image>
                            <h6 style={{ height: "50px", margin: "auto", textAlign: "center" }}>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</h6>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    )
}