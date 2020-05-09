

var data_of_students = []

var student_data = {
    Name: "",
    Gender: "",
    Date_of_Birth: "",
    Section: "",
    Class: "",
    Exam_Type:"",
    English: 0,
    Math: 0,
    Science: 0,
    SST: 0,
    Hindi: 0,
    total_marks:0,
    average_marks: 0,
    Grade: 0,
    percentage: 0, 
    status: 0
    
}
var std_status = ''
var std_name = document.getElementById("name")

var gender = document.getElementById("gender")
var dateOfBirth = document.getElementById("dob")

var section = document.getElementById("section")

var cls = document.getElementById("select-class")

var exam = document.getElementById("exam-type")

var en = document.getElementById("eng")
var math = document.getElementById("math")
var sc = document.getElementById("sc")
var sst = document.getElementById("sst")
var hn = document.getElementById("hn")

var genderNone = document.getElementById("gender-none")
var sectionNone = document.getElementById("section-none")
var classNone = document.getElementById("class-none")
var examNone = document.getElementById("exam-none")

// var avg_marks = total_marks / 5

function submitData(){
    event.preventDefault();
    var total_marks = (Number(en.value) + Number(math.value) + Number(sc.value) + Number(sst.value) + Number(hn.value))

   
    var avg_marks = Number(total_marks / 5)
    var percent_marks = Number((total_marks / 500)*100).toFixed(2) +"%"
    
    var col12 = document.createElement("td")
    col12.innerHTML = percent_marks

    var col13 = document.createElement("td")
    
    var col14 = document.createElement("td")

    if(avg_marks < 30){
        var std_grade = "D"
         
        var std_status = "Fail"
    }

    else if(avg_marks >= 30 && avg_marks< 45){
        std_grade = "C"
        std_status = "Third"
        // std_status.style.backgroundColor = "green"
    }

    else if(avg_marks >= 45 && avg_marks< 60){
        std_grade = "B"
        std_status = "Second"
    }

    else if(avg_marks >= 60 && avg_marks < 75){
        std_grade = "B"
        std_status = "First"
    }

    else if(avg_marks>=75 && avg_marks<= 100){
        std_grade = "A+"
        std_status = "First Class with Distinction Marks"
    }

    var std_data = {
        name: std_name.value,
        Gender: gender.value,
        Date_of_Birth: dateOfBirth.value,
        Section: section.value,
        Class: Number(cls.value),
        Exam_Type: exam.value,
        English: Number(en.value),
        Math: Number(math.value),
        Science: Number(sc.value),
        SST: Number(sst.value),
        Hindi: Number(hn.value),
        total_marks: Number(total_marks),
        percentage: percent_marks, 
        average_marks: Number(avg_marks),
        Grade: std_grade,
        Status: std_status

    };
    

    data_of_students.push(std_data);
    // console.log(data_of_students)
    
        reset();
}

function avgMarks(avg_marks){

event.preventDefault();

    var total_marks = (Number(en.value) + Number(math.value) + Number(sc.value) + Number(sst.value) + Number(hn.value))
    avg_marks = total_marks / 5
    reset()
    
    console.log(data_of_students)
}



function stdDetails(avg_marks){

event.preventDefault();

    var std_details = document.getElementById("table-body")

for(var i = 0; i< data_of_students.length; i++){

    var row = document.createElement("tr")

    var col1 = document.createElement("td")
    col1.innerHTML = i+1

    var col2 = document.createElement("td")
    col2.innerText = data_of_students[i].name;


    var dateCol = document.createElement("td")
    dateCol.innerHTML = data_of_students[i].Date_of_Birth

    var col3 = document.createElement("td")
    col3.innerHTML = Number(data_of_students[i].Class);

    var col4 = document.createElement("td")
    col4.innerHTML = data_of_students[i].Section;

    var col5 = document.createElement("td")
    col5.innerHTML = data_of_students[i].Exam_Type;

    var col6 = document.createElement("td")
    col6.innerHTML = Number(data_of_students[i].English);

    var col7 = document.createElement("td")
    col7.innerHTML = Number(data_of_students[i].Math);
    
    var col8 = document.createElement("td")
    col8.innerHTML = Number(data_of_students[i].Science);

    var col9 = document.createElement("td")
    col9.innerHTML = Number(data_of_students[i].SST)
    
    var col10 = document.createElement("td")
    col10.innerHTML = Number(data_of_students[i].Hindi)

    var total_marks = (Number(en.value) + Number(math.value) + Number(sc.value) + Number(sst.value) + Number(hn.value))

    var col11 = document.createElement("td")
    col11.innerHTML = data_of_students[i].total_marks
    
    var avg_marks = total_marks / 5
    var percent_marks = avg_marks+"%"
    
    var col12 = document.createElement("td")
    col12.innerHTML = data_of_students[i].percentage

    var col13 = document.createElement("td")
    
    var col14 = document.createElement("td")

    if(avg_marks < 30){
         col13.innerHTML = data_of_students[i].Grade
         col14.style.backgroundColor = "red"
        col14.innerHTML = data_of_students[i].Status
    }

    else if(avg_marks >= 30 && avg_marks< 45){
        col13.innerHTML = data_of_students[i].Grade
        col14.style.backgroundColor = "green"
        col14.innerHTML = data_of_students[i].Status
    }

    else if(avg_marks >= 45 && avg_marks< 60){
        col13.innerHTML = data_of_students[i].Grade
        col14.style.backgroundColor = "green"
        col14.innerHTML = data_of_students[i].Status
    }

    else if(avg_marks >= 60 && avg_marks < 75){
        col13.innerHTML = data_of_students[i].Grade
        col14.style.backgroundColor = "green"
        col14.innerHTML = data_of_students[i].Status
    }

    else if(avg_marks>=75 && avg_marks<= 100){
        col13.innerHTML = data_of_students[i].Grade
        col14.style.backgroundColor = "green"
        col14.innerHTML = data_of_students[i].Status
    }

    console.log(data_of_students)
    
     row.append(col1, col2, dateCol, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12, col13, col14 )

    std_details.appendChild(row)
    reset()

}
}


function ascendingMarks(){

var total_marks = (Number(en.value) + Number(math.value) + Number(sc.value) + Number(sst.value) + Number(hn.value))
var avg_marks = total_marks / 5
var percent_marks = (total_marks / 5)+"%"
    data_of_students =  data_of_students.sort(function(a,b){
        return a.total_marks - b.total_marks
    })
    reset()

    console.log(data_of_students)
}

function descendingMarks(){

    var total_marks = (Number(en.value) + Number(math.value) + Number(sc.value) + Number(sst.value) + Number(hn.value))
    var avg_marks = total_marks / 5
        data_of_students =  data_of_students.sort(function(a,b){
            return b.total_marks - a.total_marks
        })
        reset()
    
        console.log(data_of_students)
    }

    function reset(){
    
       

        std_name.value = " "
        gender.value = genderNone.value
        dateOfBirth.value = " "
        section.value = sectionNone.value
        cls.value = classNone.value
        exam.value = examNone.value
        en.value = " "
        math.value = " "
        sc.value = " "
        sst.value = " "
        hn.value = " "
       
    }