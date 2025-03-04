
import { Carousel } from 'antd';  

const imageUrls = [  
    'https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/ffxiv_4.5patch_02_2560x1440.jpg',  
    'https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/ffxiv_5.4patch_02_2560x1440.jpg',  
    'https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/ffxiv_6.0patch_01_2560x1440.jpg',  
];  

const BookBanner = () => {  
    return (  
        <div>  
            <Carousel autoplay>  
                {imageUrls.map((url, index) => (  
                    <div key={index}>  
                        <img  
                            src={url}  
                            alt={`内容 ${index + 1}`}  
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }}  
                        />  
                    </div>  
                ))}  
            </Carousel>  
        </div>  
    );  
};  

export default BookBanner;