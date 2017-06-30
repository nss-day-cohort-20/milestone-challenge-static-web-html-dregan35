var blog1 = "My first day in class was an adventure. Feelings of excitement, fear, and anxiety washed over me.";
var blog2 = "Confusion and self-doubt followed by clarity is how I describe most of my days thus far.";
var blog3 = "Group projects give me hope that one day in the future (hopefully sooner than later) all the golden nuggets we gleam in class will come together and click in this small space known as my mind.";
var blog4 = "Everyone I have meet whether it’s a student or teacher has been amazing. Everyone has gone out of his/her way to help me and never judged me for how much or how little I knew.";
var blog5 = "I enjoy the days that Joe teaches throughout the day and ends the day with and hour or two of lab work. I feel I learn more from his expiation’s than I have from the other instructors so far.";







var Mainblog = [{
    title: "David's First Day",
    blog: blog1,
    Date: "-5/22/2017-"
}, {
    title: "Hazed and Confuse",
    blog: blog2,
    Date: "-5/24/2017-"

}, {
    title: "David's Victories",
    blog: blog3,
    Date: "-5/29/2017-"
}, {
    title: "David's Meta",
    blog: blog4,
    Date: "-6-1-2017-"
}, {
    title: "David's Day To Day",
    blog: blog5,
    Date: "-6-7-2017-"
}];

var Mainblogpost = document.getElementById("Mainblog");

function addMainblog() {

    for (var i = 0, text = Mainblog.length; i < text; i++) {
        Mainblogpost.innerHTML +=
            `<article>
			<h2>${Mainblog[i].title}</h2>
			<p>${Mainblog[i].blog}</p>
			<form>${Mainblog[i].Date}</form>
		</article>`
    }
}

addMainblog();
// flatrock