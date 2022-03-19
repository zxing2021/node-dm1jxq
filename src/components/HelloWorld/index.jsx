import { Fragment } from 'react';
import { DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import Routes from '../../router';
import { Provider } from 'react-redux';
import Counter from '../../redux/counter/Container';
import store from '../../store';
import axios from '../../axios';
export default function HelloWorld(props) {
  return (
    <Fragment>
      <h1>你好，世界！</h1>
      <DatePicker />
      <Link to="/aaa">AAA</Link>
      <Link to="/bbb">BBB</Link>
      <Routes />
      <Provider store={store}>
        <Counter />
      </Provider>
      <button
        onClick={(e) => {
          axios
            .get('https://v1.jinrishici.com/all.json')
            .then(console.log)
            .catch(console.log);
        }}
      >
        发送请求
      </button>
    </Fragment>
  );
}
