// // Scene Setup
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
// camera.position.z = 4;

// // Renderer Setup
// const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
// renderer.setSize(300, 300);
// document.getElementById('robot-container').appendChild(renderer.domElement);

// // Lighting
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// // Load 3D Robot Head
// let robotHead;
// const loader = new THREE.GLTFLoader();
// loader.load(
//   'models/silver_red_robot.glb',
//   (gltf) => {
//     robotHead = gltf.scene;
//     robotHead.scale.set(1.5, 1.5, 1.5);
//     scene.add(robotHead);
//   },
//   undefined,
//   (error) => {
//     console.error('Error loading model:', error);
//   }
// );

// // Mouse Tracking for Robot Face Rotation
// let mouseX = 0, mouseY = 0;
// document.addEventListener('mousemove', (event) => {
//   mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//   mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
// });

// // Animation Loop
// function animate() {
//   requestAnimationFrame(animate);

//   if (robotHead) {
//     // Smooth rotation
//     robotHead.rotation.y += (mouseX * 0.5 - robotHead.rotation.y) * 0.05;
//     robotHead.rotation.x += (mouseY * 0.3 - robotHead.rotation.x) * 0.05;
//   }

//   renderer.render(scene, camera);
// }
// animate();



// Set up the scene, camera, and renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   300 / 300,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer({ alpha: true });
// renderer.setSize(300, 300);
// document.getElementById('robot-container').appendChild(renderer.domElement);

// // Add lighting
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// // Load the GLB model
// const loader = new THREE.GLTFLoader();
// let robotHead;
// loader.load(
//   'models/robot-head.glb',
//   function (gltf) {
//     robotHead = gltf.scene;
//     scene.add(robotHead);
//     robotHead.position.set(0, 0, 0);
//   },
//   undefined,
//   function (error) {
//     console.error(error);
//   }
// );

// // Set camera position
// camera.position.z = 5;

// // Mouse movement interaction
// document.addEventListener('mousemove', onDocumentMouseMove, false);
// let mouseX = 0;
// let mouseY = 0;

// function onDocumentMouseMove(event) {
//   mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//   mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
// }

// // Animation loop
// function animate() {
//   requestAnimationFrame(animate);
//   if (robotHead) {
//     robotHead.rotation.y = mouseX * 0.5;
//     robotHead.rotation.x = mouseY * 0.5;
//   }
//   renderer.render(scene, camera);
// }
// animate();

// === 3D ROBOT SETUP ===
const container = document.getElementById('robot-canvas-container');z
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const light = new THREE.HemisphereLight(0xffffff, 0x000000, 1.2);
scene.add(light);

// Load Robot Model
let robot;
const loader = new THREE.GLTFLoader();
loader.load('models/silver_red_robot.glb', (gltf) => {
  robot = gltf.scene;
  robot.scale.set(1.8, 1.8, 1.8);
  scene.add(robot);
});

// Mouse movement
let targetX = 0, targetY = 0;
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = -(e.clientY / window.innerHeight) * 2 + 1;
  targetX = x * 0.3;
  targetY = y * 0.3;
});

function animate() {
  requestAnimationFrame(animate);

  if (robot) {
    robot.rotation.y += (targetX - robot.rotation.y) * 0.05;
    robot.rotation.x += (targetY - robot.rotation.x) * 0.05;
  }

  renderer.render(scene, camera);
}
animate();
