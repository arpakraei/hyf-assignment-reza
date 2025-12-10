let strName='';
const toDoList=[];
const today=new Date();
const months = [
  "January","February","March","April","May","June","July","August","September","October","November","December"
];
function getReply(command) {
        command=command.toLowerCase();
    if (command.includes("my name is")){
        const startIndexOfMyNameIs=command.indexOf("my name is");
        const lengthOfMyNameIs='my name is'.length;
        strName=command.slice(startIndexOfMyNameIs+lengthOfMyNameIs);
        strName=strName.trim();
        return `nice to meet you ${strName}`;
    }
    if(command.includes('is my name')){
        if (strName!==''){
            return `You are ${strName}`;
        }else{
            return 'You are anonymous';
        }
    }
    if (command.includes('add fishing')){
        toDoList.push('fishing');
        return 'fishing added to your todo';
    }
    if (command.includes('add singing')){
        toDoList.push('singing in the shower');
        return 'singing in the shower added to your todo';
    }

    if (command.includes('remove fishing')){
        let indexOfFishing=toDoList.indexOf('fishing');
        if (indexOfFishing!==-1){
            toDoList.splice(indexOfFishing,1);
            //console.log(toDoList);
            return 'Removed fishing from your todo';
            
        }
    }
    if (command.includes('my todo')){
        let numberOfMyToDo=toDoList.length;
        return (`you have ${numberOfMyToDo} todos - ${toDoList.join(' and ')}`);
    }
    if (command.includes('what day is')){
        return `${today.getDate()}. of ${months[today.getMonth()]} ${today.getFullYear()}`;
    }
    if (command.includes('what is')){
        let expersion= command.replace('what is','');
        if (expersion.includes('*')){
            [leftNumber,rightNumber]=expersion.split('*');
            return Number(leftNumber.trim())*Number(rightNumber.trim());
        }else if(expersion.includes('/')){
            [leftNumber,rightNumber]=expersion.split('/');
            return Number(leftNumber.trim())/Number(rightNumber.trim());
        }
        else if(expersion.includes('+')){
            [leftNumber,rightNumber]=expersion.split('+');
            return Number(leftNumber.trim())+Number(rightNumber.trim());
        }else if(expersion.includes('-')){
            [leftNumber,rightNumber]=expersion.split('-');
            return Number(leftNumber.trim())-Number(rightNumber.trim());
        }
        
    }
    if(command.includes('set a timer')){
        let expersion=command.replace('set a timer for','').trim();
        let strTime=expersion.split(' ');
        let timerTime=Number(strTime[0])*60*1000;
        setTimeout(function(){
            console.log("Timer done");
            }, timerTime);
        return `Timer set for ${strTime[0]} minutes`;
    }

} 

//console.log(getReply("What is my name?")); // "Your name is Benjamin"
//console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"

//console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
//console.log(getReply("Add singing in the shower to my todo")); // "fishing added to your todo"
//console.log(getReply("Remove fishing from my todo"));
//console.log(getReply("What is on my todo?"));
//console.log(getReply('What day is it today?'));
//console.log(getReply('What is 3 + 3'));
//console.log(getReply('Set a timer for 1 minutes'));
