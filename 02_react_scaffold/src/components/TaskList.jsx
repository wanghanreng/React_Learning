import React from "react";
const student = [
  { id: 111, name: "张三丰", socre: 99 },
  { id: 112, name: "张三", socre: 98 },
  { id: 113, name: "张三风", socre: 91 },
  { id: 114, name: "张三封", socre: 88 },
];

// 编写 React代码(jsx语法)
const element = (
  <div>
    <h2>学生列表数据</h2>
    <div className="item">
      {student
        .filter((item) => item.socre > 90)
        .map((item) => {
          return (
            <div className="item" key={item.id}>
              <h2>学号:{item.id}</h2>
              <h3>姓名:{item.name}</h3>
              <h1>分数:{item.socre}</h1>
            </div>
          );
        })}
    </div>
  </div>
);

class TasskList extends React.Component {
  render() {
    return <div style={{ textAlign: "center" }}>{element}</div>;
  }
}
export default TasskList;
