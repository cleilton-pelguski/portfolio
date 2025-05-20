// script.js 
const cursor = document.getElementById('cursor'); 
 
document.addEventListener('mousemove', (e) => { 
    cursor.style.left = `${e.clientX}px`; 
    cursor.style.top = `${e.clientY}px`; 
}); 
 
// // Optional: Add a hover effect to change the cursor's appearance 
// document.addEventListener('mouseover', (e) => { 
//     if (e.target !== cursor) { 
//         cursor.style.backgroundColor = 'rgba(0, 255, 255, 0.8)'; // Change color on hover 
//         cursor.style.boxShadow = '0 0 20px rgba(0, 255, 255, 1)'; // Increase glow 
//     } 
// }); 
 
// document.addEventListener('mouseout', (e) => { 
//     if (e.target !== cursor) { 
//         cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Reset color 
//         cursor.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)'; // Reset glow 
//     } 
// }); 