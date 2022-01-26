import './index.less';
import { connect } from 'dva';
import { useRef, useEffect } from 'react'
interface Props { }

const Page: React.FC<Props> = (props) => {
    return <div className="intro">
        <div className="wrapper">
            <h1 className="cs">Makes Decentralized Storage Easy</h1>
            <div className="bar left"></div>
            <div className="bar top"></div>
            <div className="bar right"></div>
            <div className="bar bottom"></div>
            <div className="galleryItem">
                <div className="image">
                </div>
                <div className="galleryOverlay">
                    <h2 className="itemTitle">CONTRACT</h2>
                    <p className="">{'>>'} "NEAR is a decentralized development platform where developers can host serverless applications and smart contracts; SDCloud contracts are written and deployed on NEAR, supporting various file operations</p>
                </div>
            </div>
            <div className="galleryItem">
                <div className="image">
                </div>
                <div className="galleryOverlay">
                    <h2 className="itemTitle">STORAGE</h2>
                    <p className="">{'>>'} Filecoin is a decentralized peer-to-peer storage network, allowing anyone to store and validate large-scale data as part of a global, 15-exabyte (and growing) network. Under the hood, all Filecoin nodes use the IPFS.</p>
                </div>
            </div>
            <div className="galleryItem">
                <div className="image">
                </div>
                <div className="galleryOverlay">
                    <h2 className="itemTitle">PAYMENT</h2>
                    <p className="">{'>>'} You only need to pay a small amount of NEAR as an on-chain transaction fee to store your hotspot data on the IPFS network; cold backup data,  store the data on the Filecoin network, your file operations Every step will be recorded on the chain</p>
                </div>
            </div>
            <div className="clear"></div>
        </div>

    </div>
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
