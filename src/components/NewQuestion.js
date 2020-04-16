import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import NavBar from "./NavBar";

class NewQuestion extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <div className="aboutUserBoard">
            <div className="card-deck mb-12 text-center">
              <div className="card mb-12 shadow-sm">
                <div className="card-header">
                  <h4 className="my-0 font-weight-normal">
                    Create New Question
                  </h4>
                </div>

                <div className="card-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="card-title pricing-card-title">
                          Would you rather...
                        </h4>
                        <div className="form-group">
                          <label htmlFor="optionOne">Option One</label>
                          <input
                            type="text"
                            className="form-control"
                            id="optionOne"
                          />
                        </div>
                        <small className="form-text text-muted">Or</small>
                        <br />
                        <div className="form-group">
                          <label htmlFor="optionTwo">Option Two</label>
                          <input
                            type="text"
                            className="form-control"
                            id="optionTwo"
                          />
                        </div>

                        <button
                          type="button"
                          className="btn btn-lg btn-block btn-outline-primary"
                          onClick={(e) => {}}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser: currentUser,
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewQuestion));
