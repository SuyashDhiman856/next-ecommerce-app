import Image from "next/image"
import monitor from "../../Images/monitor.jpg";
import earBud from "../../Images/earBud.jpg";
import tv from "../../Images/tv.jpg";
import shaver from "../../Images/shaver.png";
import smartWatch from "../../Images/smartWatch.jpg";

export default function ProductDetails({params}: {
    params: {productId : string}
})
{
   
    if(parseInt(params.productId) === 1)
    {
        return <div style={{display: "flex", width: "600px"}}>
            <Image src={monitor} width={300} alt="monitor"></Image>
            <h6 style={{height: "50px", margin: "auto"}}>Acer Nitro VG270 M3 27 Inch WQHD (2560 X 1440)</h6>
        </div>
    }
    else if(parseInt(params.productId) === 2)
    {
        return <div style={{display: "flex", width: "600px"}}>
            <Image src={earBud} width={300} alt="Ear Bud"></Image>
            <h6 style={{height: "50px", margin: "auto"}}>Noise Ear Bud</h6>
        </div>
    }
    else if(parseInt(params.productId) === 3)
    {
            return <div style={{display: "flex", width: "600px"}}>
                <Image src={tv} width={300} alt="Ear Bud"></Image>
                <h6 style={{height: "50px", margin: "auto"}}>Samsung 4K T.V.</h6>
            </div>
    }

    else if(parseInt(params.productId) === 4)
    {
                return <div style={{display: "flex", width: "600px"}}>
                    <Image src={shaver} width={300} alt="Ear Bud"></Image>
                    <h6 style={{height: "50px", margin: "auto"}}>Phillips Shaver</h6>
                </div>
    }
    else if(parseInt(params.productId) === 5)
    {
            return <div style={{display: "flex", width: "600px"}}>
                <Image src={smartWatch} width={300} alt="Ear Bud"></Image>
                <h6 style={{height: "50px", margin: "auto"}}>Boat Smart Watch</h6>
            </div>
    }
    else{
        return <h1>Details for product {params.productId}</h1>
    }
}