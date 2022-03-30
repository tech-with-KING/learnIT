 const Data=[
        {
            question:"the interval \\((\\infty, 0]\\) is",
            topic:'Math',
            Options:[
                {text:'Open', correct:false,active:false,id:1},
                {text:'Closed',correct:false,active:false,id:2},
                {text:' Half-Open', correct:false, active:false,id:3},
                {text:'Half-closed',correct:false,active:false,id:4},
                {text:'Undefined',correct:true,active:false,id:5}
            ],
            index:1     
    },

    {
        question:"\\(\\frac{x-1}{\\log x}\\) is undefined at which point(s)?  ",
        topic:'Maths',
        Options:[
            {text:'\\(0\\)', correct:false, active:false, id:1 },
            {text:'\\((-\\infty, 0)\\)', correct:false, active:false, id:2},
            { text:'\\([-\\infty,0)\\)', correct:false, active:false, id:3 },
            {text:'\\([-\\infty,0]\\)', correct:true, active:false, id:4 },
            {text:"none of the above", correct:false, active:false,id:5 }
        ],
        index:2    
},

{
    question:' In set theory, there is universal set that contains all possible mathematical objects.',
    topic:'Maths',
    Options:[
        {text:'True',correct:false,active:false,id:1},
        {text:'False',correct:true,active:false,id:2},
    ],
    index:3
},
    
    {
        question:`There are 25 prime numbers less than 100. 
        Let: 
        A := {$x$ |$x$ is a prime number less than 100},
        B := {$y$ | $y$ is a multiple of 3 less than 1000}
        The cardinality of $A\\sim B$ is ?`,
        topic:'Maths',
        Options:[
            {text:' 25',correct:false,active:false,id:1},
            {text:'24',correct:true,active:false,id:2},
            { text:' 23', correct:false,active:false,id:3},
            { text:'1',correct:false, active:false,id:4},
            {text:'0',correct:false,active:false,id:5}
        ],
        index:4
        
    
},
{
    question:"$\frac{x-1}{\log x}$ is undefined at which point(s)?",
    topic:'Maths',
    Options:[
        {text:' 0',correct:false,active:false, id:1},
        { text:'$(\\-infty, 0)$ ', correct:false, active:false,id:2},
        {text:'$[-\infty,0)$ ',correct:false,active:false,id:3},
        {text:'$[-\infty,0]$',correct:true,active:false, id:4}
    ],
    index:5    
},
{
    question:"In set theory, there is universal set that contains all possible mathematical objects.",
    topic:'Maths',
    Options:[
        {text:'True',correct:false,active:false, id:1},
        { text:'False', correct:true, active:false,id:2},
        {text:'Both',correct:false,active:false,id:3},
        {text:'None',correct:false,active:false, id:4 }
    ],
    index:6 
},
{
    question:"Which of the following propositions is false?",
    topic:'Maths',
    Options:[
        {text:'$A \subseteq A$',correct:false,active:false, id:1},
        { text:'$A \supseteq A$', correct:false, active:false,id:2},
        {text:'$A \supset A$',correct:false,active:false,id:3},
        {text:' $A \cap A = A \cup A$',correct:true,active:false, id:4 }
    ],
    index:7  
},
{
    question:`There are 25 prime numbers less than 100. \\
    Let: \\
    A := {$x$ | $x$ is a prime number less than 100}\\
    B := {$y$ | $y$ is a multiple of 3 less than 1000}\\ The cardinality of $A\sim B$ is`,
    topic:'Maths',
    Options:[
        {text:'25',correct:false,active:false, id:1},
        { text:'24', correct:true, active:false,id:2},
        {text:'23',correct:false,active:false,id:3},
        {text:'1',correct:false,active:false, id:4 }
    ],
    index:8     
},
{
    question:`Which of the following is not a polynomial?`,
    topic:'Maths',
    Options:[
        {text:'$6x^6 - 5$',correct:false,active:false, id:1},
        { text:' $ i^2x$', correct:false, active:false,id:2},
        {text:'$-10$',correct:false,active:false,id:3},
        {text:'\\(\\frac{5x^3 + 2x^2 + x}{x}\\) ',correct:true,active:false, id:4 }
    ],
    index:9  
},
{
    question:`The next two terms in the sequence below are: 1, 2, 3, 5, ...`,
    topic:'Maths',
    Options:[
        {text:' 7, 11',correct:false,active:false, id:1},
        { text:'8, 13', correct:true, active:false,id:2},
        {text:'8, 11',correct:false,active:false,id:3},
        {text:' 7, 13',correct:false,active:false, id:4 }
    ], 
    index:10 
},
{
    question:`Simplify \\((\\frac{\\frac{1}{a+h} - \\frac{1}{a}}{h})\\).`,
    topic:'Maths',
    Options:[
        {text:'\\(\\frac{-1}{a(a+h)}\\)',correct:true,active:false, id:1},
        { text:'\\(\\frac{2a-h}{ah(a+h)}\\)', correct:false, active:false,id:2},
        {text:'\\(\\frac{2(a-h)}{ah(a+h)}\\)',correct:false,active:false,id:3},
        {text:' \\(\\frac{1}{a(a+h)}\\)',correct:false,active:false, id:4 }
    ],
    index:11   
},
{
    question:`Solve $|3x-6|=9$.`,
    topic:'Maths',
    Options:[
        {text:'$x=5$',correct:false,active:false, id:1},
        { text:'$x=-1$', correct:false, active:false,id:2},
        {text:'$x=5,x=-1$',correct:true,active:false,id:3},
        {text:' $x=-1, x=-5$',correct:false,active:false, id:4 }
    ],
    index:12 
},
{
    question:`Is a dimensionally consistent equation always correct`,
    topic:'Maths',
    Options:[
        {text:'True',correct:true,active:false, id:1},
        { text:'False', correct:false, active:false,id:2},
        {text:'All of the above ',correct:false,active:false,id:3},
        {text:'none of the above',correct:false,active:false, id:4 }
    ],
    index:13
},

        
]
export default Data;