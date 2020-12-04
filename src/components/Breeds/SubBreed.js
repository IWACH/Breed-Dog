import React from "react";
import Axios from "axios";
import { capitalize } from "lodash";
import Breadcrumb from "../Breadcrumb";
import { Loading } from "../Loading";

class SubBreed extends React.Component {
  state = {
    subBreeds: [],
    image: null,
    loading: false,
  };
  componentDidMount = () => {
    this.listImages();
  };

  listImages = () => {
    const { breed, subBreed } = this.props.match.params;
    this.setState(
      {
        loading: true,
      },
      () => {
        Axios.get(
          `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`
        ).then((response) => {
          this.setState({
            image: response.data.message,
            loading: false,
          });
        });
      }
    );
  };

  render() {
    const { image, loading } = this.state;
    const { breed, subBreed } = this.props.match.params;
    return (
      <div>
        <Breadcrumb />
        <div className="content">
          <h1 className="has-text-centered">
            {capitalize(breed)}
            {subBreed ? ` - ${capitalize(subBreed)}` : null}
          </h1>
          {loading ? (
            <Loading/>
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

export default SubBreed;
