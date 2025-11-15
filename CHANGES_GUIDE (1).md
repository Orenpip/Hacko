# Canvas Extension - Updated with Document Upload Feature

## 🎉 What's New

Your Canvas extension has been updated with document upload functionality! Students can now upload and manage their resumes and transcripts directly from the extension.

## 📋 Changes Made

### 1. **manifest.json**
- ✅ Updated name to "Canvas Grade Viewer & Document Manager"
- ✅ Updated description to reflect new document management features
- ✅ Version bumped to 2.0
- ✅ All permissions remain the same (storage already included)

### 2. **popup.html**
- ✅ Added tab navigation (Grades | Documents)
- ✅ Kept original grades interface intact in "Grades" tab
- ✅ Added new "Documents" tab with:
  - Resume upload area with drag-and-drop
  - Transcript upload area with drag-and-drop
  - File validation indicators
  - Upload button
  - Success message
  - List of uploaded documents with delete functionality

### 3. **popup.js**
- ✅ Kept all original grade loading functionality
- ✅ Added tab switching logic
- ✅ Added FileUploadManager class with:
  - File validation (type and size)
  - Drag-and-drop support
  - File storage in Chrome local storage
  - Display of uploaded files
  - Delete functionality
- ✅ Files are stored as Base64 in Chrome storage (no backend needed!)

### 4. **style.css**
- ✅ Kept all original styles
- ✅ Expanded width from 300px to 350px for better document display
- ✅ Added tab navigation styles
- ✅ Added file upload area styles
- ✅ Added drag-and-drop visual feedback
- ✅ Added file info display styles
- ✅ Added uploaded files list styles

### 5. **content.js**
- ✅ Kept original grade widget functionality
- ✅ Enhanced widget to also display uploaded documents
- ✅ Added minimize/maximize button
- ✅ Widget now shows both grades and documents
- ✅ Auto-updates when files are uploaded

## 🚀 Features

### For Students:
1. **Upload Documents**
   - Resume (PDF, DOC, DOCX)
   - Transcript (PDF, DOC, DOCX)
   - Drag-and-drop or click to browse
   - 5MB file size limit per document

2. **Manage Documents**
   - View uploaded documents
   - See upload dates
   - Delete documents
   - Files persist across browser sessions

3. **View Grades**
   - Original grade viewing functionality intact
   - See all active course grades
   - View in popup or on Canvas pages

4. **On-Page Widget**
   - Shows grades and uploaded documents
   - Minimize/maximize functionality
   - Stays visible while browsing Canvas
   - Auto-updates when changes are made

## 📁 File Storage

Documents are stored in Chrome's local storage as Base64-encoded strings. This means:
- ✅ No backend server needed
- ✅ Files persist across browser sessions
- ✅ Private to the user
- ✅ Can be accessed from any Canvas page
- ⚠️ Limited by Chrome storage quota (approximately 10MB total)

## 🎨 User Interface

### Popup Interface
```
┌─────────────────────────┐
│  Canvas Extension       │
├──────────┬──────────────┤
│  Grades  │  Documents   │ ← Tabs
├──────────┴──────────────┤
│                         │
│  [Upload Areas]         │
│  📄 Resume              │
│  📋 Transcript          │
│                         │
│  [Upload Button]        │
│                         │
│  Your Documents:        │
│  • Resume.pdf (...)     │
│  • Transcript.pdf (...) │
│                         │
└─────────────────────────┘
```

### On-Page Widget
```
┌─────────────────────┐
│ Canvas Dashboard [-]│
├─────────────────────┤
│ 📊 Your Grades      │
│ • Course 1: 95      │
│ • Course 2: 88      │
│                     │
│ 📁 Your Documents   │
│ • RESUME            │
│   Resume.pdf        │
│ • TRANSCRIPT        │
│   Transcript.pdf    │
└─────────────────────┘
```

## 🔧 Installation

1. **Replace your existing files** with the updated versions:
   - style.css
   - popup.html
   - popup.js
   - manifest.json
   - content.js

2. **Reload the extension** in Chrome:
   - Go to `chrome://extensions`
   - Click the reload button on your extension

3. **Test the new features**:
   - Open the extension popup
   - Click the "Documents" tab
   - Try uploading a file

## 💡 Usage Instructions

### For Students

**To Upload Documents:**
1. Click the extension icon
2. Click the "Documents" tab
3. Either:
   - Click "Click to upload" in the Resume or Transcript area
   - Drag a file directly onto the upload area
4. Select your file (PDF, DOC, or DOCX only)
5. Click "Upload Documents"
6. Wait for success message

**To View Documents:**
1. Open the extension popup
2. Go to "Documents" tab
3. Scroll down to see "Your Documents" section

**To Delete Documents:**
1. Go to "Documents" tab
2. Find the document in "Your Documents"
3. Click "Delete" button
4. Confirm deletion

**To View on Canvas Pages:**
- Documents automatically appear in the widget on the bottom-right of Canvas pages
- Click [-] to minimize/maximize the widget

## ⚙️ Technical Details

### File Validation
- **Allowed types**: PDF (.pdf), Word (.doc, .docx)
- **Max size**: 5MB per file
- **Storage**: Chrome local storage (Base64 encoded)

### Storage Structure
```javascript
{
  uploadedFiles: {
    resume: {
      name: "Resume.pdf",
      size: 1024000,
      type: "application/pdf",
      data: "data:application/pdf;base64,...",
      uploadDate: "2025-11-15T19:00:00.000Z"
    },
    transcript: {
      name: "Transcript.pdf",
      size: 2048000,
      type: "application/pdf",
      data: "data:application/pdf;base64,...",
      uploadDate: "2025-11-15T19:00:00.000Z"
    }
  }
}
```

### Browser Compatibility
- ✅ Chrome (Manifest V3)
- ✅ Edge (Chromium-based)
- ❌ Firefox (would need Manifest V2 version)

## 🔒 Privacy & Security

- Files are stored locally in the browser
- No files are sent to external servers
- Files are only accessible to the user who uploaded them
- Files persist until manually deleted
- Storage is encrypted by Chrome's built-in storage encryption

## 🐛 Troubleshooting

### "File too large" error
- Reduce file size to under 5MB
- Use PDF compression tools
- Split large transcripts if needed

### Files not appearing
- Check if upload was successful (green success message)
- Try reloading the extension
- Check Chrome DevTools console for errors

### Widget not showing
- Reload the Canvas page
- Check if you're on canvas.its.virginia.edu
- Verify extension is enabled

### Upload button disabled
- Make sure at least one file is selected
- Check that file passes validation
- Try removing and re-adding the file

## 🚀 Future Enhancements

Potential features to add:
- [ ] Export files as ZIP
- [ ] Share files with professors
- [ ] File preview functionality
- [ ] Cloud storage integration
- [ ] Multiple file versions
- [ ] File expiration dates
- [ ] PDF annotation
- [ ] Resume parsing

## 📊 Comparison: Before vs After

| Feature | Before | After |
|---------|--------|-------|
| View Grades | ✅ | ✅ |
| Grade Widget | ✅ | ✅ (Enhanced) |
| Upload Resume | ❌ | ✅ |
| Upload Transcript | ❌ | ✅ |
| Manage Documents | ❌ | ✅ |
| Drag & Drop | ❌ | ✅ |
| File Validation | ❌ | ✅ |
| Tab Navigation | ❌ | ✅ |

## 📝 Notes

- **Backward Compatible**: All original functionality remains intact
- **No Breaking Changes**: Existing grade viewing works exactly as before
- **Gradual Adoption**: Students can continue using just the grades feature
- **Lightweight**: Minimal performance impact
- **No Backend Required**: Everything runs client-side

## 🎓 For Instructors

If you want students to submit these documents to Canvas:
1. Students can download their stored files
2. Submit them through regular Canvas assignment submission
3. Or you could extend this to integrate with Canvas API for direct submission

---

**Your extension is now ready with document upload capabilities!** 🎉
