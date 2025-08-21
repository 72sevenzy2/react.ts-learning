function resetconfig(event, setc) {
    if (event.key === "R") {
        event.preventDefault();
        setc(0);
    }
}

export default resetconfig;