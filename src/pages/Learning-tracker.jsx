function LearningTracker() {
  return (
    <div className="learning-tracker">
      <div className="tracker-header">
        <h1>My Learning Journey</h1>
        <p>Last 20 Days - Web Development Cohort</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      <div className="learning-timeline">
        
        {/* Week 1 */}
        <div className="week-section">
          <h2>Week 1: JavaScript Fundamentals</h2>
          <div className="topic-cards">
            <div className="topic-card completed">
              <h3>JS Basics</h3>
              <p>Variables, functions, and basic syntax</p>
            </div>
            <div className="topic-card completed">
              <h3>Arrays & Methods</h3>
              <p>Array manipulation, iteration, and built-in methods</p>
            </div>
            <div className="topic-card completed">
              <h3>Objects</h3>
              <p>Object creation, properties, and methods</p>
            </div>
            <div className="topic-card completed">
              <h3>Strings & Methods</h3>
              <p>String manipulation and processing techniques</p>
            </div>
          </div>
        </div>

        {/* Week 2 */}
        <div className="week-section">
          <h2>Week 2: Frontend Foundations</h2>
          <div className="topic-cards">
            <div className="topic-card completed">
              <h3>HTML Structure</h3>
              <p>Semantic elements, forms, and page structure</p>
            </div>
            <div className="topic-card completed">
              <h3>CSS Styling</h3>
              <p>Layouts, flexbox, styling, and responsive design</p>
            </div>
          </div>
        </div>

        {/* Week 3 */}
        <div className="week-section">
          <h2>Week 3: React Fundamentals</h2>
          <div className="topic-cards">
            <div className="topic-card completed">
              <h3>React with Vite</h3>
              <p>Project setup and development environment</p>
            </div>
            <div className="topic-card completed">
              <h3>React Hooks</h3>
              <p>useState, useEffect, and hook patterns</p>
            </div>
            <div className="topic-card completed">
              <h3>Higher Order Components</h3>
              <p>Component composition and reusability</p>
            </div>
          </div>
        </div>

        {/* Current Week */}
        <div className="week-section">
          <h2>Week 4: Advanced React Concepts</h2>
          <div className="topic-cards">
            <div className="topic-card completed">
              <h3>Prop Drilling</h3>
              <p>Understanding component data flow challenges</p>
            </div>
            <div className="topic-card completed">
              <h3>useContext Hook</h3>
              <p>State management across component tree</p>
            </div>
            <div className="topic-card completed">
              <h3>Context Provider</h3>
              <p>Creating and managing global state</p>
            </div>
            <div className="topic-card completed">
              <h3>Children Prop</h3>
              <p>Component composition patterns</p>
            </div>
          </div>
        </div>

      </div>

      <div className="stats-section">
        <div className="stat-card">
          <h3>16</h3>
          <p>Topics Mastered</p>
        </div>
        <div className="stat-card">
          <h3>4</h3>
          <p>Weeks Completed</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Current Progress</p>
        </div>
      </div>
    </div>
  )
}

export default LearningTracker