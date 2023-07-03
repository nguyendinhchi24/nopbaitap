msg = 'codegym';
for(var x = 4; x < msg.length + 1; x++)
{
    if(msg.length == 3)
    {
        for (var i = 2; i < 7; i++)
        {
            console.log(i);
        }
    }
    else
    {
        for (var i = msg.length;  i > (msg.length - 3); i--)
        {
            console.log(i);
        }
    }
}