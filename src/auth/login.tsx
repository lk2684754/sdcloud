import { history } from 'umi';
import contract from '@/utils/contract';
import { message } from 'antd';

export default (props: any) => {
  let token = localStorage.getItem('userId');  
  if (token) {
    if (!contract.isLogin) {
      localStorage.clear();
      history.push('/login');
      message.info('登录状态失效, 请重新登录');
    }
    return <>{props.children}</>;
  } else {
    if (contract.isLogin) {
      localStorage.clear();
      history.push('/login');
      message.info('登录状态异常, 请重新登录');
    }
    history.replace('/login');
    return <></>;
  }
};
