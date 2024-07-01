import React from "react";
import "./customer_list.css";
import Rectangle343 from "../../assets/Rectangle 343.png";
import Rectangle339 from "../../assets/Rectangle 339.png";
function CustomerList() {
  function HandleClick(){
    console.log("clicked")
  }
  return (
    <>
      <div id="header-placeholder" />
      <div className="container">
        <div className="header-row">
          <div className="search-bar">
            <button id="search-button" className="search-icon-button">
              <img src={Rectangle343} alt="Search" />
            </button>
            <input
              type="text"
              id="search-input"
              className="search-text"
              placeholder="ID, Customer Name, ..."
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'ID, Customer Name, ...'"
            />
          </div>
        </div>
        <div className="header-row">
          <button id="filter-button" className="filter-icon-button">
            <img src={Rectangle339} alt="Search" />
          </button>
          <h1 className="header-title">WISDOM CUSTOMERS</h1>
        </div>
        <div className="customer-list">
          <div className="customer-container">
            <div className="customer-info">
              <img src="customer1.jpg" alt="" className="customer-image" />
              <div className="customer-details">
                <div className="customer-name">Nguyen Cao Danh</div>
                <div className="customer-dob">22/12/2002</div>
              </div>
              <div className="customer-class">SILVER CLASS</div>
            </div>
          </div>
          {/* Repeat customer-container div for more customers */}
        </div>
        <div className="customer-list">
          <div className="customer-container">
            <div className="customer-info">
              <img src="customer1.jpg" alt="" className="customer-image" />
              <div className="customer-details">
                <div className="customer-name">Nguyen Cao Danh</div>
                <div className="customer-dob">22/12/2002</div>
              </div>
              <div className="customer-class">SILVER CLASS</div>
            </div>
          </div>

        </div>
        <div classname="pagination">
          <button onClick={HandleClick}>« Previous</button>
          <button onClick={HandleClick}>1</button>
          <button onClick={HandleClick}>2</button>
          <button onClick={HandleClick}>Next »</button>
        </div>

      </div>

    </>
  );
}
export default CustomerList;