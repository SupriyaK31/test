const posts = [
    {title: 'Post One',
     createdAt: new Date().getTime()
    },
    {title: 'Post Two', 
     createdAt: new Date().getTime()
    }
];
const user=[{username:'Supriya',lastActivityTime: new Date()}];

function updateLastUserActivityTime(){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       const error=false;
       if(!error){
            user.lastActivityTime=new Date()
            console.log('User Last activity Time:'+ user.lastActivityTime);
        resolve();
       }else{
        reject('Error in updating last seen')
       }
    },1000);
 });
}

function CreatePost(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        console.log('After creating Post>>>>>>>')
        posts.push({title:'New Post',createdAt:new Date().getTime()});
        const error=false;
        if(!error){
            resolve();
        }else{
            reject('Error:In Create Post')
        }
        },1000);
    });

}

function getPost(){
return new Promise((resolve,reject)=>{
 
   posts.forEach((post)=>{
    console.log(post)
   })
   const error=false;
   if(!error){
       resolve();
   }else{
       reject('Error in getting post')
   }

});
}

function deletePost(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(posts.length >0){
        console.log('Deleting Post')
        resolve(posts.pop);
      }else{
        reject('Array is Empty')
      }
    },1000);
});
}

    user.forEach((user1)=>{ 
        console.log('Before Creating Post Last seen of User:'+user1.lastActivityTime);
    });

CreatePost()
.then(getPost)
.then(updateLastUserActivityTime)
.then(deletePost)
.then(updateLastUserActivityTime)
.catch(err=>console.log(err))