import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { editBookPubli,getBookpublibyID,deleteBookPubli } from '../../actions/book_published';


class BookPubliEdit extends React.Component {

  state = {
    bookPubli:{},
    book:{},
    redirect : false,
    disabled : false,

    title: '',
    author: '',
    co_author1: '',
    co_author2: '',
    publisher : '',
    place_of_publication: '',
    year_of_publication: '',
    edition_no: '',
}

static propTypes = {
  editBookPubli: PropTypes.func.isRequired,
  bookPubli: PropTypes.object.isRequired,
  deleteBookPubli: PropTypes.func.isRequired,
}

delete = (e) => {
  e.preventDefault();
  const id = this.props.match.params.id;
  var conf = window.confirm("Do you want to delete ?");
  if (conf === true) {
    this.props.deleteBookPubli(id);
    window.open('/book_published',"_self");
  } 
}

onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
}


onSubmit = (e) => {

  e.preventDefault();

  const id = this.props.match.params.id;
  const {title,author,co_author1,co_author2,publisher,place_of_publication,
    year_of_publication,edition_no} = this.state;

  const book = {title,author,co_author1,co_author2,publisher,place_of_publication,
    year_of_publication,edition_no};

  this.props.editBookPubli(book,id);
  window.open('/book_published',"_self");
};


setStates(props)
{
    this.setState({
        title: props.bookPubli.title,
        author: props.bookPubli.author,
        co_author1: props.bookPubli.co_author1,
        co_author2: props.bookPubli.co_author2,
        publisher : props.bookPubli.publisher,
        place_of_publication: props.bookPubli.place_of_publication,
        year_of_publication: props.bookPubli.year_of_publication,
        edition_no: props.bookPubli.edition_no,
    })
}


componentDidMount()
{    
  const id = this.props.match.params.id;
  this.props.getBookpublibyID(id);
}


componentWillReceiveProps(props) {
    this.setStates(props);
    this.setState({
      book : props.bookPubli
    })
}

  render() {
    var book = this.state.book;
    var book_len = Object.keys(book).length
    const year = [];

    for (let i = 1950;i <= (new Date().getFullYear());i++) {
      year.push(<option key = {i} value = {i}>{i}</option>)
    }

    return (
      <div>
        <CustomLayout>
        {
        book_len > 0 ? (
        <Form key = {book.id} onSubmit ={this.onSubmit}>
        <div align="right">
          <Button type="danger" htmlType = "submit" onClick = {this.delete}>Delete</Button>
        </div>
        <Form.Item label="TITLE OF BOOK">
            <Input name = "title" placeholder="Enter Title of book" defaultValue={this.state.title} required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="AUTHOR">
          <Input name = "author" placeholder="Enter Author Name" defaultValue={this.state.author} required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CO AUTHOR-1">
          <Input name = "co_author1" placeholder=""  defaultValue={this.state.co_author1} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CO AUTHOR-2">
          <Input name = "co_author2" placeholder=""  defaultValue={this.state.co_author2} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PUBLISHER">
            <Input name = "publisher" placeholder="Enter Publisher Name" defaultValue={this.state.publisher} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PLACE OF PUBLICATION">
            <Input name = "place_of_publication" placeholder="Place of Publication" defaultValue={this.state.place_of_publication} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="YEAR OF PUBLICATION">
            <input type="month" name = "year_of_publication" required defaultValue={this.state.year_of_publication} onChange = {this.onChange}></input>
          </Form.Item>
          <Form.Item label="EDITION NO">
            <Input name = "edition_no" placeholder="Enter Edition No" defaultValue={this.state.edition_no} onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit">Submit</Button>
          </Form.Item>
        </Form>
        ) : (<h1></h1>)
        }
        </CustomLayout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    bookPubli: state.book_published.book_by_id
});


export default connect(mapStateToProps,{ editBookPubli,getBookpublibyID,deleteBookPubli })(BookPubliEdit);