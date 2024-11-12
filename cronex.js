const cron=require('node-cron');

cron.schedule('* * * * *',()=>{
    console.log('Per-minute executions.')
})

cron.schedule('*/5 * * * *',()=>{
    console.log('Every 5 minute executions.')
})