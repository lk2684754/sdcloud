import styles from './index.less';
import { connect } from 'dva';
import logo from '@/assets/images/logo.png';
import { Avatar } from 'antd';
import Contract from '@/utils/contract/index';
const { contract, getlist } = Contract;
import { useState, useEffect, useCallback } from 'react';
import { formatBytes, dataFormat } from '@/utils/filter';
import Iconfont from '@/components/Iconfont';
import { getCidUrl, sidToCid } from '@/utils/common';
import { checkFileType } from '@/utils/files/sylEncryption';
import { Checkbox } from 'antd';
import axios from 'axios';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { DownloadOutlined, CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { PREVIEW_FILES } from '@/utils/cluster/config';
interface Props {
  location: {
    query: {
      shareKey: string;
      ID: string;
      shareTime: number;
    };
  };
}

const Page: React.FC<Props> = (props) => {
  const [fileList, setFileList] = useState([]);
  const [tableCheckedList, setTableCheckedList] = useState<boolean[]>([]);
  const [checkindex, setCheckindex] = useState<boolean[]>([]);
  const [allChecked, setAllChecked] = useState<'all' | 'some' | 'no'>('no');
  const [isDown, setIsDown] = useState('no');
  const [userInfo, setUserInfo] = useState({
    did: '',
    shareTime: '',
    shareName: '',
    image: '',
  });
  let headerList = [
    {
      key: 'checkBox',
      title: '',
      width: 36,
    },
    {
      key: 'fileName',
      title: '文件名',
      width: 562,
    },
    {
      key: 'size',
      title: '文件大小',
      width: 232,
    },
    {
      key: 'time',
      title: '修改时间',
    },
  ];
  useEffect(() => {
    let list = tableCheckedList.filter((item) => {
      return item;
    });
    if (list.length === fileList.length) {
      setAllChecked('all');
    }
    if (list.length < (fileList.length || 0)) {
      setAllChecked('some');
    }
    if (list.length === 0) {
      setAllChecked('no');
    }
  }, [tableCheckedList]);
  let widthProcess = (res: number | undefined) => {
    if (res) {
      let rate = Math.floor((res / (1130 - 86)) * 100);
      return {
        minWidth: rate + '%',
      };
    } else {
      return {
        flex: 1,
      };
    }
  };
  //文件标题框
  let fileTitleTable = () => {
    return headerList.map((item) => {
      let headerClassName = () => {
        let r = '';
        return r;
      };
      if (item.key == 'checkBox') {
        return (
          <div key={item.key} className={styles.checkedBox} style={{ ...widthProcess(item.width) }}>
            {headerCheckedRender()}
          </div>
        );
      }
      return (
        <div className={headerClassName()} key={item.key} style={{ ...widthProcess(item.width) }}>
          {item.title}
        </div>
      );
    });
  };
  let toggleChecked = (index: number) => {
    let listCopy = tableCheckedList.concat();
    listCopy[index] = !listCopy[index];
    const checkList: React.SetStateAction<boolean[]> = [];
    for (const key in listCopy) {
      checkList.push(fileList[key]);
    }
    setCheckindex(checkList);
    setTableCheckedList(listCopy);
  };
  //文件
  let fileTable = () => {
    return fileList.map((res: any, index: number) => {
      return (
        <div className={styles.fileCard} key={index}>
          <div className={styles.filesCheck}>
            <Checkbox onChange={() => toggleChecked(index)} checked={tableCheckedList[index]} />
          </div>
          <div className={styles.filesName}>
            <Iconfont className={styles.icon} type={res.icon} />
            {res.file_name}
          </div>
          <div className={styles.filesSize}>{formatBytes(res.file_size, 2)}</div>
          <div className={styles.filesTime}>{dataFormat(res.created)}</div>
        </div>
      );
    });
  };
  // 头部选中状态渲染
  let headerCheckedRender = () => {
    let indeterminate = false;
    let checked = false;
    if (allChecked === 'some') {
      indeterminate = true;
    }
    if (allChecked === 'all') {
      checked = true;
    }
    return <Checkbox onChange={onHeaderChecked} indeterminate={indeterminate} checked={checked} />;
  };
  // 点击头部选中事件
  function onHeaderChecked() {
    if (allChecked === 'all') {
      setTableCheckedList(new Array(fileList.length).fill(false));
    } else {
      setTableCheckedList(new Array(fileList.length).fill(true));
    }
  }
  const download = async () => {
    let downList = checkindex;
    setIsDown('loading');
    if (allChecked === 'all') {
      downList = fileList;
    } else if (allChecked === 'no') {
      downList = [];
    }
    console.log(downList);
    if (downList.length === 1) {
      downList.map((item: any) => {
        item.download_url = getCidUrl(item.cid,'');
        axios({
          method: 'get',
          url: item.download_url,
          responseType: 'blob',
          headers: { 'content-type': item.file_type },
        }).then((res: any) => {
          let blob = new Blob([res.data], { type: res.data.type });
          let downa = document.createElement('a');
          let href = window.URL.createObjectURL(blob);
          downa.href = href;
          downa.download = item.file_name;
          document.body.appendChild(downa);
          downa.click();
          document.body.removeChild(downa);
          window.URL.revokeObjectURL(href);
          setIsDown('yes');
        });
      });
    } else if (downList.length > 1) {
      await patchDownload(downList);
      setIsDown('yes');
    }
  };
  const getFile = useCallback((item: any) => {
    return new Promise((resolve, reject) => {
      console.log(item);

      axios({
        method: 'get',
        url: item.download_url,
        responseType: 'blob',
        headers: { 'content-type': item.file_type },
      })
        .then((data: any) => {
          console.log(data);

          resolve(data.data);
        })
        .catch((error: any) => {
          console.log('error', error);

          reject(error.toString());
        });
    });
  }, []);
  // 批量下载
  const patchDownload = useCallback(
    async (downList) => {
      const zip = new JSZip();
      const imgsss: JSZip | null = zip.folder('SDY批量下载');
      const promises: any[] = [];
      downList.forEach((item: any) => {
        console.log(item);

        item.download_url = getCidUrl(item.cid,'');
        const promise = getFile(item).then((data: any) => {
          // 下载文件, 文件名必须带有文件类型后缀
          const file_name = item.file_name;
          // 逐个添加文件
          imgsss?.file(file_name, data, { binary: true });
        });
        promises.push(promise);
      });
      Promise.all(promises).then(() => {
        zip
          .generateAsync({ type: 'blob' })
          .then((content) => {
            console.log(content);
            // 生成二进制流,利用file-saver保存文件
            saveAs(content, '批量下载.zip');
          })
          .catch(() => {
            // 如果有资源文件下载失败，就直接用a链接下载
            downList.forEach((item: any) => {
              console.log(item);

              axios({
                method: 'get',
                url: item.download_url,
                responseType: 'blob',
                headers: { 'content-type': item.file_type },
              }).then((res: any) => {
                console.log(res);
              });
            });
          });
      });
    },
    [checkindex, getFile],
  );
  useEffect(() => {
    (async () => {
      let file = await contract.view_file_share({ share_key: props.location.query.shareKey });
      console.log(file);

      console.log(props);

      let data = JSON.parse(
        await contract.view_account({ did: `did:near:${props.location.query.ID}` }),
      );
      setUserInfo({
        ...userInfo,
        shareName: props.location.query.ID,
        shareTime: dataFormat(props.location.query.shareTime),
        image: data.image,
      });
      // file = getlist(JSON.parse(file))
      setFileList(getlist(JSON.parse(file)));
    })();
  }, []);
  return (
    <div className={styles.share}>
      <div className={styles.logoBox}>
        <img className={styles.logo} src={logo} alt="" />
      </div>
      <div className={`${styles.titleBox} ${styles.flexBetween}`}>
        <div className={styles.infoBox}>
          <div className={styles.infoImg}>
            {userInfo.image === '' ? (
              <span>User</span>
            ) : (
              <img width={48} height={48} src={PREVIEW_FILES + userInfo.image} alt="" />
            )}
          </div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>{userInfo.shareName}</div>
            <div className={styles.userShareTime}>分享时间 {userInfo.shareTime}</div>
          </div>
        </div>
        <div className={styles.downloadBtn} onClick={download}>
          {isDown == 'no' && (
            <Button
              type="primary"
              shape="circle"
              icon={<DownloadOutlined />}
              onClick={download}
              size={'large'}
            />
          )}
          {isDown === 'loading' && (
            <div className={styles.loaderWrapper}>
              <div className={styles.loader}></div>
              <div className={`${styles.loaderSection} ${styles.sectionLeft}`}></div>
              <div className={`${styles.loaderSection} ${styles.sectionRight}`}></div>
            </div>
          )}
          {isDown == 'yes' && (
            <Button
              type="primary"
              shape="circle"
              icon={<CheckOutlined />}
              onClick={download}
              size={'large'}
            />
          )}
        </div>
      </div>
      <div className={styles.titleBox}>
        <div className={styles.tableTile}>{fileTitleTable()}</div>
        <div className={styles.tableFiles}>{fileTable()}</div>
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
// connectName.wrappers = ['@/auth/login'];

export default connectName;
