// js asynchronous programming
// array of objects
const dummyDatas =[
    {name:"skb",age:"28"},
{name:"jkb",age:"67"},
{name:"sb",age:"57"}];


function getDatas(){
    
    //interval
    setTimeout(()=>{
        let output = "";
        dummyDatas.forEach((data,index)=>{
            output += dummyDatas.name;
        })
        
    },1000);
}

// callback
// function setData(newdata,callback){
//     setTimeout(()=>{
//         dummyDatas.push(newdata);
//           callback();
        
//     },2000);
  
// }

//promises
function setDatas(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            dummyDatas.push(newdata);
            
            let error=false;
            if (!error){
                resolve();
            }
            else{
                reject("error");
            }
        },2000);
    })
}
}

getDatas();
// setData({name:"jsb",age:"67"},getDatas);
// setDatas({name:"jsb",age:"67"}).then(getDatas).catch((err)=>console.log(err););

// async ,await
async function print(){
    await setData({name:"jsb",age:"67"});
    getDatas();
}

print();
