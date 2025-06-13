// In the script section, change the colors array
const colors = [
    'linear-gradient(180deg, #ff9ed8, #ff69b4)', // Pink gradient
];

function updateChartGirl(percent = 100) {
    const container = document.getElementById('chartContainer');
    container.innerHTML = '';

    const percentage = parseInt(percent)|| 0;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    
    const barItem = document.createElement('div');
    barItem.className = 'bar-item';

    const silhouette = document.createElement('div');
    silhouette.className = 'girl-silhouette';

    // Create shadow effect
    const shadow = document.createElement('div');
    shadow.className = 'girl-fill';

    shadow.innerHTML = createGirlSVG();
    shadow.querySelector('svg path').style.fill = 'rgb(164, 183, 237)';
    shadow.querySelector('svg path').style.stroke = 'none';

    // Create outline (background silhouette)
    const outline = document.createElement('div');
    outline.className = 'girl-outline-container';
    outline.innerHTML = createGirlSVG();
    outline.querySelector('svg path').style.fill = 'transparent';
    
    // Create fill (the colored part)
    const fill = document.createElement('div');
    fill.className = 'girl-fill';
    fill.style.setProperty('--target-inset', `${100 - clampedPercentage}%`);
    fill.innerHTML = createGirlSVG();
    fill.querySelector('svg path').style.fill = 'rgb(40, 65, 124)';
    fill.querySelector('svg path').style.stroke = 'none';

    // Add animation class
    setTimeout(() => {
        fill.classList.add('animate-fill');
    }, 200);

    // Set the CSS variable for animation end point
    fill.style.setProperty('--target-inset', `${100 - clampedPercentage}%`);

    // Add animation class
    setTimeout(() => {
        fill.classList.add('animate-fill');
    }, 200);

    silhouette.appendChild(outline);
    silhouette.appendChild(shadow);
    silhouette.appendChild(fill);

    const percentLabel = document.createElement('div');

    const categoryLabel = document.createElement('div');
    categoryLabel.className = 'category-label';

    barItem.appendChild(silhouette);
    barItem.appendChild(categoryLabel);
    container.appendChild(barItem);
}

function updateChartBoy(percent = 100) {
    const container = document.getElementById('chartContainerBoy');
    container.innerHTML = '';

    const percentage = parseInt(percent)|| 0;
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    
    const barItem = document.createElement('div');
    barItem.className = 'bar-item-boy';

    const silhouette = document.createElement('div');
    silhouette.className = 'boy-silhouette';

    // Create outline (background silhouette)
    const outline = document.createElement('div');
    outline.className = 'boy-outline-container';
    outline.innerHTML = createBoySVG();
    outline.querySelector('svg path').style.fill = 'transparent';

        // Create shadow effect
    const shadow = document.createElement('div');
    shadow.className = 'boy-fill';

    shadow.innerHTML = createBoySVG();
    shadow.querySelector('svg path').style.fill = 'rgb(224, 165, 239)';
    shadow.querySelector('svg path').style.stroke = 'none';
    
    // Create fill (the colored part)
    const fill = document.createElement('div');
    fill.className = 'boy-fill';
    fill.style.setProperty('--target-inset', `${100 - clampedPercentage}%`);
    fill.innerHTML = createBoySVG();
    fill.querySelector('svg path').style.fill = 'palevioletred';
    fill.querySelector('svg path').style.stroke = 'none';

    // Add animation class
    setTimeout(() => {
        fill.classList.add('animate-fill-boy');
    }, 200);

    // Set the CSS variable for animation end point
    fill.style.setProperty('--target-inset', `${100 - clampedPercentage}%`);

    // Add animation class
    setTimeout(() => {
        fill.classList.add('animate-fill');
    }, 200);

    silhouette.appendChild(outline);
     silhouette.appendChild(shadow);
    silhouette.appendChild(fill);

    const percentLabel = document.createElement('div');

    const categoryLabel = document.createElement('div');
    categoryLabel.className = 'category-label-boy';

    barItem.appendChild(silhouette);
    barItem.appendChild(categoryLabel);
    container.appendChild(barItem);
}
// Updated next button positioning and styling
function addNextButtons() {
  // Remove existing arrows
  document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.remove();
  });
  
  // Create a container for the common next button
  const nextButtonContainer = document.createElement('div');
  nextButtonContainer.id = 'next-button-container';
  nextButtonContainer.style.zIndex = '150';
  
  // Create common next button
  const commonNextButton = document.createElement('button');
  commonNextButton.className = 'common-next-button';
  commonNextButton.textContent = 'Next Stage';
  commonNextButton.style.cursor = 'pointer';
  
  nextButtonContainer.appendChild(commonNextButton);
  document.body.appendChild(nextButtonContainer);
  
  // Get separate stages for female and male journeys
  const femaleStages = document.querySelector('.journey-column.female').querySelectorAll('.stage');
  const maleStages = document.querySelector('.journey-column.male').querySelectorAll('.stage');
  
  // Determine how many stages to show (use the minimum count between male/female)
  const stageCount = Math.min(femaleStages.length, maleStages.length);
  let currentStageIndex = 0;
  
  // Function to update active stages
  function updateActiveStages(index) {
    // Remove active class from all stages
    femaleStages.forEach(stage => stage.classList.remove('active-stage'));
    maleStages.forEach(stage => stage.classList.remove('active-stage'));
    
    // Add active class to the current pair of stages
    if (index < femaleStages.length) {
      femaleStages[index].classList.add('active-stage');
    }
    
    if (index < maleStages.length) {
      maleStages[index].classList.add('active-stage');
    }
    
    // Position the next button after the active female stage
    positionNextButton();
  }
  
  // Function to position the next button after the active stages
  function positionNextButton() {
    const activeStage = document.querySelector('.female .active-stage');
    
    if (activeStage) {
      const stageRect = activeStage.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const journeyContainer = document.querySelector('.journey-container');
      const containerRect = journeyContainer.getBoundingClientRect();
      
      // Position the button after the active stage and center it relative to the container
      nextButtonContainer.style.top = (stageRect.bottom + scrollY + 20) + 'px';
      
      // Remove inline styles that might conflict with the CSS
      nextButtonContainer.style.margin = '';
      nextButtonContainer.style.padding = '';
      nextButtonContainer.style.backgroundColor = '';
      nextButtonContainer.style.borderRadius = '';
      nextButtonContainer.style.boxShadow = '';
      nextButtonContainer.style.zIndex = '';
    }
  }
  
  // Initial activation of first stage
  updateActiveStages(currentStageIndex);
  
  // Next button click handler
  commonNextButton.addEventListener('click', function() {
    // Move to next stage index, loop back to beginning if at end
    currentStageIndex = (currentStageIndex + 1) % stageCount;
    
    // Update active stages
    updateActiveStages(currentStageIndex);
    
    // Scroll to the female stage and center it with some offset from the top
    const stageRect = femaleStages[currentStageIndex].getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportHeight = window.innerHeight;
    const offset = 80; // leave 80px from top

    // Calculate the scroll position to center the stage with offset
    const scrollTo = stageRect.top + scrollY - (viewportHeight / 3) + (stageRect.height / 3) - offset;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
    
    // Update the GIRL chart based on the female journey percentage
    const girlPercentageText = femaleStages[currentStageIndex].querySelector('.financial-label')?.textContent;
    if (girlPercentageText) {
      const girlPercentMatch = girlPercentageText.match(/(\d+)%/);
      if (girlPercentMatch && girlPercentMatch[1]) {
        updateChartGirl(parseInt(girlPercentMatch[1]));
      }
    }
    
    // Update the BOY chart based on the male journey percentage
    const boyPercentageText = maleStages[currentStageIndex].querySelector('.financial-label')?.textContent;
    if (boyPercentageText) {
      const boyPercentMatch = boyPercentageText.match(/(\d+)%/);
      if (boyPercentMatch && boyPercentMatch[1]) {
        updateChartBoy(parseInt(boyPercentMatch[1]));
      }
    }
    
    // Show/hide next button at the end
    if (currentStageIndex === stageCount - 1) {
      commonNextButton.textContent = 'Start Over';
    } else {
      commonNextButton.textContent = 'Next Stage';
    }
  });
  
  // Update button position when window is resized or scrolled
  window.addEventListener('resize', positionNextButton);
  window.addEventListener('scroll', positionNextButton);
}

// Make sure to call this function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
  addNextButtons();
});
document.addEventListener('DOMContentLoaded', function() {
  const introText = [
    "Imagine two children born on the same day in the same hospital. Both enter the world with infinite potential. Yet, as they grow, their paths diverge in subtle but significant ways—not because of their abilities, but because of their gender. This is the story of Maya and Noah, representing millions of girls and boys around the world whose life trajectories are shaped by systemic gender disparities.",
    "This visualization traces their parallel journeys from birth to career, showing how educational opportunities translate into economic outcomes. Every step reveals how small gaps in childhood widen into significant divides in adulthood."
  ];
  
  const typingContainer = document.getElementById('typing-intro');
  const startJourneyBtn = document.getElementById('start-journey-btn');
  const introContainer = document.getElementById('intro-container');
  
  typingContainer.innerHTML = ''; // Clear any existing content
  
  let paragraphIndex = 0;
  let charIndex = 0;
  let currentParagraph = document.createElement('p');
  typingContainer.appendChild(currentParagraph);
  currentParagraph.classList.add('typing-text');
  
  const typingSpeed = 30; // milliseconds per character
  const paragraphPause = 700; // pause between paragraphs
  
  function typeText() {
    if (paragraphIndex < introText.length) {
      if (charIndex < introText[paragraphIndex].length) {
        currentParagraph.innerHTML += introText[paragraphIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        // Paragraph complete, start new paragraph after pause
        paragraphIndex++;
        charIndex = 0;
        
        if (paragraphIndex < introText.length) {
          setTimeout(() => {
            currentParagraph = document.createElement('p');
            currentParagraph.classList.add('typing-text');
            typingContainer.appendChild(currentParagraph);
            typeText();
          }, paragraphPause);
        } else {
          // All paragraphs complete, show the start journey button
          setTimeout(() => {
            startJourneyBtn.classList.add('visible');
          }, 500);
        }
      }
    }
  }
  
  // Add cursor element
  const cursor = document.createElement('span');
  cursor.className = 'typing-cursor';
  cursor.innerHTML = '|';
  typingContainer.appendChild(cursor);
  
  // Start typing animation after a short delay
  setTimeout(typeText, 500);
  
  // Add click handler for start journey button
  startJourneyBtn.addEventListener('click', function() {
    // Fade out the intro container
    introContainer.style.opacity = '0';
    introContainer.style.visibility = 'hidden';
    
    // Show the content and fixed headers
    document.querySelectorAll('.content-hidden').forEach(element => {
      element.classList.remove('content-hidden');
    });
    
    // Remove intro container after animation completes
    setTimeout(() => {
      introContainer.remove();
      
      // Initialize the journey UI
      const allStages = document.querySelectorAll('.stage');
      allStages.forEach((stage, index) => {
        if (index === 0) {
          stage.classList.add('active-stage');
        }
      });
      
      // Add the next button
      addNextButtons();
      
      // Initial chart update
      if (typeof updateChartGirl === 'function') updateChartGirl(100);
      if (typeof updateChartBoy === 'function') updateChartBoy(100);
      
      // Scroll to beginning of journey
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 800);
  });
});
// Ensure we call this function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
  // First, activate only the first stage and blur others
  const allStages = document.querySelectorAll('.stage');
  allStages.forEach((stage, index) => {
    if (index === 0) {
      stage.classList.add('active-stage');
    }
  });
  
  // Add the next button
  addNextButtons();
  
  // Initial chart update
  updateChartGirl(100);
  updateChartBoy(100);
});

