import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getPublication } from '../../actions/publication';
import history from '../common/history';

class Publication_view extends React.Component{

  static propTypes = {
    publication: PropTypes.array.isRequired
  }

  state = {
    publication:{},
    length : -1
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
    

    addRedirect = () => {
      history.push('/publication/add');

      //window.open("/qualification/edit","_self");
    }


    editRedirect = (e) => {
        var id = e.target.id;
        history.push(`/publication/edit/${id}`);
        
        //console.log(e.target.id);
        //window.open("/qualification/edit","_self");
    }

    
      componentDidMount() {
        this.props.getPublication();
      }

      componentDidUpdate(prevProps) {
        if (prevProps.publication !== this.props.publication) {
          var numRows = 0;
          this.props.publication.map(publi => 
            (numRows++) );
          localStorage.setItem('numRows',numRows);
        }
      }
      

    render(){
      var numRows = localStorage.getItem('numRows');

    return (
      <div>
      <CustomLayout>

      {
      numRows == 0 ? (
                  <div>
                  </div>
      ) : (
      <div>
      <h2>PUBLICATIONS</h2>
      <br/>
        {
        this.props.publication.map(publi => (
          <div key = {publi.id}>
                <div align = "right">
                  <Button id = {publi.id} type = "primary" onClick={this.editRedirect}>Edit</Button>
                </div>
                <br/>
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

      <Button type="primary" onClick={this.addRedirect}>Add Publication</Button>
      </CustomLayout>
      </div>
    );
      
    }
}

const mapStateToProps = state => ({
  publication: state.publication.publication
});


export default connect(mapStateToProps,{ getPublication })(Publication_view);