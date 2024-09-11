// Function to display disease details dynamically
function showDiseaseDetails(disease) {
    const diseaseInfo = document.getElementById('disease-info');

    // Data for diseases of different crops
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
        riceBlast: {
            name: 'Rice Blast',
            description: 'Rice Blast is a fungal disease that can devastate rice crops.',
            prevention: 'Use resistant rice varieties, avoid dense planting.',
            treatment: 'Apply appropriate fungicides.',
            image: 'images/riceBlast.jpg'
        },
        bacterialLeafBlight: {
            name: 'Bacterial Leaf Blight',
            description: 'A bacterial disease affecting rice, leading to wilting and yellowing of leaves.',
            prevention: 'Use resistant varieties, avoid excessive nitrogen fertilizers.',
            treatment: 'Remove infected plants and apply bactericides.',
            image: 'images/bacterialLeafBlight.jpg'
        },
        groundnutRosette: {
            name: 'Groundnut Rosette',
            description: 'A viral disease affecting groundnuts, characterized by stunted growth and mottling of leaves.',
            prevention: 'Use certified seeds, control vector aphids.',
            treatment: 'Use insecticides to control aphid population.',
            image: 'images/groundnutRosette.jpg'
        },
        lateLeafSpot: {
            name: 'Late Leaf Spot',
            description: 'A fungal disease causing leaf spots on groundnuts.',
            prevention: 'Use resistant varieties, rotate crops.',
            treatment: 'Apply fungicides and remove infected leaves.',
            image: 'images/lateLeafSpot.jpg'
        },
        cottonWilt: {
            name: 'Cotton Wilt',
            description: 'A fungal disease causing wilting and yellowing in cotton.',
            prevention: 'Use disease-free seeds, rotate crops.',
            treatment: 'Apply soil fumigants, improve soil drainage.',
            image: 'images/cottonWilt.jpg'
        },
        bollRot: {
            name: 'Boll Rot',
            description: 'A fungal disease affecting cotton bolls.',
            prevention: 'Use resistant varieties, practice good field hygiene.',
            treatment: 'Apply fungicides.',
            image: 'images/bollRot.jpg'
        },
        sorghumAnthracnose: {
            name: 'Sorghum Anthracnose',
            description: 'A fungal disease affecting sorghum leaves, stems, and grains.',
            prevention: 'Use resistant varieties, rotate crops.',
            treatment: 'Apply fungicides at the early stages.',
            image: 'images/sorghumAnthracnose.jpg'
        },
        sootyStripe: {
            name: 'Sooty Stripe',
            description: 'A fungal disease causing dark streaks on sorghum leaves.',
            prevention: 'Use resistant varieties, avoid dense planting.',
            treatment: 'Apply fungicides if detected early.',
            image: 'images/sootyStripe.jpg'
        },
        tomatoBlight: {
            name: 'Tomato Blight',
            description: 'A fungal disease causing dark spots on tomato leaves and stems.',
            prevention: 'Use resistant varieties, avoid overhead watering.',
            treatment: 'Apply fungicides, remove affected leaves.',
            image: 'images/tomatoBlight.jpg'
        },
        tomatoMosaicVirus: {
            name: 'Tomato Mosaic Virus',
            description: 'A viral disease causing mottling and distortion of tomato leaves.',
            prevention: 'Use resistant varieties, practice good hygiene.',
            treatment: 'Remove and destroy infected plants.',
            image: 'images/tomatoMosaicVirus.jpg'
        },
        cassavaMosaicVirus: {
            name: 'Cassava Mosaic Virus',
            description: 'A viral disease causing yellow and green mosaic patterns on cassava leaves.',
            prevention: 'Use virus-free planting material, control whiteflies.',
            treatment: 'Remove and destroy infected plants.',
            image: 'images/cassavaMosaicVirus.jpg'
        },
        cassavaBrownStreakVirus: {
            name: 'Cassava Brown Streak Virus',
            description: 'A viral disease causing brown streaks and rot on cassava roots.',
            prevention: 'Use resistant varieties, control vector whiteflies.',
            treatment: 'Apply insecticides to control whitefly population.',
            image: 'images/cassavaBrownStreakVirus.jpg'
        },
        redRot: {
            name: 'Red Rot',
            description: 'A fungal disease causing reddening and rotting of sugarcane stalks.',
            prevention: 'Use disease-free planting material, avoid waterlogged conditions.',
            treatment: 'Apply fungicides, remove and destroy affected stalks.',
            image: 'images/redRot.jpg'
        },
        smutSugarcane: {
            name: 'Smut',
            description: 'A fungal disease affecting sugarcane, causing black, powdery spores.',
            prevention: 'Use resistant varieties, practice crop rotation.',
            treatment: 'Remove and destroy affected plants.',
            image: 'images/smutSugarcane.jpg'
        },
        blackSigatoka: {
            name: 'Black Sigatoka',
            description: 'A fungal disease affecting banana leaves, leading to reduced yield.',
            prevention: 'Use resistant varieties, avoid overhead watering.',
            treatment: 'Apply fungicides, remove affected leaves.',
            image: 'images/blackSigatoka.jpg'
        },
        bananaBunchyTopVirus: {
            name: 'Banana Bunchy Top Virus',
            description: 'A viral disease causing stunted growth and bunching of banana leaves.',
            prevention: 'Use virus-free planting material, control aphids.',
            treatment: 'Remove and destroy infected plants.',
            image: 'images/bananaBunchyTopVirus.jpg'
        },
        pepperMosaicVirus: {
            name: 'Pepper Mosaic Virus',
            description: 'A viral disease causing mottling and distortion of pepper leaves.',
            prevention: 'Use resistant varieties, practice good field hygiene.',
            treatment: 'Remove and destroy infected plants.',
            image: 'images/pepperMosaicVirus.jpg'
        },
        bacterialSpot: {
            name: 'Bacterial Spot',
            description: 'A bacterial disease causing spots on pepper leaves and fruits.',
            prevention: 'Use resistant varieties, avoid overhead irrigation.',
            treatment: 'Apply copper-based bactericides, remove infected leaves.',
            image: 'images/bacterialSpot.jpg'
        },
        powderyMildewCucumber: {
            name: 'Powdery Mildew on Cucumber',
            description: 'A fungal disease causing white powdery spots on cucumber leaves.',
            prevention: 'Ensure good air circulation, avoid overhead watering.',
            treatment: 'Apply sulfur-based fungicides.',
            image: 'images/powderyMildewCucumber.jpg'
        },
        downyMildewCucumber: {
            name: 'Downy Mildew on Cucumber',
            description: 'A fungal disease causing yellow spots and mold growth on cucumber leaves.',
            prevention: 'Use resistant varieties, avoid excessive moisture.',
            treatment: 'Apply fungicides, ensure proper spacing between plants.',
            image: 'images/downyMildewCucumber.jpg'
        }
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
