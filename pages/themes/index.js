import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useState } from 'react';

export default function index(props){

    const [loading,setLoading] = useState(false)
    const onClick = ()=> {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        },2000)
    }
    return (
           <div className="w-full">
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                loading={loading}
                onClick={onClick}
            />
        </div>
    )
}

export async function getServerSideProps(ctx){
    return {
        props: {

        }
    }
}
