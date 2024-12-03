
function processData() {
  const data = document.getElementById('data').value;


  fetch('/process', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
  })
  .then(response => response.json())
  .then(result => {
      displayResults(result);
  });
}


function displayResults(result) {
  const resultDiv = document.getElementById('result');
 
  resultDiv.innerHTML = `
      <h2>Encapsulation Process:</h2>
      <div class="layer">Original Data: ${result.encapsulatedData.originalData}</div>
      <div class="layer">After Application Layer Encapsulation: ${result.encapsulatedData.appLayer}</div>
      <div class="layer">After Transport Layer Encapsulation: ${result.encapsulatedData.transportLayer}</div>
      <div class="layer">After Network Layer Encapsulation: ${result.encapsulatedData.networkLayer}</div>
      <div class="layer">After Data Link Layer Encapsulation: ${result.encapsulatedData.dataLinkLayer}</div>
      <div class="layer">After Physical Layer Encapsulation: ${result.encapsulatedData.physicalLayer}</div>
     
      <h2>Decapsulation Process:</h2>
      <div class="layer">After Physical Layer Decapsulation: ${result.decapsulatedData.physicalLayer}</div>
      <div class="layer">After Data Link Layer Decapsulation: ${result.decapsulatedData.dataLinkLayer}</div>
      <div class="layer">After Network Layer Decapsulation: ${result.decapsulatedData.networkLayer}</div>
      <div class="layer">After Transport Layer Decapsulation: ${result.decapsulatedData.transportLayer}</div>
      <div class="layer">After Application Layer Decapsulation: ${result.decapsulatedData.decapsulatedData}</div>
  `;
  resultDiv.style.display = 'block';
}


