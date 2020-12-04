import React from "react";
import Axios from "axios";
import { capitalize, map } from "lodash";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import { Loading } from "../Loading";

class Breed extends React.Component {
  state = {
    subBreeds: [],
    image: null,
    loading: false,
  };
  componentDidMount = () => {
    this.listSubBreeds();
  };

  listSubBreeds = () => {
    const { breed } = this.props.match.params;
    this.setState(
      {
        loading: true,
      },
      () => {
        Axios.get(`https://dog.ceo/api/breed/${breed}/list`).then(
          (response) => {
            const subBreeds = response.data.message;
            this.setState(
              {
                subBreeds,
                loading: false,
              },
              () => {
                if (subBreeds.length === 0) {
                  this.listImages();
                }
              }
            );
          }
        );
      }
    );
  };

  listImages = () => {
    const { breed } = this.props.match.params;
    this.setState(
      {
        loading: true,
      },
      () => {
        Axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then(
          (response) => {
            this.setState({
              image: response.data.message,
              loading: false,
            });
          }
        );
      }
    );
  };

  render() {
    const { subBreeds, image, loading } = this.state;
    const { breed, id } = this.props.match.params;
    return (
      <div>
        <Breadcrumb />
        <div className="content">
          <h1 className="has-text-centered">{capitalize(breed)}</h1>
          {loading ? <Loading /> : null}
          {subBreeds.length > 0 ? (
            <div>
              <p>Seleccionar una sub-raza</p>
              <div className="columns is-desktop is-mobile is-multiline is-centered">
                {map(subBreeds, (s, ix) => (
                  <Link key={ix} to={`/breeds/${id}/${breed}/${s}`}>
                    <div className="column is-3">
                      <div className="button is-link is-light">
                        {capitalize(s)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          {image ? (
            <div className="has-text-centered">
              <figure className="image is-inline-block">
                <img width="200px" src={image} alt={`Foto de perro ${breed}`} />
              </figure>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Breed;
