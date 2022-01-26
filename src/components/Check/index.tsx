import styles from './index.less';
import { connect } from 'dva';
import Space from '@/components/Space';
import Circle from './components/Circle';
import { history } from 'umi';
import { dataFormat, formatBytes } from '@/utils/filter';
import axios from 'axios';
import { BASE_URL } from '@/utils/cluster/config';
import { useEffect, useState } from 'react';
import { getCidUrl, sidToCid } from '@/utils/common';

interface Props {
  item: any;
  title: string;
  setCheckRender: Function;
}

const Page: React.FC<Props> = (props) => {
  function goBack() {
    props.setCheckRender(null);
  }
  const [convergeHash, setConvergeHash] = useState('');
  const [list, setList] = useState<any[]>([]);
  const [listActiveIndex, setListActiveIndex] = useState(0);
  useEffect(() => {
    getList();
  }, []);
  async function getList() {
    let cid = sidToCid(props.item.sid);
    let res = await axios.post(BASE_URL + `:25001/api/v0/dag/get?arg=${cid}`);
    if (res.data) {
      setConvergeHash(res.data.Data['/'].bytes);
      setList(res.data.Links);
    }
  }
  return (
    <div className={styles.check}>
      <div className={styles.header}>
        <div className={styles.parent} onClick={goBack}>
          {props.title || '文件'}
        </div>
        /<div className={styles.now}>检查</div>
      </div>
      <div className={styles.circle}>
        <Circle size={list.length} setListActiveIndex={setListActiveIndex}></Circle>
      </div>
      <div className={styles.contentBox}>
        <div className={`${styles.file} ${styles.card}`}>
          <div className={styles.bigTitle}>文件名称</div>
          <div className={styles.line}>
            <div className={styles.lineTitle}>文件SID：</div>
            <div className={styles.value}>{props.item.sid}</div>
          </div>
          <div className={styles.line}>
            <div className={styles.lineTitle}>文件大小：</div>
            <div className={styles.value}>{formatBytes(props.item.file_size)}</div>
          </div>
          <div className={styles.line}>
            <div className={styles.lineTitle}>切片数量：</div>
            <div className={styles.value}>{list.length} 个</div>
          </div>
          <div className={styles.line}>
            <div className={styles.lineTitle}>上传时间：</div>
            <div className={styles.value}>{dataFormat(props.item.created)}</div>
          </div>
          {/* <div className={styles.line}>
            <div className={styles.lineTitle}>存储节点：</div>
            <div className={styles.value}>f02022</div>
          </div> */}
        </div>
        <div className={`${styles.slice} ${styles.card}`}>
          <div className={styles.bigTitle}>切片信息</div>
          <div className={styles.line}>
            <div className={styles.lineTitle}>切片SID：</div>
            <div className={styles.value}>{list[listActiveIndex]?.Hash['/']}</div>
          </div>
          <div className={styles.line}>
            <div className={styles.lineTitle}>文件大小：</div>
            <div className={styles.value}>{formatBytes(list[listActiveIndex]?.Tsize)}</div>
          </div>
          <Space height={20}></Space>
          <div className={styles.bigTitle}>聚合哈希</div>
          <div className={`${styles.value} ${styles.wordWrap}`}>{convergeHash}</div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  const { token } = state.globalTop;
  return {
    token,
  };
}

let connectName = connect(mapStateToProps)(Page);

export default connectName;
