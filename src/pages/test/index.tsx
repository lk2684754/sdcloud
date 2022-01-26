import styles from './index.less';
import { connect } from 'dva';
import { TweenLite, Circ } from 'gsap';
import { useRef, useEffect, useState } from 'react';
import IntroBox from '@/components/introBox'
interface Props { }

const Page: React.FC<Props> = (props) => {
  const [picDisabled, setPicDisabled] = useState(false)
  const viewChange = () => {

  }
  return (<>
  <IntroBox/>
  </>)

}
  function mapStateToProps(state: any) {
    const { token } = state.globalTop;
    return {
      token,
    };
  }
  let connectName = connect(mapStateToProps)(Page);
  // connectName.wrappers = ['@/auth/login'];
  
  export default connectName;
