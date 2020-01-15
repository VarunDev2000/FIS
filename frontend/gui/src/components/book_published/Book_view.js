import React from 'react';
import { Descriptions,Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { getBookpubli } from '../../actions/book_published';
import history from '../common/history'

class Book_view extends React.Component{

  static propTypes = {
    bookPubli: PropTypes.array.isRequired
  }

  state = {
    bookPubli:{},
    redirect : false,
    numRows : 0
}


    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    addRedirect = () => {
      history.push('/book_published/add');

      //window.open("/add","_self");
    }

    editRedirect = (e) => {
      var id = e.target.id;
      history.push(`/book_published/edit/${id}`);

        //window.open('/edit',"_self");

    }

    
      componentDidMount() {
        this.props.getBookpubli();
      }

      componentWillReceiveProps(props) {
        var count = 0;
        props.bookPubli.map(book => 
          (count++) );

        localStorage.setItem('length',count);
      }
      

    render(){
      var numRows = localStorage.getItem('length');
      
    return (
      <CustomLayout>
      <Button type="primary" onClick={this.addRedirect}>Add</Button><br/><br/><br/>
      {
       numRows == 0 || numRows == null ? (
            <div></div>
      ) : (
          <div>
         <h2>BOOK PUBLISHED</h2><br/>
        {
      this.props.bookPubli.map(book => (
              <div key = {'book'+book.id}>
              <Descriptions bordered>
              <Descriptions.Item label="TITLE OF THE BOOK" span={3}>{ book.title }</Descriptions.Item>
              <Descriptions.Item label="AUTHOR" span={3}>{ book.author }</Descriptions.Item>
              <Descriptions.Item label="CO-AUTHOR1" span={3}>{book.co_author1}</Descriptions.Item>
              <Descriptions.Item label="CO-AUTHOR2" span={3}>{book.co_author2}</Descriptions.Item>
              <Descriptions.Item label="PUBLISHER" span={3}>{book.publisher}</Descriptions.Item>
              <Descriptions.Item label="PLACE OF PUBLICATION" span={3}>{book.place_of_publication}</Descriptions.Item>
              <Descriptions.Item label="YEAR OF PUBLICATION" span={3}>{book.year_of_publication}</Descriptions.Item>
              <Descriptions.Item label="EDITION NO" span={3}>{book.edition_no}</Descriptions.Item>
              </Descriptions>
              <Button id={book.id} type="primary" className="editButton" onClick={this.editRedirect}>EDIT</Button>
            </div>
      ))
        }
      </div>
      )
      }
      </CustomLayout>
    );
    }
  }

const mapStateToProps = state => ({
  bookPubli: state.book_published.book,
});


export default connect(mapStateToProps,{ getBookpubli })(Book_view);