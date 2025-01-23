// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Mouse movement tracking
const mouse = {
    x: 0,
    y: 0,
};
document.addEventListener('mousemove', (event) => {
    // Convert mouse position to normalized coordinates (-1 to 1)
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
});

// Handle window resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

// Create a geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a material
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// Combine the geometry and material into a mesh
const cube = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
scene.add(cube);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += (mouse.y - cube.rotation.x) * 0.05;
    cube.rotation.y += (mouse.x - cube.rotation.y) * 0.05;

    // Render the scene with the camera
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
