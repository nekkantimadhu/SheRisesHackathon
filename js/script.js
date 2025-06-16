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
    percentLabel.className = 'percent-label';
    percentLabel.textContent = `${clampedPercentage}%`;
    percentLabel.style.textAlign = 'center';
    percentLabel.style.fontWeight = 'bold';
    percentLabel.style.marginTop = '10px';
    percentLabel.style.color = 'rgb(40, 65, 124)';
    
    const categoryLabel = document.createElement('div');
    categoryLabel.className = 'category-label';

    barItem.appendChild(silhouette);
    barItem.appendChild(percentLabel); // Add the percent label
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
    percentLabel.className = 'percent-label';
    percentLabel.textContent = `${clampedPercentage}%`;
    percentLabel.style.textAlign = 'center';
    percentLabel.style.fontWeight = 'bold';
    percentLabel.style.marginTop = '10px';
    percentLabel.style.color = 'palevioletred';
    
    const categoryLabel = document.createElement('div');
    categoryLabel.className = 'category-label-boy';

    barItem.appendChild(silhouette);
    barItem.appendChild(percentLabel); // Add the percent label
    barItem.appendChild(categoryLabel);
    container.appendChild(barItem);
}
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
      const allStages = document.querySelectorAll('.stage');
      allStages.forEach((stage, index) => {
        if (index === 0) {
          stage.classList.add('active-stage');
        } else {
          stage.classList.add('inactive-stage');
        }
      });
      
      // Initial chart update
      if (typeof updateChartGirl === 'function') {
        updateChartGirl(100);
      }
      if (typeof updateChartBoy === 'function') {
        updateChartBoy(100);
      }
      
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
  
  // Initial chart update
  updateChartGirl(100);
  updateChartBoy(100);
});

// Function to initialize navigation
function initializeNavigation() {
  const navCircles = document.querySelectorAll('.nav-circle');
  const femaleStages = document.querySelector('.journey-column.female').querySelectorAll('.stage');
  const maleStages = document.querySelector('.journey-column.male').querySelectorAll('.stage');
  
  // Function to update active stage
  function navigateToStage(stageIndex) {
    // Update nav circles
    navCircles.forEach((circle, index) => {
      if (index === stageIndex) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
    
    // Update female stages
    femaleStages.forEach((stage, index) => {
      if (index === stageIndex) {
        stage.classList.add('active-stage');
        stage.classList.remove('inactive-stage');
      } else {
        stage.classList.remove('active-stage');
        stage.classList.add('inactive-stage');
      }
    });
    
    // Update male stages
    maleStages.forEach((stage, index) => {
      if (index === stageIndex) {
        stage.classList.add('active-stage');
        stage.classList.remove('inactive-stage');
      } else {
        stage.classList.remove('active-stage');
        stage.classList.add('inactive-stage');
      }
    });
    
    // Update charts based on financial independence data
    const femaleFinancialLabel = femaleStages[stageIndex].querySelector('.financial-label');
    if (femaleFinancialLabel) {
      const percentText = femaleFinancialLabel.textContent.match(/\d+/);
      if (percentText) {
        updateChartGirl(parseInt(percentText[0]));
      }
    }
    
    const maleFinancialLabel = maleStages[stageIndex].querySelector('.financial-label');
    if (maleFinancialLabel) {
      const percentText = maleFinancialLabel.textContent.match(/\d+/);
      if (percentText) {
        updateChartBoy(parseInt(percentText[0]));
      }
    }
    
    // Scroll to bring current stage into view
    const currentStage = femaleStages[stageIndex];
    currentStage.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  // Add click handlers to nav circles
  navCircles.forEach((circle) => {
    circle.addEventListener('click', function() {
      const stageIndex = parseInt(this.getAttribute('data-stage'));
      navigateToStage(stageIndex);
    });
  });
  
  // Initialize first stage
  navigateToStage(0);
}

// Call the navigation initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initializeNavigation, 1000);
});

// Function to match the height of the chart spacer with chart containers
function matchChartSpacerHeight() {
  const chartContainer = document.getElementById('chartContainer');
  const chartContainerBoy = document.getElementById('chartContainerBoy');
  const chartSpacer = document.querySelector('.chart-spacer');
  
  if (chartContainer && chartContainerBoy && chartSpacer) {
    const femaleHeight = chartContainer.offsetHeight;
    const maleHeight = chartContainerBoy.offsetHeight;
    const maxHeight = Math.max(femaleHeight, maleHeight);
    
    chartSpacer.style.height = `${maxHeight}px`;
  }
}

// Function to dynamically match heights between navigation and stages
function matchStageHeights() {
  const femaleStages = document.querySelector('.journey-column.female').querySelectorAll('.stage');
  const maleStages = document.querySelector('.journey-column.male').querySelectorAll('.stage');
  const navContainers = document.querySelectorAll('.nav-stage-container');
  
  // Only proceed if all elements are present
  if (!femaleStages.length || !maleStages.length || !navContainers.length) return;
  
  // Process each stage pair
  for (let i = 0; i < femaleStages.length; i++) {
      // Get heights of female and male stages
      const femaleHeight = femaleStages[i].offsetHeight;
      const maleHeight = maleStages[i].offsetHeight;
      console.log(`Matching heights for stage ${femaleHeight} and ${maleHeight}`);
      
      // Use the maximum height for the navigation container
      const maxHeight = Math.max(femaleHeight, maleHeight);
      
      // Set the height of the navigation container
      navContainers[i].style.height = `${maxHeight}px`;
      femaleStages[i].style.height = `${maxHeight}px`;
      maleStages[i].style.height = `${maxHeight}px`;
  }
}

// Update the DOM content loaded event handler
document.addEventListener('DOMContentLoaded', function() {
  // Ensure content is visible first
  setTimeout(() => {
    document.querySelectorAll('.content-hidden').forEach(element => {
      element.classList.remove('content-hidden');
    });
    
    // Wait a bit longer for content to render
    setTimeout(() => {
      initializeNavigation();
      
      // Retry height matching with multiple attempts
      retryMatchStageHeights();
      
      // Setup resize handler
      window.addEventListener('resize', () => {
        matchChartSpacerHeight();
        matchStageHeights();
      });
      
      // Initialize scroll navigation
      initScrollNavigation();
    }, 500);
  }, 800);
});

// Add this function to handle scroll-based navigation
function initScrollNavigation() {
  const femaleStages = document.querySelector('.journey-column.female').querySelectorAll('.stage');
  const navCircles = document.querySelectorAll('.nav-circle');
  
  // Create options for the observer
  const options = {
    root: null, // viewport is the root
    rootMargin: '0px',
    threshold: 0.6 // trigger when 60% of the element is visible
  };
  
  // Keep track of currently active section to avoid unnecessary updates
  let currentActiveIndex = 0;
  
  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Find which stage was intersected
        const targetStage = entry.target;
        const stageIndex = Array.from(femaleStages).indexOf(targetStage);
        
        // Only update if it's a different section
        if (stageIndex !== currentActiveIndex) {
          currentActiveIndex = stageIndex;
          
          // Update the navigation without scrolling (to avoid loops)
          updateNavigationOnly(stageIndex);
        }
      }
    });
  }, options);
  
  // Observe all stage elements
  femaleStages.forEach(stage => {
    observer.observe(stage);
  });
  
  // Function to update navigation only (without scrolling)
  function updateNavigationOnly(stageIndex) {
    // Update nav circles
    navCircles.forEach((circle, index) => {
      if (index === stageIndex) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
    
    // Update female stages
    femaleStages.forEach((stage, index) => {
      if (index === stageIndex) {
        stage.classList.add('active-stage');
        stage.classList.remove('inactive-stage');
      } else {
        stage.classList.remove('active-stage');
        stage.classList.add('inactive-stage');
      }
    });
    
    // Update male stages
    const maleStages = document.querySelector('.journey-column.male').querySelectorAll('.stage');
    maleStages.forEach((stage, index) => {
      if (index === stageIndex) {
        stage.classList.add('active-stage');
        stage.classList.remove('inactive-stage');
      } else {
        stage.classList.remove('active-stage');
        stage.classList.add('inactive-stage');
      }
    });
    
    // Update charts based on financial independence data
    const femaleFinancialLabel = femaleStages[stageIndex].querySelector('.financial-label');
    if (femaleFinancialLabel) {
      const percentText = femaleFinancialLabel.textContent.match(/\d+/);
      if (percentText) {
        updateChartGirl(parseInt(percentText[0]));
      }
    }
    
    const maleFinancialLabel = maleStages[stageIndex].querySelector('.financial-label');
    if (maleFinancialLabel) {
      const percentText = maleFinancialLabel.textContent.match(/\d+/);
      if (percentText) {
        updateChartBoy(parseInt(percentText[0]));
      }
    }
  }
}

// Initialize scroll navigation after a delay
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initScrollNavigation, 1000);
});

// Add this to your code for more reliable height detection
function setupResizeObservers() {
  // Check if ResizeObserver is available
  if (typeof ResizeObserver !== 'undefined') {
    const resizeObserver = new ResizeObserver((entries) => {
      // When any observed element changes size
      matchChartSpacerHeight();
      matchStageHeights();
    });
    
    // Observe the stage containers
    document.querySelectorAll('.journey-column .stage').forEach(stage => {
      resizeObserver.observe(stage);
    });
    
    // Also observe chart containers
    const chartContainer = document.getElementById('chartContainer');
    const chartContainerBoy = document.getElementById('chartContainerBoy');
    if (chartContainer) resizeObserver.observe(chartContainer);
    if (chartContainerBoy) resizeObserver.observe(chartContainerBoy);
  }
}

// Call this after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(setupResizeObservers, 1000);
});

// Function to align navigation circles with the centers of female stages
function alignNavWithStages() {
  const femaleStages = document.querySelectorAll('.journey-column.female .stage');
  const navCircles = document.querySelectorAll('.nav-circle');
  const navStageContainers = document.querySelectorAll('.nav-stage-container');
  const navContainer = document.querySelector('.nav-container');
  
  // Only proceed if we have the necessary elements
  if (!femaleStages.length || !navCircles.length || !navContainer) return;
  
  // Get the top offset of the female journey column
  const femaleColumn = document.querySelector('.journey-column.female');
  const femaleTop = femaleColumn.getBoundingClientRect().top;
  const headerHeight = document.querySelector('.column-header')?.offsetHeight || 0;
  const chartHeight = document.getElementById('chartContainer')?.offsetHeight || 0;
  
  // Set top padding to match chart spacing
  navContainer.style.paddingTop = `${chartHeight + headerHeight}px`;
  
  // Position each nav circle to match center of corresponding stage
  femaleStages.forEach((stage, index) => {
    if (index < navStageContainers.length) {
      // Get vertical center position of the female stage
      const stageRect = stage.getBoundingClientRect();
      const stageCenter = stageRect.top + stageRect.height / 2 - femaleTop;
      
      // Get the nav container and its circle
      const navContainer = navStageContainers[index];
      const navCircle = navContainer.querySelector('.nav-circle');
      
      // Position the nav container so its circle aligns with stage center
      if (navCircle) {
        const navCircleRect = navCircle.getBoundingClientRect();
        const navCircleHeight = navCircleRect.height;
        
        // Calculate the top position for the nav container
        navContainer.style.position = 'absolute';
        navContainer.style.top = `${stageCenter - navCircleHeight/2}px`;
        
        // Remove any height restriction
        navContainer.style.height = 'auto';
      }
    }
  });
}

// Call on load and when window resizes
document.addEventListener('DOMContentLoaded', function() {
  // Wait for content to render fully
  setTimeout(alignNavWithStages, 500);
  window.addEventListener('resize', alignNavWithStages);
  
  // Use ResizeObserver to detect content changes
  if (typeof ResizeObserver !== 'undefined') {
    const resizeObserver = new ResizeObserver(() => {
      alignNavWithStages();
    });
    
    // Observe elements that might change size
    document.querySelectorAll('.stage, .chart-container').forEach(el => {
      resizeObserver.observe(el);
    });
  }
});