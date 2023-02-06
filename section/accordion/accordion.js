const oneData = [
    {
        title: 'Архив №1',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur laborum, iste laudantium quae tenetur perferendis dicta veniam sunt ea ex inventore dolorum amet eum cupiditate voluptatibus nulla nihil veritatis vel excepturi qui blanditiis explicabo! Ea voluptates quasi corporis possimus.`,
    },
    {
        title: 'Архив №2',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur laborum, iste laudantium quae tenetur perferendis dicta veniam sunt ea ex inventore dolorum amet eum cupiditate voluptatibus nulla nihil veritatis vel excepturi qui blanditiis explicabo! Ea voluptates quasi corporis possimus.`,
    },
    {
        title: 'Архив №3',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur laborum, iste laudantium quae tenetur perferendis dicta veniam sunt ea ex inventore dolorum amet eum cupiditate voluptatibus nulla nihil veritatis vel excepturi qui blanditiis explicabo! Ea voluptates quasi corporis possimus.`,
    },
    {
        title: 'Архив №4',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur laborum, iste laudantium quae tenetur perferendis dicta veniam sunt ea ex inventore dolorum amet eum cupiditate voluptatibus nulla nihil veritatis vel excepturi qui blanditiis explicabo! Ea voluptates quasi corporis possimus.`
    },

]

const twoData = [
    {
        title: 'Архив №5',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur laborum, iste laudantium quae tenetur perferendis dicta veniam sunt ea ex inventore dolorum amet eum cupiditate voluptatibus nulla nihil veritatis vel excepturi qui blanditiis explicabo! Ea voluptates quasi corporis possimus.`,
    },
    {
        title: 'Архив №6',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur laborum, iste laudantium quae tenetur perferendis dicta veniam sunt ea ex inventore dolorum amet eum cupiditate voluptatibus nulla nihil veritatis vel excepturi qui blanditiis explicabo! Ea voluptates quasi corporis possimus.`,
    },
    {
        title: 'Архив №7',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur laborum, iste laudantium quae tenetur perferendis dicta veniam sunt ea ex inventore dolorum amet eum cupiditate voluptatibus nulla nihil veritatis vel excepturi qui blanditiis explicabo! Ea voluptates quasi corporis possimus.`,
    },
    {
        title: 'Архив №8',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur laborum, iste laudantium quae tenetur perferendis dicta veniam sunt ea ex inventore dolorum amet eum cupiditate voluptatibus nulla nihil veritatis vel excepturi qui blanditiis explicabo! Ea voluptates quasi corporis possimus.`
    },

]

const accordionOne = document.querySelector('.accardionChild-1')

const randerOne = (API) => {
    API.forEach(el => {
        const wrap = document.createElement('div')
        const accordionName = document.createElement('div')
        const accordionContent = document.createElement('div')
        const name = document.createElement('p')
        const content = document.createElement('p')
        const image = document.createElement('img')

        accordionContent.className = 'accordion__content'
        accordionName.className = 'accordion__name'
        wrap.className = 'accordion__wrapOne'
        image.className = 'plus'

        name.textContent = el.title
        content.textContent = el.text
        image.src = "./image/angle-brackets.png"

        accordionOne.append(wrap)
        wrap.append(accordionName, accordionContent)
        accordionName.append(name, image)
        accordionContent.append(content)

    })

    const accordionWrapOne = document.querySelectorAll('.accordion__wrapOne')

    for (let i = 0; i < accordionWrapOne.length; i++) {
        accordionWrapOne[i].addEventListener('click', () => {
            accordionWrapOne.forEach((el, index) => {
                if (accordionWrapOne[i] === accordionWrapOne[index]) {
                    el.classList.toggle('accordion__active')

                } else {
                    el.classList.remove('accordion__active')
                }
            })

        })
    }
}
randerOne(oneData)



const accordTwo = document.querySelector('.accardionChild-2')

const randerTwo = (asd) => {
    asd.forEach(el => {
        const wrap = document.createElement('div')
        const accordionName = document.createElement('div')
        const accordionContent = document.createElement('div')
        const name = document.createElement('p')
        const content = document.createElement('p')
        const image = document.createElement('img')

        accordionContent.className = 'accordion__content'
        accordionName.className = 'accordion__name'
        wrap.className = 'accordion__wrapTwo'
        image.className = 'plus'

        name.textContent = el.title
        content.textContent = el.text
        image.src = "./image/angle-brackets.png"

        accordTwo.append(wrap)
        wrap.append(accordionName, accordionContent)
        accordionName.append(name, image)
        accordionContent.append(content)
    })

    const accordionWrapTwo = document.querySelectorAll('.accordion__wrapTwo')

    accordionWrapTwo.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('accordion__active')
        })
    })

}
randerTwo(twoData)