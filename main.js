import * as THREE from 'three';

// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry
var geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a material
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// Combine the geometry and material into a mesh
var cube = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
scene.add(cube);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene with the camera
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
