document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const imageDisplay = document.getElementById('imageDisplay');
    const processButton = document.getElementById('processButton');
  
    let originalImage = null;
  
    imageInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        originalImage = reader.result;
        imageDisplay.innerHTML = `<h2>Original Image</h2><img src="${originalImage}" alt="Original">`;
      };
  
      reader.readAsDataURL(file);
    });
  
    processButton.addEventListener('click', () => {
      if (originalImage) {
        // Send originalImage to backend for object detection
        // Display processed image in imageDisplay
      } else {
        alert('Please upload an image first.');
      }
    });
  });