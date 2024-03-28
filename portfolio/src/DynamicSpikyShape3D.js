// DynamicSpikyShape3D.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const DynamicSpikyShape3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Add a background color for contrast

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50; // Adjust the camera position for a better view

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced OrbitControls for interactive view
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2.0; // Speed up the auto-rotation

    // Ambient light for overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Dynamic point lights for dramatic lighting effects
    const colors = [0xff8c00, 0xffff00, 0x40e0d0];
    colors.forEach((color, index) => {
      const light = new THREE.PointLight(color, 2, 100);
      light.position.set(0, 0, 25);
      scene.add(light);

      // Animating lights for dynamic effects
      const radius = 30;
      const speed = 0.02;
      const angle = (index * Math.PI * 2) / colors.length;
      setInterval(() => {
        light.position.x = Math.cos(Date.now() * speed + angle) * radius;
        light.position.y = Math.sin(Date.now() * speed + angle) * radius;
        light.position.z = Math.sin(Date.now() * speed + angle) * 20;
      }, 50);
    });

    // Spiky Shape: IcosahedronGeometry with detailed wireframe
    const geometry = new THREE.IcosahedronGeometry(15, 3); // Increase detail and size
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true, // Add wireframe for a cool, techy look
      metalness: 0.25,
      roughness: 0.1,
    });
    const spikyShape = new THREE.Mesh(geometry, material);
    scene.add(spikyShape);

    // Animation loop for continuous rendering
    const animate = function () {
      requestAnimationFrame(animate);
      spikyShape.rotation.x += 0.005; // Rotate the shape for added dynamism
      spikyShape.rotation.y += 0.005;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default DynamicSpikyShape3D;
