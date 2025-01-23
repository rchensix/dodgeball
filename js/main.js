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
const geometry = new THREE.SphereGeometry(0.5, 16, 16);

// Create a material
const material = new THREE.MeshLambertMaterial({color: 0x00ff00});

// Combine the geometry and material into a mesh
const sphere = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
scene.add(sphere);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Translate the sphere.
    const targetX = mouse.x * 4;
    const targetY = mouse.y * 3;
    sphere.position.x += (targetX - sphere.position.x) * 0.01;
    sphere.position.y += (targetY - sphere.position.y) * 0.01;

    // Render the scene with the camera
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
