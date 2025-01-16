function calculateGrade() {
    const assignments = parseFloat(document.getElementById('assignments').value);
    const quizzes = parseFloat(document.getElementById('quizzes').value);
    const exams = parseFloat(document.getElementById('exams').value);  
    if (isNaN(assignments) || isNaN(quizzes) || isNaN(exams)) {
      alert('Please enter valid scores for all fields.');
      return;
    }
    const totalScore = assignments * 0.4 + quizzes * 0.3 + exams * 0.3;
    let grade;  
    if (totalScore >= 90) {
      grade = 'A';
    } else if (totalScore >= 80) {
      grade = 'B';
    } else if (totalScore >= 70) {
      grade = 'C';
    } else if (totalScore >= 60) {
      grade = 'D';
    } else {
      grade = 'F';
    }  
    const gradeOutput = document.getElementById('gradeOutput');
    const gradeResultDiv = document.getElementById('gradeResult');
    gradeOutput.textContent = `Score: ${totalScore.toFixed(2)}, Grade: ${grade}`;
    gradeResultDiv.style.display = 'block';
  }  
  document.getElementById('calculateGrade').addEventListener('click', calculateGrade);
  