/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio = {
	"name" : "Guilherme da Silva",
	"role" : "Front-End/Back-end Developer",
	"contacts" :
	{
		"email" : "guisigo@gmail.com",
		"mobile" : "(+55)031 98352-6348",
		"location" : "Belo Horizonte, Brazil",
		"github" : "wolvery"
	},
	"welcomeMessage" : "Hello! Nice to see you arround! I am looking to develop something really nice arround here!",
	"biopic" : "images/perfil.jpg",
	"skills" : ["VB.NET", "C++", "C", "CSS3", "HTML5", "Javascript","Java"],
	"display" : function(){



		$("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location),
			HTMLgithub.replace("%data%",bio.contacts.github),
			HTMLemail.replace("%data%",bio.contacts.email),
			HTMLmobile.replace("%data%",bio.contacts.mobile));



		$("#header").prepend(internationalizeButton,	HTMLheaderRole.replace("%data%",bio.role),
			HTMLheaderName.replace("%data%",bio.name));

		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic),
			HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

		//if (bio.skill.length > 0) {
		//	$("#header").append(HTMLskillsStart);
		//	bio.skill.forEach(function(element){
		//		$("#skills").append(HTMLskills.replace("%data%",element));
		//	});

		//}

		$("#header").append(HTMLD3);

	}
};

var work = {
	"jobs": [{
		"employer": "VERIMAG",
		"website" : "http://www-verimag.imag.fr/?lang=en",
		"title": "Developer intenship",
		"location": "Grenoble, France",
		"descritpion" : "Internship to produce a simulation based approach to evaluate the energy consumptionof a Wireless Sensor Network.",
		"dates" : "Mar-Jul 2008",
		"images" : ["images/VERIMAG.png"]
	},
	{
		"employer": "ENACOM",
		"website" : "http://www.enacom.com.br/",
		"title": "Developer intenship",
		"location": "Belo Horizonte, Brazil",
		"descritpion" : "Being part of a notorius team as an Internship with the goal of learning as much as possible! Provided software to embedded systems as Arduino, BeagleBone and Raspberry Pi. Developed WEB applications and implementation of systems. Elaboration and execution of test scenarios. ",
		"dates": "Mar 2014 - Jun 2015",
		"images":["images/Poupapark.png","images/enacom-logo.jpg"]
	},
	{
		"employer": "BWTECH",
		"website" : "http://www.bwtech.com/",
		"title": "Developer intenship",
		"location": "Belo Horizonte, Brazil",
		"descritpion" : "Developed new back-end features. Mostly were developed in .net",
		"dates": "Jun-Dec 2015",
		"images" : ["images/BWTECH-logo.jpg"]
	},
	{
		"employer": "BWTECH",
		"website" : "http://www.bwtech.com/",
		"title": "Backend Developer",
		"location": "Belo Horizonte, Brazil",
		"descritpion" : "Developed new back-end features. Mostly were developed in .net",
		"dates": "Jan 2016 - Jun 2017",
		"images" : ["images/BWTECH-logo.jpg"]
	},
	{
		"employer": "SAN CORP",
		"website" : "",
		"title": "CIO",
		"location": "Belo Horizonte, Brazil",
		"descritpion" : "A software vendor. Mainly customer is BWTECH.",
		"dates": "Jan 2016 - Actual",
		"images" : [""]
	}
	],
	"display" : function(){
		if (work.jobs.length > 0) {

			work.jobs.forEach(function(element){
				$("#workExperience").append(HTMLworkStart);

				$(".work-entry:last").append(HTMLworkEmployer.replace("%data%",element.employer).replace("#",element.website) +
					HTMLworkTitle.replace("%data%",element.title),
					HTMLworkDates.replace("%data%",element.dates),
					HTMLworkLocation.replace("%data%",element.location),
					HTMLworkDescription.replace("%data%",element.descritpion));
			});
		}
	}
};

var projects = {
	"projects": [{
		"title":"Poupapark website development",
		"dates" : "2014 - 2015",
		"descritpion" : "Development of the website as the main developer. Technology used was AngularJs.",
		"githubPage" : "http://www.poupapark.com.br/",
		"images" : ["images/poupapark.png"]
	},{
		"title":"Implementation of IPv6 Gateway in a 6LoWPAN Network",
		"dates" : "2014 - 2015",
		"descritpion" : "Bachelor’s thesis to degree in Computer Engineering which consists of a implementation "+
		"of a 6LoWPAN Wireless Sensor's Network sending data to a IPv6 Gateway. "+
		"The Wireless sensors were Arduinos which monitored iluminity," +
		" temperature and humidity at some location. "+
		"A website available at a Raspberry exhibit these data collected from the wireless network. Technologies used : C++,C, NodeJs, MongoDB.",
		"githubPage" : "https://github.com/wolvery/WSN",
		"images" : ["images/web.JPG"]
	}

	],
	"display" : function(){
		projects.projects.forEach(function(element){
			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",element.title).replace("#",element.githubPage),
				HTMLprojectDates.replace("%data%",element.dates),
				HTMLprojectDescription.replace("%data%",element.descritpion) );
			if (element.images.length > 0){
				element.images.forEach(function(image){
					$(".project-entry:last").append(HTMLprojectImage.replace("%data%",image));
					console.log(image);
				});
			}

		});
	}
};

var education ={
	"schools" : [
	{
		"name" : "CEFET",
		"location" : "Belo Horizonte, Brazil",
		"dates" : "2009 - 2015",
		"degree" : "Barchelor of Computer Engineering",
		"majors" : ["Software Development"]
	},
	{
		"name" : "IUT-1",
		"location" : "Grenoble, France",
		"dates" : "2013 - 2014",
		"degree" : "Professional Bachelor's Degree in Computer Networks & Telecommunications specialising in Wireless Networks and Security",
		"majors" : ["Wireless Networks and Security"]
	}
	],
	"onlineCourses": [
	{
		"title":"Front-End Developer",
		"school":"Udacity",
		"dates":"Dec 2016 - Current",
		"url" : "https://udacity.com"
	},
	{
		"title":"MongoDB for Node.js Developers",
		"school":"MongoDB University",
		"dates":"Dec 2014",
		"url" : "https://university.mongodb.com/courses/M101JS/about"
	},
	{
		"title":"MongoDB for DBAs",
		"school":"MongoDB University",
		"dates":"Dec 2015",
		"url" : "https://university.mongodb.com/courses/M102/about"
	},
	{
		"title":"HTML/CSS",
		"school":"Codeschool",
		"dates":"Jun 2014",
		"url" : "https://www.codeschool.com/"
	},
	{
		"title":"JavaScript",
		"school":"Codeschool",
		"dates":"Aug 2014",
		"url" : "https://www.codeschool.com/"
	}
	],
	"display" : function(){
		education.schools.forEach(function(element){
			$("#education").append(HTMLschoolStart);

			$(".education-entry:last").append(HTMLschoolName.replace("%data%",element.name) +
				HTMLschoolDegree.replace("%data%",element.degree),
				HTMLschoolDates.replace("%data%",element.dates),
				HTMLschoolLocation.replace("%data%",element.location));
			element.majors.forEach(function	(major){
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",major));
			});

		});
		$("#education").append(HTMLonlineClasses);

		education.onlineCourses.forEach(function(element){
			$(".online-header").append(HTMLonlineTitle.replace("%data%",element.title).replace("#",element.url) +
				HTMLonlineSchool.replace("%data%",element.school)+
				HTMLonlineDates.replace("%data%",element.dates)+
				"<br>" );

		});
	}


};


//$("#main").prepend(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
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
