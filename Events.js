const EventEmitter=require('events');
const eventEmitter=new EventEmitter();

/*Defining a trigger*/
eventEmitter.on('userSignup',(user)=>{
    console.log(`Warm welcome to you, ${user.email}`);
});

/*Triggering the event, ex:User SignUp*/
const newUser={email:'user@example.com'};
eventEmitter.emit('userSignup',newUser);