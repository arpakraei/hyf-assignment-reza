let strName='';
const toDoList=[];
const today=new Date();
const months = [
  "January","February","March","April","May","June","July","August","September","October","November","December"
];
function getReply(command) {
        if (!command || (typeof command!=="string")){return 'Command is not valid. Try again';}
        command=command.toLowerCase();
        const MY_NAME_IS='my name is';
    if (command.includes(MY_NAME_IS)){
        const startIndexOfMyNameIs=command.indexOf(MY_NAME_IS);
        const lengthOfMyNameIs=MY_NAME_IS.length;
        strName=command.slice(startIndexOfMyNameIs+lengthOfMyNameIs);
        strName=strName.trim();
        return `nice to meet you ${strName}`;
    }
    const IS_MY_NAME='is my name';
    if(command.includes(IS_MY_NAME)){
        if (strName!==''){
            return `You are ${strName}`;
        }else{
            return 'You are anonymous';
        }
    }
    const ADD_FINISHING='add fishing';
    if (command.includes(ADD_FINISHING)){
        toDoList.push('fishing');
        return 'fishing added to your todo';
    }
    const ADD_SINGING='add singing';
    if (command.includes(ADD_SINGING)){
        toDoList.push('singing in the shower');
        return 'singing in the shower added to your todo';
    }
    const REMOVE_FINISHING='remove fishing';
    if (command.includes(REMOVE_FINISHING)){
        let indexOfFishing=toDoList.indexOf('fishing');
        if (indexOfFishing!==-1){
            toDoList.splice(indexOfFishing,1);
            //console.log(toDoList);
            return 'Removed fishing from your todo';
        }
    }
    const MY_TO_DO='my todo';
    if (command.includes(MY_TO_DO)){
        let numberOfMyToDo=toDoList.length;
        return (`you have ${numberOfMyToDo} todos - ${toDoList.join(' and ')}`);
    }
    const WHAT_DAY_IS='what day is';
    if (command.includes(WHAT_DAY_IS)){
        return `${today.getDate()}. of ${months[today.getMonth()]} ${today.getFullYear()}`;
    }
    const WHAT_IS='what is';
    if (command.includes(WHAT_IS)){
        let expersion= command.replace(WHAT_IS,'');
        let operator;
        if (expersion.includes('*'))operator='*';
        else if (expersion.includes('/'))operator='/';
        else if (expersion.includes('+'))operator='+';
        else if (expersion.includes('-'))operator='-';

        if (!operator) {
            return 'Invalid math expression';
            }

        const[leftNumber,rightNumber]=expersion.split(operator);
        const left=Number(leftNumber.trim());
        const right=Number(rightNumber.trim());

        switch (operator){
            case '*':return(left*right);
            case '+':return(left+right);
            case '/':return(left/right);
            case '-':return(left-right);
        }
        
    }
    const SET_A_TIMER='set a timer';
    if(command.includes(SET_A_TIMER)){
        const expersion=command.replace('set a timer for','').trim();
        const strTime=expersion.split(' ');
        const timerTime=Number(strTime[0])*60*1000;
        setTimeout(function(){
            console.log("Timer done");
            }, timerTime);
        return `Timer set for ${strTime[0]} minutes`;
    }

} 

console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "fishing added to your todo"
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply('What day is it today?'));
console.log(getReply('What is 3 + 3'));
console.log(getReply('Set a timer for 1 minutes'));
console.log(getReply(78));

