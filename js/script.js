jQuery(function(){

    const theExample = (
        <a href="https://www.example.com">
          <h1>
            Click me!
          </h1>
        </a>
      );

      ReactDOM.render(theExample, jQuery("#app")[0]);
      console.log(jQuery("#app"));
      
});