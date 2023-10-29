const Q_1 = `Develop the following application, use the following HTML elements to get started with. Apply all the styles and functionality using JavaScript only.
=> The year color is changing every 1 second
=> The data and time background color is changing every on seconds
=> Completed challenges has background green
=> Ongoing challenge has background yellow
=> Coming challenges have background red
`
console.log('%clevel3.js line:8 Q_1', 'color: white; background-color: #007acc;', Q_1);
{
    document.querySelectorAll('*').forEach(e => {
        e.style = `margin:0;padding:0;font-family : Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
    })
    document.querySelector('body').style.minWidth = `100vw`;
    document.querySelector('body').style.minHeight = `100vh`;
    document.querySelector('body').style.backgroundColor = '#bdbdbd';
    const wrapper = document.querySelector('.wrapper');
    const mainHeading = document.querySelectorAll('h1')[0];
    const subHeading = document.querySelector('h2');
    const dateDiv = document.querySelector('.date');
    const list = document.querySelector('ul');
    const listItems = document.querySelectorAll('li');
    const courses = {
        python: 'Completed',
        js: 'Ongoing',
        react: 'Completed',
        fullStack: 'Completed',
        dataAnalysis: 'Coming',
        reactNative: 'Coming',
        machineLearning: 'Coming'
    }
    const checkStatus = (course, courses) => {
        const courseId = course.id;
        return courses[courseId]
    }
    let listItem = document.querySelectorAll('li');
    let i = 0;
    setInterval(() => {
        const colors = ['yellow', 'hotpink', 'green', 'orange', '#57c0cd', '#65e182'];
        if (i >= colors.length) {
            i = 0;
        }
        mainHeading.childNodes[1].style.color = colors[i];
        i++
    }, 1000)
    // wrapper Styles
    wrapper.style = `width:inherit;display: flex; flex-direction: column; justify-content:center;align-items:center;padding: 2rem;`;

    // Heading Style
    {
        const style = mainHeading.style;
        style.fontSize = '1.8rem';
        style.color = '#3d3d3d';
        style.fontFamily = `'Segoe UI', Tahoma, Geneva, verdana, sans-serif`;
        style.marginBottom = '1.5rem';
        const child = mainHeading.childNodes[1].style;
        child.fontSize = '3.4rem';
        child.fontWeight = '700';
        child.textShadow = '2px 3px 5px rgba(0,0,0,.5);'
    }

    // SubHeading Style
    {
        const style = subHeading.style;
        style.fontFamily = `'Segoe UI', Tahoma, Geneva, verdana, sans-serif`;
        style.fontSize = '1.2rem';
        style.fontWeight = '500';
        style.textDecoration = 'underline'
    }

    // Date style
    {
        let date = new Date().toLocaleDateString('en-US',{
            weekday: 'short',
            year : "numeric",
            month : "long",
            day : '2-digit'
        });
        dateDiv.textContent = `${date}`;
        const style = dateDiv.style;
        let i = 0;
        setInterval(() => {
            const colors = ['yellow', 'hotpink', 'green', 'orange', '#57c0cd', '#65e182'];
            if (i >= colors.length) {
                i = 0;
            }
            style.backgroundColor = colors[i];
            i++
        },1000)

        style.paddingInline = '1rem';
        style.paddingBlock = '.5rem';
        style.marginTop = '.8rem';
        style.borderRadius = '.5rem';
        style.fontFamily = `'Segoe UI', Tahoma, Geneva, verdana, sans-serif`;
        style.fontWeight = '600';
    }

    // list Style
    list.style.listStyle = 'none';
    list.style.display = 'grid';
    // list.style.backgroundColor = 'orange';
    list.style.gridTemplateRows = '1fr';
    list.style.fontSize = '1rem';
    list.style.width = '75%';
    list.style.marginBlock = '1rem';
    list.style.fontFamily = `'Segoe UI', Tahoma, Geneva, verdana, sans-serif`;
    listItems.forEach(e => {
        console.log(e.id)
        const style = e.style;
        style.paddingBlock = '10px';
        style.paddingInline = '15px'
        style.fontSize = '.976rem';
        style.marginBlock = '.1rem'
        style.color = '#232323';
        style.fontWeight = '600'
        style.cursor = 'pointer'
        if (checkStatus(e, courses) === 'Completed') {
            style.backgroundColor = '#83b35b';
        } else if (checkStatus(e, courses) === 'Ongoing') {
            style.backgroundColor = '#b3a35b';
        } else if (checkStatus(e, courses) === 'Coming') {
            style.backgroundColor = '#ac5c5c';
        }
    })
    listItems[0].style.borderTopLeftRadius = '.4rem'
    listItems[0].style.borderTopRightRadius = '.4rem'
    listItems[listItems.length - 1].style.borderBottomLeftRadius = '.4rem'
    listItems[listItems.length - 1].style.borderBottomRightRadius = '.4rem'





}