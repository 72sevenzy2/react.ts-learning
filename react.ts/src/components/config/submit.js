function submitconfig(event, btnid) {
    if (event.key === "Enter") {
        event.preventDefault(); document.getElementById(btnid)?.click();
    }
    else { return undefined; }
}

export default submitconfig;