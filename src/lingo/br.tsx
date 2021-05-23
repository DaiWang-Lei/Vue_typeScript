// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Modal, Button, Space } from 'antd';
// import sanitizeHTML from 'sanitize-html';

// const ReachableContext = React.createContext();
// const UnreachableContext = React.createContext();

// const config = {
//   title: 'Use Hook!',
//   content: `<p>asd</p></br>hello`
// };

// const HTMLRenderer = ({ html }) => {
//   return <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(html) }} />;
// };

// const App = () => {
//   const [modal, contextHolder] = Modal.useModal();

//   return (
//     <ReachableContext.Provider value="Light">
//       <Space>
//         <Button
//           onClick={() => {
//             modal.confirm({
//               ...config,
//               content: config.content ? (
//                 <HTMLRenderer html={config.content} />
//               ) : (
//                 undefined
//               )
//             });
//           }}
//         >
//           Confirm
//         </Button>
//       </Space>
//       {/* `contextHolder` should always under the context you want to access */}
//       {contextHolder}

//       {/* Can not access this context since `contextHolder` is not in it */}
//       <UnreachableContext.Provider value="Bamboo" />
//     </ReachableContext.Provider>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('container'));
