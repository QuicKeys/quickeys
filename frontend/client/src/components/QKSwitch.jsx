import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useEffect, useRef, useState } from 'react';

function QKSwitch() {
    const containerRef = useRef(null);
    const [rendererSize, setRendererSize] = useState({ width: 0, height: 0 });
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const scene = new THREE.Scene();

    useEffect(() => {
        if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            setRendererSize({ width, height });
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            containerRef.current.appendChild(renderer.domElement);
        }

        const handleResize = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setRendererSize({ width, height });
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        camera.position.set(0.5, 0.65, 1.5);
        camera.lookAt(0, 0, 0);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 5, 1).normalize();
        scene.add(directionalLight);

        const warmLight = new THREE.DirectionalLight(0x39c5ff, 1.5);
        warmLight.position.set(0, 2, 0).normalize();
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
        baseLight3.position.set(1, -1, 0).normalize();
        scene.add(baseLight3);

        const baseLight4 = new THREE.DirectionalLight(0x334050, 1);
        baseLight4.position.set(0, -1, -1).normalize();
        scene.add(baseLight4);

        const baseLight5 = new THREE.DirectionalLight(0x334050, 1);
        baseLight5.position.set(-1, -1, 0).normalize();
        scene.add(baseLight5);
        const loader = new GLTFLoader();
        loader.load(
            './src/components/3D Models/QuicKeys - Switch.gltf',
            function (gltf) {
                const QKSwitch = gltf.scene;
                scene.add(QKSwitch);

                animate(QKSwitch);
            }
        );

        function animate(QKSwitch) {
            requestAnimationFrame(() => animate(QKSwitch));
            QKSwitch.rotation.y += 0.005;
            if (QKSwitch.rotation.y >= Math.PI * 2) {
                QKSwitch.rotation.y = 0;
            }
            renderer.render(scene, camera);
        }
    }, [renderer, camera, scene]);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

export default QKSwitch;
