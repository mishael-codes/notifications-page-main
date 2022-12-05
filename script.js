let markRead = document.querySelector('.mark-read');

markRead.addEventListener('click', ()=>{
    let notificationCount = document.getElementById("notification-count");
    let unreads = document.querySelectorAll('.unread');

    unreads.forEach((unread) => {
        unread.classList.add("read");
        unread.classList.remove("unread");
    })

    notificationCount.textContent = "0";
})