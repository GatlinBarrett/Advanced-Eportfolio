// 
// 
// 

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_gatlinb',
            'template_nl5529r',
            event.target,
            'SrNEBURy-NIU_jUrv'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
            console.log('this worked!')
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly at wwgdb18@gmail.com"
            )
        })
}

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}