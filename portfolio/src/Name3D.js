import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const Name3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.enablePan = false;
    controls.enableZoom = false;


    const colors = {
      metallicPink: new THREE.Color("#ff66cc"),
      turquoiseBlue: new THREE.Color("#33cccc"),
    };

    // lighting
    const pointLight1 = new THREE.PointLight(colors.metallicPink, 2, 10);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(colors.turquoiseBlue, 2, 10);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    const geometry = new THREE.TorusGeometry(1.7, 0.6, 16, 100);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0xffffff, 
      roughness: 0.6, 
      metalness: 0.7
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Animation
    const animate = function () {
      requestAnimationFrame(animate);

      pointLight1.position.set(
        5 * Math.sin(Date.now() * 0.002),
        5 * Math.cos(Date.now() * 0.002),
        5 * Math.sin(Date.now() * 0.002)
      );
      pointLight2.position.set(
        5 * Math.sin(Date.now() * 0.001),
        5 * Math.cos(Date.now() * 0.001),
        -5 * Math.cos(Date.now() * 0.002)
      );

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' } } id = "skills"/>;
};

export default Name3D;