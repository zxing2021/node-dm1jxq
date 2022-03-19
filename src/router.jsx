import { useRoutes } from 'react-router-dom';
function AAA(props) {
  return <h1>AAA</h1>;
}
function BBB(props) {
  return <h1>BBB</h1>;
}
export default function () {
  return useRoutes([
    { path: '/aaa', element: <AAA /> },
    { path: '/bbb', element: <BBB /> },
  ]);
}
