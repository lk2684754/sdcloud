import styles from './index.less';
import { connect } from 'dva';
import * as THREE from 'three';
const OrbitControls = require('three-orbitcontrols');
import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';

interface Props {
  size: number;
  setListActiveIndex: Function;
}

const Page: React.FC<Props> = (props) => {
  let bigCircleR = 2;
  // 小球半径
  let smallCircleR = 0.3;
  // 小球到大球的距离
  let smallCircleHeight = 5;
  // 小球数量
  let total = props.size;
  // 动画执行
  let animate: any = true;
  // 场景
  let scene: any = '';
  // 渲染器
  let renderer: any = '';
  // 景深相机
  let camera: any = '';
  // 小球坐标数组
  let circlePositionList: any = [];
  let circleList = new THREE.Group();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let target: any = document.querySelector('.CheckCircle');
  let width = 598;
  let height = 598;

  useEffect(() => {
    init();
    if (target) {
      target.addEventListener('click', onMouseClick, false);
    }
  }, [props.size]);
  function onMouseClick(event: any) {
    if (!target) return;
    let rect = target.getBoundingClientRect();
    let clientX = event.clientX - rect.x;
    let clientY = event.clientY - rect.y;
    mouse.x = (clientX / width) * 2 - 1;
    mouse.y = -(clientY / height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(circleList.children);
    if (intersects.length) {
      props.setListActiveIndex(intersects[0].object.INDEX);
    }
    // 点击时更改球的颜色
    // for (var i = 0; i < intersects.length; i++) {
    //   let objColor = intersects[i].object.material.color;
    //   if (objColor) {
    //     objColor.set(0xff0000);
    //   }
    // }
  }
  function init() {
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x2d3037, 10, 50);
    camera = new THREE.PerspectiveCamera(40, width / height, 1, 500);
    camera.position.z = 23;
    renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      alpha: true,
      preserveDrawingBuffer: !1,
    });
    renderer.setSize(width, height);
    if (!target) return;
    target.innerHTML = '';
    target.appendChild(renderer.domElement);
    renderer.domElement.classList.add('webgl-canvas');

    // 自转
    var orbit = new OrbitControls(camera, renderer.domElement);
    orbit.enablePan = false;
    orbit.enableZoom = false;
    orbit.autoRotate = true;
    orbit.autoRotateSpeed = 1;
    orbit.enableDamping = false;
    // 环境光
    const light = new THREE.AmbientLight(0x00b3c4, 0.1);
    light.position.copy(camera.position);
    scene.add(light);

    const light1 = new THREE.PointLight(0x00b3c4, 0.3, 0);
    light1.position.set(-200, 200, 0);
    scene.add(light1);

    var animation = () => {
      requestAnimationFrame(animation);
      if (animate) {
        orbit.update();
      }
      renderer.render(scene, camera);
    };
    animation();

    // 暂停动画
    document.querySelector('.CheckCircle')?.addEventListener('mousemove', () => {
      animate = false;
    });
    // 启动动画
    document.querySelector('.CheckCircle')?.addEventListener('mouseleave', () => {
      animate = true;
    });

    console.log(123);

    renderSmallCircle();
  }
  function renderSmallCircle() {
    // 小球球形正态分布
    let spherical = () => {
      let k = bigCircleR + smallCircleHeight;
      let u: any,
        v: any,
        r = 0;
      let getVal = () => {
        u = Math.random() * 2 - 1;
        v = Math.random() * 2 - 1;
        r = Math.pow(u, 2) + Math.pow(v, 2);
      };
      getVal();
      while (r > 1) {
        getVal();
      }
      let x = 2 * u * Math.sqrt(1 - r);
      let y = 2 * v * Math.sqrt(1 - r);
      let z = 1 - 2 * r;
      // 有重合小球
      // return { x: k * x, y: k * y, z: k * z };
      // 去除重合小球
      return { x: Math.round(k * x), y: Math.round(k * y), z: Math.round(k * z) };
    };
    for (let i = 0; i < total; i++) {
      let vv = spherical();
      setTimeout(() => {
        circle(vv.x, vv.y, vv.z, i);
      }, 0);
    }
    scene.add(circleList);
  }
  function circle(x: any, y: any, z: any, i: any) {
    // 小球渲染
    var geometry = new THREE.SphereGeometry(smallCircleR, 32, 32, 6, 6.3, 6, 6.3);
    // let arr = [
    //   // 'DodecahedronGeometry',
    //   'IcosahedronGeometry',
    //   'IcosahedronGeometry',
    //   'OctahedronGeometry',
    //   'OctahedronGeometry',
    //   'OctahedronGeometry',
    //   'TetrahedronGeometry',
    //   'TetrahedronGeometry',
    //   'TetrahedronGeometry',
    //   'TetrahedronGeometry',
    // ];
    // let geometry = new THREE[arr[Math.floor(Math.random() * arr.length)]](smallCircleR, 0);
    var material = new THREE.MeshStandardMaterial({
      emissive: 0x00b3c4,
      roughness: 0,
      metalness: 0,
      wireframe: false,
      vertexColors: false,
    });
    var circle = new THREE.Mesh(geometry, material);
    circle.INDEX = i;

    // 小球初始爆炸效果
    setTimeout(() => {
      let site = {
        x: 0,
        y: 0,
        z: 0,
      };
      let oldSite = { ...site };

      anime({
        targets: site,
        x: x,
        y: y,
        z: z,
        round: 1000,
        duration: 500,
        easing: 'linear',
        update() {
          circle.translateX(site.x - oldSite.x);
          circle.translateY(site.y - oldSite.y);
          circle.translateZ(site.z - oldSite.z);
          oldSite = { ...site };
        },
      });
    }, 300);

    circlePositionList.push(circle.position);
    circleList.add(circle);
    renderer.render(scene, camera);
  }
  return <div className={`${styles.Circle} CheckCircle`}></div>;
};

function mapStateToProps(state: any) {
  const { token } = state.globalTop;
  return {
    token,
  };
}

let connectName = connect(mapStateToProps)(Page);

export default connectName;
