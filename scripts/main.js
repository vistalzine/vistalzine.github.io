"use strict";

(function() {
   let current_issue_text = 'VIEW PREVIOUS ISSUE';
   let hidden_issue_text = 'VIEW CURRENT ISSUE';

   let hidden_issue = document.getElementById('issue-4');
   let current_issue = document.getElementById('issue-5');

   const issue_btn = document.getElementById('issue-btn');
   
   issue_btn.innerText = current_issue_text;
   hidden_issue.style.display = 'none';

   issue_btn.onclick = function showIssue(_) {
      // Switch issue variables are pointing to
      [current_issue, hidden_issue] = [hidden_issue, current_issue];
      [current_issue_text, hidden_issue_text] = [hidden_issue_text, current_issue_text];

      // Show current issue
      current_issue.style.display = '';

      // Hide hidden issue
      hidden_issue.style.display = 'none';

      issue_btn.innerText = current_issue_text;
   };

})();