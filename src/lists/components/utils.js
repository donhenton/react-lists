 
var uuid = require('uuid4');
module.exports = 

{
    
    clone: function(r)
    {
        return JSON.parse(JSON.stringify(r));
    },
    
    generateTempQueueName: function()
    {
        return 'tq-'+uuid();
    }
    
}