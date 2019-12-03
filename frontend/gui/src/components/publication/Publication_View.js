import React from 'react';
import { Descriptions,Button } from 'antd';
import { Redirect } from 'react-router-dom';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getPublication } from '../../actions/publication';

class Publication_view extends React.Component{

  static propTypes = {
    publication: PropTypes.array.isRequired
  }

  state = {
    publication:{},
    length : -1,
    redirect : false
  }


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    viewPDF = (fileURL) => {
      setTimeout(() => {
        const response = {
          file: fileURL
        };
        window.open(response.file, 'Download');  
      }, 100);
    }


     popPDF(url) {
      var ref = window.open(url,"thePop","menubar=1,resizable=1,scrollbars=1,status=1,height=1920,width=1020,top=0")
      ref.focus();
    }
    



    renderRedirect = (type) => {
      if (this.state.redirect && type === 'edit') {
        return <Redirect to = '/publication/edit' />
      }

      else if (this.state.redirect && type === 'add') {
        return <Redirect to = '/publication/add' />
      }
    }

    
      componentDidMount() {
        this.props.getPublication();
        this.setState({ length: Object.keys(this.props.publication).length });
      }
      

    render(){
      var numRows = 0;
      this.props.publication.map(publi => 
        (numRows++) );

    return (
      <div>
      <CustomLayout>

      {
      numRows === 0 ? (
                  <div>
                  </div>
      ) : (
      <div>
      <h2>PUBLICATIONS</h2>
      <br/>
        {
        this.props.publication.map(publi => (
          <div>
            {console.log(publi.pdf)}
                <Descriptions bordered>
                <Descriptions.Item label="TITLE" span={3}>{ publi.title }</Descriptions.Item>   
                <Descriptions.Item label="LEVEL" span={3}>{ publi.level }</Descriptions.Item>
                <Descriptions.Item label="YEAR" span={3}>{ publi.year }</Descriptions.Item>
                <Descriptions.Item label="PDF" >
                  <Button span={3} target="ref" onClick={() => this.popPDF(publi.pdf)}>View</Button></Descriptions.Item>
                </Descriptions>
                <br /><br/>
          </div>
        )
      )
      }
      </div>
      )
      }

      {this.renderRedirect('add')}
      <Button type="primary" onClick={this.setRedirect}>Add Publication</Button>
      </CustomLayout>
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  publication: state.publication.publication
});


export default connect(mapStateToProps,{ getPublication })(Publication_view);