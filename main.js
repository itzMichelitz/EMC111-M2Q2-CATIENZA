import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const cubeColor = new THREE.Color("rgb(172, 50, 179)");
const coneColor = new THREE.Color("rgb(195, 195, 34)");
const circColor = new THREE.Color("rgb(34, 34, 195)");
const icoColor = new THREE.Color("rgb(255, 255, 255)");
const torusColor = new THREE.Color("rgb(70, 185, 70)");

const cubeGeo = new THREE.BoxGeometry(1,1,1);
const cubeMat = new THREE.MeshMatcapMaterial({color: cubeColor});
const cube = new THREE.Mesh( cubeGeo, cubeMat );
scene.add(cube);
cube.position.y = -2;

const coneGeo = new THREE.ConeGeometry(3, 8, 5); 
const coneMat = new THREE.MeshMatcapMaterial({color: coneColor, transparent : true, opacity : 0.45});
const cone = new THREE.Mesh(coneGeo, coneMat);
scene.add(cone);
cone.position.y = 1.1;

const circGeo = new THREE.CircleGeometry(4, 15, 20); 
const circMat = new THREE.MeshBasicMaterial({color: circColor}); 
const circle = new THREE.Mesh(circGeo, circMat); 
scene.add(circle);
circle.position.y = -2.9;

const icoGeo = new THREE.IcosahedronGeometry(0.7, 0);
const icoMat = new THREE.MeshMatcapMaterial({color: icoColor});
const icosahedron = new THREE.Mesh(icoGeo, icoMat);
scene.add(icosahedron);
icosahedron.position.y = -0.4;

const torGeo = new THREE.TorusGeometry(0.5, 0.2, 15, 20); 
const torMat = new THREE.MeshMatcapMaterial({color: torusColor}); 
const torus = new THREE.Mesh(torGeo, torMat); 
scene.add(torus);
torus.position.y = 1.3;

camera.position.z = 10;

function animate() {

    cube.rotation.x -= 0.01;
    cube.rotation.y = 4;
    cube.rotation.z += 0.01;

    cone.rotation.y -= 0.01;

    circle.rotation.x = -1.6;
    circle.rotation.z -= 0.01;

    icosahedron.rotation.z += 0.01;
    icosahedron.rotation.y += 0.01;

    torus.rotation.y += 0.01;
    torus.rotation.x -= 0.01;
    torus.rotation.z -= 0.01;

	renderer.render( scene, camera );
}