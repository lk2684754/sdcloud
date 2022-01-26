import styles from './index.less';
import { connect } from 'dva';
import { useState } from 'react';
import { Modal } from 'antd';
import Card from '@/components/Card';
import { CopyToClipboard } from 'react-copy-to-clipboard';
interface Props {
  shareModal: boolean;
  setShareModal: any;
  shareUrl: string;
}

const ShareModal: React.FC<Props> = (props) => {
  let title = '分享';
  let onCancel = () => {
    props.setShareModal(false);
  };
  let link = 'http://www.sdcloud.top.sdcloud.topsd…';
  const copyLink = () => {};
  return (
    <Modal
      title={title}
      visible={props.shareModal}
      footer={false}
      onCancel={onCancel}
      centered={true}
      zIndex={1031}
    >
      <div className={styles.ShareBox}>
        {props.shareUrl !== '' && (
          <div className={styles.title}>加密链接已生成，赶紧分享给朋友吧</div>
        )}
        {props.shareUrl == '' && (
          <div className={styles.load}>
            <div>中</div>
            <div>成</div>
            <div>生</div>
            <div>接</div>
            <div>链</div>
            <div>密</div>
            <div>加</div>
          </div>
        )}
        {props.shareUrl !== '' && (
          <div className={styles.inputBox}>
            <Card radius={4} borderAnimation={false}>
              <div className={styles.input}>{props.shareUrl}</div>
            </Card>
            <CopyToClipboard text={props.shareUrl}>
              <div className={styles.copy}>复制</div>
            </CopyToClipboard>
          </div>
        )}
      </div>
    </Modal>
  );
};

function mapStateToProps(state: any) {
  const { token } = state.globalTop;
  return {
    token,
  };
}

export default connect(mapStateToProps)(ShareModal);
