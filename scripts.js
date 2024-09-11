// Function to display disease details dynamically
function showDiseaseDetails(disease) {
    const diseaseInfo = document.getElementById('disease-info');
    
    // Example data
    const diseaseData = {
        maizeRust: {
            name: 'Maize Rust',
            description: 'Maize Rust is a fungal disease that affects the leaves of maize.',
            prevention: 'Use resistant varieties, apply fungicides.',
            treatment: 'Remove affected leaves, apply recommended fungicides.',
            image: 'images/maizeRust.jpg'
        },
        maizeBlight: {
            name: 'Maize Blight',
            description: 'Maize Blight is caused by the fungus Exserohilum turcicum.',
            prevention: 'Use disease-free seeds, rotate crops.',
            treatment: 'Apply fungicides, remove debris from fields.',
            image: 'images/maizeBlight.jpg'
        },
        // Add more disease data here...
    };

    if (diseaseData[disease]) {
        const { name, description, prevention, treatment, image } = diseaseData[disease];
        diseaseInfo.innerHTML = `
            <h3>${name}</h3>
            <img src="${image}" alt="${name}" class="crop-image">
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Prevention:</strong> ${prevention}</p>
            <p><strong>Treatment:</strong> ${treatment}</p>
        `;
    } else {
        diseaseInfo.innerHTML = '<p>No details available for this disease.</p>';
    }
}

// Function to filter crops and diseases based on search input
function searchFunction() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const crops = document.getElementsByClassName('crop');

    for (let i = 0; i < crops.length; i++) {
        const crop = crops[i];
        const textContent = crop.textContent.toLowerCase();

        if (textContent.includes(input)) {
            crop.style.display = '';
        } else {
            crop.style.display = 'none';
        }
    }
}
