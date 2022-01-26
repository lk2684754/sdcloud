import { history } from 'umi';

export default (props: any) => {
  let token = localStorage.getItem('userId');
  if (token) {
    history.replace('/');
    return <></>;
  } else {
    return <>{props.children}</>;
  }
};
