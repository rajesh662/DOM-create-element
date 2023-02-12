let section = document.createElement('section');
document.body.appendChild(section);


let  sectionHead = document.createElement('h1');
sectionHead.innerText='FREQUENTLY ASKED QUESTIONS'
section.appendChild(sectionHead);


let quest= document.createElement('h3');
quest.innerText='Non consectetur a erat nam at lectus urna duis?'
section.appendChild(quest);

let ans= document.createElement('p');
ans.innerText='Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
section.appendChild(ans);

let quest1= document.createElement('h3');
quest1.innerText='Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?'
section.appendChild(quest1);

let ans1= document.createElement('p');
ans1.innerText='Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
section.appendChild(ans1);

console.log(section);