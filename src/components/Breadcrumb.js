import { capitalize, map } from "lodash";
import React from "react";
import { Link } from "react-router-dom";

class Breadcrumb extends React.Component {
  render() {
    const pathName = window.location.pathname;
    const pathArray = pathName.replace("/breeds/", "").split("/");
    let pathRender = [];
    let url = [];
    pathArray.forEach((path, ix) => {
      url.push(path);
      pathRender.push({
        name: path,
        href: `/breeds/${url.join("/")}`,
        last: ix === pathArray.length - 1,
      });
    });
    return (
      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          {map(pathRender, (path, ix) => {
            return path.last ? (
              <li key={ix} className="is-active">
                <Link to={path.href}>{capitalize(path.name)}</Link>
              </li>
            ) : (
              <li key={ix}>
                <Link to={path.href} aria-current="page">
                  {capitalize(path.name)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Breadcrumb;
