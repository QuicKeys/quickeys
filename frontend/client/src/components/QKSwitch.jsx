import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function QKSwitch() {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Next 3 Lights Ayaw Tanggala
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // Soft white ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 5, 1).normalize();
    scene.add(directionalLight);

    const warmLight = new THREE.DirectionalLight(0x39c5ff, 2.5);
    warmLight.position.set(0, 2, 0).normalize();
    scene.add(warmLight);

    // Quickeys Color Light
    const rightLight = new THREE.DirectionalLight(0xffffff, 3);
    rightLight.position.set(2, 0, 0).normalize();
    scene.add(rightLight);

    const rightGreen = new THREE.DirectionalLight(0x95ffe2, 0.5);
    rightGreen.position.set(-2, 0, 0).normalize();
    scene.add(rightGreen);

    // SECONDARY SET OF LIGHTS ----------------------------------------
    const baseLight1 = new THREE.DirectionalLight(0x334050, 5);
    baseLight1.position.set(0, -1, 0).normalize();
    scene.add(baseLight1);

    const baseLight2 = new THREE.DirectionalLight(0x334050, 5);
    baseLight2.position.set(0, 2, 1).normalize();
    scene.add(baseLight2);

    const baseLight3 = new THREE.DirectionalLight(0x334050, 5);
    baseLight3.position.set(1, -1, 0).normalize();
    scene.add(baseLight3);

    const baseLight4 = new THREE.DirectionalLight(0x334050, 5);
    baseLight4.position.set(0, -1, -1).normalize();
    scene.add(baseLight4);

    const baseLight5 = new THREE.DirectionalLight(0x334050, 5);
    baseLight5.position.set(-1, -1, 0).normalize();
    scene.add(baseLight5);


    // SHADOWS ----------------------------------------------------

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;

    const loader = new GLTFLoader();
    loader.load(
        './src/components/3D Models/QuicKeys - Switch.gltf',
        function (gltf) {
            const QKSwitch = gltf.scene;
            scene.add(QKSwitch);

            QKSwitch.position.set(0, 0, 0);

            animate(QKSwitch);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error('An error happened', error);
        }
    );

    camera.position.set(0.5, 0.65, 1.5);
    camera.lookAt(0, 0, 0);

    // Animation
    function animate(QKSwitch) {
        requestAnimationFrame(() => animate(QKSwitch));
    
        QKSwitch.rotation.y += 0.005;
    
        if (QKSwitch.rotation.y >= Math.PI * 2) {
            QKSwitch.rotation.y = 0;
        }

        renderer.render(scene, camera);
    }
}

export default QKSwitch;
