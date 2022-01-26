import { PREVIEW_FILES } from './cluster/config';
import * as nearApiJs from 'near-api-js';
import * as nearConfig from '@/utils/near/config';
import axios from 'axios';

export const setElectronLocalStorage = () => {
  try {
    let port = Number(document.body.getAttribute('data-port'));
    if (port) {
      axios
        .post(`http://localhost:${port}/api/setLocalStorage`, {
          localStorage: JSON.stringify(localStorage),
        })
        .then((res: any) => {})
        .catch((error: any) => {});
    }
  } catch (error) {
    console.error('[ error ]-37', error);
  }
};

export const sidToCid = (sid: string) => {
  return sid  
};

export const getCidUrl = (cid: string,name:string) => {
  if (!cid) return '';
  console.log(name);
  
  let url = PREVIEW_FILES + cid+'.ipfs.dweb.link/'+name;
  console.log('url==================',url);
  
  return url;
};

export const cidToSid = (cid: string) => {
 return cid
};

export const getAccount = async (accountId: string) => {
  const connection = nearApiJs.Connection.fromConfig({
    networkId: nearConfig.NETWORK_ID,
    provider: { type: 'JsonRpcProvider', args: { url: nearConfig.NODE_URL + '/' } },
    signer: {},
  });
  let account = new nearApiJs.Account(connection, accountId);
  return account;
};

