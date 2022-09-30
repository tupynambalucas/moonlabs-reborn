import * as THREE from '../build/three.module.js';
import { GLTFLoader } from '../three/loaders/GLTFLoader.js';

var div = document.getElementById('servicos-3d');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 0.1, 10000 );

// Ajuste de posição da camera e da mesh
camera.position.z = 1000;
camera.position.x = 0
camera.position.y = 0

// Luz
var light3 = new THREE.DirectionalLight( 0xFEF3E8, 0.5,  100);
var light2 = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
var light = new THREE.PointLight( 0x624780, 1.5, 1000 );

// Ajustando luz
light.position.set( -300, 200, -200);
light3.target.position.set(-50, 0, 0)
light3.position.set(10, 5, 10)
light3.castShadow = true

var renderer = new THREE.WebGLRenderer({
    antialias: false,
    alpha: true,
    powerPreference: "high-performance",
})
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio *  0.6);
    
div.appendChild( renderer.domElement );

// GLTF loader
var loader = new GLTFLoader();

// Carregando modelo
loader.load(
    // Caminho pro arquivo
    './three/models/coin/scene.gltf',
    
    // Função chamada quando o arquivo é carregado
    function ( gltf ) { 

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; 

        // Empurrando objeto para variavel
        let object = gltf.scene

        object.position.set(122, 0, 0);
        object.scale.set(90,90,90);
        object.name = 'coin';
        object.rotation.y = 2
        object.castShadow = true
        object.receiveShadow = false;
        object.frustumCulled = false
        console.log(object)
        // Adicionando objeto a cena



        // Futura att

        // object.traverse( function ( child ) {
        // 	if ( child instanceof THREE.Object3D  ) {
        // //		console.log(child.name +"test")
        // 	if(child.name=='embalagem-img'){
        //         alert("sim")
        // 		console.log(child)
        // 	//	child.material.color.setHex(0xffff00);
        // 	}
        // 	}
        // } );

        scene.add(object)

    },
    // Função de carregamento
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // Função em caso de erro
    function ( error ) {

        console.log( 'An error happened' );
        console.log(error)
    },
);

loader.load(
    // Caminho pro arquivo
    './three/models/pc/scene.gltf',
    
    // Função chamada quando o arquivo é carregado
    function ( gltf ) { 

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; 

        // Empurrando objeto para variavel
        let object = gltf.scene

        object.position.set(-122, -10, 0);
        object.scale.set(10,10,10);
        object.name = 'pc';
        object.rotation.y = 2
        object.castShadow = true
        object.receiveShadow = false;
        object.frustumCulled = false
        console.log(object)
        // Adicionando objeto a cena



        // Futura att

        // object.traverse( function ( child ) {
        // 	if ( child instanceof THREE.Object3D  ) {
        // //		console.log(child.name +"test")
        // 	if(child.name=='embalagem-img'){
        //         alert("sim")
        // 		console.log(child)
        // 	//	child.material.color.setHex(0xffff00);
        // 	}
        // 	}
        // } );

        scene.add(object)

    },
    // Função de carregamento
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // Função em caso de erro
    function ( error ) {

        console.log( 'An error happened' );
        console.log(error)
    },
);

// Adicionando a mesh e luz na cena
scene.add(light);
scene.add(light2);
scene.add(light3);    
function animate() {
    let coin = scene.getObjectByName( "coin" );
    let pc = scene.getObjectByName( "pc" );
    requestAnimationFrame( animate );

    // lua.rotation.y -= 0.003;
    // starsT1.position.x = mouseX * -0.0005;
    // starsT1.position.y = mouseY * 0.0005;
    coin.rotation.y -= 0.003;
    pc.rotation.y -= 0.003;
    // starsT2.position.x = mouseX * 0.0005;
    // starsT2.position.y = mouseY * -0.0005;
    renderer.render( scene, camera );
};

animate();