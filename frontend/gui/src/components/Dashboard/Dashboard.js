import React from 'react';
import { Descriptions,Button } from 'antd';
import DashboardLayout from '../DashboardLayout';
import history from '../common/history';
import '../../css/Dashboard.css'

class Dashboard extends React.Component{

    changePage = (url) => {
        history.push(url)
    }

    render(){

    return (
      <div>
    <DashboardLayout>
      <div className='wrapper'>
    <input id='1' type='checkbox'/>
    <label for='1' onClick = {this.changePage.bind(this,'/generalinfo')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-info-sign"></span></div>
        <span>General information</span>
      </div>
       </label>
    <input id='2' type='checkbox'/>
    <label for='2' onClick = {this.changePage.bind(this,'/qualification')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-education"></span></div>
        <span>Qualification</span>
      </div>
       </label>
    <input id='3' type='checkbox'/>
    <label for='3'onClick = {this.changePage.bind(this,'/specialization')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-briefcase"></span></div>
        <span>Spec & Membership</span>
      </div>
    </label>
    <input id='4' type='checkbox'/>
    <label for='4' onClick = {this.changePage.bind(this,'/employment')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-user"></span></div>
        <span>Employment details</span>
      </div>
    </label>
    <input id='5' type='checkbox'/>
    <label for='5' onClick = {this.changePage.bind(this,'/publication')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-bookmark"></span></div>
        <span>Publications</span>
      </div>
    </label>
    <input id='6' type='checkbox'/>
    <label for='6' onClick = {this.changePage.bind(this,'/csw')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-list-alt"></span></div>
        <span>Conf /Seminar /Workshop</span>
      </div>
    </label>
    <input id='7' type='checkbox'/>
    <label for='7' onClick = {this.changePage.bind(this,'/project')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-euro"></span></div>
        <span>Sponsored Projects</span>
      </div>
    </label>
    <input id='8' type='checkbox'/>
    <label for='8' onClick = {this.changePage.bind(this,'#')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-pencil"></span></div>
        <span>Academic Research</span>
      </div>
    </label>
    <input id='9' type='checkbox'/>
    <label for='9' onClick = {this.changePage.bind(this,'/invited_lectures/add')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-envelope"></span></div>
        <span>Invited Lectures</span>
      </div>
    </label>
    <input id='10' type='checkbox'/>
    <label for='10' onClick = {this.changePage.bind(this,'/experience_abroad/add')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-plane"></span></div>
        <span>Experience Abroad</span>
      </div>
    </label>
    <input id='11' type='checkbox'/>
    <label for='11' onClick = {this.changePage.bind(this,'/book_published/add')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-star"></span></div>
        <span>Book Published</span>
      </div>
    </label>
    <input id='12' type='checkbox'/>
    <label for='12' onClick = {this.changePage.bind(this,'/eao_programme/add')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-book"></span></div>
        <span>Ext & Outreach Prog</span>
      </div>
    </label>
    <input id='13' type='checkbox'/>
    <label for='13' onClick = {this.changePage.bind(this,'#')}>
      <div>
        <div className='circle'><span className="glyphicon glyphicon-certificate"></span></div>
        <span>Achievements</span>
      </div>
    </label>
  </div>
      </DashboardLayout>
      </div>
    );
      
    }
}


export default Dashboard;