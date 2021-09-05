Online Voting Sytem is a website that allows a citizen to vote with proper authentication. The UI of the
Website is Developed on a javaScript library called ReactJs. The Serverside of this website is developed
using node.js a cross-platform runtime environment . The main motive of using node.js is that it is
Asynchronous and Event Driven , Very Fast , Single threaded and highly scalable . The Database used in
this project is MongoDB.
The website has two panels – Userpanel and Adminpanel . A normal user/citizen have access of only
Userpanel . Only Administrators have access of Adminpanel.
When a new user submits the application to be a new voter first of all the system checks entered details if
something found invalid , empty or duplicate it shows a alert. If every thing fine then it shows a successful
massage. After submitting the new application form one can view his application status by clicking Application
Status . He/she can check status through email and password . There will be a auto generated VoterCode he
will get if his/her application Approved . To vote he/she must login with the given voterCode and the
password created by the citizen. After login in the portal citizens can select the Election and a Party and can
submit their vote. A citizen can vote only for once for a particular election. The first vote submitted by the
citizen is considered. Also to view profile he/she must with voter code and password. In the profile section
he/she see all of his/her information. A normal user without login can see the live voting status by clicking the
button statistics 
The Adminpanel of the website is accessible only for the Administrator of the department . To open
the adminpanel the administrator must login with his/he employee id (empId) and password. After
login he/she can see the list of applications submitted by new applicants.
The admin can check the information provided by the applicant if every thing found correct then the
admin can approve the application . As soon the an application approved a unique voterCode will
assigned to the applicant. And the application will be disappeared from the application list But it is
still available in the database . If the admin Reject any application then also it will be disappeared
from the application list but this time there will no voterCode assigned to the applicant .
The admin can see the list of complains came from different users and it is his/her task to resolve the
complains . The admin can check each complain and resolve them .
As a admin he/she is also able to add another admin. To add new admin the existing admin can
submit application for a new admin. 