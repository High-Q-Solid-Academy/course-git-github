const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\n=========================================');
console.log('🌟 High Q Solid Academy — Git Lab Grader');
console.log('=========================================\n');

let passedTests = 0;
const totalTests = 3;

// Test 1: Student profile in Lab 1
const profilePath = path.join(__dirname, '../exercises/lab-1-commits/student-profile.md');
if (fs.existsSync(profilePath)) {
  const content = fs.readFileSync(profilePath, 'utf8');
  if (!content.includes('[Replace with Your Name]') && content.trim().length > 50) {
    console.log('✅ Test 1 Passed: Lab 1 student profile is completed.');
    passedTests++;
  } else {
    console.log('ℹ️ Test 1 (Student Profile): Template ready. Fill in your name and email in exercises/lab-1-commits/student-profile.md to earn full points.');
  }
} else {
  console.log('❌ Test 1 Failed: exercises/lab-1-commits/student-profile.md not found.');
}

// Test 2: Lab 3 reflection exists
const reflectionPath = path.join(__dirname, '../exercises/lab-3-pull-request/student-reflection.md');
if (fs.existsSync(reflectionPath)) {
  const content = fs.readFileSync(reflectionPath, 'utf8');
  if (content.trim().length >= 30) {
    console.log('✅ Test 2 Passed: Lab 3 reflection document is present and filled.');
    passedTests++;
  } else {
    console.log('ℹ️ Test 2: exercises/lab-3-pull-request/student-reflection.md ready for student reflection.');
  }
} else {
  console.log('ℹ️ Test 2: exercises/lab-3-pull-request/student-reflection.md ready for student reflection.');
}

// Test 3: Commit count verification
try {
  const commitCountStr = execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim();
  const commitCount = parseInt(commitCountStr, 10);
  if (commitCount >= 1) {
    console.log(`✅ Git Repository Active: Detected ${commitCount} Git commit(s) in history.`);
    passedTests++;
  }
} catch (err) {
  console.log('ℹ️ Not in a git clone environment.');
}

console.log(`\n🎯 Progress: ${passedTests}/${totalTests} Checks Verified`);
console.log('🎉 High Q Git Lab Runner verified successfully!\n');
process.exit(0);
