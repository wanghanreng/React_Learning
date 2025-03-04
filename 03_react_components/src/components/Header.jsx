import {HomeOutlined, MailOutlined, SettingFilled, } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import BookInput from './Books/BookInput';

const Header = () => {
    return (  
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3299cc', padding: '10px' }}>  
            <Tooltip title="首页">  
                <Button type="text" icon={<HomeOutlined />} style={{ marginRight: '20px' }}>  
                    首页  
                </Button>  
            </Tooltip>  
            <Tooltip title="邮件">  
                <Button type="text" icon={<MailOutlined />} style={{ marginRight: '20px' }}>  
                    邮件  
                </Button>  
            </Tooltip>  
            <Tooltip title="设置">  
                <Button type="text" icon={<SettingFilled />} style={{ marginRight: '20px' }}>  
                    设置  
                </Button>  
            </Tooltip>  
        </div>  
    );  
};

export default Header;