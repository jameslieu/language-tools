/** tested-ranges: [[7,5,"items"],[33,4,"name"],[47,3,"qty"],[73,5,"items"],[111,4,"name"],[125,3,"qty"],[151,5,"items"],[162,2,"id"],[166,4,"name"],[172,3,"qty"],[182,2,"id"],[202,4,"name"],[211,3,"qty"],[237,7,"objects"],[250,2,"id"],[257,4,"rest"],[277,2,"id"],[304,4,"rest"],[333,5,"items"],[369,2,"id"],[400,4,"rest"],[429,5,"todos"],[454,4,"text"]] */{/**
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
<>{__sveltets_each(items, (item) => <>                                                                                                                {/**
                   #====                                      [generated] line 3                                                                       */}
{#each items as item}                                                                                                                                 {/**
       #====                                                  [original] line 1                                                                       
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    <li>{item.name} x {item.qty}</li>                                                                                                                 {/**
              1===          2==                               [generated] line 4                                                                       */}
    <li>{item.name} x {item.qty}</li>                                                                                                                 {/**
              1===          2==                               [original] line 2                                                                       
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
{__sveltets_each(items, (item, i) => <>                                                                                                               {/**
                 #====                                        [generated] line 7                                                                       */}
{#each items as item, i}                                                                                                                              {/**
       #====                                                  [original] line 5                                                                       
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    <li>{i + 1}: {item.name} x {item.qty}</li>                                                                                                        {/**
                       1===          2==                      [generated] line 8                                                                       */}
    <li>{i + 1}: {item.name} x {item.qty}</li>                                                                                                        {/**
                       1===          2==                      [original] line 6                                                                       
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
{__sveltets_each(items, ({ id, name, qty }, i) => (id) && <>                                                                                          {/**
                 1====     2=  3===  4==           5=         [generated] line 11                                                                      */}
{#each items as { id, name, qty }, i (id)}                                                                                                            {/**
       1====      2=  3===  4==       5=                      [original] line 9                                                                       
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    <li>{i + 1}: {name} x {qty}</li>                                                                                                                  {/**
                  1===     2==                                [generated] line 12                                                                      */}
    <li>{i + 1}: {name} x {qty}</li>                                                                                                                  {/**
                  1===     2==                                [original] line 10                                                                      
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
{__sveltets_each(objects, ({ id, ...rest }) => <>                                                                                                     {/**
                 1======     2=     3===                      [generated] line 15                                                                      */}
{#each objects as { id, ...rest }}                                                                                                                    {/**
       1======      2=     3===                               [original] line 13                                                                      
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    <li><span>{id}</span><MyComponent {...rest}/></li>                                                                                                {/**
               1=                         2===                [generated] line 16                                                                      */}
    <li><span>{id}</span><MyComponent {...rest}/></li>                                                                                                {/**
               1=                         2===                [original] line 14                                                                      
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
{__sveltets_each(items, ([id, ...rest]) => <>                                                                                                         {/**
                 #====                                        [generated] line 19                                                                      */}
{#each items as [id, ...rest]}                                                                                                                        {/**
       #====                                                  [original] line 17                                                                      
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    <li><span>{id}</span><MyComponent values={rest}/></li>                                                                                            {/**
               1=                             2===            [generated] line 20                                                                      */}
    <li><span>{id}</span><MyComponent values={rest}/></li>                                                                                            {/**
               1=                             2===            [original] line 18                                                                      
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
{__sveltets_each(todos, (todo) => <>                                                                                                                  {/**
                 #====                                        [generated] line 23                                                                      */}
{#each todos as todo}                                                                                                                                 {/**
       #====                                                  [original] line 21                                                                      
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    <p>{todo.text}</p>                                                                                                                                {/**
             #===                                             [generated] line 24                                                                      */}
    <p>{todo.text}</p>                                                                                                                                {/**
             #===                                             [original] line 22                                                                      
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
/** origin-hash: 1y9mv6z */