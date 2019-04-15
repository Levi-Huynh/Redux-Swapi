import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {fetchChar} from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //call our action
    this.props.distpatch(fetchChar())
  }

  render() {
    if (this.props.loading) {
      // return something here to indicate that you are fetching data
      <h2>Fetching Data...</h2>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mstp = state => {
  return {
    characters: state.characters,
    loading: state.loading
  }
}

export default connect(
 (mstp), {fetchChar: fetchChar}
)(CharacterListView);
