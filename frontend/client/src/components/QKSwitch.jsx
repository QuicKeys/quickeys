import React, { Profiler, useEffect, useRef, onRender } from 'react';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function QKSwitch() {
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

            const ambientLight = new THREE.AmbientLight(0x35acff, 0.5);
            scene.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0x6d7278, 15);
            directionalLight.position.set(0, 2, 1).normalize();
            scene.add(directionalLight);

            const warmLight = new THREE.DirectionalLight(0x39c5ff, 1.5);
            warmLight.position.set(0, 1, 0).normalize();
            scene.add(warmLight);

            // Quickeys Color Light
            const rightLight = new THREE.DirectionalLight(0x555555, 0.75);
            rightLight.position.set(2, 0, 0).normalize();
            scene.add(rightLight);

            const rightGreen = new THREE.DirectionalLight(0xb5deef, 0.1);
            rightGreen.position.set(-2, 0, 0).normalize();
            scene.add(rightGreen);

            // SECONDARY SET OF LIGHTS
            const bottomBaseLight = new THREE.DirectionalLight(0x334050, 2.5);
            bottomBaseLight.position.set(0, -1, 0).normalize();
            scene.add(bottomBaseLight);

            const baseLight1 = new THREE.DirectionalLight(0x334050, 0.75);
            baseLight1.position.set(0, 2, 1).normalize();
            scene.add(baseLight1);

            const baseLight2 = new THREE.DirectionalLight(0x334050, 0.75);
            baseLight2.position.set(1, 1, 0).normalize();
            scene.add(baseLight2);

            const baseLight3 = new THREE.DirectionalLight(0x334050, 0.75);
            baseLight3.position.set(0, -1, -1).normalize();
            scene.add(baseLight3);

            const leftBaseLight = new THREE.DirectionalLight(0x334050, 0.75);
            leftBaseLight.position.set(-1, -1, 0).normalize();
            scene.add(leftBaseLight);

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
            <div className="flex justify-center w-full">
                <div className="flex w-[100%] max-w-[1450px] justify-end z-[-5]">
                    <div id="3D-Switch" ref={containerRef} className="float h-[700px] w-[700px] mt-[-550px] opacity-0 lg:opacity-100"></div>
                </div>
            </div>
        </>
    )
}

export default QKSwitch