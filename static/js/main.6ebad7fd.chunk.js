(this.webpackJsonptriv=this.webpackJsonptriv||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),r=n.n(a),i=(n(13),n(8)),l=n(6),o=n(2),d=(n(14),n(0)),j=function(e){var t=e.currentIndex,n=e.questions,c=(e.answer,e.clicked),s=e.showAnswers,a=e.handleAnswer,r=e.handleNextQuestion,i=e.data,l=i.question,o=i.correct_answer,j=i.answers;return Object(d.jsxs)("div",{className:"flex-body",children:[Object(d.jsx)("header",{className:"unselectable",children:"Quiz"}),Object(d.jsx)("div",{className:"middle",children:Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h4",{children:["Question ",t+1,"/",n.length]}),Object(d.jsx)("div",{className:"quest",dangerouslySetInnerHTML:{__html:l}}),Object(d.jsxs)("div",{className:"answersContainer unselectable",children:[j.map((function(e,t){var n=s&&e===c?"clicked ":"",r=s?e===o?"correct ":"wrong ":"";return Object(d.jsx)("div",{className:"".concat(r).concat(n,"answer"),onClick:function(){return a(e)},dangerouslySetInnerHTML:{__html:e}},t)})),s&&Object(d.jsx)("div",{onClick:r,className:"next",children:"Next Question"})]})]})})}),Object(d.jsx)("footer",{children:"Krasimir Trendafiloff \u2022 2021"})]})};var u=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),r=Object(o.a)(a,2),u=r[0],b=r[1],h=Object(c.useState)(0),O=Object(o.a)(h,2),x=O[0],f=O[1],m=Object(c.useState)(!1),v=Object(o.a)(m,2),w=v[0],N=v[1],p=Object(c.useState)(""),g=Object(o.a)(p,2),y=g[0],k=g[1];return Object(c.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{answers:[e.correct_answer].concat(Object(i.a)(e.incorrect_answers)).sort((function(){return Math.random()-.5}))})}));s(t)}))}),[]),n.length>0?Object(d.jsx)("div",{children:u>=n.length?Object(d.jsxs)("div",{className:"flex-body",children:[Object(d.jsxs)("div",{className:"gameEnd",children:["Your score is ",Object(d.jsx)("br",{}),x," out of ",n.length]}),Object(d.jsx)("div",{onClick:function(){window.location.reload(!1)},className:"playAgain unselectable",children:"Play Again"}),Object(d.jsx)("footer",{children:"Krasimir Trendafiloff \u2022 2021"})]}):Object(d.jsx)(j,{data:n[u],showAnswers:w,handleAnswer:function(e){w||(e===n[u].correct_answer&&f(x+1),k(e)),N(!0)},handleNextQuestion:function(){N(!1),b(u+1)},clicked:y,questions:n,currentIndex:u})}):Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)("header",{className:"unselectable",children:"Loading"}),Object(d.jsx)("div",{className:"loader"})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(u,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6ebad7fd.chunk.js.map