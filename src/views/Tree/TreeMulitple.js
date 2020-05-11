import "rc-tree/assets/index.css";
import React, { Component } from "react";
import Tree from "rc-tree";
import "./styles.scss";

function getNewTreeData(treeData, curKey, child) {
  const loop = (data) => {
    data.forEach((item) => {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
}

//Empty Object Check
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

class TreeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [],
      checkedKeys: [],
      currentValue: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          treeData: json.map((post) => {
            return {
              title: `${post.id} 
              -- Folder --- 
              ${post.title}`,
              key: `${post.id}`,
              postId: post.id,
              isLeaf: false,
            };
          }),
        });
      });
  }

  onSelect = (info) => {
    console.log('selected', info);
    const { selectValue } = this.props;
    this.setState({ currentValue: info[0] }, selectValue(info[0]));
  };

  onCheck = (checkedKeys) => {
    const { checkedValues } = this.props;
    this.setState(
      {
        checkedKeys,
      },
      checkedValues(checkedKeys)
    );
  };

  onLoadData = async (treeNode) => {
    const { treeData } = this.state;
    const key = treeNode.postId;

    fetch(`https://jsonplaceholder.typicode.com/posts/${key}/comments`)
      .then((response) => response.json())
      .then((json) => {
        if (!isEmpty(json)) {
          const treeDataVal = [...treeData];
          getNewTreeData(
            treeDataVal,
            treeNode.key,
            this.dirResponse(json, key)
          );
          this.setState({ treeData: treeDataVal });
        } else {
          const treeDataVal = [...treeData];
          getNewTreeData(treeDataVal, treeNode.key, []);
          this.setState({ treeData: treeDataVal });
        }
      });
  };

  dirResponse = (response, key) => {
    let childrenArray = [];
    if (response !== null) {
      childrenArray = response.map((comment) => {
        return {
          title: `SubFolder  -->> ${comment.id} -- ${comment.body}`,
          key: `SubFolder ${comment.id}`,
          commentId: comment.id,
          isLeaf: false,
        };
      });
    } else {
      childrenArray = [];
    }
    return childrenArray;
  };

  render() {
    const { treeData } = this.state;
    return (
      <>
        {treeData.length === 0 ? (
          <div className="spinner-grow text-center" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <Tree
            onSelect={this.onSelect}
            checkable
            onCheck={this.onCheck}
            checkedKeys={this.state.checkedKeys}
            loadData={this.onLoadData}
            treeData={treeData}
          />
        )}
      </>
    );
  }
}

export default TreeView;
