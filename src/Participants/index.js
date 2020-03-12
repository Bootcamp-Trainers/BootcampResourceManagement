import React, { useState, useEffect } from "react";
import axios from "axios";
import postParticipant from "../Participants/postParticipant";

class ParticipantPart extends React.Component {
  constructor() {
    super();

    this.state = {
      poeple: [],
      url: "https://swapi.co/api/people/"
    };
  }

  componentDidMount() {
    this.callApi(this.state.url);
  }

  callApi = url => {
    axios
      .get(url)
      .then(resolve =>
        this.setState({
          poeple: resolve.data.results,
          next: resolve.data.next,
          prev: resolve.data.previous
        })
      )
      .catch(error => console.log(error));
  };

  render() {
    const { poeple, isLoading, prev, next } = this.state;
    return (
      <>
        <div>
          <List data={poeple} />
          <button disabled={!prev} onClick={() => this.callApi(prev)}>
            Prev
          </button>
          <button disabled={!next} onClick={() => this.callApi(next)}>
            Next
          </button>
        </div>
        <br />
        <postParticipant />
      </>
    );
  }
}

const List = ({ data }) => (
  <ul>
    {data.map(x => (
      <li key={x.created}>{x.name}</li>
    ))}
  </ul>
);

export default ParticipantPart;
