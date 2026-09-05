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
    console.log('❌ Test 1 Failed: exercises/lab-1-commits/student-profile.md contains unedited placeholders.');
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
    console.log('❌ Test 2 Failed: exercises/lab-3-pull-request/student-reflection.md is too short.');
  }
} else {
  console.log('⚠️ Test 2 Note: exercises/lab-3-pull-request/student-reflection.md not yet created (Complete Lab 3 to pass).');
}

// Test 3: Commit count verification
try {
  const commitCountStr = execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim();
  const commitCount = parseInt(commitCountStr, 10);
  if (commitCount >= 2) {
    console.log(`✅ Test 3 Passed: Detected ${commitCount} Git commits in history.`);
    passedTests++;
  } else {
    console.log(`⚠️ Test 3 Notice: Repository has ${commitCount} commit(s). Make additional commits as requested in labs.`);
  }
} catch (err) {
  console.log('⚠️ Test 3 Skipped: Not in a git clone environment.');
}

console.log(`\n🎯 Score: ${passedTests}/${totalTests} Checks Passed`);
if (passedTests === totalTests) {
  console.log('🎉 Congratulations! All Git & GitHub labs verified successfully!\n');
  process.exit(0);
} else {
  console.log('💡 Keep going! Check the requirements above and push an update.\n');
  // Return non-zero if profile fails
  if (passedTests === 0) process.exit(1);
  process.exit(0);
}
