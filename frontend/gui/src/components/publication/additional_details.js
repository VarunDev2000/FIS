import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import {getPublicationbyID } from '../../actions/publication';


class AdDetails extends React.Component {

  state = {
    publication:{},
    publi:{},
    redirect : false,
    disabled : false,
}

static propTypes = {
  publication: PropTypes.object.isRequired,
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

onFileChange = e => {
  this.setState({
    file : e.target.files[0],
    filechanged : true
  });
}

popPDF(url) {
    var ref = window.open(url,"thePop","menubar=1,resizable=1,scrollbars=1,status=1,height=1920,width=1020,top=0")
    ref.focus();
  }


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getPublicationbyID(id);
}


componentWillReceiveProps(props) {
    this.setState({
      publi : props.publication
    })
}

  render() {
    var publi = this.state.publi;
    var publi_len = Object.keys(publi).length

    return (
      <div>
        <CustomLayout>
        {
        publi_len > 0 ? (
          <div key = {publi.id}>
                <Descriptions bordered>
                <Descriptions.Item label="LEVEL" span={3}>{ publi.level }</Descriptions.Item>
                <Descriptions.Item label="TITLE" span={3}>{ publi.title }</Descriptions.Item>   
                <Descriptions.Item label="FIRST AUTHOR" span={3}>{ publi.first_author }</Descriptions.Item>
                <Descriptions.Item label="CORRESPONDING AUTHOR" span={3}>{ publi.corres_author }</Descriptions.Item>
                <Descriptions.Item label="ALL AUTHORS INCLUDING ABOVE IN ORDER" span={3}>{ publi.all_auth_inorder }</Descriptions.Item>
                <Descriptions.Item label="JOURNAL NAME" span={3}>{ publi.journal_name }</Descriptions.Item>
                <Descriptions.Item label="VOLUME" span={3}>{ publi.volume }</Descriptions.Item>
                <Descriptions.Item label="ISSUE" span={3}>{ publi.issue }</Descriptions.Item>
                <Descriptions.Item label="YEAR" span={3}>{ publi.year }</Descriptions.Item>
                <Descriptions.Item label="PAGE NO" span={3}>{ publi.page_no }</Descriptions.Item>
                <Descriptions.Item label="PUBLISHER" span={3}>{ publi.publisher }</Descriptions.Item>
                <Descriptions.Item label="IMPACT FACTOR IN THE YEAR OF PUBLICATION" span={3}>{ publi.impact_factor }</Descriptions.Item>
                <Descriptions.Item label="IS IT A REFEREED JOURNAL?" span={3}>{ publi.ref_journal }</Descriptions.Item>
                <Descriptions.Item label="PDF" >
                  <Button span={3} target="ref" onClick={() => this.popPDF(publi.pdf)}>View</Button></Descriptions.Item>
                </Descriptions>
          </div>
      ) : (<h1></h1>)
      }
        </CustomLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    publication: state.publication.publication_by_id
});


export default connect(mapStateToProps,{getPublicationbyID })(AdDetails);