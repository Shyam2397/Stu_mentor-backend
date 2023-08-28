Mentor and Student Assigning with Database

Agenda

1.Write API to create Mentor

2.Write API to create Student

3.Write API to Assign a student to Mentor

Select one mentor and Add multiple Student

A student who has a mentor should not be shown in List

4.Write API to Assign or Change Mentor for particular Student

Select One Student and Assign one Mentor

5.Write API to show all students for a particular mentor

Base URL https://stu-mentor.onrender.com

Mentor Api's
GET          /mentor 
POST         /mentor 
GET by ID    /mentor/get-mentor/:ID 


Student Api's
GET           /student 
POST          /student 


To get list of students whose mentors weren't assigned
GET          /student/no-mentors


To assign or change Mentor for student

PATCH        /student/assign-mentor/:student-id


To assign mentors for multiple Students

PATCH        /student/assign-mentor-students


To Assign or Change Mentor for particular student
Pass Mentor ID in request Body

PATCH        /student/assign-mentor/:student-id 

To Assign mentor for multiple students
Pass Mentor ID and Student ID as list in body

PATCH        /student/assign-mentor-students 

To get all students of particular Mentor

GET          /student/mentor-students/:mentor-id 
