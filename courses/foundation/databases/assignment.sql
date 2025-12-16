
/*How many tasks are in the task table? */
select count(*) as [Number Of Task] from task;

/*How many tasks in the task table do not have a valid due date?*/
select count(*) as [Invalid_Due_Date]
from task 
where due_date is NULL ;


/*Find all the tasks that are marked as done.*/
select task.* 
from task , status 
where task.status_id =status.id and lower(status.name) ='done';

/*Find all the tasks that are not marked as done.*/
select task.* 
from task , status 
where task.status_id =status.id and  lower(status.name) <>'done';


/*Get all the tasks, sorted with the most recently created first.*/
select * 
from task 
order by created DESC ;

/*Get the single most recently created task.*/
select * 
from task 
order by created DESC 
limit 1;

/*Get the title and due date of all tasks where the title or description contains database.*/
select title, due_date 
from task 
where (title like '%database%')or(description  like '%database%');

/*Get the title and status (as text) of all tasks.*/
select task.title , status.name 
from task , status 
where task.status_id =status.id ;

/*Get the name of each status, along with a count of how many tasks have that status.*/
select status.name  , count(*) as [Number of Task]
from task,status 
where task.status_id = status.id 
GROUP by status.id ,status.name  ;

/*Get the names of all statuses, sorted by the status with most tasks first.*/
select status.name  , count(*) as Number_of_Task 
from task,status 
where task.status_id = status.id 
GROUP by status.name 
ORDER by Number_of_Task DESC;

