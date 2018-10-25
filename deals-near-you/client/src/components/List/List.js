import React from "react";
import "./List.css";

const List = () => (
  <div>
 <div className="container-1">
  <div className="card">
  <div className="card-header header-1">
    Deals
  </div>
  <div className="card-body">
  <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Name</th>
      <th scope="col">Deals</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tourism</td>
      <td>City Hall</td>
      <td>$ 2 Off</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Grocey Store</td>
      <td>Target</td>
      <td>5% Off</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Restaurant</td>
      <td>Seventh Heaven</td>
      <td>$2 Off</td>
    </tr>
    <tr>
    <th scope="row">4</th>
    <td>Restaurant</td>
    <td>Vedge</td>
    <td>5% Off</td>
  </tr>
  </tbody>
</table>
  </div>
</div>
</div>
  </div>
);


export default List;


