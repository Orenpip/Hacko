# NEW FEATURES GUIDE - Preferences & Course Data Scraping

## 🎉 What's Been Added

Your Canvas extension now includes THREE powerful new features:

### 1. ✅ Career Preferences Tab
Students can set their job search preferences including:
- Work location (Remote/In-Person/Hybrid/Flexible)
- Position type (Internship/Full-Time/Part-Time/Co-op/Contract)
- General interests (Software Development, Data Science, AI/ML, etc.)
- Preferred industries (Technology, Finance, Healthcare, etc.)
- Custom interests (free text)

### 2. ✅ Course Data Scraping
Automatically scrape and store ALL Canvas course data including:
- Past and present courses
- Course descriptions
- Grades (current and final)
- Credits
- Terms/semesters
- Teachers
- Assignment counts
- Enrollment states

### 3. ✅ Enhanced Dashboard Widget
The on-page widget now displays:
- Current grades
- Scraped course statistics (total courses, credits, average grade)
- Career preferences summary
- Uploaded documents

---

## 📋 Updated File Structure

### Extension Files (Download These!)
- **[popup.html](computer:///mnt/user-data/outputs/popup.html)** - Now with 3 tabs (Grades | Preferences | Documents)
- **[popup.js](computer:///mnt/user-data/outputs/popup.js)** - Added preferences and scraping logic
- **[style.css](computer:///mnt/user-data/outputs/style.css)** - Added preference form styles
- **[content.js](computer:///mnt/user-data/outputs/content.js)** - Enhanced widget with all data
- **[manifest.json](computer:///mnt/user-data/outputs/manifest.json)** - No changes needed

---

## 🎯 Feature Details

### Preferences Tab

**Work Location Options:**
- Remote
- In-Person
- Hybrid
- Flexible

**Position Types:**
- Internship
- Full-Time Job
- Part-Time Job
- Co-op
- Contract

**General Interests (Checkboxes):**
- Software Development
- Data Science
- AI/Machine Learning
- Web Development
- Mobile Development
- Cybersecurity
- Cloud Computing
- DevOps
- Product Management
- UI/UX Design

**Preferred Industries (Checkboxes):**
- Technology
- Finance
- Healthcare
- Education
- Consulting
- Startup

**Custom Interests:**
- Free text field for any additional interests

---

### Course Data Scraping

**What Gets Scraped:**

For each course:
```javascript
{
  id: 12345,
  name: "Introduction to Computer Science",
  courseCode: "CS 1110",
  description: "Course description from syllabus...",
  grade: 95.5,
  finalGrade: 94.0,
  letterGrade: "A",
  credits: 3,
  term: "Fall 2024",
  startDate: "2024-08-20",
  endDate: "2024-12-15",
  enrollmentState: "completed",
  assignmentCount: 15,
  teachers: "Prof. Smith, Prof. Johnson"
}
```

**Summary Statistics:**
- Total number of courses
- Total credits earned
- Average grade across all courses
- Last updated timestamp

**How It Works:**
1. Click "📚 Scrape Course Data" button in Grades tab
2. Extension fetches all courses from Canvas API
3. For each course, fetches detailed information including:
   - Course details and syllabus
   - Assignments
   - Grades
   - Teachers
4. Calculates statistics
5. Saves everything to Chrome storage
6. Shows summary

**Processing Time:**
- ~100ms per course (to avoid rate limiting)
- For 30 courses: ~3 seconds
- For 60 courses: ~6 seconds

---

## 💾 Data Storage

All data is stored in Chrome's local storage:

```javascript
{
  // Existing
  token: "canvas_api_token",
  uploadedFiles: { resume: {...}, transcript: {...} },
  
  // NEW!
  userPreferences: {
    workLocation: "remote",
    positionType: "internship",
    generalInterests: ["software-development", "ai-ml"],
    preferredIndustries: ["technology", "startup"],
    customInterests: "blockchain, IoT",
    lastUpdated: "2025-11-15T19:00:00.000Z"
  },
  
  scrapedCourseData: {
    courses: [...], // Array of all course objects
    totalCredits: 120,
    averageGrade: 93.5,
    lastUpdated: "2025-11-15T19:00:00.000Z",
    coursesCount: 40
  }
}
```

---

## 🎨 User Interface

### Tab Navigation
```
┌─────────────────────────────────┐
│  Grades | Preferences | Documents│
└─────────────────────────────────┘
```

### Grades Tab
```
┌─────────────────────────┐
│ [Token Input]           │
│ [Save Token]            │
│                         │
│ Current Grades:         │
│ • CS 1110: 95           │
│ • MATH 1320: 88         │
│                         │
│ [📚 Scrape Course Data] │
│                         │
│ ✓ 40 courses scraped    │
│ Total Credits: 120      │
│ Average Grade: 93.5%    │
└─────────────────────────┘
```

### Preferences Tab
```
┌─────────────────────────┐
│ Work Location           │
│ [Dropdown: Remote]      │
│                         │
│ Position Type           │
│ [Dropdown: Internship]  │
│                         │
│ General Interests       │
│ ☑ Software Development  │
│ ☑ AI/Machine Learning   │
│ ☐ Data Science          │
│ ...                     │
│                         │
│ [Save Preferences]      │
└─────────────────────────┘
```

### Enhanced Widget
```
┌─────────────────────┐
│ Canvas Dashboard [-]│
├─────────────────────┤
│ 📊 Current Grades   │
│ • CS 1110: 95       │
│ • MATH 1320: 88     │
│                     │
│ 📚 Course Data      │
│ 40 total courses    │
│ 120 total credits   │
│ 93.5% average grade │
│                     │
│ 🎯 Career Prefs     │
│ Location: Remote    │
│ Type: Internship    │
│ Interests: AI/ML... │
│                     │
│ 📁 Documents        │
│ RESUME: Resume.pdf  │
│ TRANSCRIPT: ...     │
└─────────────────────┘
```

---

## 🚀 How to Use

### Setting Preferences

1. **Open extension** popup
2. **Click "Preferences"** tab
3. **Select your preferences:**
   - Choose work location from dropdown
   - Choose position type from dropdown
   - Check boxes for interests
   - Check boxes for industries
   - Add custom interests in text area
4. **Click "Save Preferences"**
5. See success message

### Scraping Course Data

1. **Make sure** you have a valid Canvas API token saved
2. **Open extension** popup
3. **Stay on "Grades"** tab
4. **Click "📚 Scrape Course Data"** button
5. **Wait** while it fetches data (a few seconds)
6. **See summary** of scraped data:
   - Number of courses
   - Total credits
   - Average grade
   - Last updated time

### Viewing in Widget

1. **Navigate** to any Canvas page
2. **Look** for widget in bottom-right corner
3. **See all data** displayed:
   - Current grades
   - Course statistics (if scraped)
   - Preferences (if set)
   - Documents (if uploaded)
4. **Click [-]** to minimize
5. **Click [+]** to maximize

---

## 📊 Data Export

All scraped data can be accessed programmatically:

```javascript
// Get scraped course data
chrome.storage.local.get('scrapedCourseData', (data) => {
  const courses = data.scrapedCourseData.courses;
  courses.forEach(course => {
    console.log(`${course.name}: ${course.grade}`);
  });
});

// Get preferences
chrome.storage.local.get('userPreferences', (data) => {
  console.log(data.userPreferences);
});
```

---

## ⚙️ Technical Details

### API Calls for Scraping

For each scrape operation:
1. `GET /api/v1/courses` - Fetch all courses
2. For each course:
   - `GET /api/v1/courses/{id}` - Get details
   - `GET /api/v1/courses/{id}/assignments` - Get assignments
3. Process and calculate statistics
4. Save to storage

**Rate Limiting Protection:**
- 100ms delay between course fetches
- Prevents Canvas API rate limit issues
- Ensures reliable scraping

### Storage Limits

Chrome storage limits:
- **sync storage**: 100 KB (for API token)
- **local storage**: ~10 MB (for everything else)

Estimated storage usage:
- Preferences: ~1 KB
- Course data (40 courses): ~50 KB
- Documents (2 files): ~8-10 MB

---

## 🎓 Use Cases

### For Students

**Job Applications:**
- Set preferences once
- Use scraped course data to:
  - List relevant coursework
  - Show GPA/grades
  - Demonstrate skills

**Career Planning:**
- Track interests over time
- See how courses align with goals
- Identify skill gaps

**Academic Tracking:**
- Monitor overall GPA
- See total credits
- Review past courses

---

## 🔧 Customization

### Adding New Interests

Edit popup.html to add more checkboxes:

```html
<div class="interest-item">
  <input type="checkbox" id="your-interest" value="your-value">
  <label for="your-interest">Your Interest Name</label>
</div>
```

### Adding New Industries

Same pattern as interests:

```html
<div class="interest-item">
  <input type="checkbox" id="industry-name" value="industry-value">
  <label for="industry-name">Industry Name</label>
</div>
```

### Changing Scrape Delay

In popup.js, line ~250:

```javascript
// Change from 100ms to your preferred delay
await new Promise(resolve => setTimeout(resolve, 100));
```

---

## 🐛 Troubleshooting

### Scraping Issues

**"No API token found"**
- Save your Canvas API token first in Grades tab

**"Failed to fetch courses"**
- Check if token is still valid
- Verify you're connected to internet
- Token might have expired - generate new one

**Scraping is slow**
- Normal! Takes ~100ms per course
- For 40 courses: ~4 seconds
- Don't close popup while scraping

**Some courses missing data**
- Some courses may not have all information
- Extension still saves basic info
- Check Canvas if course is archived

### Preferences Issues

**Checkboxes not saving**
- Make sure to click "Save Preferences"
- Check browser console for errors
- Reload extension

**Preferences not showing in widget**
- Widget updates when storage changes
- Try reloading Canvas page
- Check if preferences were actually saved

---

## 📈 Future Enhancements

Potential additions:
- [ ] Export course data to CSV
- [ ] Filter courses by term/year
- [ ] Visualize grade trends
- [ ] Job recommendations based on preferences
- [ ] Course recommendations
- [ ] Skill gap analysis
- [ ] Resume auto-generation from course data
- [ ] Cover letter template using preferences

---

## 🎯 Summary

**New Capabilities:**
1. ✅ Set career preferences (location, type, interests)
2. ✅ Scrape all Canvas course data automatically
3. ✅ View everything in enhanced dashboard widget
4. ✅ All data stored locally in browser
5. ✅ No backend server required

**Updated Files:**
- popup.html (3 tabs now)
- popup.js (preferences + scraping)
- style.css (new form styles)
- content.js (enhanced widget)

**Ready to use!** 🚀
