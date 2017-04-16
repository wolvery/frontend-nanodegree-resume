/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio = {
	"name" : "Guilherme da Silva",
	"role" : "Web/Backend Developer",
	"contacts" :
	{
		"email" : "guisigo@gmail.com",
		"mobile" : "(+55)031 98352-6348",
		"location" : "Belo Horizonte, Brazil",
		"github" : "wolvery"
	},
	"welcomeMessage" : "Hello! Nice to see you arround! I am looking to develop something really nice arround here!",
	"biopic" : "images/perfil.jpg",
	"skill" : ["VB.NET", "C++", "C", "CSS3", "HTML5", "Javascript","Java"],
	"display" : function(){
		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role),
			HTMLheaderName.replace("%data%",bio.name));
		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic),
			HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
		$("#topContacts").prepend(HTMLlocation.replace("%data%",bio.location),
			HTMLgithub.replace("%data%",bio.github),
			HTMLemail.replace("%data%",bio.contacts.email),
			HTMLmobile.replace("%data%",bio.contacts.mobile));
		if (bio.skill.length > 0) {
			$("#header").append(HTMLskillsStart);
			bio.skill.forEach(function(element){
				$("#skills").append(HTMLskills.replace("%data%",element));
			});
		}
	}
};

var work = {
	"jobs": [{
		"employer": "VERIMAG",
		"title": "Developer intenship",
		"location": "Grenoble, France",
		"descritpion" : "Internship to produce a simulation based approach to evaluate the energy consumptionof a Wireless Sensor Network.",
		"dates": "Mar-Jul 2008"
	},
	{
		"employer": "ENACOM",
		"title": "Developer intenship",
		"location": "Belo Horizonte, Brazil",
		"descritpion" : "Provided software to embedded systems. Developed WEB applications and implementa-tion of systems. Elaboration and execution of test scenarios.",
		"dates": "Mar 2014 - Jun 2015"
	},
	{
		"employer": "BWTECH",
		"title": "Developer intenship",
		"location": "Belo Horizonte, Brazil",
		"descritpion" : "Developed new back-end features. Mostly were developed in .net",
		"dates": "Jun-Dec 2015"
	},
	{
		"employer": "BWTECH",
		"title": "Backend Developer",
		"location": "Belo Horizonte, Brazil",
		"descritpion" : "Developed new back-end features. Mostly were developed in .net",
		"dates": "Jan 2016 - Jun 2017"
	}
	],
	"display" : function(){
		if (work.jobs.length > 0) {
			work.jobs.forEach(function(element){
				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",element.employer),
					HTMLworkTitle.replace("%data%",element.title),
					HTMLworkDates.replace("%data%",element.dates),
					HTMLworkLocation.replace("%data%",element.location),
					HTMLworkDescription.replace("%data%",element.descritpion));
			});
		}
	}
};

var project = {
	"projects": [{
		"title":"Resumee",
		"date" : 2016,
		"descritpion" : "Professional resumee",
		"image" : "images/fry.jpg"
	}
	],
	"display" : function(){
		project.projects.forEach(function(element){
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",element.title),
				HTMLprojectDates.replace("%data%",element.date),
				HTMLprojectDescription.replace("%data%",element.descritpion),
				HTMLprojectImage.replace("%data%",element.image) );
		});
	}
};

var education ={
	"schools" : [{
		"name" : "CEFET",
		"location" : "Belo Horizonte, Brazil",
		"degreDate" : 2015
	}],
	"onlineCourses": [{"title":"Front-End Developer", "school":"Udacity","dates":"Dec 2016 - Current","url" : "udacity.com"}]

};


$("#main").prepend(internationalizeButton);
$("#mapDiv").prepend(googleMap);

bio.display();
work.display();
project.display();
education.display();

function inName(oldName) {
	var finalName = oldName;
		// Your code goes here!
		finalName = finalName.substring(0,1).toUpperCase() +
		finalName.substring(1,finalName.indexOf(" ")).toLowerCase() +
		finalName.substring(finalName.indexOf(" ")).toUpperCase();


    // Don't delete this line!
    return finalName;
}

project.display();