function onLoad() {
    document.getElementById('addnewEdu').addEventListener('click', function () {
        addEducation();
    });

    document.getElementById('addNewExp').addEventListener('click', function () {
        addexperience();
    });

    document.getElementById("generate-cv").addEventListener('click', function () {
        createcv();
    });

    document.getElementById('img-field').addEventListener("change", function (event) {
        const [file] = document.getElementById('img-field').files
        if (file) {
            document.getElementById('photot').src = window.URL.createObjectURL(file);
        }
    });
}

// hobby button
var hobbycount=0;

function addNewHobbyField() {
    if(hobbycount===2){return}
    hobbycount++;
    let newhobby = document.createElement("input");
    newhobby.classList.add('form-control', 'my-3', 'hobbyf');
    newhobby.setAttribute('placeholder', 'Enter Here')
    newhobby.setAttribute('autofocus', true);
    newhobby.setAttribute('type', 'text');
    let newHobbyDiv = document.getElementById('hobbyDiv');
    let hobbybtnob = document.getElementById('hobbyBtnDiv');
    newHobbyDiv.insertBefore(newhobby, hobbybtnob);

}

//--------------- skill btn-------------------------
var skillcount=0;
function addNewSkillField() {
    if(skillcount===4){return}
    skillcount++;

    let newskill = document.createElement("input");
    newskill.classList.add('form-control', 'my-3', 'skillf');
    newskill.setAttribute('placeholder', 'Enter Here')
    newskill.setAttribute('autofocus', true);
    newskill.setAttribute('type', 'text');
    let newSkillDiv = document.getElementById('skillDiv');
    let skillbtnob = document.getElementById('skillBtnDiv');
    newSkillDiv.insertBefore(newskill, skillbtnob);


}


// add education section into form

var eduCount = 0;
function addEducation() {

    if (eduCount === 2) { return }
    eduCount++;
    const newEduDiv = document.createElement('div')
    newEduDiv.classList.add('education', 'mb-2')
    newEduDiv.innerHTML = `
                    <label class="mt-3 form-label" for="">Education ${eduCount + 1} </label>
                    <input type="text" name="" id="coursename${eduCount}" class="form-control mb-2 courseName" placeholder="Course Name">
                    <input type="text" name="" id="school${eduCount}" class="form-control mb-2 placeName"
                    placeholder="school/college/university">
                    <label for="completeyear" class='form-label'>Year of completion</label>
                    <input type="month" name="" id="completion-year${eduCount}" class="form-control mb-2 yearName">`

    let educationContainer = document.getElementById('edu-container');
    var addEduBtnDiv = document.getElementById("addEduDiv");
    educationContainer.insertBefore(newEduDiv, addEduBtnDiv);
}

// add experience section into form


var expCount = 0
function addexperience() {
    if (expCount === 2) {
        return
    }
    expCount++;
    const newexperience = document.createElement('div');
    newexperience.classList.add('experience', 'mb-2');
    newexperience.innerHTML = `<label class="form-label" for="">Experience/Internship ${expCount + 1}</label>
    <input type="text" name="" id="exp-field-name${expCount}" class="form-control mb-2 " placeholder="Designation">
    <input type="text" name="" id="job-Profile${expCount}" class="form-control mb-2" placeholder="About job profile">
    <label for="exp-date" class='form-label'> Month/Year of Experienced</label>
    <input type="text" name="" id="exp-date${expCount}" class="form-control mb-2" placeholder=" Month/Year">`


    let experiencecontainer = document.getElementById('exp-container');

    let addExpBtnDiv = document.getElementById('addExpDiv');

    experiencecontainer.insertBefore(newexperience, addExpBtnDiv);



}

function createcv() {
    document.getElementById("addresst").innerHTML = document.getElementById("addressfield").value;
    document.getElementById("phonet").innerHTML = document.getElementById("telfield").value;
    document.getElementById("mailt").innerHTML = document.getElementById("email").value;
    document.getElementById("webt").innerHTML = document.getElementById("weblink").value;
    document.getElementById("gitt").innerHTML = document.getElementById("gitfield").value;
    document.getElementById("linkedt").innerHTML = document.getElementById("linkedfield").value;
    document.getElementById("facet").innerHTML = document.getElementById("facefield").value;
    document.getElementById("instat").innerHTML = document.getElementById("instafield").value;
    document.getElementById("ytt").innerHTML = document.getElementById("ytfield").value;
    document.getElementById("namet").innerHTML = document.getElementById("namefield").value.toUpperCase();

    let professionfieldob = document.getElementById("professionfield").value;

    document.getElementById("professiont").innerHTML = `<i class="bi bi-square-fill" style="font-size:small;"></i>${" " + professionfieldob}`

    document.getElementById("aboutust").innerHTML = document.getElementById("aboutusfield").value;


    // --------education section------------

    let courses = document.getElementsByClassName('education');

    let str = "";
    for (var i = 0; i < courses.length; ++i) {
        let courseName = document.getElementById(`coursename${i}`).value.toLowerCase();

        let schoolName = document.getElementById(`school${i}`).value.toLowerCase();

        let completionYear = document.getElementById(`completion-year${i}`).value;

        let ele = `<p><b>${courseName}</b><br> ${schoolName}<br><em> End Year</em> (${completionYear})</p>`;
        str += ele;
    }
    document.getElementById("edusec").innerHTML = str;


    // -----------expereince section-------------------

    let experiences = document.getElementsByClassName('experience');

    let allexp = "";
    for (i = 0; i < experiences.length; ++i) {
        let designationName = document.getElementById(`exp-field-name${i}`).value.toLowerCase();

        let jobProfile = document.getElementById(`job-Profile${i}`).value.toLowerCase();

        let expDate = document.getElementById(`exp-date${i}`).value;

        let ele1 = `<p><b>${designationName}</b><br>${jobProfile}<br><em>Total Experienced</em> (${expDate})</p>`;
        allexp += ele1;
    }
    document.getElementById('expsec').innerHTML = allexp;

    // --------------hobbysection---------

    let newhobby = document.getElementsByClassName('hobbyf');

    let str1 = "";
    for (let e of newhobby) {

        let ele = `<li> ${e.value}</li>`;
        str1 += ele;
    }

    document.getElementById("hobbysec").innerHTML = str1;


    // skillsection-------------

    let newskill = document.getElementsByClassName('skillf');

    let str2 = "";
    for (let e of newskill) {

        let ele = `<li> ${e.value}</li>`;
        str2 += ele;
    }

    document.getElementById("skillsec").innerHTML = str2;


    toggleEditorDisplay()

}

function toggleEditorDisplay() {
    var resumeEditor = document.getElementById("resume-editor");
    resumeEditor.style.display = "none";
    var resumeheader = document.getElementById("header");
    resumeheader.style.display = "none";

}


function printcv() {
    printButton = document.getElementById("printCv")
    printButton.style.visibility = 'hidden';
    var resumeEditor = document.getElementById("resume-editor");
    resumeEditor.style.display = "none";
    var resumeheader = document.getElementById("header");
    resumeheader.style.display = "none";
    window.print()
}

