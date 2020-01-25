import React from 'react';
import history from '../common/history';
import { Button } from 'antd';

class Error extends React.Component{

    changePage = (url) => {
        history.push(url)
      }

    render(){
        return (
            <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                    <h2>Cannot Access This Page</h2>
                </div>
            </div>
            </div>
        )
    }
}
    
export default Error;