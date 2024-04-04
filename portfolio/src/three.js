import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const createInteractiveGalaxy = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.1 });
  const starsCount = 10000;
  const positions = new Float32Array(starsCount * 3);

  for (let i = 0; i < starsCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 2000;
  }

  starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);

  function animate() {
    requestAnimationFrame(animate);

    // Rotating the galaxy
    stars.rotation.x += 0.0005;
    stars.rotation.y += 0.001;

    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  return {
    scene,
    camera,
    renderer,
    stars,
  };
};

export default createInteractiveGalaxy;
