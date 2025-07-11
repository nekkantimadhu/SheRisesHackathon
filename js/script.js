// In the script section, change the colors array
const colors = [
  'linear-gradient(180deg, #ff9ed8, #ff69b4)', // Pink gradient
];

function updateChartGirl(percent = 100) {
  const container = document.getElementById('chartContainerGirl');
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
  // barItem.appendChild(percentLabel); // Add the percent label
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
  // barItem.appendChild(percentLabel); // Add the percent label
  barItem.appendChild(categoryLabel);
  container.appendChild(barItem);
}
document.addEventListener('DOMContentLoaded', function() {
const introText = [
  "Welcome to 'Hack Our Story' - an AI-powered journey through gender equality data. Imagine two children born on the same day in the same hospital. Both enter the world with infinite potential. Yet, as they grow, their paths diverge in subtle but significant ways—not because of their abilities, but because of their gender.",
  "This innovative visualization combines 15+ years of World Bank gender data with AI-powered insights to trace Maya and Noah's parallel journeys from birth to career. Every step reveals how small gaps in childhood widen into significant divides in adulthood, with real-time data analysis and predictive trends.",
  "Explore interactive data visualizations, AI-generated insights, and predictive analytics that tell the compelling story of gender disparities. Click 'Explore Data' on any stage to dive deeper into the statistics, or toggle AI insights for machine learning-powered analysis."
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
  // Update current stage tracking
  currentStage = stageIndex;
  
  // Remove active class from all stages and circles
  document.querySelectorAll('.stage').forEach(stage => stage.classList.remove('active-stage'));
  document.querySelectorAll('.nav-circle').forEach(circle => circle.classList.remove('active'));
  
  // Add active class to current stage and circle
  const currentStageElement = document.querySelector(`[data-stage="${stageIndex}"]`);
  const currentCircle = document.querySelector(`[data-stage="${stageIndex}"]`);
  
  if (currentStageElement) {
    currentStageElement.classList.add('active-stage');
  }
  if (currentCircle) {
    currentCircle.classList.add('active');
  }
  
  // Update charts based on stage
  const femalePercentages = [100, 80, 60, 50, 30, 20];
  const malePercentages = [100, 80, 70, 60, 60, 60];
  
  updateChartGirl(femalePercentages[stageIndex]);
  updateChartBoy(malePercentages[stageIndex]);
  
  // Update AI insights if sidebar is open
  const sidebar = document.getElementById('ai-sidebar');
  if (sidebar.classList.contains('open')) {
    updateAIInsights(currentStage, currentGender);
  }
  
  // Update prediction panel
  const stageNames = ['birth', 'primary', 'secondary', 'tertiary', 'workforce', 'leadership'];
  const stageName = stageNames[stageIndex];
  if (aiPredictions[stageName]) {
    document.getElementById('prediction-content').innerHTML = `<p>${aiPredictions[stageName]}</p>`;
  }
  
  // Scroll to the current stage
  if (currentStageElement) {
    currentStageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
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
const chartContainerGirl = document.getElementById('chartContainerGirl');
const chartContainerBoy = document.getElementById('chartContainerBoy');
const chartSpacer = document.querySelector('.chart-spacer');

if (chartContainerGirl && chartContainerBoy && chartSpacer) {
  const femaleHeight = chartContainerGirl.offsetHeight;
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
const stages = document.querySelectorAll('.stage');
const navCircles = document.querySelectorAll('.nav-circle');

// Create intersection observer for stages
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const stageIndex = parseInt(entry.target.getAttribute('data-stage'));
      currentStage = stageIndex;
      
      // Update navigation circles
      navCircles.forEach(circle => circle.classList.remove('active'));
      const activeCircle = document.querySelector(`[data-stage="${stageIndex}"]`);
      if (activeCircle) {
        activeCircle.classList.add('active');
      }
      
      // Update AI insights if sidebar is open
      const sidebar = document.getElementById('ai-sidebar');
      if (sidebar.classList.contains('open')) {
        updateAIInsights(currentStage, currentGender);
      }
      
      // Update prediction panel
      const stageNames = ['birth', 'primary', 'secondary', 'tertiary', 'workforce', 'leadership'];
      const stageName = stageNames[stageIndex];
      if (aiPredictions[stageName]) {
        document.getElementById('prediction-content').innerHTML = `<p>${aiPredictions[stageName]}</p>`;
      }
    }
  });
}, {
  threshold: 0.5,
  rootMargin: '-20% 0px -20% 0px'
});

// Observe all stages
stages.forEach(stage => observer.observe(stage));
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
  const chartContainerGirl = document.getElementById('chartContainerGirl');
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
const maleColumn = document.querySelector('.journey-column.male');
const femaleTop = femaleColumn.getBoundingClientRect().top;
const headerHeight = document.querySelector('.column-header')?.offsetHeight || 0;
const chartHeight = document.getElementById('chartContainer')?.offsetHeight || 0;

// Set top padding to match chart spacing
navContainer.style.paddingTop = `${chartHeight + headerHeight}px`;

// Get the total height of the female/male columns for matching
const femaleHeight = femaleColumn.offsetHeight;
const maleHeight = maleColumn.offsetHeight;
const columnHeight = Math.max(femaleHeight, maleHeight);

// Set the minimum height of the nav container to match the columns
navContainer.style.minHeight = `${columnHeight - (chartHeight + headerHeight)}px`;

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

// Add end journey button functionality
document.addEventListener('DOMContentLoaded', function() {
// Add end journey button functionality
const endJourneyBtn = document.getElementById('end-journey-btn');
if (endJourneyBtn) {
  endJourneyBtn.addEventListener('click', function() {
    // Hide all journey columns
    const journeyColumns = document.querySelectorAll('.journey-column');
    journeyColumns.forEach(column => {
      column.style.display = 'none';
    });
    
    // Show only the conclusion
    const journeyConclusion = document.querySelector('.journey-conclusion');
    if (journeyConclusion) {
      journeyConclusion.style.display = 'block';
      journeyConclusion.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update any headers if needed
    const fixedHeaders = document.querySelector('.fixed-headers');
    if (fixedHeaders) {
      fixedHeaders.querySelector('h2').textContent = 'Journey Conclusion';
    }
    
    // Remove the button after clicking
    this.remove();
  });
}
});

// Updated skipToConclusion function with sequential typewriter effect
function skipToConclusion() {
// Hide all journey columns
const journeyColumns = document.querySelectorAll('.journey-column');
journeyColumns.forEach(column => {
  column.style.display = 'none';
});

// Remove the end journey button from the page
const endJourneyBtn = document.getElementById('end-journey-btn');
if (endJourneyBtn) {
  endJourneyBtn.remove();
}

// Also remove the end-journey-footer if it exists
const endJourneyFooter = document.querySelector('.end-journey-footer');
if (endJourneyFooter) {
  endJourneyFooter.remove();
}

// Show the conclusion container
const journeyConclusion = document.querySelector('.journey-conclusion');
if (journeyConclusion) {
  journeyConclusion.style.display = 'block';
  journeyConclusion.scrollIntoView({ behavior: 'smooth' });
  
  // Hide all paragraphs initially
  const paragraphs = journeyConclusion.querySelectorAll('p');
  const callToAction = journeyConclusion.querySelector('.call-to-action');
  const actionSteps = journeyConclusion.querySelector('.action-steps');
  const microActionsNote = journeyConclusion.querySelector('.micro-actions-note');
  const closingThought = journeyConclusion.querySelector('.closing-thought');
  
  paragraphs.forEach(p => { p.style.display = 'none'; });
  if (callToAction) callToAction.style.display = 'none';
  if (actionSteps) actionSteps.style.display = 'none';
  if (microActionsNote) microActionsNote.style.display = 'none';
  if (closingThought) closingThought.style.display = 'none';
  
  // Show only the title immediately
  const title = journeyConclusion.querySelector('h3');
  if (title) {
    title.style.display = 'block';
    
    // Remove any existing keyboard hints
    const existingHint = journeyConclusion.querySelector('.keyboard-hint');
    if (existingHint) existingHint.remove();
    
    // Create array of elements to type
    const elementsToType = [...paragraphs];
    if (callToAction) elementsToType.push(callToAction);
    
    // Start sequential typewriter effect
    sequentialTypewriter(elementsToType, 0, function() {
      // After all paragraphs are typed, show action button
      const actionButton = document.createElement('button');
      actionButton.textContent = 'What we can do ?';
      // Apply the same class as the initial journey button for consistent styling
      actionButton.className = 'show-actions-btn start-journey-btn';
      journeyConclusion.appendChild(actionButton);
      
      actionButton.addEventListener('click', function() {
        if (actionSteps) {
          actionSteps.style.display = 'block';
          actionSteps.scrollIntoView({ behavior: 'smooth', block: 'center' });
          this.remove();
        }
      // After all paragraphs are typed, show action button
      const actionButton2 = document.createElement('button');
      actionButton2.textContent = 'Your Turn';
      actionButton2.className = 'show-actions-btn start-journey-btn';
      journeyConclusion.appendChild(actionButton2);

      actionButton2.addEventListener('click', function() {
        if (microActionsNote) {
          microActionsNote.style.display = 'block';
          microActionsNote.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (closingThought) {
          closingThought.style.display = 'block';
          closingThought.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        this.remove();
      });
      });
    });
  }
}

// Update any headers if needed
const fixedHeaders = document.querySelector('.fixed-headers');
if (fixedHeaders) {
  fixedHeaders.querySelector('h2').textContent = 'Journey Conclusion';
}

}

// Function to apply typewriter effect sequentially to multiple elements
function sequentialTypewriter(elements, currentIndex, finalCallback) {
if (currentIndex >= elements.length) {
  if (finalCallback) finalCallback();
  return;
}

const element = elements[currentIndex];
element.style.display = 'block';

// Apply typewriter effect to current element
const text = element.textContent;
element.textContent = '';
element.classList.add('typewriter-text');

let i = 0;
const speed = 20; // typing speed in milliseconds

function typeWriter() {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Remove the typewriter class when done
    element.classList.remove('typewriter-text');
    
    // Short pause before starting the next element
    setTimeout(() => {
      sequentialTypewriter(elements, currentIndex + 1, finalCallback);
    }, 500);
  }
}

typeWriter();
}

// AI Insights and Interactive Features
let currentStage = 0;
let currentGender = 'female';

// AI Insights Data
const aiInsights = {
birth: {
  female: {
    current: "At birth, gender disparities begin with sex ratio imbalances in certain regions, particularly East Asia where cultural preferences for male children persist.",
    prediction: "AI models predict that with current trends, gender balance at birth will improve by 15% in the next decade, but regional disparities will persist.",
    intervention: "Targeted awareness campaigns and policy interventions in high-disparity regions could accelerate progress by 25%."
  },
  male: {
    current: "Male children often receive preferential treatment from birth, including better access to healthcare and nutrition in many societies.",
    prediction: "The male advantage at birth is expected to decrease by 10% globally as gender equality awareness increases.",
    intervention: "Educational programs for parents and healthcare providers could reduce gender-based discrimination by 30%."
  }
},
primary: {
  female: {
    current: "Girls' primary education enrollment has improved significantly, but completion rates lag behind boys in many regions due to household responsibilities.",
    prediction: "Primary education gender parity is expected to be achieved globally by 2030, but quality gaps will remain.",
    intervention: "Community-based support programs and flexible school schedules could improve girls' completion rates by 20%."
  },
  male: {
    current: "Boys generally have higher primary completion rates, but face different challenges including child labor and behavioral expectations.",
    prediction: "Boys' educational advantage in primary school will decrease as girls' access improves, leading to more balanced outcomes.",
    intervention: "Addressing child labor and providing vocational training could improve boys' long-term educational outcomes."
  }
},
secondary: {
  female: {
    current: "Secondary education shows significant gender gaps, with 5.5 million more girls than boys out of school in low-income countries.",
    prediction: "Secondary education gaps will persist in low-income countries unless targeted interventions are implemented.",
    intervention: "Scholarship programs and safe transportation could increase girls' secondary enrollment by 35%."
  },
  male: {
    current: "Boys face different challenges in secondary education, including pressure to enter the workforce early and behavioral issues.",
    prediction: "Boys' secondary education rates will stabilize while girls' rates continue to improve, leading to eventual parity.",
    intervention: "Mentoring programs and career guidance could improve boys' educational engagement and outcomes."
  }
},
tertiary: {
  female: {
    current: "Women now outnumber men in tertiary education globally, but are underrepresented in high-paying STEM fields.",
    prediction: "Women's representation in STEM fields is expected to increase by 40% in the next 15 years with current initiatives.",
    intervention: "Early STEM exposure and mentorship programs could increase women's STEM participation by 50%."
  },
  male: {
    current: "Men are more likely to choose STEM fields, leading to higher earning potential despite lower overall tertiary enrollment.",
    prediction: "Men's advantage in STEM fields will decrease as women's participation increases, leading to more balanced representation.",
    intervention: "Encouraging men to explore non-STEM fields could lead to more diverse career choices and reduced gender stereotypes."
  }
},
workforce: {
  female: {
    current: "Women face immediate pay gaps upon entering the workforce, earning 84 cents for every dollar earned by men.",
    prediction: "The gender pay gap is expected to close by 2% annually with current policies, reaching parity by 2050.",
    intervention: "Pay transparency laws and bias training could accelerate pay gap closure by 50%."
  },
  male: {
    current: "Men enter the workforce with built-in advantages including higher starting salaries and fewer domestic responsibilities.",
    prediction: "Men's workplace advantages will gradually decrease as gender equality policies become more widespread.",
    intervention: "Encouraging men to take on more domestic responsibilities could improve work-life balance for all genders."
  }
},
leadership: {
  female: {
    current: "Women hold only 28.3% of managerial positions globally, facing the 'glass ceiling' effect.",
    prediction: "Women's representation in leadership will increase to 40% by 2035 with current diversity initiatives.",
    intervention: "Leadership development programs and sponsorship initiatives could increase women's leadership representation by 60%."
  },
  male: {
    current: "Men hold 71.7% of managerial positions, benefiting from networks and stereotypes that favor masculine leadership traits.",
    prediction: "Men's leadership dominance will decrease as diversity initiatives and changing workplace cultures take effect.",
    intervention: "Inclusive leadership training and diverse hiring practices could create more balanced leadership representation."
  }
}
};

// AI Predictions Data
const aiPredictions = {
birth: "By 2030, global gender balance at birth will improve by 15%, but regional disparities will persist in East Asia and South Asia.",
primary: "Primary education gender parity will be achieved globally by 2030, with quality gaps remaining in rural areas.",
secondary: "Secondary education gaps will persist in low-income countries unless targeted interventions are implemented by 2025.",
tertiary: "Women's representation in STEM fields will increase by 40% by 2035, leading to reduced pay gaps in technical roles.",
workforce: "The gender pay gap will close by 2% annually, reaching parity by 2050 with current policy trends.",
leadership: "Women's representation in leadership will reach 40% by 2035, with the most progress in technology and healthcare sectors."
};

// Toggle AI Sidebar
function toggleSidebar() {
const sidebar = document.getElementById('ai-sidebar');
sidebar.classList.toggle('open');

if (sidebar.classList.contains('open')) {
  updateAIInsights(currentStage, currentGender);
}
}

// Update AI Insights based on current stage and gender
function updateAIInsights(stage, gender) {
const stageNames = ['birth', 'primary', 'secondary', 'tertiary', 'workforce', 'leadership'];
const stageName = stageNames[stage];

if (aiInsights[stageName] && aiInsights[stageName][gender]) {
  const insights = aiInsights[stageName][gender];
  
  document.getElementById('current-insight').textContent = insights.current;
  document.getElementById('prediction-insight').textContent = insights.prediction;
  document.getElementById('intervention-insight').textContent = insights.intervention;
}

// Update prediction panel
if (aiPredictions[stageName]) {
  document.getElementById('prediction-content').innerHTML = `<p>${aiPredictions[stageName]}</p>`;
}
}

// Data Explorer Function
function exploreData(stage, gender) {
const stageNames = {
  'birth': 'Birth & Early Childhood',
  'primary': 'Primary Education',
  'secondary': 'Secondary Education',
  'tertiary': 'Tertiary Education',
  'workforce': 'Workforce Entry',
  'leadership': 'Leadership & Career'
};

const modal = document.getElementById('data-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');

modalTitle.textContent = `Data Explorer: ${stageNames[stage]} - ${gender === 'female' ? 'Maya' : 'Noah'}`;

// Generate dynamic content based on stage and gender
let content = `
  <div class="data-explorer-content">
    <div class="data-section">
      <h4>📊 Key Statistics</h4>
      <div class="stat-grid">
        ${generateStats(stage, gender)}
      </div>
    </div>
    
    <div class="data-section">
      <h4>🔍 AI Analysis</h4>
      <div class="ai-analysis">
        ${generateAIAnalysis(stage, gender)}
      </div>
    </div>
    
    <div class="data-section">
      <h4>📈 Interactive Chart</h4>
      <div class="chart-placeholder">
        <div class="chart-demo">
          <div class="chart-bar" style="height: ${getChartHeight(stage, gender)}%; background: ${gender === 'female' ? 'steelblue' : 'palevioletred'};"></div>
          <div class="chart-label">${getChartLabel(stage, gender)}</div>
        </div>
      </div>
    </div>
    
    <div class="data-section">
      <h4>💡 Recommendations</h4>
      <ul class="recommendations">
        ${generateRecommendations(stage, gender)}
      </ul>
    </div>
  </div>
`;

modalBody.innerHTML = content;
modal.style.display = 'block';
}

// Close Data Modal
function closeDataModal() {
document.getElementById('data-modal').style.display = 'none';
}

// Generate statistics for data explorer
function generateStats(stage, gender) {
const stats = {
  birth: {
    female: ['Global female birth rate: 48.5%', 'Gender gap at birth: 2.3%', 'Regional variation: 15%'],
    male: ['Global male birth rate: 51.5%', 'Gender gap at birth: 2.3%', 'Regional variation: 15%']
  },
  primary: {
    female: ['Girls enrollment: 89.6%', 'Completion rate: 87.1%', 'Dropout rate: 12.9%'],
    male: ['Boys enrollment: 89.0%', 'Completion rate: 88.9%', 'Dropout rate: 11.1%']
  },
  secondary: {
    female: ['Girls enrollment: 76%', 'STEM participation: 35%', 'Dropout rate: 24%'],
    male: ['Boys enrollment: 76.5%', 'STEM participation: 65%', 'Dropout rate: 23.5%']
  },
  tertiary: {
    female: ['Women enrollment: 41.7%', 'STEM fields: 35%', 'Graduation rate: 85%'],
    male: ['Men enrollment: 36.9%', 'STEM fields: 65%', 'Graduation rate: 82%']
  },
  workforce: {
    female: ['Labor participation: 46.9%', 'Pay gap: 16%', 'Managerial roles: 28.3%'],
    male: ['Labor participation: 72.2%', 'Pay gap: 0%', 'Managerial roles: 71.7%']
  },
  leadership: {
    female: ['Leadership roles: 28.3%', 'CEO positions: 6.6%', 'Board seats: 23%'],
    male: ['Leadership roles: 71.7%', 'CEO positions: 93.4%', 'Board seats: 77%']
  }
};

return stats[stage][gender].map(stat => `<div class="stat-item">${stat}</div>`).join('');
}

// Generate AI analysis
function generateAIAnalysis(stage, gender) {
const analysis = {
  birth: {
    female: "AI analysis shows that gender preferences at birth are deeply rooted in cultural and economic factors. Machine learning models predict that education and economic development will reduce these preferences by 25% in the next decade.",
    male: "AI analysis reveals that male children often receive preferential treatment from birth, leading to better health outcomes and educational opportunities in many societies."
  },
  primary: {
    female: "AI models indicate that girls' primary education success is strongly correlated with community support and flexible school schedules. Predictive analytics suggest that targeted interventions could improve completion rates by 20%.",
    male: "AI analysis shows that boys' primary education is often prioritized in resource-constrained families, leading to better long-term outcomes despite similar enrollment rates."
  },
  secondary: {
    female: "AI analysis reveals that girls' secondary education is most affected by safety concerns and household responsibilities. Predictive models suggest that safe transportation and community support could increase enrollment by 35%.",
    male: "AI models indicate that boys' secondary education challenges are often related to economic pressures and behavioral expectations, requiring different intervention strategies."
  },
  tertiary: {
    female: "AI analysis shows that women's underrepresentation in STEM fields is influenced by early educational experiences and societal stereotypes. Machine learning predicts that early intervention could increase STEM participation by 50%.",
    male: "AI analysis reveals that men's overrepresentation in STEM fields is driven by societal expectations and early educational experiences, leading to higher earning potential."
  },
  workforce: {
    female: "AI analysis indicates that the gender pay gap is influenced by occupational segregation, negotiation patterns, and unconscious bias. Predictive models suggest that pay transparency could reduce the gap by 50%.",
    male: "AI analysis shows that men's workplace advantages are often invisible to them, stemming from historical patterns and societal expectations that favor masculine traits."
  },
  leadership: {
    female: "AI analysis reveals that women's leadership barriers include lack of sponsorship, unconscious bias, and work-life balance challenges. Predictive models suggest that mentorship programs could increase leadership representation by 60%.",
    male: "AI analysis shows that men's leadership advantages stem from historical patterns and networks that favor masculine leadership styles, creating barriers for diverse leadership approaches."
  }
};

return `<p>${analysis[stage][gender]}</p>`;
}

// Generate recommendations
function generateRecommendations(stage, gender) {
const recommendations = {
  birth: {
    female: ['Implement awareness campaigns about gender equality', 'Provide healthcare incentives for balanced families', 'Support community education programs'],
    male: ['Promote gender-neutral parenting practices', 'Provide education about gender equality', 'Support community awareness programs']
  },
  primary: {
    female: ['Implement flexible school schedules', 'Provide safe transportation options', 'Create community support programs'],
    male: ['Address child labor issues', 'Provide vocational training opportunities', 'Create mentorship programs']
  },
  secondary: {
    female: ['Implement safe transportation programs', 'Create community support networks', 'Provide flexible learning options'],
    male: ['Address economic pressures', 'Provide career guidance', 'Create behavioral support programs']
  },
  tertiary: {
    female: ['Implement early STEM exposure programs', 'Create mentorship networks', 'Provide career guidance'],
    male: ['Encourage diverse field exploration', 'Provide career counseling', 'Create inclusive learning environments']
  },
  workforce: {
    female: ['Implement pay transparency policies', 'Provide negotiation training', 'Create bias awareness programs'],
    male: ['Promote work-life balance', 'Encourage domestic responsibility sharing', 'Create inclusive workplace cultures']
  },
  leadership: {
    female: ['Implement sponsorship programs', 'Create leadership development initiatives', 'Provide work-life balance support'],
    male: ['Promote inclusive leadership training', 'Encourage diverse hiring practices', 'Create mentorship opportunities']
  }
};

return recommendations[stage][gender].map(rec => `<li>${rec}</li>`).join('');
}

// Get chart height for visualization
function getChartHeight(stage, gender) {
const heights = {
  birth: { female: 85, male: 90 },
  primary: { female: 80, male: 85 },
  secondary: { female: 70, male: 75 },
  tertiary: { female: 75, male: 70 },
  workforce: { female: 60, male: 80 },
  leadership: { female: 40, male: 75 }
};

return heights[stage][gender];
}

// Get chart label
function getChartLabel(stage, gender) {
const labels = {
  birth: { female: 'Potential Achievement', male: 'Potential Achievement' },
  primary: { female: 'Educational Progress', male: 'Educational Progress' },
  secondary: { female: 'Academic Success', male: 'Academic Success' },
  tertiary: { female: 'Higher Education', male: 'Higher Education' },
  workforce: { female: 'Career Success', male: 'Career Success' },
  leadership: { female: 'Leadership Achievement', male: 'Leadership Achievement' }
};

return labels[stage][gender];
}

// Update current stage and gender when navigating
function updateCurrentStage(stageIndex, gender) {
currentStage = stageIndex;
currentGender = gender;

// Update AI insights if sidebar is open
const sidebar = document.getElementById('ai-sidebar');
if (sidebar.classList.contains('open')) {
  updateAIInsights(currentStage, currentGender);
}
}

// Close modal when clicking outside
window.onclick = function(event) {
const modal = document.getElementById('data-modal');
if (event.target === modal) {
  modal.style.display = 'none';
}
}

// Chart.js Configuration and Data
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all charts
  initializeStoryCharts();
  initializeDataExplorer();
  initializeAIInsights();
  
  // Set up interactive controls
  setupStoryControls();
  setupDataControls();
  
  // Add smooth scrolling for navigation
  setupSmoothScrolling();
  
  // Add scroll animations
  setupScrollAnimations();
  
  // Initialize story progress
  initializeStoryProgress();

  // Regional Gender Equality Radar Charts
  function renderRegionalRadarChart(canvasId, dataArr) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Education', 'Workforce', 'Leadership'],
        datasets: [{
          label: 'Index',
          data: dataArr,
          backgroundColor: 'rgba(74, 108, 247, 0.15)',
          borderColor: '#4a6cf7',
          borderWidth: 2,
          pointBackgroundColor: '#4a6cf7',
          pointBorderColor: '#fff',
          pointRadius: 4,
        }]
      },
      options: {
        responsive: false,
        plugins: { legend: { display: false } },
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: { display: false },
            pointLabels: { font: { size: 13, weight: 'bold' } },
            grid: { color: '#e5e9f2' }
          }
        }
      }
    });
  }
  renderRegionalRadarChart('radar-europe', [92, 70, 55]);
  renderRegionalRadarChart('radar-asia', [88, 60, 35]);
  renderRegionalRadarChart('radar-africa', [75, 40, 20]);
  renderRegionalRadarChart('radar-america', [90, 65, 50]);

  // Live Data Counter for Child Marriages
  const childCounter = document.getElementById('child-marriage-counter');
  if (childCounter) {
    const daily = 33000;
    const msPerDay = 24 * 60 * 60 * 1000;
    const startOfDay = new Date();
    startOfDay.setHours(0,0,0,0);
    function updateCounter() {
      const now = new Date();
      const elapsed = now - startOfDay;
      const value = Math.floor((elapsed / msPerDay) * daily);
      childCounter.textContent = value.toLocaleString();
      requestAnimationFrame(updateCounter);
    }
    updateCounter();
  }

  // Crimes Against Women Counter (example: 137 women killed by a partner/family per day)
  const crimeCounter = document.getElementById('crime-counter');
  if (crimeCounter) {
    const daily = 137;
    const msPerDay = 24 * 60 * 60 * 1000;
    const startOfDay = new Date();
    startOfDay.setHours(0,0,0,0);
    function updateCrimeCounter() {
      const now = new Date();
      const elapsed = now - startOfDay;
      const value = Math.floor((elapsed / msPerDay) * daily);
      crimeCounter.textContent = value.toLocaleString();
      requestAnimationFrame(updateCrimeCounter);
    }
    updateCrimeCounter();
  }

  // Ticker Tape for Gender Equality Facts
  const ticker = document.getElementById('live-ticker-text');
  if (ticker) {
    const facts = [
      'Every year, 12 million girls are married before the age of 18.',
      'Women globally earn 16% less than men on average.',
      '130 million girls worldwide are out of school.',
      'Only 28% of managerial positions are held by women.',
      'Women spend 3x more time on unpaid care work than men.',
      '1 in 3 women experience gender-based violence in their lifetime.'
    ];
    let factIdx = 0;
    function updateTicker() {
      ticker.textContent = facts[factIdx];
      factIdx = (factIdx + 1) % facts.length;
    }
    updateTicker();
    setInterval(updateTicker, 4000);
  }

  // Placeholder: Animate the hero chart (optional, can be replaced with real data)
  const heroChart = document.getElementById('hero-animated-chart');
  if (heroChart && window.Chart) {
    new Chart(heroChart.getContext('2d'), {
      type: 'line',
      data: {
        labels: Array.from({length: 24}, (_, i) => `${i}:00`),
        datasets: [{
          label: 'Live Data Example',
          data: Array.from({length: 24}, () => Math.floor(Math.random()*100)),
          borderColor: '#ffd700',
          backgroundColor: 'rgba(255,215,0,0.15)',
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false, min: 0, max: 100 }
        },
        animation: { duration: 1200 }
      }
    });
  }

  // Live Reality Dashboard Counters
  const girlsMarried = document.getElementById('live-girls-married');
  if (girlsMarried) {
    const daily = 1267;
    const msPerDay = 24 * 60 * 60 * 1000;
    const startOfDay = new Date();
    startOfDay.setHours(0,0,0,0);
    function updateGirlsMarried() {
      const now = new Date();
      const elapsed = now - startOfDay;
      const value = Math.floor((elapsed / msPerDay) * daily);
      girlsMarried.textContent = value.toLocaleString();
      requestAnimationFrame(updateGirlsMarried);
    }
    updateGirlsMarried();
  }
  const payGap = document.getElementById('live-pay-gap');
  if (payGap) {
    let percent = 27;
    let direction = 1;
    setInterval(() => {
      percent += 0.01 * direction;
      if (percent > 28) direction = -1;
      if (percent < 26) direction = 1;
      payGap.textContent = percent.toFixed(2) + '%';
    }, 80);
  }
  const stem = document.getElementById('live-stem');
  if (stem) {
    let percent = 18.5;
    let direction = 1;
    setInterval(() => {
      percent += 0.003 * direction;
      if (percent > 19) direction = -1;
      if (percent < 18) direction = 1;
      stem.textContent = percent.toFixed(2) + '%';
    }, 120);
  }
  // Bias Timeline Child Marriages Counter
  const timelineMarriage = document.getElementById('timeline-child-marriage');
  if (timelineMarriage) {
    const daily = 978;
    const msPerDay = 24 * 60 * 60 * 1000;
    const startOfDay = new Date();
    startOfDay.setHours(0,0,0,0);
    function updateTimelineMarriage() {
      const now = new Date();
      const elapsed = now - startOfDay;
      const value = Math.floor((elapsed / msPerDay) * daily);
      timelineMarriage.textContent = value.toLocaleString();
      requestAnimationFrame(updateTimelineMarriage);
    }
    updateTimelineMarriage();
  }
});

// Story Journey Charts
function initializeStoryCharts() {
  // Birth Chart
  const birthCtx = document.getElementById('birthChart').getContext('2d');
  new Chart(birthCtx, {
      type: 'doughnut',
      data: {
          labels: ['Female', 'Male'],
          datasets: [{
              data: [47.2, 52.8],
              backgroundColor: ['#f093fb', '#667eea'],
              borderWidth: 0,
              cutout: '60%'
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              }
          },
          animation: {
              animateRotate: true,
              duration: 1500
          }
      }
  });

  // Education Chart
  const educationCtx = document.getElementById('educationChart').getContext('2d');
  new Chart(educationCtx, {
      type: 'bar',
      data: {
          labels: ['Primary', 'Secondary', 'Tertiary'],
          datasets: [{
              label: 'Female',
              data: [89.6, 76.0, 41.7],
              backgroundColor: '#f093fb',
              borderRadius: 8
          }, {
              label: 'Male',
              data: [89.0, 76.5, 36.9],
              backgroundColor: '#667eea',
              borderRadius: 8
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100,
                  grid: {
                      color: 'rgba(0,0,0,0.1)'
                  }
              },
              x: {
                  grid: {
                      display: false
                  }
              }
          }
      }
  });

  // Career Chart
  const careerCtx = document.getElementById('careerChart').getContext('2d');
  new Chart(careerCtx, {
      type: 'line',
      data: {
          labels: ['Entry', 'Mid', 'Senior', 'Executive'],
          datasets: [{
              label: 'Female',
              data: [46.9, 42.1, 38.5, 28.3],
              borderColor: '#f093fb',
              backgroundColor: 'rgba(240, 147, 251, 0.1)',
              borderWidth: 3,
              fill: true,
              tension: 0.4
          }, {
              label: 'Male',
              data: [72.2, 70.8, 69.2, 71.7],
              borderColor: '#667eea',
              backgroundColor: 'rgba(102, 126, 234, 0.1)',
              borderWidth: 3,
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100,
                  grid: {
                      color: 'rgba(0,0,0,0.1)'
                  }
              },
              x: {
                  grid: {
                      display: false
                  }
              }
          }
      }
  });

  // Leadership Chart
  const leadershipCtx = document.getElementById('leadershipChart').getContext('2d');
  new Chart(leadershipCtx, {
      type: 'radar',
      data: {
          labels: ['Management', 'Board', 'CEO', 'Politics', 'Academia'],
          datasets: [{
              label: 'Female Representation',
              data: [28.3, 22.6, 6.6, 25.5, 35.2],
              backgroundColor: 'rgba(240, 147, 251, 0.2)',
              borderColor: '#f093fb',
              borderWidth: 2,
              pointBackgroundColor: '#f093fb',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#f093fb'
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              r: {
                  beginAtZero: true,
                  max: 50,
                  ticks: {
                      display: false
                  },
                  grid: {
                      color: 'rgba(0,0,0,0.1)'
                  }
              }
          }
      }
  });
}

// Data Explorer Chart
let mainDataChart;
function initializeDataExplorer() {
  const ctx = document.getElementById('mainDataChart').getContext('2d');
  mainDataChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Phase I', 'Phase II', 'Phase III'],
          datasets: [{
              label: 'Female',
              data: [89.6, 76.0, 41.7],
              backgroundColor: '#f093fb',
              borderRadius: 8
          }, {
              label: 'Male',
              data: [89.0, 76.5, 36.9],
              backgroundColor: '#667eea',
              borderRadius: 8
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100,
                  grid: {
                      color: 'rgba(0,0,0,0.1)'
                  }
              },
              x: {
                  grid: {
                      display: false
                  }
              }
          }
      }
  });
}

// AI Insights Charts
function initializeAIInsights() {
  // Trend Analysis Chart
  const trendCtx = document.getElementById('trendChart').getContext('2d');
  new Chart(trendCtx, {
      type: 'line',
      data: {
          labels: ['2015', '2017', '2019', '2021', '2023'],
          datasets: [{
              label: 'Education Gap',
              data: [15, 12, 10, 8, 6],
              borderColor: '#f093fb',
              backgroundColor: 'rgba(240, 147, 251, 0.1)',
              borderWidth: 3,
              fill: true,
              tension: 0.4
          }, {
              label: 'Workforce Gap',
              data: [25, 26, 27, 28, 29],
              borderColor: '#667eea',
              backgroundColor: 'rgba(102, 126, 234, 0.1)',
              borderWidth: 3,
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  display: false
              },
              x: {
                  display: false
              }
          },
          elements: {
              point: {
                  radius: 0
              }
          }
      }
  });

  // Prediction Chart
  const predictionCtx = document.getElementById('predictionChart').getContext('2d');
  new Chart(predictionCtx, {
      type: 'doughnut',
      data: {
          labels: ['Current Gap', 'Predicted 2050', 'Predicted 2089'],
          datasets: [{
              data: [16, 8, 0],
              backgroundColor: ['#f5576c', '#f093fb', '#667eea'],
              borderWidth: 0,
              cutout: '60%'
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              }
          }
      }
  });

  // Intervention Chart
  const interventionCtx = document.getElementById('interventionChart').getContext('2d');
  new Chart(interventionCtx, {
      type: 'bar',
      data: {
          labels: ['Early Education', 'Workplace Policy', 'Leadership Training', 'Cultural Change'],
          datasets: [{
              label: 'ROI Score',
              data: [95, 78, 65, 45],
              backgroundColor: '#667eea',
              borderRadius: 8
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  max: 100,
                  display: false
              },
              x: {
                  display: false
              }
          }
      }
  });
}

// Story Controls
function setupStoryControls() {
  const journeyBtns = document.querySelectorAll('.journey-btn');
  const storyStages = document.querySelectorAll('.story-stage');
  
  journeyBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          const stage = this.getAttribute('data-stage');
          
          // Update active button
          journeyBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          
          // Update active stage
          storyStages.forEach(s => s.classList.remove('active'));
          document.querySelector(`[data-stage="${stage}"]`).classList.add('active');
          
          // Update story progress
          updateStoryProgress(stage);
      });
  });
}

// Data Controls
function setupDataControls() {
  const dataFocus = document.getElementById('dataFocus');
  const dataRegion = document.getElementById('dataRegion');
  
  const dataSets = {
      education: {
          title: 'Education Journey',
          description: 'Explore how educational opportunities differ between genders across different stages of learning.',
          keyFinding: 'Primary education enrollment is nearly equal globally, but gaps widen at higher levels.',
          aiPrediction: 'At current rates, gender parity in tertiary education will be achieved by 2035.',
          female: [89.6, 76.0, 41.7],
          male: [89.0, 76.5, 36.9]
      },
      workforce: {
          title: 'Workforce Participation',
          description: 'Discover patterns in labor force participation and the barriers women face in employment.',
          keyFinding: 'Women\'s labor force participation is 25 percentage points lower than men\'s globally.',
          aiPrediction: 'Without intervention, the workforce gap will widen by 3% by 2030.',
          female: [46.9, 42.1, 38.5],
          male: [72.2, 70.8, 69.2]
      },
      leadership: {
          title: 'Leadership Pipeline',
          description: 'Analyze the leadership gap and identify opportunities for women\'s advancement.',
          keyFinding: 'Women hold only 28.3% of managerial positions globally.',
          aiPrediction: 'At current rates, gender parity in leadership will take 136 years to achieve.',
          female: [28.3, 25.1, 22.8],
          male: [71.7, 74.9, 77.2]
      },
      paygap: {
          title: 'Pay Equity',
          description: 'Examine the gender pay gap and its persistence across different sectors and regions.',
          keyFinding: 'Women earn 84 cents for every dollar earned by men globally.',
          aiPrediction: 'The pay gap will close by 2089 without intervention, or by 2050 with targeted policies.',
          female: [84, 82, 80],
          male: [100, 100, 100]
      }
  };
  
  dataFocus.addEventListener('change', function() {
      updateDataExplorer(dataSets[this.value]);
  });
  
  dataRegion.addEventListener('change', function() {
      updateRegionalData(this.value);
  });
}

function updateDataExplorer(dataSet) {
  mainDataChart.data.datasets[0].data = dataSet.female;
  mainDataChart.data.datasets[1].data = dataSet.male;
  mainDataChart.update();
  
  document.getElementById('chartTitle').textContent = dataSet.title;
  document.getElementById('chartDescription').textContent = dataSet.description;
  document.getElementById('keyFinding').textContent = dataSet.keyFinding;
  document.getElementById('aiPrediction').textContent = dataSet.aiPrediction;
}

function updateRegionalData(region) {
  const regionData = {
      global: { education: 89.6, workforce: 46.9, leadership: 28.3 },
      europe: { education: 92, workforce: 65, leadership: 35 },
      asia: { education: 88, workforce: 58, leadership: 28 },
      africa: { education: 82, workforce: 45, leadership: 22 },
      americas: { education: 90, workforce: 52, leadership: 31 }
  };
  
  if (regionData[region]) {
      const data = regionData[region];
      const avgScore = Math.round((data.education + data.workforce + data.leadership) / 3);
      
      // Update insights with regional data
      document.getElementById('keyFinding').textContent = 
          `${region.charAt(0).toUpperCase() + region.slice(1)} shows ${avgScore}% average gender equality score.`;
  }
}

// Story Progress
function initializeStoryProgress() {
  updateStoryProgress(0);
}

function updateStoryProgress(stage) {
  const progress = document.getElementById('story-progress');
  const progressPercent = (parseInt(stage) + 1) * 25;
  progress.style.width = progressPercent + '%';
}

// Begin Story Function
function beginStory() {
  const hero = document.querySelector('.hero');
  const storySection = document.getElementById('story');
  
  // Smooth scroll to story section
  storySection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
  });
  
  // Add animation to hero
  hero.style.transform = 'translateY(-20px)';
  hero.style.opacity = '0.8';
  
  setTimeout(() => {
      hero.style.transform = '';
      hero.style.opacity = '';
  }, 1000);
}

// Smooth Scrolling
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
              targetSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
}

// Scroll Animations
function setupScrollAnimations() {
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, observerOptions);
  
  // Only animate cards and insights, not story-stage
  const animatedElements = document.querySelectorAll('.category-card, .ai-insight, .resource-card');
  animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
  });
}

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects to cards
  const cards = document.querySelectorAll('.category-card, .ai-insight, .resource-card');
  cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
      });
  });
  
  // Add click effects to buttons
  const buttons = document.querySelectorAll('.cta-btn, .data-select, .journey-btn');
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          this.style.transform = 'scale(0.95)';
          setTimeout(() => {
              this.style.transform = '';
          }, 150);
      });
  });
  
  // Character hover effects
  const characters = document.querySelectorAll('.character');
  characters.forEach(character => {
      character.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.1) translateY(-5px)';
      });
      
      character.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1) translateY(0)';
      });
  });
});

// Add loading animation
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
      document.body.style.opacity = '1';
  }, 100);
});

// Add scroll-based navigation highlighting
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id');
      }
  });
  
  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
      }
  });
});

// Add typing effect for story text
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
      if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
      }
  }
  
  type();
}

// --- Update stageData with unified keys ---
const stageData = {
    birth: {
        maya: { percentage: 100, description: "Full of potential and wonder" },
        noah: { percentage: 100, description: "Curious and eager to learn" },
        comic: [
            { rageImg: "assets/images/birth.png" }
        ],
        tagline: "Every great journey starts with a single breath"
    },
    primary: {
        maya: { percentage: 82, description: "Eager to learn and grow" },
        noah: { percentage: 80, description: "Building strong foundations" },
        comic: [
            { rageImg: "assets/images/primary.png" }
        ],
        tagline: "Primary school opens new worlds"
    },
    secondary: {
        maya: { percentage: 65, description: "Facing new challenges" },
        noah: { percentage: 70, description: "Exploring interests" },
        comic: [
            { rageImg: "assets/images/secondary.png" }
        ],
        tagline: "Secondary school shapes ambitions"
    },
    tertiary: {
        maya: { percentage: 54, description: "Pursuing higher education" },
        noah: { percentage: 60, description: "Preparing for the future" },
        comic: [
            { rageImg: "assets/images/teritory.png" }
        ],
        tagline: "Tertiary education unlocks potential"
    },
    firstjob: {
        maya: { percentage: 32, description: "Breaking into the workforce" },
        noah: { percentage: 65, description: "Starting a career" },
        comic: [
            { rageImg: "assets/images/first-job.png" }
        ],
        tagline: "First job, first big step"
    },
    career: {
        maya: { percentage: 21, description: "Fighting for equal opportunities" },
        noah: { percentage: 70, description: "Climbing the career ladder" },
        comic: [
            { rageImg: "assets/images/career.png" }
        ],
        tagline: "Career defines our contribution to society"
    }
};

// --- Update updateStage to use new keys and update both journey buttons and stage dots ---
function updateStage(stageName) {
    const data = stageData[stageName];
    if (!data) return;
    document.getElementById('maya-percentage').textContent = data.maya.percentage + '%';
    document.getElementById('noah-percentage').textContent = data.noah.percentage + '%';
    document.getElementById('maya-description').textContent = data.maya.description;
    document.getElementById('noah-description').textContent = data.noah.description;
    const comicContent = document.getElementById('comic-content');
    comicContent.innerHTML = '';
    // Only show the first rage comic image for the stage
    if (data.comic && data.comic.length > 0) {
        const scene = data.comic[0];
        const sceneDiv = document.createElement('div');
        sceneDiv.className = 'comic-scene';
        sceneDiv.innerHTML = `
            <img src="${scene.rageImg}" alt="rage comic" class="rage-img" style="display:block; margin:0 auto; max-width:100%; max-height:220px; border-radius:12px; box-shadow:0 2px 8px #0001;" />
        `;
        comicContent.appendChild(sceneDiv);
    }
    document.getElementById('tagline').textContent = data.tagline;
    // updateCharacterFill('maya', data.maya.percentage);
    // updateCharacterFill('noah', data.noah.percentage);
    updateChartBoy(data.noah.percentage);
    updateChartGirl(data.maya.percentage);
    document.querySelectorAll('.journey-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.stage-dot').forEach(dot => dot.classList.remove('active'));
    const btn = document.querySelector(`.journey-btn[data-stage="${stageName}"]`);
    if (btn) btn.classList.add('active');
    const dot = document.querySelector(`.stage-dot[data-stage="${stageName}"]`);
    if (dot) dot.classList.add('active');
}

// --- Update event listeners for journey buttons and stage dots ---
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.journey-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const stage = this.getAttribute('data-stage');
            updateStage(stage);
        });
    });
    document.querySelectorAll('.stage-dot').forEach(dot => {
        dot.addEventListener('click', function() {
            const stage = this.getAttribute('data-stage');
            updateStage(stage);
        });
    });
    // --- Initialize with birth stage ---
    updateStage('birth');
});

function updateCharacterFill(character, percentage) {
    const fillOffset = (100 - percentage) + '%';
    const gradient = document.getElementById(`${character}-gradient`);
    const stops = gradient.querySelectorAll('stop');
    
    // Update the gradient stops
    stops[0].setAttribute('offset', '0%');
    stops[1].setAttribute('offset', fillOffset);
    stops[2].setAttribute('offset', fillOffset);
    stops[3].setAttribute('offset', '100%');
}

// ---------------- Chatbox Demo ----------------
document.addEventListener('DOMContentLoaded', () => {
  const chatToggle = document.getElementById('chat-toggle');
  const chatbox = document.getElementById('chatbox');
  const chatClose = document.getElementById('chat-close');
  const messages = document.getElementById('chat-messages');

  if (!chatToggle || !chatbox) return; // safety

  const qa = {
    'What is gender equality?': 'Gender equality means that women, men and non-binary people have equal rights, responsibilities and opportunities. It does not mean everyone is the same – it means that access to life opportunities is not limited by gender.',
    'Show me global stats': 'Globally, women hold about 28% of managerial positions and earn roughly 84¢ for every dollar earned by men. In education, 89.6% of girls are enrolled in primary school.',
    'How can I help?': 'You can mentor girls in STEM, advocate for equal pay, support inclusive policies and share data to raise awareness.'
  };

  function addMessage(text, sender = 'user') {
    const div = document.createElement('div');
    div.className = `chat-message ${sender}`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  // Attach click listeners to sample buttons
  document.querySelectorAll('.sample-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.textContent;
      addMessage(q, 'user');
      setTimeout(() => addMessage(qa[q] || 'Thanks for reaching out!', 'bot'), 400);
    });
  });

  chatToggle.addEventListener('click', () => {
    chatbox.classList.add('open');
    chatToggle.style.display = 'none';
  });

  chatClose.addEventListener('click', () => {
    chatbox.classList.remove('open');
    chatToggle.style.display = 'block';
  });
});

// Smooth scroll from Begin button to story section
const beginBtn = document.querySelector('.begin-btn');
const storySection = document.getElementById('story');
if (beginBtn && storySection) {
  beginBtn.addEventListener('click', () => {
    storySection.scrollIntoView({ behavior: 'smooth' });
  });
}


// equality code
const chartConfig = {
  type: 'radar',
  options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          r: {
              beginAtZero: true,
              max: 100,
              ticks: {
                  display: false,
                  stepSize: 20
              },
              grid: {
                  color: 'rgba(142, 154, 175, 0.2)',
                  lineWidth: 1
              },
              angleLines: {
                  color: 'rgba(142, 154, 175, 0.2)',
                  lineWidth: 1
              },
              pointLabels: {
                  font: {
                      size: 11,
                      weight: '500',
                      family: 'Inter'
                  },
                  color: '#8e9aaf',
                  padding: 15
              }
          }
      },
      plugins: {
          legend: {
              display: false
          },
          tooltip: {
              backgroundColor: 'rgba(44, 62, 80, 0.9)',
              bodyColor: '#ffffff',
              bodyFont: {
                  family: 'Inter',
                  size: 12
              },
              cornerRadius: 6,
              displayColors: false,
              callbacks: {
                  label: function(context) {
                      return context.parsed.r + '%';
                  }
              }
          }
      },
      elements: {
          line: {
              borderWidth: 2,
              tension: 0.1
          },
          point: {
              radius: 4,
              hoverRadius: 6,
              borderWidth: 2,
              borderColor: '#ffffff'
          }
      },
      interaction: {
          intersect: false
      }
  }
};

// Data for each region with exact values from the image
const regions = [
  {
      id: 'chart1',
      data: [92, 65, 35],
      color: 'rgba(79, 124, 255, 0.15)',
      borderColor: '#4f7cff'
  },
  {
      id: 'chart2',
      data: [88, 58, 28],
      color: 'rgba(79, 124, 255, 0.15)',
      borderColor: '#4f7cff'
  },
  {
      id: 'chart3',
      data: [82, 45, 22],
      color: 'rgba(79, 124, 255, 0.15)',
      borderColor: '#4f7cff'
  },
  {
      id: 'chart4',
      data: [90, 52, 31],
      color: 'rgba(79, 124, 255, 0.15)',
      borderColor: '#4f7cff'
  }
];

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  regions.forEach(region => {
      const ctx = document.getElementById(region.id);
      if (ctx) {
          new Chart(ctx.getContext('2d'), {
              ...chartConfig,
              data: {
                  labels: ['Education', 'Workforce', 'Leadership'],
                  datasets: [{
                      data: region.data,
                      backgroundColor: region.color,
                      borderColor: region.borderColor,
                      pointBackgroundColor: region.borderColor,
                      pointBorderColor: '#ffffff',
                      pointBorderWidth: 2
                  }]
              }
          });
      }
  });

  // Add smooth entrance animations
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
          card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
      }, index * 100);
  });
});

// Handle window resize to ensure charts remain responsive
window.addEventListener('resize', function() {
  // Chart.js handles resize automatically, but we can add custom logic here if needed
  setTimeout(() => {
      Chart.instances.forEach(chart => {
          chart.resize();
      });
  }, 100);
});




//equality code

const regions1 = [
  {
      id: 'chart1',
      data: [92, 65, 35],
      color: 'rgba(79, 124, 255, 0.15)',
      borderColor: '#4f7cff'
  },
  {
      id: 'chart2',
      data: [88, 58, 28],
      color: 'rgba(79, 124, 255, 0.15)',
      borderColor: '#4f7cff'
  },
  {
      id: 'chart3',
      data: [82, 45, 22],
      color: 'rgba(79, 124, 255, 0.15)',
      borderColor: '#4f7cff'
  },
  {
      id: 'chart4',
      data: [90, 52, 31],
      color: 'rgba(79, 124, 255, 0.15)',
      borderColor: '#4f7cff'
  }
];

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  regions1.forEach(region => {
      const ctx = document.getElementById(region.id);
      if (ctx) {
          new Chart(ctx.getContext('2d'), {
              ...chartConfig,
              data: {
                  labels: ['Education', 'Workforce', 'Leadership'],
                  datasets: [{
                      data: region.data,
                      backgroundColor: region.color,
                      borderColor: region.borderColor,
                      pointBackgroundColor: region.borderColor,
                      pointBorderColor: '#ffffff',
                      pointBorderWidth: 2
                  }]
              }
          });
      }
  });

  // Add smooth entrance animations
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
          card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
      }, index * 100);
  });
});

// Handle window resize to ensure charts remain responsive
window.addEventListener('resize', function() {
  setTimeout(() => {
      Chart.instances.forEach(chart => {
          chart.resize();
      });
  }, 100);
});



