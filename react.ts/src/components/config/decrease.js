function decreaseconfig(event, btnid) {
    if (event.key === "M") {
        event.preventDefault();
        document.getElementById(btnid)?.click();
    }
}

export default decreaseconfig;