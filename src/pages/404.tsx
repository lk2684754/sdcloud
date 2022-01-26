import { Result, Button } from 'antd';
import { history } from 'umi';

export default function () {
  return (
    <div style={styles.errorPage}>
      <Result
        status="404"
        title="404"
        subTitle="对不起, 您访问的页面不存在."
        extra={
          <Button
            type="primary"
            onClick={() => {
              history.push('/menu/home');
            }}
          >
            返回主页
          </Button>
        }
      />
    </div>
  );
}

var styles = {
  errorPage: {
    color: 'white',
  },
};
