import React, { useEffect, useRef } from 'react';
import { Reveal } from '../Reveal';
import transition from '../Transition';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Home() {
    const containerRef = useRef(null);
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const scene = new THREE.Scene();
    let model;

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            const height = containerRef.current.offsetHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            containerRef.current.appendChild(renderer.domElement);

            camera.position.set(0.5, 0.5, 0.9);
            camera.lookAt(0, 0.2, 0);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(0, 2, 1).normalize();
            scene.add(directionalLight);

            const warmLight = new THREE.DirectionalLight(0x39c5ff, 1.5);
            warmLight.position.set(0, 1, 0).normalize();
            scene.add(warmLight);

            // Quickeys Color Light
            const rightLight = new THREE.DirectionalLight(0xffffff, 1);
            rightLight.position.set(2, 0, 0).normalize();
            scene.add(rightLight);

            const rightGreen = new THREE.DirectionalLight(0x95ffe2, 0.5);
            rightGreen.position.set(-2, 0, 0).normalize();
            scene.add(rightGreen);

            // SECONDARY SET OF LIGHTS
            const baseLight1 = new THREE.DirectionalLight(0x334050, 1);
            baseLight1.position.set(0, -1, 0).normalize();
            scene.add(baseLight1);

            const baseLight2 = new THREE.DirectionalLight(0x334050, 1);
            baseLight2.position.set(0, 2, 1).normalize();
            scene.add(baseLight2);

            const baseLight3 = new THREE.DirectionalLight(0x334050, 1);
            baseLight3.position.set(1, 1, 0).normalize();
            scene.add(baseLight3);

            const baseLight4 = new THREE.DirectionalLight(0x334050, 1);
            baseLight4.position.set(0, -1, -1).normalize();
            scene.add(baseLight4);

            const baseLight5 = new THREE.DirectionalLight(0x334050, 1);
            baseLight5.position.set(-1, -1, 0).normalize();
            scene.add(baseLight5);


            // SHADOWS
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
                    if (model) {
                        scene.remove(model);
                    }
                    model = gltf.scene;
                    scene.add(model);
                    animate();
                }
            );
        }
    }, [renderer, camera, scene]);

    function animate() {
        requestAnimationFrame(animate);

        model.rotation.y += 0.0025;
        if (model.rotation.y >= Math.PI * 2) {
          model.rotation.y = 0;
        }

        renderer.render(scene, camera);
    }

    return (
        <>
            <section className="py-[100px] px-[25px] nm:px-[50px]">
                <Reveal>
                    <div className="flex justify-center w-full pt-[25px]">
                        <img className="w-[100%] max-w-[1600px]" src="./src/assets/QuicKeys WORDMARK.svg" alt="QuicKeys WORDMARK" />
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center w-full">
                        <div className="flex w-[100%] max-w-[1600px] lg:px-[100px]">
                            <div className="Hero-Mobile lg:pt-[30px] lg:text-left lg:max-w-[660px] lg:text-[30px]">
                                <p>
                                    Ready to build the ultimate typing experience? Explore diverse range of keyboard components and accessories with QuicKeys today!
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center w-full">
                        <div className="flex w-[100%] max-w-[1450px] justify-end">
                            <div ref={containerRef} className="h-[700px] w-[700px] mt-[-345px] hidden lg:block"></div>
                        </div>
                    </div>
                </Reveal>

            </section>
        </>
    );
}

export default transition(Home);
