import React, { Component } from "react";
import { connect } from "react-redux";

/*export default */ class BookDetail extends Component {
  render() {
    return (
      <div>
        Book Detail!
        {/* <h5>{this.props.selectedBook.title</h5> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
