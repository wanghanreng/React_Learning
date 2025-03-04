import { Card, Avatar } from 'antd';  
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';  

const { Meta } = Card;
const MainProductList = () => {  
    const products = [  
        {  
            title: "红莲之狂潮",  
            description: "标题1标题1",  
            imgSrc: "https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/ffxiv_4.5patch_02_2560x1440.jpg",  
        },  
        {  
            title: "暗影之逆焰",  
            description: "标题2标题2",  
            imgSrc: "https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/ffxiv_5.4patch_02_2560x1440.jpg",  
        },  
        {  
            title: "晓月之终途",  
            description: "标题2标题2",  
            imgSrc: "https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/ffxiv_6.0patch_01_2560x1440.jpg",  
        },
        // 可以添加更多商品  
    ];  
    
    return(  
      <div style={{ marginTop: '20px' }}>   
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>  
          {products.map((product, index) => (  
            <Card  
              key={index}  
              hoverable  
              style={{ width: 300 }}  
              cover={<img alt={product.title} src={product.imgSrc} />}  
              // actions={[  
              //   <SettingOutlined key="setting" />,  
              //   <EditOutlined key="edit" />,  
              //   <EllipsisOutlined key="ellipsis" />,  
              // ]}  
            >  
              <Meta  
                avatar={<Avatar src={product.imgSrc} />}  
                title={product.title}  
                description={product.description}  
              />  
            </Card>  
          ))}  
        </div>  
      </div>  
    );  
};  

export default MainProductList;