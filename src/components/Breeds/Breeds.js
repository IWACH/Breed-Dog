import React from "react";
import Axios from "axios";
import { capitalize, map } from "lodash";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import { Loading } from "../Loading";

class Dog extends React.Component {
  state = {
    breeds: [],
    subBreed: [],
    loading: false,
  };
  componentDidMount = () => {
    this.listBreeds();
  };

  listBreeds = () => {
    this.setState(
      {
        loading: true,
      },
      () => {
        Axios.get("https://dog.ceo/api/breeds/list/all").then((response) => {
          this.setState({
            breeds: Object.keys(response.data.message).filter((b) =>
              b.startsWith(this.props.match.params.id)
            ),
            loading: false,
          });
        });
      }
    );
  };

  renderContent = () => {
    let { breeds, loading} = this.state;
    let { match } = this.props;
    let id = match.params.id;
    if (breeds.length === 0 && !loading) {
      return (
        <div className="content">
          <h4>No hay ninguna raza con la letra {capitalize(id)}</h4>
        </div>
      );
    }
    return (
      <div className="content">
        <h3 className="has-text-centered">
          Raza{breeds.length===1? "": "s"} con la letra {capitalize(id)}
        </h3>
        {loading ? (
          <Loading/>
        ) : null}
        <p>Seleccionar una raza</p>
        <div className="columns is-desktop is-mobile is-multiline is-centered">
          {map(breeds, (b, ix) => (
            <Link key={ix} to={`/breeds/${id}/${b}`}>
              <div className="column is-3">
                <div className="button is-link is-light">{capitalize(b)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <Breadcrumb />
        {this.renderContent()}
      </div>
    );
  }
}

export default Dog;
