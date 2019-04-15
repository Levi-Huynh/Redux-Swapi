import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {fetchChar} from "../actions/index";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //call our action
    this.props.fetchChar();
  }

  render() {
    console.log(this.props);
    if (this.props.loading) {
      // return something here to indicate that you are fetching data
      <h2>Fetching Data...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
      {console.log(typeof this.props.characters)}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mstp = state => {
  return {
    characters: state.charsReducer.characters,
    loading: state.charsReducer.loading
  }
}

export default connect(
 (mstp), {fetchChar: fetchChar}
)(CharacterListView);
