import styles from './index.less';
import { connect } from 'dva';
import { TweenLite, Circ } from 'gsap';
import { useRef, useEffect, useState } from 'react';
import Contract,{client} from '@/utils/contract'
import {message} from 'antd'
interface Props {
    userInfoPopDisabled: boolean,
    dispatch:any,
    userinfo:any
}

const Page: React.FC<Props> = (props) => {
    let filesInput: any;
    const {contract} = Contract
    const uoloadAvator = async () => {
        const files = filesInput.files
        console.log(files);
        
        const fileTypes = [".jpg",".png",".jpeg","PNG",".gif"]
        const FileEnd = files[0].name.substring(files[0].name.indexOf("."))
        if(!fileTypes.some((res:string)=>{
            return res == FileEnd
        })){
            message.warning("Please Update Image File")
            return
        }
        const cid = await client.put(files)
        const status = await contract.save_account_image({cid,name:files[0].name})
        console.log(status);
        props.dispatch({type:'globalTop/getUserinfo'})  
        console.log(props.userinfo);
             
    }
    const rename = async(e:any) => {
        console.log(e);
        if(e.keyCode == 13){
            setNameInput(false)
           const status = await contract.save_account_name({name:e.target.value.trim()}) 
           props.dispatch({type:'globalTop/getUserinfo'})
        }
    }
    const [picDisabled, setPicDisabled] = useState(false)
    const [nameInput,setNameInput] = useState(false)
    return <div className={props.userInfoPopDisabled ? `${styles.userInfoPop}` : `${styles.userInfoPop} ${styles.disabled}`}>
        <div className={styles.screen}>
            <header>
                <a className={picDisabled ? `${styles.targetBurger} ${styles.toggled}` : `${styles.targetBurger}`} onClick={() => { setPicDisabled(!picDisabled) }}>
                    <ul className={styles.buns} >
                        <li className={styles.bun}></li>
                        <li className={styles.bun}></li>
                    </ul>
                </a>
            </header>
            <nav className={picDisabled ? `${styles.mainNav} ${styles.toggled}` : `${styles.mainNav}`} role="navigation">
                <ul>
                    <img onClick={()=>{filesInput.click()}} style={{ borderRadius: '50%' }} height={48} width={48} src={props.userinfo.image} alt="" />
                    {
                        !nameInput && 
                    <li><a onClick={()=>{setNameInput(true)}}><span>{props.userinfo.name}</span></a></li>
                    }
                    {
                        nameInput &&
                    <li><input type="text" onKeyUp={rename} onBlur={()=>{setNameInput(false)}}/></li>
                    }
                </ul>
            </nav>
            <div className={picDisabled ? `${styles.container} ${styles.toggled}` : `${styles.container}`}>
                <div className={styles.appContent}>
                    <ul className={styles.contentList}>
                        <li>
                            <article>
                                <figure>
                                    <img height={493} width={329} src={props.userinfo.image} alt="The Jim Lewis Dalaman Briefcase" />
                                    <figcaption>
                                    </figcaption>
                                </figure>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <input
            type="file"
            onChange={uoloadAvator}
            style={{display:'none'}}
            ref={(el) => {
                filesInput = el;
            }}
        />
    </div>
};

function mapStateToProps(state: any) {
    const { token,userinfo } = state.globalTop;
    return {
        token,
        userinfo
    };
}

let connectName = connect(mapStateToProps)(Page);
// connectName.wrappers = ['@/auth/login'];

export default connectName;
