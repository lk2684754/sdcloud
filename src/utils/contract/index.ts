import * as nearAPI from 'near-api-js';
import { NEAR_CONTRACTID, DID_TITLE } from '../near/config';
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVlRjQwZDNlRDhERGFENjJjNzk5ZjVmQkJiNDZmMjk3YWJlZTIyOTciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDI5OTIyOTYwMTIsIm5hbWUiOiJmaXJzdF9zZHlfYXBpIn0.9E2Z6owH3YSlf7nD7nYI5Iof2XNh8FPlCUaMfUOvgi0'
export const client = new Web3Storage({token:API_TOKEN})

const nearConfig = {
  networkId: 'testnet',
  nodeUrl: ' http://123.6.102.20:33030',
  // nodeUrl: 'https://rpc.testnet.near.org',
  contractName: NEAR_CONTRACTID,
  walletUrl: 'https://wallet.testnet.near.org',
  helperUrl: 'https://helper.testnet.near.org',
};
interface Contract {
  connect: any;
  near: any;
  walletAccount: any;
  contract: any;
  getID: any;
  signIn: any;
  signOut: any;
  init: any;
  isLogin: any;
  getlist: Function;
  signAndSend: any;
}

let obj: Contract = {
  connect: () => {},
  near: null,
  walletAccount: null,
  contract: null,
  getID: null,
  signIn: null,
  signOut: null,
  init: null,
  isLogin: () => {},
  getlist: Function,
  signAndSend: () => {},
};

obj.connect = async () => {
  try {
    obj.near = await nearAPI.connect({
      ...nearConfig,
      deps: {
        keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
      },
    });
  } catch (error) {
    console.log('[ error ]-48', error);
  }
};

obj.init = async () => {
  try {
    obj.walletAccount = new nearAPI.WalletConnection(obj.near);
    obj.isLogin = obj.walletAccount.isSignedIn();
    obj.getID = obj.walletAccount.getAccountId();
    obj.signIn = () => {
      obj.walletAccount.requestSignIn(nearConfig.contractName, 'sdy', null, null);
    };
    obj.signOut = () => {
      obj.walletAccount.signOut();
    };
    console.log(obj.walletAccount.account(),);
    obj.contract = await new nearAPI.Contract(
      obj.walletAccount.account(),
      nearConfig.contractName,
      {
        viewMethods: [
          //查看用户身份和个人信息
          'view_account',
          //查看指定文件夹信息
          'view_files_in_folder',
          // 查看DID状态
          'check_did_status',
          //查看所有文件
          'view_all_files',
          //查看所有文件夹
          // 'folder_view'.
          //查看分享文件
          'view_file_share',
          //查看文件是否存在
          'view_file_exist',
        ],
        changeMethods: [
          //存储链上DID
          'reg_did_using_account',
          //文件存储
          'store',
          //文件删除
          'file_delete',
          //创建文件夹
          'folder_create',
          //文件夹重命名
          'folder_rename',
          //删除文件夹
          'folder_delete',
          //从文件夹中复制文件
          'file_copy_to_folder',
          //删除多个文件
          'files_delete',
          //文件夹删除一个文件
          'file_delete_in_folder',
          //文件夹删除多个文件
          'files_delete_in_folder',
          // 保存头像
          'save_account_image',
          //分享文件
          'file_share',
          //文件重命名
          'file_rename',
          //user rename
          'save_account_name'
        ],
        sender: obj.walletAccount.getAccountId(),
      },
    );
    if (obj.getID) {
      try {
        console.log(DID_TITLE+obj.getID);
        const status = await obj.contract.check_did_status({ did: `${DID_TITLE}${obj.getID}` });
        console.log(status);        
      } catch (error) {
        console.log('errrrrrrrrrrrrrr',error);
        // 绑定did
        await obj.contract.reg_did_using_account({});
      }
    }
  } catch (error) {
    console.log('[ error ]-111', error);
  }

  obj.getlist = (list: any) => {
    list.map((item: any) => {
      const fileType = item.file_name.substring(item.file_name.lastIndexOf('.') + 1);
      switch (fileType) {
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'bmp':
        case 'gif':
        case 'webp':
        case 'psd':
        case 'svg':
        case 'tiff':
          item.icon = 'icon-tupiandefuben';
          break;
        case 'mp4':
        case 'm2v':
        case 'mkv':
        case 'rmvb':
        case 'wmv':
        case 'avi':
        case 'wav':
        case 'flv':
        case 'mov':
        case 'm4v':
          item.icon = 'icon-shipindefuben';
          break;
        case 'txt':
          item.icon = 'icon-Txt';
          break;
        case 'xls':
        case 'xlsx':
          item.icon = 'icon-Excel';
          break;
        case 'doc':
        case 'docx':
          item.icon = 'icon-Word';
          break;
        case 'ppt':
        case 'pptx':
          item.icon = 'icon-PPT';
          break;
        case 'pdf':
          item.icon = 'icon-Pdf';
          break;
        case 'exe':
          item.icon = 'icon-yasuobao';
          break;
        case 'mp3':
        case 'ogg':
        case 'wav':
          item.icon = 'icon-yinpindefuben';
          break;
        default:
          item.icon = 'icon-weizhiwenjian';
          break;
      }
    });
    return list;
  };
};

export default obj;
