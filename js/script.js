jQuery(function () {

    const helloWorld = "Hello World !!!  "

    const theExample = (
        <a href="https://www.example.com">
            <h1 className="class-name">
                {helloWorld}
                I am red because I have a class ! And 4 + 5 = {4 + 5}
            </h1>
        </a>
    );

    ReactDOM.render(theExample, jQuery("#app")[0]);
    console.log(jQuery("#app"));

    const selfClose = <input type="text" placeholder="slash in self close"/>
    ReactDOM.render(selfClose, jQuery("#test1")[0]);

    function buttonClick() {
        alert("I am clicked !!!!");
    }
    const button1 = <button onClick={buttonClick}>click me</button>
    ReactDOM.render(button1, jQuery(".test2")[0]);

    let message;

    if (user.age >= drinkingAge) {
        message = (
            <h1>
                Hey, check out this alcoholic beverage!
            </h1>
        );
    } else {
        message = (
            <h1>
                Hey, check out these earrings I got at Claire's!
            </h1>
        );
    }

});