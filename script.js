console.log("ejuhfdeujh");
(function (window, document, undefined) {
  // code that should be taken care of right away

  window.onload = init;

  function init() {
    // the code to be called when the dom has loaded
    // #document has its nodes
    let days = [
      { name: "Mon", color: "#dda15e" },
      { name: "Tue", color: "#bc6c25" },
      { name: "Wed", color: "#dda15e" },
      { name: "Thur", color: "#bc6c25" },
      { name: "Fri", color: "#dda15e" },
      { name: "Sat", color: "#bc6c25" },
      { name: "Sun", color: "#dda15e" },
    ];

    for (let i = 0; i < days.length; i++) {
      console.log(document.getElementById(`day${i}`));
      document.getElementById(`day${i}`).style.backgroundColor = days[i].color;
    }
  }
})(window, document, undefined);
