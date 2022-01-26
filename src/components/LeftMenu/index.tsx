import styles from './index.less';
import { connect } from 'dva';
import Iconfont from '../Iconfont';
import { useState, useEffect,useRef } from 'react';
import { Modal, message, Space, Input } from 'antd';
import 'animate.css';
import { history } from 'umi';
import LogoCircle from '@/components/logoCircle'

import Contract from '@/utils/contract';
import { ACCOUNT_ID_SUFFIX, GAS } from '@/utils/near/config';
import {client} from '@/utils/contract'
interface Props {
  dispatch: any;
  userinfo: any;
  setUserInfoPopDisabled:Function
}

const LeftMenu: React.FC<Props> = (props) => {
  const fileRef: any = useRef(null);
  let { contract, getID } = Contract;
  let navigationList = [
    {
      icon: 'icon-gongzuotai',
      title: 'home',
      url: '/menu/home',
      rightIcon: '',
    },
    {
      icon: 'icon-wenjian',
      title: 'file',
      url: '/menu/file',
      rightIcon: '',
    },
    {
      icon: 'icon-jiedian',
      title: 'peers',
      url: '/menu/node',
      rightIcon: '',
    },
    {
      icon: 'icon-zuijin',
      title: 'recently used',
      url: '/menu/history',
      rightIcon: '',
    },
    {
      icon: 'icon-tupian',
      title: 'picture',
      url: '/menu/image',
      rightIcon: '',
    },
    {
      icon: 'icon-yinpin',
      title: 'music',
      url: '/menu/audio',
      rightIcon: '',
    },
    {
      icon: 'icon-shipin',
      title: 'video',
      url: '/menu/video',
      rightIcon: '',
    },

    {
      icon: 'icon-wendang',
      title: 'document',
      url: '/menu/document',
      rightIcon: '',
    },
    {
      icon: 'icon-qita1',
      title: 'other',
      url: '/menu/other',
      rightIcon: '',
    },
  ];

  const [navlist, setNavList] = useState(navigationList);
  const [navigativeListActive, setNavigativeListActive] = useState(0);
  useEffect(() => {
    let path = history.location.pathname;
    let index = navlist.findIndex((item) => {
      return item.url === path;
    });
    setNavigativeListActive(index);
  }, []);
  const [state, setstate] = useState({
    folderCreate: false,
    inputFolerText: '',
    confirmLoading: false,
  });
  useEffect(() => {
    (async function () {
      try {
        await viewAccount();
      } catch (error) { }
    })();
    const unlisten = history.listen((location: any) => {
      navigationList.forEach((item, index) => {
        if (item.url === location.pathname) {
          setNavigativeListActive(index);
        }
      });
    });
    return () => {
      unlisten();
    };
  }, []);
  //获得文件夹列表
  const viewAccount = async () => {
    const data = JSON.parse(await contract.view_account({ did: `did:near:${getID}` }));
    let navListView: any = [];

    data.file_folders.forEach((res: string) => {
      if (
        res === 'picture' ||
        res === 'music' ||
        res === 'video' ||
        res === 'document' ||
        res === 'other'
      ) {
      } else {
        navListView.push({
          icon: 'icon-wenjian',
          title: res,
          rightIcon: 'icon-shanchu',
          url: `/menu/createFolder/?id=${res}`,
        });
      }
    });
    setNavList([...navigationList, ...navListView]);
  };
  //添加文件夹
  const addFolder = async () => {
    const folderName = state.inputFolerText;
    try {
      navlist.forEach((res: any) => {
        if (res.title === folderName) {
          setstate({
            ...state,
            folderCreate: false,
            inputFolerText: '',
            confirmLoading: false,
          });
          message.error('文件夹命名重复');
          throw Error;
        }
        if (res.title === '') {
          setstate({
            ...state,
            folderCreate: false,
            inputFolerText: '',
            confirmLoading: false,
          });
          message.error('文件夹名不能为空');
          throw Error;
        }
      });
      setstate({
        ...state,
        confirmLoading: true,
      });
      await contract.folder_create({ folder: folderName });
      await viewAccount();
      setstate({
        ...state,
        folderCreate: false,
        inputFolerText: '',
        confirmLoading: false,
      });
    } catch (error) { }
  };
  //删除文件夹
  const deleteFolder = async (e: any, folderName: string) => {
    const hide = message.loading('正在删除文件夹...', 0);
    e.stopPropagation();
    try {
      const result = await contract.folder_delete({ folder: folderName }, GAS);
      await viewAccount();
      hide();
      message.success('删除成功');
    } catch (error) {
      console.error(error);
      hide();
      message.error('删除失败');
    }
  };
  const [navigativeLiseMouse, setNavigativeLiseMouse] = useState(0);
  let onLineClick = (item: any, index: number) => {
    setNavigativeListActive(index);
    history.push(item.url);
  };
  //上部不动
  let navigationListStaticRender = navlist.map((item, index) => {
    let queueRender = () => {
      if (index === 2) {
        return (
          <div className={`${styles.otherTitle} ${styles.title}`}>
            <div>other</div>
            <div
              className={styles.iconBorder}
              onClick={() => {
                setstate({ ...state, folderCreate: true });
              }}
            >
              <Iconfont type="icon-xinjianwenjianjia2" size={16}></Iconfont>
            </div>
          </div>
        );
      }
    };
    let rightIconStaticRender = () => {
      if (index < 3) {
        if (item.rightIcon) {
          return (
            <div
              className={`${styles.rightIcon} ${navigativeLiseMouse === index
                  ? styles.animate + ' animate__animated animate__fadeInRight'
                  : ''
                }`}
              onClick={(e) => deleteFolder(e, item.title)}
            >
              <Iconfont type={item.rightIcon} size={18}></Iconfont>
            </div>
          );
        }
      }
    };
    if (index < 3) {
      return (
        <div key={index}>
          <div
            className={`${styles.lineBox} ${navigativeListActive === index ? styles.active : ''}`}
            onClick={() => {
              onLineClick(item, index);
            }}
            onMouseOver={() => {
              setNavigativeLiseMouse(index);
            }}
            onMouseLeave={() => {
              setNavigativeLiseMouse(-1);
            }}
          >
            <Iconfont type={item.icon} size={18}></Iconfont>
            <div className={styles.lineTitle}>{item.title}</div>
            {rightIconStaticRender()}
          </div>
          {queueRender()}
        </div>
      );
    } else {
      return;
    }
  });
  //下部滚动
  let navigationListScrollRender = navlist.map((item, index) => {
    let rightIconRender = () => {
      if (index >= 3) {
        if (item.rightIcon) {
          return (
            <div
              className={`${styles.rightIcon} ${navigativeLiseMouse === index
                  ? styles.animate + ' animate__animated animate__fadeInRight'
                  : ''
                }`}
              onClick={(e) => deleteFolder(e, item.title)}
            >
              <Iconfont type={item.rightIcon} size={18}></Iconfont>
            </div>
          );
        }
      }
    };
    if (index >= 3) {
      return (
        <div key={index}>
          <div
            className={`${styles.lineBox} ${navigativeListActive === index ? styles.active : ''}`}
            onClick={() => {
              onLineClick(item, index);
            }}
            onMouseOver={() => {
              setNavigativeLiseMouse(index);
            }}
            onMouseLeave={() => {
              setNavigativeLiseMouse(-1);
            }}
          >
            <Iconfont type={item.icon} size={18}></Iconfont>
            <div className={styles.lineTitle}>{item.title}</div>
            {rightIconRender()}
          </div>
        </div>
      );
    } else {
      return;
    }
  });

  const [userImage, setUserImage] = useState(require('@/assets/images/a1.png'));
  const [userName, setUserName] = useState(localStorage.getItem('userId') || '');
  function clickUserinfo() {
    history.push('/menu/userinfo');
    setNavigativeListActive(-1);
  }
  async function fileChange(e: any) {
    let files = e.target.files;
    if (!files.length) {
      message.warning('请选择文件上传');
      return;
    }
    let loading = message.loading('Uploading...', 0);
    try {
      const  cid  = await client.put(files);
      console.log(cid);
      let res = await contract.save_account_image({
        cid: cid.toString(),
      });
      if(res){
        props.dispatch({type:'globalTop/getUserinfo'})
      }
      message.success('设置成功');
    } catch (error) {
      console.log(error);
      
      message.success('设置失败');
    }
    loading();
  }
  useEffect(() => {
    console.log(props);
    
    setUserName(props.userinfo.name);
    setUserImage(props.userinfo.image);
  }, [props.userinfo]);  
  return (
    <>
        <LogoCircle></LogoCircle>
      <div className={styles.LeftMenu}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={styles.title}>NavBar</div>
        {navigationListStaticRender}
        <div className={styles.navListBox}>{navigationListScrollRender}</div>
        <div className="fa"></div>
        <div className={styles.userinfo} onClick={()=>{
          props.setUserInfoPopDisabled(true)
          // fileRef.current.click()
          }}>
          <div
            className={styles.avatar}
            style={{
              backgroundImage: `url(${userImage})`,
            }}
          ></div>
          <div className={styles.userName}>{userName.replace('.' + ACCOUNT_ID_SUFFIX, '')}</div>
        </div>
      </div>
      <Modal
        title="添加文件夹"
        visible={state.folderCreate}
        onOk={addFolder}
        confirmLoading={state.confirmLoading}
        onCancel={() => {
          setstate({ ...state, folderCreate: false });
        }}
      >
        <Input
          placeholder="新建文件夹名称"
          onChange={(e) => setstate({ ...state, inputFolerText: e.target.value.trim() })}
        />
      </Modal>
        <input
          type="file"
          style={{
            display: 'none',
          }}
          onChange={fileChange}
          ref={fileRef}
        />
    </>
  );
};

function mapStateToProps(state: any) {
  const { userinfo } = state.globalTop;
  return {
    userinfo,
  };
}

export default connect(mapStateToProps)(LeftMenu);
