function increaseconfig(event, btnid) {
    if (event.key === "N") { event.preventDefault();
        document.getElementById(btnid)?.click();
     }
}

export default increaseconfig;