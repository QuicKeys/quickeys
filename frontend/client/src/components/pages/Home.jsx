import React, { useEffect, useRef } from 'react';

import { Reveal } from '../Reveal';
import transition from '../Transition';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import BuildButton from '../BuildButton';

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

            renderer.antialias = false;

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

            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            directionalLight.castShadow = true;
            directionalLight.shadow.mapSize.width = 1024;
            directionalLight.shadow.mapSize.height = 1024;
            directionalLight.shadow.camera.top = 10;
            directionalLight.shadow.camera.bottom = -10;
            directionalLight.shadow.camera.left = -10;
            directionalLight.shadow.camera.right = 10;

            containerRef.current.appendChild(renderer.domElement);

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

        model.rotation.y += 0.0015;
        if (model.rotation.y >= Math.PI * 2) {
            model.rotation.y = 0;
        }

        renderer.render(scene, camera);
    }

    return (
        <>
            <section className="w-[100%] py-[100px] px-[25px] nm:px-[50px] min-h-[1000px] overflow-hidden">

                <Reveal>
                    <div className="relative flex justify-center w-full z-[-10]">
                        <img className="w-[100%] max-w-[1600px]" src="./src/assets/QuicKeys WORDMARK.svg" alt="QuicKeys WORDMARK" />
                        <div className="absolute top-0 left-0 right-0 lg:right-[-550px] flex justify-center z-[-2] opacity-20 transition-all duration-500">
                            <img className="w-[100%] max-w-[1200px] scale-[110%]" src="./src/assets/QuicKeys LOGOMARK [BG].svg" alt="QuicKeys LOGOMARK" />
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center w-full">
                        <div className="flex w-[100%] max-w-[1600px] lg:px-[100px]">
                            <div className="Hero-Mobile lg:text-left lg:max-w-[660px] lg:text-[30px]">
                                <p>
                                    Ready to build the ultimate typing experience? Explore diverse range of keyboard components and accessories with QuicKeys today!
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center w-full">
                        <div className="flex w-[100%] pt-[25px] max-w-[1600px] justify-center lg:justify-start lg:px-[100px] z-2">
                            <BuildButton/>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center w-full">
                        <div className="flex w-[100%] pt-[50px] lg:pt-[100px] max-w-[1600px] gap-[12px] justify-center lg:justify-start lg:px-[100px]">
                            <a href="https://github.com/QuicKeys" target="-"><img className="Icon" src="./src/assets/icons/ICON - Github.png" alt="Github"></img></a>
                            <a href="https://discord.gg/TW2QBe3pWR" target="-"><img className="Icon" src="./src/assets/icons/ICON - Discord.png" alt="Discord"></img></a>
                            <a href="https://www.facebook.com/QuicKeysPH" target="-"><img className="Icon" src="./src/assets/icons/ICON - Facebook.png" alt="Facebook"></img></a>
                            <a href="https://X.com" target="-"><img className="Icon" src="./src/assets/icons/ICON - X.png" alt="X"></img></a>
                        </div>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="flex justify-center w-full">
                        <div className="flex w-[100%] max-w-[1450px] justify-end z-[-5]">
                            <div ref={containerRef} className="h-[700px] w-[700px] mt-[-550px] opacity-0 lg:opacity-100"></div>
                        </div>
                    </div>
                </Reveal>

            </section>

            <section>

            </section>
        </>
    );
}

export default transition(Home);
