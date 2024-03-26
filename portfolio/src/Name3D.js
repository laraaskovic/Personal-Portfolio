import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const Name3D = () => {
  const mountRef = useRef(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    // Basic scene setup
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Add orbit controls for better scene interaction
    const controls = new OrbitControls(camera, renderer.domElement);

    // Create skills data
    const skills = [
      { color: 0xff0000, position: { x: -2, y: 0, z: 0 }, name: 'JavaScript' },
      { color: 0x00ff00, position: { x: 0, y: 0, z: 0 }, name: 'React' },
      { color: 0x0000ff, position: { x: 2, y: 0, z: 0 }, name: 'Three.js' },
    ];

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseMove(event) {
      mouse.x = (event.clientX / width) * 2 - 1;
      mouse.y = -(event.clientY / height) * 2 + 1;
    }
    window.addEventListener('mousemove', onMouseMove, false);

    function onClick(event) {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {
        const skill = skills.find(s => s.name === intersects[0].object.name);
        setSelectedSkill(skill ? skill.name : null);
      }
    }
    window.addEventListener('click', onClick, false);

    // Add objects for each skill
    skills.forEach(skill => {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: skill.color });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(skill.position.x, skill.position.y, skill.position.z);
      cube.name = skill.name;
      scene.add(cube);
    });

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // Only required if controls.enableDamping = true, or if controls.autoRotate = true
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100vh' }}>
      {selectedSkill && <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'white' }}>Selected Skill: {selectedSkill}</div>}
    </div>
  );
};

export default Name3D;
