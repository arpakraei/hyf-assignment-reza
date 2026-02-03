/*How many tasks are in the task table? */
SELECT COUNT(*) AS Number_Of_Task 
FROM task;

/*How many tasks in the task table do not have a valid due date?*/
SELECT COUNT(*) AS Invalid_Due_Date
FROM task 
WHERE due_date IS NULL;

/*Find all the tasks that are marked as done.*/
SELECT task.* 
FROM task
Inner JOIN status ON task.status_id = status.id 
WHERE LOWER(status.name) = 'done';

/*Find all the tasks that are not marked as done.*/
SELECT task.* 
FROM task
Inner JOIN status ON task.status_id = status.id 
WHERE LOWER(status.name) <> 'done';

/*Get all the tasks, sorted with the most recently created first.*/
SELECT * 
FROM task 
ORDER BY created DESC;

/*Get the single most recently created task.*/
SELECT * 
FROM task 
ORDER BY created DESC 
LIMIT 1;

/*Get the title and due date of all tasks where the title or description contains database.*/
SELECT title, due_date 
FROM task 
WHERE title LIKE '%database%'
   OR description LIKE '%database%';

/*Get the title and status (as text) of all tasks.*/
SELECT task.title , status.name 
FROM task
Inner JOIN status ON task.status_id = status.id;

/*Get the name of each status, along with a count of how many tasks have that status.*/
SELECT status.name , COUNT(*) AS Number_of_Task
FROM status  
Inner JOIN task ON status.id = task.status_id 
GROUP BY status.id, status.name;

/*Get the names of all statuses, sorted by the status with most tasks first.*/
SELECT status.name , COUNT(*) AS Number_of_Task 
FROM status 
Inner JOIN task ON status.id = task.status_id 
GROUP BY status.name 
ORDER BY Number_of_Task DESC;
