import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Improve quality on high-DPI screens
    renderer.setClearColor(0xffffff); // Set background color to white
    containerRef.current.appendChild(renderer.domElement);

    // Create random points in a larger area
    const pointMaterial = new THREE.PointsMaterial({
      color: 0xff3f81, // Bright pink color for points
      size: 5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const numPoints = 20; // Number of points
    const radius = 150; // Radius of the network

    const pointGeometry = new THREE.BufferGeometry();
    const pointPositions = [];
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * radius;
      const x = Math.cos(angle) * distance;
      const z = Math.sin(angle) * distance;
      pointPositions.push(x, 0, z);
      points.push(new THREE.Vector3(x, 0, z));
    }

    pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointPositions, 3));
    const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
    scene.add(pointCloud);

    // Create lines with a gradient color
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff3f81, // Bright pink color for lines
      transparent: true,
      opacity: 0.5,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];

    // Connect nodes based on proximity
    const maxDistance = 20; // Maximum distance between connected nodes

    points.forEach((point, i) => {
      points.forEach((otherPoint, j) => {
        if (i !== j) {
          const distance = point.distanceTo(otherPoint);
          if (distance < maxDistance) {
            linePositions.push(point.x, point.y, point.z);
            linePositions.push(otherPoint.x, otherPoint.y, otherPoint.z);
          }
        }
      });
    });

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions.flat(), 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Add more connections for a dense network
    const additionalConnections = 50; // Additional connections to create a denser network
    const additionalLinePositions = [];
    for (let i = 0; i < additionalConnections; i++) {
      const [start, end] = [Math.floor(Math.random() * numPoints), Math.floor(Math.random() * numPoints)];
      const startPoint = points[start];
      const endPoint = points[end];
      if (startPoint !== endPoint) {
        additionalLinePositions.push(startPoint.x, startPoint.y, startPoint.z);
        additionalLinePositions.push(endPoint.x, endPoint.y, endPoint.z);
      }
    }

    const additionalLineGeometry = new THREE.BufferGeometry();
    additionalLineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(additionalLinePositions.flat(), 3));
    const additionalLines = new THREE.LineSegments(additionalLineGeometry, lineMaterial);
    scene.add(additionalLines);

    camera.position.z = 200;

    const animate = () => {
      requestAnimationFrame(animate);
      pointCloud.rotation.x += 0.001;
      pointCloud.rotation.y += 0.001;
      lines.rotation.x += 0.001;
      lines.rotation.y += 0.001;
      additionalLines.rotation.x += 0.001;
      additionalLines.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute top-0 left-0 w-full h-full"></div>;
};

export default ThreeBackground;
