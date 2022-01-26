import contract from '@/utils/contract';
import styles from './index.less';
import { useAsyncEffect } from 'ahooks';
import { connect } from 'umi';
import axios from 'axios';
import { useState } from 'react';

interface Props {
  dispatch: any;
}

const Layouts: React.FC<Props> = (props) => {
  const [nearInit, setNearInit] = useState(false);
  useAsyncEffect(async () => {
    await getElectronLocalStorage();

    await contract.connect();
    await contract.init();
    setNearInit(true);
  }, []);

  async function getElectronLocalStorage() {
    try {
      let port = Number(document.body.getAttribute('data-port'));
      if (port) {
        let res = await axios.post(`http://localhost:${port}/api/getLocalStorage`);
        if (res.data) {
          let obj = JSON.parse(res.data);
          let objArr: any = Object.entries(obj);
          for (let [key, value] of objArr) {
            localStorage.setItem(key, value);
          }
        }
      }
    } catch (error) {
      console.error('[ error ]-37', error);
    }
  }

  return (
    <>
      <div className={styles.selfSystemNavBar}></div>
      {nearInit && props.children}
    </>
  );
};

function mapStateToProps(state: any) {
  const { userinfo } = state.globalTop;
  return {
    userinfo,
  };
}

export default connect(mapStateToProps)(Layouts);
