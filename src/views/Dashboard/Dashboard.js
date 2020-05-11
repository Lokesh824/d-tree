import React, { Component } from "react";
import Tree from "../Tree/Tree";
import TreeMultiple from "../Tree/TreeMulitple";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleSelectValue: undefined,
      singleSelectValueFromMultiple: undefined,
      checkedKeysFromMulitple: [],
    };
  }

  selectedValue = (value) => {
    this.setState({ singleSelectValue: value });
  };

  selectedMultipleValue = (value) => {
    this.setState({ singleSelectValueFromMultiple: value });
  };

  checkedMultipleValues = (values) => {
    this.setState({ checkedKeysFromMulitple: [...values] });
  };

  render() {
    const {
      singleSelectValue,
      singleSelectValueFromMultiple,
      checkedKeysFromMulitple,
    } = this.state;
    console.log("checkedKeysFromMulitple", checkedKeysFromMulitple);
    return (
      <>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">D-TREE React</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        <div className="row p-4 m-4">
          <div className="col-8">
            <div className="card text-center">
              <div className="card-header">Dynamic Tree - With Select</div>
              <div className="card-body text-left">
                <div
                  className="card-text overflow-auto"
                  style={{
                    background: "#c8ced3",
                    maxHeight: "400px",
                    maxWidth: "100%",
                    overflow: "auto",
                  }}
                >
                  <Tree
                    selectValue={(value) => {
                      this.selectedValue(value);
                    }}
                  />
                </div>
                <div className="card-footer text-muted text-center">
                  <a href="https://openbase.io/js/rc-tree" className="btn">
                    Reference<b> rc-tree</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-center">
              <div className="card-body text-left">
                <div
                  className="card-text overflow-auto"
                  style={{
                    background: "#c8ced3",
                    height: "500px",
                    maxWidth: "100%",
                    overflow: "auto",
                  }}
                >
                  Details
                  <p>
                    Selected Value :
                    {singleSelectValue === undefined
                      ? "Please Select from the Tree"
                      : singleSelectValue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-4 m-4">
          <div className="col-8">
            <div className="card text-center">
              <div className="card-header">
                Dynamic Tree - With Select & CheckBox
              </div>
              <div className="card-body text-left">
                <div
                  className="card-text overflow-auto"
                  style={{
                    background: "#c8ced3",
                    maxHeight: "400px",
                    maxWidth: "100%",
                    overflow: "auto",
                  }}
                >
                  <TreeMultiple
                    selectValue={(value) => {
                      this.selectedMultipleValue(value);
                    }}
                    checkedValues={(values) => {
                      this.checkedMultipleValues(values);
                    }}
                  />
                </div>
                <div className="card-footer text-muted text-center">
                  <a href="https://openbase.io/js/rc-tree" className="btn">
                    Reference<b> rc-tree</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-center">
              <div className="card-body text-left">
                <div
                  className="card-text overflow-auto"
                  style={{
                    background: "#c8ced3",
                    maxHeight: "500px",
                    maxWidth: "100%",
                    overflow: "auto",
                  }}
                >
                  Details
                  <div>
                    Selected Value :
                    {singleSelectValueFromMultiple === undefined
                      ? "Please Select Value From Teee"
                      : singleSelectValueFromMultiple}
                  </div>
                  <div>
                    Checked Values :{" "}
                    {checkedKeysFromMulitple.map((key) => {
                      return <span>{key}</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
