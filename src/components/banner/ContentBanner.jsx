import { useTypewriter } from "react-simple-typewriter";
import "bootstrap-icons/font/bootstrap-icons.min.css"
export default function ContentBanner() {
    const [dataContent] = useTypewriter({
        words: ["Nơi bắt nguồn của những cảm hứng thời trang", "Sự đơn giản là định nghĩa của thanh lịch", "Thời trang - nơi tôn vinh cái đẹp", "Nơi tạo nên phong cách"],
        typeSpeed: 20,
        loop: true,
        delaySpeed: 4000,
        deleteSpeed: 0
    });
    return(
        <>
            <div className="col-lg-7 col-sm-12 " >
                <div className="row " style={{padding:"200px 0"}}>
                    <div className="col-12 ">
                        <div className="ms-3 content gap-10">
                        <h1 className="size-48">Chào mừng đến với JS <span className="size-48 store">Store</span></h1>
                        <p className="size-18 bold mtd-10" style={{color:"rgba(58, 57, 57, 0.5)",fontFamily: "Montserrat-italic"}}> {dataContent}&ensp;</p>
                        <p className="size-28 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam quia facilis quod odit consectetur eaque ad recusandae ex cupiditate!</p>
                        </div>
                        
                    </div>
                    <div className="col-12">
                        <button className="ms-5 my-5 ps-3 py-3 button " >Khám phá <i className="bi bi-arrow-right mx-1"> </i></button>
                    </div>
                </div>
            </div>
       

        </>
    )
}