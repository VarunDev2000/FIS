import React from 'react';
import { Form, Input, Button } from 'antd';
import CustomLayout from '../Layout';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { addBookpubli } from '../../actions/book_published';

class CustomForm extends React.Component {

  state = {
    redirect : false,
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
  addBookpubli: PropTypes.func.isRequired
}

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
  console.log(e.target.value);
}


onSubmit = e => {

  e.preventDefault();
    
  if(this.props.type == 'add')
  {
  const {title,author,co_author1,co_author2,publisher,place_of_publication,
    year_of_publication,edition_no} = this.state;

  const book = {title,author,co_author1,co_author2,publisher,place_of_publication,
    year_of_publication,edition_no};
    
    console.log(book);
    this.props.addBookpubli(book);
  }

  else{
    console.log("submit");
  }
}

  render() {
    return (
      <div>
        <CustomLayout>
        <Form onSubmit ={this.onSubmit}>
          <Form.Item label="TITLE OF BOOK">
            <Input name = "title" placeholder="Enter Title of book" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="AUTHOR">
          <Input name = "author" placeholder="Enter Author Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CO AUTHOR-1">
          <Input name = "co_author1" placeholder=""  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="CO AUTHOR-2">
          <Input name = "co_author2" placeholder=""  onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PUBLISHER">
            <Input name = "publisher" placeholder="Enter Publisher Name" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="PLACE OF PUBLICATION">
            <Input name = "place_of_publication" placeholder="Place of Publication" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="YEAR OF PUBLICATION">
            <Input name = "year_of_publication" placeholder="Year of Publication" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item label="EDITION NO">
            <Input name = "edition_no" placeholder="Enter Edition No" required onChange = {this.onChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType = "submit">{this.props.btnText}</Button>
          </Form.Item>
        </Form>
        </CustomLayout>
      </div>
    );
  }
}


export default connect(null,{ addBookpubli })(CustomForm);