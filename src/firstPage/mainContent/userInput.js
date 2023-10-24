import React from "react";
// import "font-awesome/css/font-awesome.min.css"; // Import Font Awesome CSS

function UserInputs(props) {
  return (
    <form className="user-forms">
      <div className="input-group">
        <span className="icon">
          <i className="fa fa-search"></i> {/* Search icon */}
        </span>
        <input
          type="search"
          className="search-shop-location"
          placeholder="Search Shop On Erox"
        />
      </div>

      <div className="input-group">
        <span className="icon">
          <i className="fa fa-map-marker"></i> {/* Map marker icon */}
        </span>
        <input
          type="text"
          className="search-location"
          placeholder="Enter your location"
        />
      </div>

      <div className="input-group">
        <span className="icon">
          <i className="fa fa-map-marker"></i> {/* Map marker icon */}
        </span>
        <input
          type="text"
          className="detect-location"
          placeholder="Detect my Location"
        />
      </div>
        <input type="submit" className="submit-location" value="SUBMIT" />
    </form>
  );
}

export default UserInputs;

