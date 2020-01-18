import React from 'react';
import { Layout } from 'antd';
import '../css/Layout.css';


export class BlankLayout extends React.Component{

    constructor(props)
    {
        super(props);
    }

    render(){
    return (
        <div>
            <Layout className="layout" >
                    <div style={{ position:'relative',paddingLeft: 200,paddingRight: 200,paddingTop:50,paddingBottom:50}}>
                        {this.props.children} 
                    </div>
            </Layout>
        </div>
    );
    }
}

export default BlankLayout;