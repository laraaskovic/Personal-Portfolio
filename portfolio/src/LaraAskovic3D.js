// LaraAskovic3D.js

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const LaraAskovic3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Directional light
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(light);

    // Font loader
    const loader = new FontLoader();
    loader.load('helvetiker_regular.typeface.json', function (font) {
      const textGeometry = new TextGeometry('LARA ASKOVIC', {
        font: font,
        size: 5,
        height: 4,
        curveSegments: 17,
        bevelEnabled: true,
        bevelThickness: 0.7,
        bevelSize: 0.4,
        bevelSegments: 5
      });

      const textMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xff6699, 
        specular: 0xffffff 
      });

      const mesh = new THREE.Mesh(textGeometry, textMaterial);
      // Center the text
      textGeometry.computeBoundingBox();
      const offset = textGeometry.boundingBox.getCenter(new THREE.Vector3()).negate();
      mesh.position.add(offset); // Center the mesh

      scene.add(mesh);
    });

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default LaraAskovic3D;
