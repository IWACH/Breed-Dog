import { capitalize } from "lodash";
import React from "react";
import { Link } from "react-router-dom";

class List extends React.Component {
  abecedario = () => {
    let abc = [];
    for (let i = 97; i < 123; i++) {
      abc.push({ id: String.fromCharCode(i) });
    }
    return abc;
  };
  render() {
    let abc = this.abecedario();
    return (
      <div className="content">
        <p>Seleccionar una letra</p>
        <div className="columns is-desktop is-mobile is-multiline is-centered">
          {abc.map((a, ix) => {
            return (
              <Link key={ix} to={`/breeds/${a.id}`}>
                <div className="column">
                  <div className="button is-large is-link is-light">
                    {capitalize(a.id)}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
