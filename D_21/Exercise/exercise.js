console.log('Hello there, This is exercise')
// Exercise Level 1
{
    const Q_1 = 'Create an index.html file and put four p elements as above : Get the first paragraph using document.querySelector(tagName)';
    console.log('%cexercise.js line:4 Q_1', 'color: white; background-color: #007acc;', Q_1);
    {
        const para = document.querySelector('p');
        console.log(para);
    }

    const Q_2 = 'Get each of the paragraph using document.querySelector("#id") and by their ID';
    console.log('%cexercise.js line:12 Q_2', 'color: white; background-color: #007acc;', Q_2);
    {
        const para1 = document.querySelector('#p1');
        const para2 = document.querySelector('#p2');
        const para3 = document.querySelector('#p3');
        const para4 = document.querySelector('#p4');
        console.log(para1);
        console.log(para2);
        console.log(para3);
        console.log(para4);
    }

    const Q_3 = 'Get all the p as nodeList using document.querySelectorAll(tagname) by their tagName';
    console.log('%cexercise.js line:25 Q_3', 'color: white; background-color: #007acc;', Q_3);
    {
        const paras = document.querySelectorAll('p');
        console.log(paras);
    }

    const Q_4 = 'Loop through the nodeList and get the text content of each paragraph';
    console.log('%cexercise.js line:32 Q_4', 'color: white; background-color: #007acc;', Q_4);
    {
        const paras = document.querySelectorAll('p');
        paras.forEach((e,i)=>{
            console.log(`Para : ${i+1}`)
            console.log(e.textContent)
        })
    }

    const Q_5 = 'Set a text content to paragraph the fourth paragraph, Fourth Paragraph';
    console.log('%cexercise.js line:42 Q_5', 'color: white; background-color: #007acc;', Q_5);
    {
        let para4 = document.querySelector('#p4');
        para4.textContent = 'Fourth Paragraph'
    }

    const Q_6 = 'Set id and class attribute for all the paragraphs using different attribute setting methods.';
    console.log('%cexercise.js line:49 Q_6', 'color: white; background-color: #007acc;', Q_6);
    {
        const paras = document.querySelectorAll('p');
        paras[0].classList.add('para1');
        paras[0].setAttribute('id','unique1');
        paras[1].classList = 'para2';
        paras[1].id = 'unique2';
        paras[2].classList.add('para3');
        paras[2].setAttribute('id','unique3');
        paras[3].classList = 'para4';
        paras[3].setAttribute('id','unique4');

        console.log(paras)
        
    }
}

// Exercise - Level : 2
{
    const Q_1 = 'Change style of each paragraph using JavaScript (eg. color, background, border, font-size, font-family';
    console.log('%cexercise.js line:69 Q_1', 'color: white; background-color: #007acc;', Q_1);
    {
        const paras = document.querySelectorAll('p');
        paras.forEach(e=>{
            e.style.backgroundColor = 'rgba(244, 98, 65, .4)';
            e.style.color = '#3e3e3e';
            e.style.fontSize = '.725rem';
            e.style.paddingInline = '1rem';
            e.style.paddingBlock = '.5rem';
            e.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
            e.style.border = ".1rem solid #3c3c3c";
            e.style.borderRadius = '.4rem';
        })
    }

    const Q_2 = 'Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color.';
    console.log('%cexercise.js line:85 Q_2', 'color: white; background-color: #007acc;', Q_2);
    {
        const paras = document.querySelectorAll('p');
        paras.forEach((e,i)=>{
            if (i%2===0){
                e.style.color = 'green'; // As i starts from 0 so this element is odd one
            }else{
                e.style.color = 'red';
            }
        })
    }

    const Q_3 = 'Set text content, id and class to each paragraph';
    console.log('%cexercise.js line:98 Q_3', 'color: white; background-color: #007acc;', Q_3);
    {
        const paras = document.querySelectorAll('p');
        paras[0].setAttribute('id','paragraph_1');
        paras[0].setAttribute('class','paragraph');
        paras[0].textContent = "This is first paragraph.";
        
        paras[1].setAttribute('id','paragraph_2');
        paras[1].setAttribute('class','paragraph');
        paras[1].textContent = "This is second paragraph.";

        paras[2].setAttribute('id','paragraph_3');
        paras[2].setAttribute('class','paragraph');
        paras[2].textContent = "This is third paragraph.";

        paras[3].setAttribute('id','paragraph_4');
        paras[3].setAttribute('class','paragraph');
        paras[3].textContent = "This is fourth paragraph.";

    }
}