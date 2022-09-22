import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.less'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ConfigProvider, Button} from 'antd';
// import './custom.css'
// import './default.css'
// import './primary.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// let index = 0;
// let change = () => {
//   let configs = ['custom', 'default', 'primary'];
//   let prefix = configs[(index++) % configs.length];
//   root.render(
//     <React.StrictMode>
//       <ConfigProvider prefixCls={prefix}>
//         <Button type='primary' onClick={change}>修改</Button>
//       <App />
//       </ConfigProvider>
//     </React.StrictMode>
//   );
// }
// change();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((data:object) => {
  console.log(data)
});
